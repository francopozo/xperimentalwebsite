export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      <section className="relative flex flex-1 flex-col justify-between px-6 py-8 sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(255,61,0,0.18),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.02),_transparent_40%)]" />

        <header className="relative z-10 flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/55">
              Colectivo de arte
            </p>
            <h1 className="mt-2 text-2xl font-semibold uppercase tracking-[0.18em] sm:text-3xl">
              Xperimental Website
            </h1>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/70">
            Base inicial del proyecto para una plataforma editorial, experimental
            y fine-arts con archivo vivo de obras, artistas y eventos.
          </p>
        </header>

        <section className="relative z-10 grid gap-12 py-14 lg:grid-cols-[1.4fr_0.8fr] lg:items-end lg:py-20">
          <div className="space-y-8">
            <p className="max-w-2xl text-[clamp(2.8rem,9vw,8.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.05em]">
              Archivo
              <br />
              gesto
              <br />
              ruido
            </p>

            <div className="grid gap-6 text-sm text-white/72 sm:grid-cols-2">
              <p className="max-w-sm leading-6">
                Este arranque ya deja preparado el entorno para construir una
                experiencia visual no convencional con alto contraste y motion
                avanzado.
              </p>
              <p className="max-w-sm leading-6">
                El siguiente bloque de trabajo sera convertir esta base en una
                narrativa digital con home inmersivo, archivo de obras y agenda
                de actividades futuras y pasadas.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <article className="border border-white/12 bg-white/[0.03] p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                Estado
              </p>
              <p className="mt-4 text-lg leading-7">
                Next.js y TypeScript ya forman parte de la base del proyecto.
              </p>
            </article>

            <article className="border border-white/12 bg-[#ff3d00] p-5 text-black">
              <p className="text-xs uppercase tracking-[0.28em] text-black/60">
                Proximo frente
              </p>
              <p className="mt-4 text-lg leading-7">
                Sistema visual, rutas principales, eventos y primera capa de
                animacion experimental.
              </p>
            </article>
          </div>
        </section>

        <footer className="relative z-10 grid gap-6 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.24em] text-white/48 sm:grid-cols-3">
          <p>Home / Colectivo / Archivo / Eventos / Contacto</p>
          <p>Base preparada para CMS y despliegue en Vercel</p>
          <p>Eventos futuros y archivo de pasados incluidos en el roadmap</p>
        </footer>
      </section>
    </main>
  );
}
