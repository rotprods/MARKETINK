"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="runtime-fallback">
      <div className="runtime-fallback__mark">MARKET<span>.INK</span></div>
      <p>La experiencia visual ha tenido un problema.</p>
      <h1>La web sigue disponible.</h1>
      <p>
        Puedes reintentar la interfaz sin perder el acceso a MARKET.INK.
      </p>
      <button type="button" onClick={reset}>
        Reintentar
      </button>
      <a href="/#inkscan">Ir a INKSCAN</a>
    </main>
  );
}
