const engines = [
  ["01", "Posiciona", "Que el cliente entienda qué haces, para quién y por qué elegirte."],
  ["02", "Crea", "Contenido y creatividades que enseñan trabajo, proceso, prueba y personalidad."],
  ["03", "Genera demanda", "Orgánico, búsqueda, Meta Ads y campañas conectadas a una oferta real."],
  ["04", "Convierte", "Instagram, WhatsApp, CRM, seguimiento, señal y reserva."],
  ["05", "Retén", "Reseñas, rebooking, referidos y reactivación de clientes dormidos."],
  ["06", "Mide", "Deja de optimizar likes y aprende qué genera reservas y valor."],
];

const paths = [
  {
    eyebrow: "APRENDE",
    title: "INK GROWTH OS",
    copy: "Formación de implementación para construir el sistema tú mismo: desde Instagram y WhatsApp hasta contenido, Meta Ads, CRM, web y reservas.",
  },
  {
    eyebrow: "IMPLEMENTAMOS",
    title: "MARKET.INK Growth",
    copy: "Instalamos y operamos el sistema contigo: estrategia, contenido, campañas, automatización, conversión y reporting.",
  },
  {
    eyebrow: "ESCALA",
    title: "Studio OS → InkFlow",
    copy: "Cuando el estudio ya tiene volumen y procesos repetitivos, convertimos fricción operativa en infraestructura y software.",
  },
];

const questions = [
  ["¿Garantizáis citas?", "No. Primero medimos capacidad, oferta, demanda y conversión. Trabajamos sobre un sistema medible y evitamos promesas de resultados que no podemos controlar."],
  ["¿Trabajáis con estudios o tatuadores?", "El foco principal es el dueño del estudio, porque una implementación puede mejorar el sistema de varios artistas. También trabajamos con tatuadores independientes de alto encaje."],
  ["¿Necesito Manychat?", "No necesariamente. Es una capa útil cuando la automatización de Instagram tiene sentido, no un requisito para tener un perfil profesional."],
  ["¿Quién es dueño de mis cuentas?", "Tú. Dominio, Meta, Instagram, WhatsApp, base de datos y activos permanecen bajo control del cliente. MARKET.INK trabaja con acceso delegado."],
  ["¿InkFlow entra desde el primer día?", "No. El software tiene sentido cuando ya existe suficiente volumen, datos y repetición operativa como para crear apalancamiento."],
];

export default function HomePage() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="MARKET.INK inicio">
          MARKET<span>.</span>INK
        </a>
        <nav aria-label="Navegación principal">
          <a href="#sistema">Sistema</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#inkscan">INKSCAN</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="kicker">TATTOO GROWTH OS · SPAIN FIRST</div>
        <h1>
          Tu arte no necesita más likes.
          <em> Necesita un sistema que convierta atención en citas.</em>
        </h1>
        <p className="heroCopy">
          Posicionamiento, contenido, Instagram, WhatsApp, Meta Ads, CRM,
          reservas, reputación y reactivación conectados alrededor de una métrica:
          capacidad rentable reservada.
        </p>
        <div className="actions">
          <a className="button primary" href="#inkscan">Haz tu INKSCAN</a>
          <a className="button ghost" href="#sistema">Ver el sistema</a>
        </div>
        <div className="systemLine" aria-label="Sistema MARKET.INK">
          <span>POSITION</span><b>→</b><span>CONTENT</span><b>→</b>
          <span>DEMAND</span><b>→</b><span>CONVERT</span><b>→</b>
          <span>RETAIN</span><b>→</b><span>MEASURE</span>
        </div>
      </section>

      <section className="problem">
        <div className="shell grid2">
          <div>
            <p className="sectionTag">EL PROBLEMA</p>
            <h2>Tatuar ya es un trabajo. Gestionar todo lo demás es otro.</h2>
          </div>
          <div className="problemCopy">
            <p>
              Reels, mensajes, presupuestos, disponibilidad, anuncios, reseñas,
              clientes antiguos, Google, reservas y seguimiento.
            </p>
            <p>
              Cada pieza puede existir por separado y aun así dejar huecos en la
              agenda. MARKET.INK las conecta en un mismo sistema operativo.
            </p>
          </div>
        </div>
      </section>

      <section className="shell section" id="sistema">
        <p className="sectionTag">EL MECANISMO</p>
        <h2>Seis motores. Una agenda.</h2>
        <div className="engineGrid">
          {engines.map(([num, title, copy]) => (
            <article className="engine" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vslSection">
        <div className="shell vslGrid">
          <div>
            <p className="sectionTag">VSL · PRÓXIMA PIEZA</p>
            <h2>Por qué buenos tatuadores siguen teniendo huecos.</h2>
            <p>
              El vídeo explica el sistema completo: qué medir, dónde se pierde una
              oportunidad y cuándo tiene sentido contenido, ads, automatización o
              software.
            </p>
            <a className="textLink" href="#inkscan">Quiero el diagnóstico →</a>
          </div>
          <div className="videoPlaceholder" role="img" aria-label="Placeholder del VSL MARKET.INK">
            <span>MARKET.INK VSL</span>
            <strong>08–10 MIN</strong>
            <small>Evidence-first · sin claims inventados</small>
          </div>
        </div>
      </section>

      <section className="shell section" id="soluciones">
        <p className="sectionTag">TRES FORMAS DE ENTRAR</p>
        <h2>Apréndelo. Implémentalo. Escálalo.</h2>
        <div className="pathGrid">
          {paths.map((path) => (
            <article className="path" key={path.title}>
              <span>{path.eyebrow}</span>
              <h3>{path.title}</h3>
              <p>{path.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="academy">
        <div className="shell grid2">
          <div>
            <p className="sectionTag">INK GROWTH OS</p>
            <h2>Una formación que termina con sistemas funcionando.</h2>
          </div>
          <div className="checkList">
            {[
              "Economía y capacidad",
              "Posicionamiento y ofertas",
              "Instagram profesional",
              "WhatsApp Business",
              "Contenido, foto y Reels",
              "Canva, CapCut e IA",
              "Metricool y Manychat",
              "Meta Ads completo",
              "CRM, email y reactivación",
              "Web, reservas y Google Business",
            ].map((item) => <span key={item}>↳ {item}</span>)}
          </div>
        </div>
      </section>

      <section className="shell section proof">
        <p className="sectionTag">PRUEBA</p>
        <h2>Resultados verificables, no capturas sin contexto.</h2>
        <p>
          Los casos públicos aparecerán cuando exista permiso, baseline, intervención,
          resultado, periodo y método de medición verificables. Mientras tanto, el
          diagnóstico y el proceso están abiertos a inspección.
        </p>
      </section>

      <section className="inkflow">
        <div className="shell grid2">
          <div>
            <p className="sectionTag">SIGUIENTE NIVEL</p>
            <h2>El software llega cuando la operación lo necesita.</h2>
          </div>
          <div>
            <p>
              InkFlow está pensado para estudios que ya generan suficiente volumen:
              CRM, presupuestos, reservas, señales, calendario, comisiones, reputación
              y métricas en una infraestructura dedicada.
            </p>
          </div>
        </div>
      </section>

      <section className="shell section faq">
        <p className="sectionTag">FAQ</p>
        <div className="faqList">
          {questions.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="inkscan" id="inkscan">
        <div className="shell inkscanGrid">
          <div>
            <p className="sectionTag">INKSCAN</p>
            <h2>Encuentra dónde está perdiendo fuerza tu sistema.</h2>
            <p>
              Primera lectura de posicionamiento, contenido, demanda, conversión,
              reputación y medición. Sin asumir datos privados que no conocemos.
            </p>
          </div>
          <form action="/api/inkscan" method="post" className="leadForm">
            <label>
              Soy
              <select name="businessType" required defaultValue="">
                <option value="" disabled>Selecciona</option>
                <option value="studio">Dueño/a de estudio</option>
                <option value="artist">Tatuador/a independiente</option>
              </select>
            </label>
            <label>Nombre / estudio<input name="name" required /></label>
            <label>Ciudad<input name="city" required /></label>
            <label>Instagram<input name="instagram" placeholder="@..." required /></label>
            <label>Email<input type="email" name="email" required /></label>
            <label>
              Principal bloqueo
              <textarea name="constraint" rows={4} placeholder="Ej. huecos en agenda, no sé qué contenido hacer, muchos DMs pero pocas reservas..." />
            </label>
            <label className="consent">
              <input type="checkbox" name="consent" value="yes" required />
              <span>Acepto que MARKET.INK use estos datos para responder a esta solicitud.</span>
            </label>
            <button className="button primary" type="submit">Solicitar INKSCAN</button>
            <small>No envíes datos sanitarios ni información sensible de clientes.</small>
          </form>
        </div>
      </section>

      <footer className="shell footer">
        <a className="brand" href="#top">MARKET<span>.</span>INK</a>
        <p>Agenda llena. Marca con tinta.</p>
        <p>© {new Date().getFullYear()} MARKET.INK</p>
      </footer>
    </main>
  );
}
