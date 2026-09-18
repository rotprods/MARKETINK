# MARKET.INK — Beta Recruitment Messages V1

> These are frameworks, not copy to mass-send.
> Every real message must be generated from verified prospect evidence in the private CRM.

---

# 0. OUTBOUND GATE

Do not send a beta invitation unless:

- entity resolved;
- studio vs artist confirmed;
- public contact channel legitimate;
- at least one specific positive/neutral observation verified;
- no hard gate;
- message does not assert private business performance;
- operator fit is plausible;
- duplicate outreach check passes.

Beta outreach is **not** the same gate as a client-facing INKSCAN.

We do not need to diagnose a leak before inviting someone into product research.

We do need to prove the message is specific.

---

# 1. OWNER-FIRST MESSAGE

Required inputs:

```yaml
studio:
city:
specific_public_observation:
why_beta_fit:
beta_outcome:
time_commitment:
price_hypothesis:
cta:
```

Template:

> Hola [nombre], soy Roberto, fundador de MARKET.INK.
>
> Estoy construyendo un sistema específico para estudios de tatuaje y he estado estudiando cómo distintos estudios de Murcia organizan [observación pública específica: equipo / reserva / estilos / etc.].
>
> Estoy cerrando una beta pequeña con 3–5 operadores para implementar durante 6 semanas la parte de negocio alrededor del tattoo: capacidad, posicionamiento, ofertas, Instagram, WhatsApp y estructura Meta.
>
> No busco que veáis vídeos y ya: cada semana acaba con un sistema funcionando y usamos el feedback para corregir la formación antes de lanzarla.
>
> Creo que [estudio] puede aportar señal especialmente por [razón basada en evidencia, no inventar problema].
>
> Si te encaja, te enseño en 10 minutos cómo está estructurada y vemos si tiene sentido para vosotros.

Do not append a fake scarcity line like:
"only 2 spots left" unless literally true.

---

# 2. SHORT INSTAGRAM DM

> Hola [nombre]. Soy Roberto, de MARKET.INK.
>
> Estoy montando una beta muy pequeña para dueños de estudios de tattoo: 6 semanas para implementar sistema de ofertas + IG + WhatsApp + base Meta, midiendo todo desde el inicio.
>
> He visto [observación pública específica] y creo que vuestro estudio podría ser un buen operador de prueba por [razón].
>
> ¿Te paso el esquema de la beta?

---

# 3. EMAIL SUBJECTS

Use factual subjects:

- `Beta MARKET.INK para [Studio]`
- `Sistema de crecimiento para estudios de tattoo — beta Murcia`
- `[Studio] × MARKET.INK — programa fundador`

Avoid:
- "URGENTE"
- "Estás perdiendo clientes"
- "Te vamos a llenar la agenda"
- fake Re:/Fwd:
- fabricated personalized revenue claims.

---

# 4. FOLLOW-UP

Maximum default beta sequence:

## F0
Initial invitation.

## F1
One follow-up after a reasonable interval:

> Te lo dejo arriba por si se perdió. No es una propuesta de gestión de redes: estamos seleccionando operadores para probar el sistema de implementación antes del lanzamiento. Si ahora no es momento, sin problema.

## CLOSE
If no response:
set `NO_RESPONSE / NURTURE`.

Do not chase indefinitely.

---

# 5. INDIVIDUAL ARTIST FALLBACK

Use only when:
- artist is commercially active;
- beta can help their own operation;
- not as a manipulative route around a studio owner who explicitly declined contact.

Template:

> Hola [nombre]. Estoy cerrando la primera beta de MARKET.INK para tatuadores/estudios.
>
> La idea es construir en 6 semanas el sistema alrededor del trabajo artístico —oferta, perfil, WhatsApp, seguimiento y base Meta— con tareas reales y medición.
>
> Vi [evidencia específica de su trabajo/superficie comercial] y creo que puedes darnos muy buena señal para la versión de tatuador independiente.
>
> Si quieres te paso el mapa del programa y decides si te interesa probarlo.

---

# 6. POSITIVE-SPECIFICITY RULE

Personalization should usually begin with something the business **does have**, not an attack.

Good:
- "Tenéis un formulario que ya recoge artista, zona y referencias."
- "Mostráis claramente varios artistas y estilos."
- "Ya tenéis una reserva directa en la web."

Bad:
- "Vuestra web convierte fatal."
- "Estáis perdiendo miles."
- "No sabéis vender."
- "Vuestro Instagram está mal."

A beta relationship starts from professional respect.

---

# 7. OWNER RESOLUTION

If owner/manager name is not verified:

Do not guess.

Use:
> Hola, ¿quién lleva la parte de gestión/marketing del estudio?

Or a generic studio-level message.

CRM field:
`role = owner_or_manager_unverified`

Do not upgrade the role to OWNER without source evidence.

---

# 8. MESSAGE QA

Before sending:

- [ ] correct entity;
- [ ] correct city/studio;
- [ ] observation has evidence ID;
- [ ] no negative private inference;
- [ ] no guarantee;
- [ ] no fake scarcity;
- [ ] no duplicated recent outreach;
- [ ] CTA asks for permission/interest, not immediate purchase;
- [ ] channel is appropriate;
- [ ] next CRM state defined.

Pass:
`BETA_OUTREACH_MESSAGE_READY`
