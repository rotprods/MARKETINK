export type GraphicsCapability = {
  webgl2: boolean;
  webgpu: boolean;
  reducedMotion: boolean;
  touch: boolean;
  coarsePointer: boolean;
};

export function detectGraphicsCapability(): GraphicsCapability {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return {
      webgl2: false,
      webgpu: false,
      reducedMotion: false,
      touch: false,
      coarsePointer: false,
    };
  }

  const navigatorWithGpu = navigator as Navigator & { gpu?: unknown };
  let webgl2 = false;

  try {
    const canvas = document.createElement("canvas");
    webgl2 = Boolean(canvas.getContext("webgl2"));
  } catch {
    webgl2 = false;
  }

  return {
    webgl2,
    webgpu: Boolean(navigatorWithGpu.gpu),
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    touch: navigator.maxTouchPoints > 0,
    coarsePointer: window.matchMedia("(pointer: coarse)").matches,
  };
}
