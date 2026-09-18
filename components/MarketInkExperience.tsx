"use client";

import dynamic from "next/dynamic";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Wordmark, SignalGlyph } from "@/components/brand/Wordmark";
import { SmoothScroll } from "@/components/experience/SmoothScroll";
import { AssetFrame } from "@/components/media/AssetFrame";
import { assetSlots, type MarketInkAsset } from "@/lib/assets";
import { detectGraphicsCapability } from "@/lib/capabilities";
import {
  academyOutputs,
  entryPaths,
  operatorLoad,
  systemSteps,
} from "@/lib/site-content";

const InkSignalScene = dynamic(
  () =>
    import("@/components/experience/InkSignalScene").then(
      (module) => module.InkSignalScene,
    ),
  {
    ssr: false,
    loading: () => <div className="hero-scene__fallback" aria-hidden="true" />,
  },
);

function EvidenceMethod() {
  return (
    <div className="evidence-method">
      <div>
        <span>01</span>
        <strong>BASELINE</strong>
      </div>
      <i aria-hidden="true">→</i>
      <div>
        <span>02</span>
        <strong>INTERVENCIÓN</strong>
      </div>
      <i aria-hidden="true">→</i>
      <div>
        <span>03</span>
        <strong>MEDICIÓN</strong>
      </div>
      <i aria-hidden="true">→</i>
      <div>
        <span>04</span>
        <strong>PRUEBA</strong>
      </div>
    </div>
  );
}

function AudioReferenceFrame({ asset }: { asset: MarketInkAsset }) {
  const hasAudio =
    asset.status === "APPROVED_PUBLIC" &&
    asset.publicUse === true &&
    Boolean(asset.src);

  return (
    <article className="audio-frame">
      <div className="audio-frame__top">
        <span>LISTENING ROOM</span>
        <em>{asset.status}</em>
      </div>
      <div className="audio-wave" aria-hidden="true">
        {Array.from({ length: 36 }, (_, index) => (
          <i
            key={index}
            style={{
              height: `${18 + ((index * 17) % 52)}%`,
            }}
          />
        ))}
      </div>
      <div className="audio-frame__bottom">
        <strong>{hasAudio ? "TESTIMONIO VERIFICADO" : "AUDIO SLOT 01"}</strong>
        {hasAudio ? (
          <audio controls preload="metadata" src={asset.src} />
        ) : (
          <span>Esperando audio + permiso público</span>
        )}
      </div>
    </article>
  );
}

function VslSurface() {
  const vsl = assetSlots.vsl.master as MarketInkAsset;
  const available =
    vsl.status === "APPROVED_PUBLIC" &&
    vsl.publicUse === true &&
    Boolean(vsl.src);

  return (
    <div className="vsl-surface">
      {available ? (
        <video
          controls
          preload="metadata"
          poster={vsl.poster}
          src={vsl.src}
          className="vsl-surface__video"
        />
      ) : (
        <div className="vsl-surface__empty">
          <div className="vsl-surface__signal">
            <SignalGlyph />
          </div>
          <span>VSL FRAME · 16:9</span>
          <strong>POR QUÉ BUENOS TATUADORES SIGUEN TENIENDO HUECOS.</strong>
          <p>
            Poster · master · transcript · captions · chapters · analytics
          </p>
          <em>MISSING ASSET · FRAME READY</em>
        </div>
      )}
    </div>
  );
}

function MediaDevelopmentGrid({
  assets,
  type,
}: {
  assets: readonly MarketInkAsset[];
  type: "artist" | "ad" | "testimonial";
}) {
  const labels =
    type === "artist"
      ? ["ARTIST / CRAFT", "HEALED / DETAIL", "PROCESS / STUDIO"]
      : type === "ad"
        ? ["CAMPAIGN 01", "CAMPAIGN 02", "CAMPAIGN 03"]
        : ["VIDEO PROOF", "CLIENT STORY", "RESULT CONTEXT"];

  return (
    <div className={`media-grid media-grid--${type}`}>
      {assets.map((asset, index) => (
        <AssetFrame
          key={asset.id}
          asset={asset}
          eyebrow={labels[index] ?? type.toUpperCase()}
          title={
            type === "artist"
              ? "REAL WORK SLOT"
              : type === "ad"
                ? "CREATIVE SLOT"
                : "EVIDENCE SLOT"
          }
          ratio={type === "ad" ? "portrait" : type === "artist" ? "portrait" : "landscape"}
        />
      ))}
    </div>
  );
}

export function MarketInkExperience() {
  const reducedMotion = Boolean(useReducedMotion());
  const progressRef = useRef(0);
  const { scrollYProgress } = useScroll();
  const systemRef = useRef<HTMLElement>(null);
  const [capability, setCapability] = useState(() => ({
    webgpu: false,
    reducedMotion: false,
    touch: false,
    coarsePointer: false,
  }));

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    progressRef.current = value;
  });

  useEffect(() => {
    setCapability(detectGraphicsCapability());
  }, []);

  useEffect(() => {
    if (reducedMotion || !systemRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>("[data-system-step]");

      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0.24, y: 44 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 78%",
              end: "bottom 52%",
              scrub: 0.7,
            },
          },
        );
      });

      gsap.fromTo(
        "[data-system-line]",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: systemRef.current,
            start: "top 60%",
            end: "bottom 68%",
            scrub: true,
          },
        },
      );
    }, systemRef);

    return () => context.revert();
  }, [reducedMotion]);

  const highQuality =
    !reducedMotion && !capability.coarsePointer && !capability.touch;

  return (
    <main className="site-shell">
      <SmoothScroll disabled={reducedMotion} />

      <nav className="site-nav" aria-label="Navegación principal">
        <a href="#top" aria-label="MARKET.INK inicio">
          <Wordmark compact />
        </a>
        <div className="site-nav__links">
          <a href="#system">Sistema</a>
          <a href="#academy">Academy</a>
          <a href="#proof">Prueba</a>
        </div>
        <a className="nav-cta" href="#inkscan">
          INKSCAN
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-scene">
          <InkSignalScene
            progressRef={progressRef}
            reducedMotion={reducedMotion}
            highQuality={highQuality}
          />
        </div>

        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial={reducedMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: reducedMotion ? 0 : 0.28 }}
          >
            <div className="hero-eyebrow">
              <span>TATTOO GROWTH OS</span>
              <span>MURCIA → SPAIN</span>
            </div>

            <div className="hero-wordmark">
              <Wordmark />
            </div>

            <h1>
              Agenda llena.
              <span>Marca con tinta.</span>
            </h1>

            <p className="hero-lead">
              El sistema de crecimiento para estudios de tatuaje: posicionamiento,
              contenido, demanda, WhatsApp, reservas, reactivación y datos trabajando
              como una sola máquina.
            </p>

            <div className="hero-actions">
              <a className="button button--red" href="#inkscan">
                Haz tu INKSCAN
              </a>
              <a className="button button--line" href="#system">
                Ver el sistema
              </a>
            </div>
          </motion.div>

          <div className="hero-meta" aria-hidden="true">
            <span>HONESTIDAD</span>
            <span>PRECISIÓN</span>
            <span>LIBERTAD</span>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span>SCROLL TO OPERATE</span>
          <i />
        </div>
      </section>

      <section className="operator-section">
        <div className="section-shell">
          <header className="split-heading">
            <p>EL PROBLEMA</p>
            <h2>
              Tatuar ya es un trabajo.
              <span>Gestionar todo lo demás es otro.</span>
            </h2>
          </header>

          <div className="operator-load" aria-label="Carga operativa del estudio">
            {operatorLoad.map((item, index) => (
              <motion.span
                key={item}
                initial={reducedMotion ? false : { opacity: 0, x: index % 2 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, delay: index * 0.03 }}
              >
                {item}
              </motion.span>
            ))}
          </div>

          <p className="operator-thesis">
            Un estudio no debería depender de que el dueño sea tatuador, creador,
            media buyer, closer, community manager y analista al mismo tiempo.
          </p>
        </div>
      </section>

      <section className="system-section" id="system" ref={systemRef}>
        <div className="section-shell system-layout">
          <aside className="system-sticky">
            <p className="section-index">01 / SISTEMA</p>
            <h2>
              Del arte
              <span>al booking.</span>
            </h2>
            <p>
              Seis capas conectadas. Cada una existe para que la siguiente funcione.
            </p>
            <div className="system-rail" aria-hidden="true">
              <i data-system-line />
            </div>
          </aside>

          <div className="system-steps">
            {systemSteps.map((step) => (
              <article key={step.id} data-system-step className="system-step">
                <div className="system-step__meta">
                  <span>{step.id}</span>
                  <em>{step.label}</em>
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vsl-section">
        <div className="section-shell">
          <header className="media-heading">
            <div>
              <p className="section-index">02 / VSL</p>
              <h2>Entiende la máquina antes de comprar nada.</h2>
            </div>
            <p>
              El VSL explica dónde se rompe un sistema de crecimiento y cuándo tiene
              sentido tocar contenido, conversión, ads o software.
            </p>
          </header>
          <VslSurface />
        </div>
      </section>

      <section className="paths-section">
        <div className="section-shell">
          <header className="media-heading">
            <div>
              <p className="section-index">03 / ENTRADAS</p>
              <h2>Un sistema. Tres formas de usarlo.</h2>
            </div>
            <p>
              Aprende, delega la implementación o escala la operación cuando el
              volumen lo justifique.
            </p>
          </header>

          <div className="path-grid">
            {entryPaths.map((path, index) => (
              <motion.article
                className="path-card"
                key={path.id}
                initial={reducedMotion ? false : { opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
              >
                <span>{path.eyebrow}</span>
                <strong>{path.title}</strong>
                <p>{path.body}</p>
                <i>{String(index + 1).padStart(2, "0")}</i>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="craft-section">
        <div className="section-shell">
          <header className="split-heading split-heading--dark">
            <p>CRAFT SURFACE</p>
            <h2>
              La IA puede amplificar la marca.
              <span>El trabajo real sigue siendo el centro.</span>
            </h2>
          </header>

          <MediaDevelopmentGrid
            assets={assetSlots.artists as readonly MarketInkAsset[]}
            type="artist"
          />

          <p className="asset-note">
            Los marcos ya están listos para portraits, healed work, macro detail,
            proceso y estudio. Ninguna imagen sintética puede presentarse como tattoo
            realmente ejecutado por un artista.
          </p>
        </div>
      </section>

      <section className="ads-section">
        <div className="section-shell">
          <header className="media-heading">
            <div>
              <p className="section-index">04 / CREATIVE LAB</p>
              <h2>Los anuncios también son portfolio.</h2>
            </div>
            <p>
              Cada creatividad puede enseñar hook, formato, oferta y resultado
              únicamente cuando la atribución lo soporte.
            </p>
          </header>

          <MediaDevelopmentGrid
            assets={assetSlots.ads as readonly MarketInkAsset[]}
            type="ad"
          />
        </div>
      </section>

      <section className="proof-section" id="proof">
        <div className="section-shell">
          <header className="media-heading">
            <div>
              <p className="section-index">05 / PROOF</p>
              <h2>Prueba con contexto o no es prueba.</h2>
            </div>
            <p>
              MARKET.INK no publica un resultado sin baseline, periodo, intervención,
              medición y permiso.
            </p>
          </header>

          <EvidenceMethod />

          <MediaDevelopmentGrid
            assets={assetSlots.testimonial as readonly MarketInkAsset[]}
            type="testimonial"
          />

          <AudioReferenceFrame
            asset={assetSlots.audio[0] as MarketInkAsset}
          />
        </div>
      </section>

      <section className="academy-section" id="academy">
        <div className="section-shell academy-grid">
          <div className="academy-sticky">
            <p className="section-index">06 / ACADEMY</p>
            <h2>
              Aprende el sistema.
              <span>No solo el contenido.</span>
            </h2>
            <p>
              Cada módulo termina con un artefacto funcionando, un checklist y un QA.
            </p>
            <a className="button button--paper" href="#inkscan">
              Entrar por INKSCAN
            </a>
          </div>

          <div className="academy-list">
            {academyOutputs.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inkscan-section" id="inkscan">
        <div className="section-shell inkscan-grid">
          <div className="inkscan-copy">
            <SignalGlyph className="inkscan-glyph" />
            <p className="section-index">07 / INKSCAN</p>
            <h2>
              Encuentra dónde pierde fuerza tu sistema.
            </h2>
            <p>
              Revisamos posicionamiento, demanda, conversión, reputación y medición
              sin inventar los datos privados que todavía no conocemos.
            </p>
          </div>

          <form className="inkscan-form" action="/api/inkscan" method="post">
            <div className="form-grid">
              <label>
                <span>Soy</span>
                <select name="businessType" required defaultValue="">
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value="studio">Dueño/a de estudio</option>
                  <option value="artist">Tatuador/a independiente</option>
                </select>
              </label>

              <label>
                <span>Nombre / estudio</span>
                <input name="name" required maxLength={160} />
              </label>

              <label>
                <span>Ciudad</span>
                <input name="city" required maxLength={120} />
              </label>

              <label>
                <span>Instagram</span>
                <input name="instagram" required maxLength={160} placeholder="@..." />
              </label>

              <label>
                <span>Email</span>
                <input name="email" type="email" required maxLength={254} />
              </label>

              <label>
                <span>Web · opcional</span>
                <input name="website" type="url" maxLength={300} placeholder="https://..." />
              </label>

              <label className="form-grid__wide">
                <span>Principal bloqueo</span>
                <textarea
                  name="constraint"
                  rows={5}
                  maxLength={1500}
                  placeholder="Huecos, contenido, muchos DMs pero pocas reservas, seguimiento..."
                />
              </label>
            </div>

            <label className="honeypot" aria-hidden="true">
              Company
              <input name="company" tabIndex={-1} autoComplete="off" />
            </label>

            <label className="consent-row">
              <input type="checkbox" name="consent" value="yes" required />
              <span>
                Acepto que MARKET.INK use estos datos para responder a esta solicitud.
              </span>
            </label>

            <button className="button button--red button--submit" type="submit">
              Solicitar INKSCAN
            </button>
            <small>
              No envíes datos sanitarios ni información sensible de clientes.
            </small>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__top">
          <Wordmark light />
          <strong>Agenda llena. Marca con tinta.</strong>
        </div>
        <div className="site-footer__bottom">
          <span>MARKET.INK · TATTOO GROWTH OS</span>
          <span>
            GPU: {capability.webgpu ? "WEBGPU CAPABLE" : "WEBGL2 PATH"}
          </span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
