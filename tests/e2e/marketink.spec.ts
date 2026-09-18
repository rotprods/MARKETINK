import { expect, test } from "@playwright/test";

const viewports = [
  { width: 320, height: 568 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
] as const;

test.describe("MARKET.INK production regression", () => {
  test("loads without runtime or console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });

    await page.goto("/");
    await expect(page.locator("body")).toBeVisible();
    expect(errors).toEqual([]);
  });

  test("exposes a main landmark, skip link and decorative canvas semantics", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("main#main")).toHaveCount(1);
    const skip = page.getByRole("link", { name: /saltar al contenido/i });
    await expect(skip).toHaveCount(1);
    await skip.focus();
    await expect(skip).toBeFocused();

    const canvas = page.locator("canvas");
    const fallback = page.locator(".hero-scene__fallback--static");

    await expect
      .poll(async () => (await canvas.count()) + (await fallback.count()))
      .toBeGreaterThan(0);

    if (await canvas.count()) {
      await expect(canvas).toHaveAttribute("aria-hidden", "true");
      await expect(canvas).toHaveAttribute("role", "presentation");
    } else {
      await expect(fallback).toHaveAttribute("aria-hidden", "true");
    }
  });

  test("loads a static branded hero when WebGL2 is unavailable", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.addInitScript(() => {
      const original = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (
        contextId: string,
        ...args: unknown[]
      ) {
        if (contextId === "webgl2") return null;
        return original.call(this, contextId as never, ...(args as never[]));
      } as typeof HTMLCanvasElement.prototype.getContext;
    });

    await page.goto("/");

    await expect(page.locator(".hero-scene__fallback--static")).toBeVisible();
    await expect(page.getByRole("link", { name: /haz tu inkscan/i }).first()).toBeVisible();

    await context.close();
  });

  test("primary internal navigation lands near target below fixed nav", async ({ page }) => {
    await page.goto("/");

    for (const href of ["#system", "#academy", "#inkscan"]) {
      const link = page.locator(`a[href="${href}"]`).first();
      await expect(link).toBeVisible();
      await link.click();

      await expect
        .poll(
          async () =>
            page
              .locator(href)
              .evaluate((element) => element.getBoundingClientRect().top),
          { timeout: 3_000 },
        )
        .toBeLessThanOrEqual(130);

      const top = await page
        .locator(href)
        .evaluate((element) => element.getBoundingClientRect().top);
      expect(top).toBeGreaterThanOrEqual(-12);
    }
  });

  for (const viewport of viewports) {
    test(`no horizontal overflow at ${viewport.width}x${viewport.height}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto("/");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(1);
    });
  }

  test("mobile primary CTA and INKSCAN form remain operable", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const primary = page.getByRole("link", { name: /haz tu inkscan/i }).first();
    await expect(primary).toBeVisible();
    await primary.click();
    await expect(page.locator("#inkscan")).toBeInViewport();

    const form = page.locator("form.inkscan-form");
    await expect(form).toBeVisible();

    const fields = ["businessType", "name", "city", "instagram", "email", "consent"];
    for (const name of fields) {
      await expect(form.locator(`[name="${name}"]`)).toHaveCount(1);
    }
  });

  test("native form constraints reject invalid email and URL", async ({ page }) => {
    await page.goto("/#inkscan");

    const form = page.locator("form.inkscan-form");
    await form.locator('[name="businessType"]').selectOption("studio");
    await form.locator('[name="name"]').fill("Studio QA");
    await form.locator('[name="city"]').fill("Murcia");
    await form.locator('[name="instagram"]').fill("@studioqa");
    await form.locator('[name="email"]').fill("invalid");
    await form.locator('[name="website"]').fill("not a url");
    await form.locator('[name="consent"]').check();

    const validity = await form.evaluate((element) => {
      const formElement = element as HTMLFormElement;
      const email = formElement.elements.namedItem("email") as HTMLInputElement;
      const website = formElement.elements.namedItem("website") as HTMLInputElement;
      return {
        form: formElement.checkValidity(),
        email: email.checkValidity(),
        website: website.checkValidity(),
      };
    });

    expect(validity.form).toBe(false);
    expect(validity.email).toBe(false);
    expect(validity.website).toBe(false);
  });

  test("valid form serializes the complete intake contract", async ({ page }) => {
    await page.goto("/#inkscan");
    const form = page.locator("form.inkscan-form");

    await form.locator('[name="businessType"]').selectOption("studio");
    await form.locator('[name="name"]').fill("Studio QA");
    await form.locator('[name="city"]').fill("Murcia");
    await form.locator('[name="instagram"]').fill("@studioqa");
    await form.locator('[name="email"]').fill("qa@example.com");
    await form.locator('[name="website"]').fill("https://example.com");
    await form.locator('[name="constraint"]').fill("Mejorar reservas");
    await form.locator('[name="consent"]').check();

    const payload = await form.evaluate((element) =>
      Object.fromEntries(new FormData(element as HTMLFormElement).entries()),
    );

    expect(payload).toMatchObject({
      businessType: "studio",
      name: "Studio QA",
      city: "Murcia",
      instagram: "@studioqa",
      email: "qa@example.com",
      website: "https://example.com",
      constraint: "Mejorar reservas",
      consent: "yes",
    });
  });

  test("API rejects malformed intake before touching CRM integration", async ({ request }) => {
    const response = await request.post("/api/inkscan", {
      form: {
        businessType: "invalid",
        name: "QA",
        city: "Murcia",
        instagram: "@qa",
        email: "qa@example.com",
        consent: "yes",
      },
      maxRedirects: 0,
    });

    expect(response.status()).toBe(303);
    expect(response.headers().location).toContain("inkscan=invalid");
  });

  test("honeypot submissions are discarded into the neutral thank-you route", async ({ request }) => {
    const response = await request.post("/api/inkscan", {
      form: {
        businessType: "studio",
        name: "Bot",
        city: "Murcia",
        instagram: "@bot",
        email: "bot@example.com",
        consent: "yes",
        company: "spam",
      },
      maxRedirects: 0,
    });

    expect(response.status()).toBe(303);
    expect(response.headers().location).toContain("/gracias");
  });

  test("valid intake fails closed when server CRM secrets are absent", async ({ request }) => {
    const response = await request.post("/api/inkscan", {
      form: {
        businessType: "studio",
        name: "Studio QA",
        city: "Murcia",
        instagram: "@studioqa",
        email: "qa@example.com",
        consent: "yes",
      },
      maxRedirects: 0,
    });

    expect(response.status()).toBe(303);
    expect(response.headers().location).toContain("inkscan=unavailable");
  });

  test("reduced motion keeps the page usable", async ({ browser }) => {
    const context = await browser.newContext({
      reducedMotion: "reduce",
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();
    await page.goto("/");

    await expect(page.getByRole("link", { name: /haz tu inkscan/i }).first()).toBeVisible();
    await expect(page.locator("#inkscan")).toHaveCount(1);

    await context.close();
  });


  test("operational visible text does not fall below 12px", async ({ page }) => {
    await page.goto("/");

    const tiny = await page.locator("body *").evaluateAll((elements) =>
      elements
        .filter(
          (element) =>
            element.children.length === 0 &&
            (element.textContent ?? "").trim().length > 0 &&
            element.getClientRects().length > 0,
        )
        .map((element) => ({
          text: (element.textContent ?? "").trim().slice(0, 50),
          size: Number.parseFloat(getComputedStyle(element).fontSize),
          className: (element as HTMLElement).className,
        }))
        .filter((item) => item.size < 12),
    );

    expect(tiny).toEqual([]);
  });

  test("WCAG text-spacing override does not create horizontal page overflow", async ({ page }) => {
    for (const viewport of [
      { width: 390, height: 844 },
      { width: 1440, height: 900 },
    ]) {
      await page.setViewportSize(viewport);
      await page.goto("/");
      await page.addStyleTag({
        content:
          "*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}",
      });

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(1);
    }
  });

  test("small-screen touch targets are at least 44px for primary controls", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const failures = await page.locator('a,button,select').evaluateAll((elements) =>
      elements
        .filter((element) => element.getClientRects().length > 0)
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            text: (element.textContent ?? element.getAttribute("aria-label") ?? "").trim(),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
          };
        })
        .filter((item) => item.width < 44 || item.height < 44),
    );

    expect(failures).toEqual([]);
  });
});
