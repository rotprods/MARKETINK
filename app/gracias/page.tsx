import { SignalGlyph, Wordmark } from "@/components/brand/Wordmark";

export default function GraciasPage() {
  return (
    <main className="thank-you">
      <div className="thank-you__signal">
        <SignalGlyph />
      </div>
      <div className="thank-you__content">
        <Wordmark />
        <p className="section-index">INKSCAN · RECEIVED</p>
        <h1>
          Ya tenemos
          <span>el punto de partida.</span>
        </h1>
        <p>
          Revisaremos lo que has enviado antes de decidir qué tiene sentido analizar.
          No asumiremos datos privados ni prometeremos resultados que todavía no se
          pueden demostrar.
        </p>
        <a href="/" className="button button--red">
          Volver a MARKET.INK
        </a>
      </div>
    </main>
  );
}
