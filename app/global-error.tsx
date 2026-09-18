"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: "#FBF8EF", color: "#000" }}>
        <main
          style={{
            minHeight: "100vh",
            padding: "clamp(24px, 6vw, 88px)",
            display: "grid",
            alignContent: "center",
            gap: 20,
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          <strong
            style={{
              fontSize: "clamp(3rem, 10vw, 9rem)",
              letterSpacing: "-0.06em",
            }}
          >
            MARKET<span style={{ color: "#DE2727" }}>.INK</span>
          </strong>
          <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}>
            La página puede seguir cargando sin la capa inmersiva.
          </h1>
          <p style={{ maxWidth: 620, lineHeight: 1.55 }}>
            Reintenta la aplicación o entra directamente al diagnóstico.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={reset}
              style={{
                minHeight: 48,
                padding: "0 20px",
                border: 0,
                background: "#DE2727",
                color: "#fff",
                fontWeight: 800,
              }}
            >
              Reintentar
            </button>
            <a
              href="/#inkscan"
              style={{
                minHeight: 48,
                padding: "0 20px",
                display: "inline-flex",
                alignItems: "center",
                border: "1px solid #000",
                color: "#000",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              Ir a INKSCAN
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
