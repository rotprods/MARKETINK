export type GraphicsCapability = {
  webgpu: boolean;
  reducedMotion: boolean;
  touch: boolean;
  coarsePointer: boolean;
};

export function detectGraphicsCapability(): GraphicsCapability {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return {
      webgpu: false,
      reducedMotion: false,
      touch: false,
      coarsePointer: false,
    };
  }

  const navigatorWithGpu = navigator as Navigator & { gpu?: unknown };

  return {
    webgpu: Boolean(navigatorWithGpu.gpu),
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    touch: navigator.maxTouchPoints > 0,
    coarsePointer: window.matchMedia("(pointer: coarse)").matches,
  };
}
