import { useState } from 'react'

const services = [
  {
    title: 'Mantencion integral',
    description:
      'Visitas programadas para jardines residenciales, condominios y empresas.',
    tag: 'Mantencion',
    icon: LeafIcon,
  },
  {
    title: 'Diseno y construccion',
    description:
      'Paisajismo, nuevas areas verdes y soluciones a medida para cada espacio.',
    tag: 'Paisajismo',
    icon: PlanIcon,
  },
  {
    title: 'Riego eficiente',
    description:
      'Instalacion, mantencion y optimizacion de sistemas de riego.',
    tag: 'Riego',
    icon: DropIcon,
  },
]

const stats = [
  { value: '12+', label: 'Anos de experiencia' },
  { value: '80+', label: 'Proyectos activos' },
  { value: '100%', label: 'Equipo en terreno' },
]

const identityPoints = [
  'Compromiso real con tus espacios verdes.',
  'Responsabilidad y orden en cada visita.',
  'Calidad visible en cada detalle del jardin.',
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: InstagramIcon,
  },
  {
    label: 'Correo',
    href: 'mailto:contacto@humusgarden.cl',
    icon: MailIcon,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: YoutubeIcon,
  },
]

const videoUrl = 'https://www.youtube.com/embed/aqz-KE-bpKQ'

const primaryButtonClass =
  'inline-flex items-center justify-center rounded-full bg-[color:var(--hg-olive)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-22px_rgba(74,107,76,0.9)] transition hover:-translate-y-0.5 hover:bg-[color:var(--hg-forest)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--hg-olive)]'

const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-full border border-[color:var(--hg-olive)]/40 bg-white/70 px-6 py-3 text-sm font-semibold text-[color:var(--hg-olive)] shadow-sm transition hover:-translate-y-0.5 hover:border-[color:var(--hg-olive)] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--hg-olive)]'

function App() {
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' })
  const contactEndpoint =
    import.meta.env.VITE_CONTACT_API_URL || '/api/contact'

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (formStatus.state === 'loading') {
      return
    }

    setFormStatus({ state: 'loading', message: 'Enviando...' })

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setFormStatus({
        state: 'success',
        message: 'Gracias. Te responderemos en 24 horas habiles.',
      })
      event.currentTarget.reset()
    } catch (error) {
      setFormStatus({
        state: 'error',
        message: 'No pudimos enviar el formulario. Intenta mas tarde.',
      })
    }
  }

  const statusClass =
    formStatus.state === 'success'
      ? 'text-emerald-700'
      : formStatus.state === 'error'
        ? 'text-rose-600'
        : 'text-[color:var(--hg-forest)]/70'

  return (
    <div className="min-h-screen bg-[color:var(--hg-cream)] text-[color:var(--hg-forest)]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(169,204,150,0.7)_0%,_rgba(169,204,150,0)_70%)] blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(224,206,186,0.8)_0%,_rgba(224,206,186,0)_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.6)_0%,_rgba(255,255,255,0)_45%,_rgba(255,255,255,0.5)_100%)] opacity-60" />
      </div>

      <header className="relative">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--hg-moss)]">
              <LeafMark className="h-7 w-7 text-[color:var(--hg-olive)]" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-[color:var(--hg-forest)]">
                HumusGarden
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--hg-olive)]">
                Jardines vivos
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[color:var(--hg-forest)]/70 md:flex">
            <a className="transition hover:text-[color:var(--hg-olive)]" href="#inicio">
              Inicio
            </a>
            <a className="transition hover:text-[color:var(--hg-olive)]" href="#servicios">
              Nuestros servicios
            </a>
            <a className="transition hover:text-[color:var(--hg-olive)]" href="#contacto">
              Contacto
            </a>
          </nav>
          <a className={primaryButtonClass} href="#contacto">
            Cotizar
          </a>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="mx-auto w-full max-w-6xl px-6 pb-20 pt-4 lg:px-10 lg:pb-28"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--hg-olive)] shadow-sm animate-fade-up">
                <span className="h-2 w-2 rounded-full bg-[color:var(--hg-olive)]" />
                Santiago, Chile
              </div>
              <h1 className="font-display text-4xl leading-tight text-[color:var(--hg-forest)] sm:text-5xl lg:text-6xl animate-fade-up">
                Diseno, mantencion y construccion de areas verdes con
                personalidad.
              </h1>
              <p className="text-lg text-[color:var(--hg-forest)]/70 animate-fade-up">
                Creamos jardines vivos para condominios, empresas y hogares. Un
                equipo cercano, ordenado y listo para cuidar cada detalle.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row animate-fade-up">
                <a className={primaryButtonClass} href="#contacto">
                  Cotizar proyecto
                </a>
                <a className={secondaryButtonClass} href="#servicios">
                  Ver servicios
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-sm animate-fade-up"
                    style={{ animationDelay: `${0.15 * index}s` }}
                  >
                    <p className="text-xl font-semibold text-[color:var(--hg-forest)]">
                      {stat.value}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--hg-olive)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 -top-6 hidden h-20 w-20 rounded-full border border-white/60 bg-white/60 lg:block animate-float-soft" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/70 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-3xl bg-[color:var(--hg-moss)]/40 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--hg-olive)]">
                    Plan de mantencion
                  </p>
                  <p className="mt-3 font-display text-2xl text-[color:var(--hg-forest)]">
                    Un jardin saludable todo el ano.
                  </p>
                  <p className="mt-3 text-sm text-[color:var(--hg-forest)]/70">
                    Programas flexibles, equipo en terreno y seguimiento
                    continuo.
                  </p>
                </div>

                <div className="mt-6 rounded-3xl border border-white/80 bg-white/80 p-6">
                  <p className="text-sm font-semibold text-[color:var(--hg-forest)]">
                    Incluye
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-[color:var(--hg-forest)]/80">
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[color:var(--hg-olive)]" />
                      Poda, riego y control de plagas.
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[color:var(--hg-olive)]" />
                      Mantencion de arboles y setos.
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[color:var(--hg-olive)]" />
                      Reporte mensual y mejoras sugeridas.
                    </li>
                  </ul>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--hg-olive)]">
                    Diseno sustentable
                  </div>
                  <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--hg-olive)]">
                    Equipo certificado
                  </div>
                  <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--hg-olive)]">
                    Jardin en movimiento
                  </div>
                  <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--hg-olive)]">
                    Visitas programadas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="servicios"
          className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--hg-olive)]">
                Nuestros servicios
              </p>
              <h2 className="mt-3 font-display text-3xl text-[color:var(--hg-forest)] sm:text-4xl">
                Soluciones completas para areas verdes.
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-[color:var(--hg-forest)]/70">
                Nos adaptamos al ritmo de tu condominio o empresa con planes de
                mantencion y proyectos a medida.
              </p>
            </div>
            <a className={secondaryButtonClass} href="#contacto">
              Agendar visita
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <div
                  key={service.title}
                  className="group rounded-[28px] border border-white/80 bg-white/70 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--hg-moss)] text-[color:var(--hg-olive)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-[color:var(--hg-forest)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-[color:var(--hg-forest)]/70">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--hg-olive)]">
                    <span className="h-px w-10 bg-[color:var(--hg-olive)]" />
                    {service.tag}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section
          id="identidad"
          className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-white/80 bg-white/70 p-5 shadow-xl">
              <div className="aspect-video overflow-hidden rounded-[28px] bg-[color:var(--hg-forest)]">
                <iframe
                  className="h-full w-full"
                  src={videoUrl}
                  title="Bienvenidos a HumusGarden"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--hg-olive)]">
                <span className="rounded-full bg-white/80 px-3 py-1">Video</span>
                <span>Equipo HumusGarden</span>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/80 bg-white/80 p-8 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--hg-olive)]">
                Lo ultimo
              </p>
              <h3 className="mt-4 font-display text-2xl text-[color:var(--hg-forest)]">
                Nuestra identidad
              </h3>
              <p className="mt-4 text-sm text-[color:var(--hg-forest)]/70">
                Somos HumusGarden, un equipo de mantencion y construccion de
                areas verdes enfocado en compromiso, responsabilidad y calidad
                del trabajo. Nos encanta dar nueva vida a tu jardin y cumplir
                tus ideas.
              </p>
              <ul className="mt-6 space-y-4 text-sm text-[color:var(--hg-forest)]/80">
                {identityPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--hg-olive)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border border-white/80 bg-white/70 p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--hg-olive)]">
                  Encuentranos en
                </p>
                <p className="mt-2 text-sm text-[color:var(--hg-forest)]/70">
                  Siguenos para ver proyectos, consejos y novedades.
                </p>
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon

                  return (
                    <a
                      key={link.label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/80 text-[color:var(--hg-olive)] shadow-sm transition hover:-translate-y-0.5 hover:text-[color:var(--hg-forest)]"
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--hg-olive)]">
                Contacto
              </p>
              <h2 className="mt-3 font-display text-3xl text-[color:var(--hg-forest)] sm:text-4xl">
                Hablemos sobre tu jardin.
              </h2>
              <p className="mt-4 text-sm text-[color:var(--hg-forest)]/70">
                Cuentanos que necesitas y coordinemos una visita tecnica. Te
                responderemos con una propuesta clara y cercana.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--hg-olive)]">
                    Telefono
                  </p>
                  <a
                    className="mt-2 block text-lg font-semibold text-[color:var(--hg-forest)]"
                    href="tel:+56900000000"
                  >
                    +56 9 0000 0000
                  </a>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--hg-olive)]">
                    Email
                  </p>
                  <a
                    className="mt-2 block text-lg font-semibold text-[color:var(--hg-forest)]"
                    href="mailto:contacto@humusgarden.cl"
                  >
                    contacto@humusgarden.cl
                  </a>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--hg-olive)]">
                    Ubicacion
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--hg-forest)]/70">
                    Santiago y alrededores.
                  </p>
                </div>
              </div>
            </div>

            <form
              className="rounded-[32px] border border-white/80 bg-white/80 p-8 shadow-2xl"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-[color:var(--hg-forest)]">
                  Nombre y apellido
                  <input
                    className="mt-2 w-full rounded-2xl border border-[color:var(--hg-clay)] bg-white/80 px-4 py-3 text-sm text-[color:var(--hg-forest)] shadow-sm outline-none transition focus:border-[color:var(--hg-olive)] focus:ring-2 focus:ring-[color:var(--hg-olive)]/30"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="text-sm font-semibold text-[color:var(--hg-forest)]">
                  Email
                  <input
                    className="mt-2 w-full rounded-2xl border border-[color:var(--hg-clay)] bg-white/80 px-4 py-3 text-sm text-[color:var(--hg-forest)] shadow-sm outline-none transition focus:border-[color:var(--hg-olive)] focus:ring-2 focus:ring-[color:var(--hg-olive)]/30"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-[color:var(--hg-forest)]">
                  Telefono
                  <input
                    className="mt-2 w-full rounded-2xl border border-[color:var(--hg-clay)] bg-white/80 px-4 py-3 text-sm text-[color:var(--hg-forest)] shadow-sm outline-none transition focus:border-[color:var(--hg-olive)] focus:ring-2 focus:ring-[color:var(--hg-olive)]/30"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                  />
                </label>
                <label className="text-sm font-semibold text-[color:var(--hg-forest)]">
                  Servicio
                  <select
                    className="mt-2 w-full rounded-2xl border border-[color:var(--hg-clay)] bg-white/80 px-4 py-3 text-sm text-[color:var(--hg-forest)] shadow-sm outline-none transition focus:border-[color:var(--hg-olive)] focus:ring-2 focus:ring-[color:var(--hg-olive)]/30"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    <option value="mantencion">Mantencion</option>
                    <option value="diseno">Diseno y construccion</option>
                    <option value="riego">Riego</option>
                    <option value="otros">Otros</option>
                  </select>
                </label>
              </div>

              <label className="mt-4 block text-sm font-semibold text-[color:var(--hg-forest)]">
                Mensaje
                <textarea
                  className="mt-2 w-full rounded-2xl border border-[color:var(--hg-clay)] bg-white/80 px-4 py-3 text-sm text-[color:var(--hg-forest)] shadow-sm outline-none transition focus:border-[color:var(--hg-olive)] focus:ring-2 focus:ring-[color:var(--hg-olive)]/30"
                  name="message"
                  rows={5}
                  required
                />
              </label>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  className={primaryButtonClass}
                  type="submit"
                  disabled={formStatus.state === 'loading'}
                >
                  {formStatus.state === 'loading'
                    ? 'Enviando...'
                    : 'Enviar mensaje'}
                </button>
                <p className={`text-sm ${statusClass}`} aria-live="polite">
                  {formStatus.message || 'Respondemos en horario laboral.'}
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/70 bg-white/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-[color:var(--hg-forest)]/70 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>HumusGarden 2024. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a className="transition hover:text-[color:var(--hg-olive)]" href="#inicio">
              Inicio
            </a>
            <a className="transition hover:text-[color:var(--hg-olive)]" href="#servicios">
              Servicios
            </a>
            <a className="transition hover:text-[color:var(--hg-olive)]" href="#contacto">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LeafMark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path
        d="M12 3c3 2 5 5.8 5 9.1 0 3.4-2.2 5.6-5 8-2.8-2.4-5-4.6-5-8C7 8.8 9 5 12 3Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path d="M12 5c2.4 1.7 3.8 4.5 3.8 7.1 0 2.6-1.5 4.4-3.8 6.3-2.3-1.9-3.8-3.7-3.8-6.3C8.2 9.5 9.6 6.7 12 5Z" />
      <path d="M12 6.5v10" />
    </svg>
  )
}

function LeafIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M5 14c5.5-0.4 9.7-2.6 12.5-7.8C20.6 12 17 19 9.5 19c-2.4 0-4-1.6-4.5-5Z" />
      <path d="M9 18c0.4-3.6 2.1-6.6 6.2-9.3" />
    </svg>
  )
}

function PlanIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 7h10a4 4 0 0 1 4 4v9H8a4 4 0 0 1-4-4V7Z" />
      <path d="M8 7V5a2 2 0 0 1 2-2h8v12" />
      <path d="M8 12h6" />
      <path d="M8 15h5" />
    </svg>
  )
}

function DropIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z" />
      <path d="M8.5 14.5c0.5 1.7 2 2.5 3.5 2.5" />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function MailIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="m3 8 9 6 9-6" />
    </svg>
  )
}

function YoutubeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default App
