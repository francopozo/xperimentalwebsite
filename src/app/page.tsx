import {
  editorialNotes,
  featuredArchive,
  featuredArtists,
  formatEventRange,
  navigation,
  splitEventsByTimeline,
} from "@/lib/site-content";

export const revalidate = 3600;

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div className="space-y-3">
        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-foreground/48">
          {eyebrow}
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,4.2rem)] leading-[0.92] tracking-[-0.04em] text-foreground">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-sm leading-7 text-foreground/68 sm:text-[0.97rem]">
        {body}
      </p>
    </div>
  );
}

export default function Home() {
  const { upcoming, archive } = splitEventsByTimeline();

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-40" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(196,131,86,0.2),_transparent_48%)]" />
      <div className="pointer-events-none absolute -left-12 top-28 h-72 w-72 rounded-full bg-accent/18 blur-3xl drift" />
      <div className="pointer-events-none absolute right-[-5rem] top-[24rem] h-96 w-96 rounded-full bg-accent-cool/12 blur-3xl drift-delay" />

      <section
        id="inicio"
        className="grain-overlay relative min-h-screen border-b border-line/70 px-6 py-6 sm:px-10 lg:px-14"
      >
        <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-[90rem] flex-col">
          <header className="fade-rise flex flex-col gap-5 border-b border-line/80 pb-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-foreground/48">
                Colectivo de arte contemporaneo
              </p>
              <div className="flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.3em] text-foreground/55">
                <span>La Paz / Bolivia</span>
                <span className="h-px w-8 bg-line" />
                <span>Archivo en construccion</span>
              </div>
            </div>

            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[0.72rem] uppercase tracking-[0.26em] text-foreground/58">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  className="transition-colors duration-300 hover:text-foreground"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="grid flex-1 gap-12 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-16">
            <div className="fade-rise-delay flex flex-col justify-between gap-14">
              <div className="max-w-4xl space-y-8">
                <p className="text-[0.72rem] uppercase tracking-[0.36em] text-foreground/48">
                  Primera version editorial
                </p>
                <h1 className="font-display text-[clamp(3.6rem,11vw,9.2rem)] leading-[0.85] tracking-[-0.06em] text-foreground">
                  Colectivo
                  <br />
                  Xperimental
                </h1>
                <div className="grid gap-7 lg:grid-cols-[1fr_0.9fr]">
                  <p className="max-w-xl text-base leading-7 text-foreground/76 sm:text-lg">
                    Un sitio para obras, artistas, notas de proceso y eventos
                    que se leen como un archivo vivo. Esta primera version
                    prioriza atmosfera, estructura y una voz curatorial clara.
                  </p>
                  <div className="space-y-4 text-sm leading-7 text-foreground/62">
                    <p>
                      Lorem ipsum utilizable: copy provisional, imagenes
                      placeholder y fichas semilla para validar la experiencia
                      antes de conectar la capa editorial real.
                    </p>
                    <div className="flex flex-wrap gap-3 text-[0.72rem] uppercase tracking-[0.26em] text-foreground/55">
                      <a
                        className="border border-line px-4 py-2 transition-colors duration-300 hover:border-foreground/40 hover:bg-foreground hover:text-background"
                        href="#archivo"
                      >
                        Explorar archivo
                      </a>
                      <a
                        className="border border-transparent px-4 py-2 text-foreground/72 transition-colors duration-300 hover:text-foreground"
                        href="#eventos"
                      >
                        Ver agenda
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden border-y border-line/70 py-3">
                <div className="ticker flex min-w-max gap-12 pr-12 text-[0.66rem] uppercase tracking-[0.34em] text-foreground/42">
                  {Array.from({ length: 2 }).map((_, copyIndex) => (
                    <div key={copyIndex} className="flex gap-12">
                      <span>archivo vivo</span>
                      <span>obras y procesos</span>
                      <span>eventos futuros y pasados</span>
                      <span>texto provisional</span>
                      <span>imagenes placeholder</span>
                      <span>diseno editorial experimental</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="fade-rise-delay grid gap-4 lg:pb-4">
              <article className="relative overflow-hidden border border-line/80 bg-background-soft/85 p-5">
                <div className="absolute inset-0 bg-[linear-gradient(140deg,_rgba(196,131,86,0.16),_transparent_42%,_rgba(123,141,132,0.14)_100%)]" />
                <div className="relative space-y-20">
                  <div className="flex items-start justify-between gap-4 text-[0.68rem] uppercase tracking-[0.28em] text-foreground/48">
                    <span>Placeholder visual</span>
                    <span>01</span>
                  </div>
                  <div className="space-y-2">
                    <p className="font-display text-3xl leading-none tracking-[-0.04em] text-foreground">
                      Imagen,
                      <br />
                      materia,
                      <br />
                      silencio
                    </p>
                    <p className="max-w-xs text-sm leading-6 text-foreground/62">
                      Marco visual provisional para futuras fotografias de sala,
                      procesos y registros de obra.
                    </p>
                  </div>
                </div>
              </article>

              <div className="grid gap-4 md:grid-cols-2">
                <article className="border border-line/80 p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-foreground/45">
                    Enfoque
                  </p>
                  <p className="mt-5 text-lg leading-7 text-foreground/78">
                    Archivo cultural, artistas, piezas y eventos en una
                    composicion sobria y deliberada.
                  </p>
                </article>
                <article className="border border-accent/45 bg-accent/10 p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-accent">
                    Despliegue
                  </p>
                  <p className="mt-5 text-lg leading-7 text-foreground/82">
                    Base lista para pruebas, ajustes de contenido y preview en
                    Vercel.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="colectivo"
        className="section-divider relative px-6 py-16 sm:px-10 lg:px-14 lg:py-24"
      >
        <div className="mx-auto max-w-[90rem] space-y-12">
          <SectionHeading
            eyebrow="Colectivo"
            title="Una plataforma para exhibir, guardar y activar procesos."
            body="La primera version organiza el sitio como si fuera una publicacion expandida: un manifesto breve, notas de metodo y piezas que pueden crecer luego hacia rutas, CMS y capas de archivo mas precisas."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {editorialNotes.map((note) => (
              <article
                key={note.title}
                className="flex min-h-64 flex-col justify-between border border-line/80 bg-background-soft/60 p-6"
              >
                <div className="space-y-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-foreground/45">
                    {note.eyebrow}
                  </p>
                  <h3 className="font-display text-[1.7rem] leading-[1.02] tracking-[-0.04em] text-foreground">
                    {note.title}
                  </h3>
                </div>
                <p className="max-w-sm text-sm leading-7 text-foreground/64">
                  {note.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="archivo"
        className="section-divider relative px-6 py-16 sm:px-10 lg:px-14 lg:py-24"
      >
        <div className="mx-auto max-w-[90rem] space-y-12">
          <SectionHeading
            eyebrow="Archivo"
            title="Obras y rastros que se ordenan sin perder misterio."
            body="Las fichas se plantean como piezas curatoriales. El contenido sigue siendo provisional, pero la reticula, los indices y los cambios de escala ya empujan la experiencia hacia un archivo digital con personalidad."
          />

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border border-line/80 bg-background-soft/50 p-6">
              <div className="flex items-center justify-between border-b border-line/70 pb-4">
                <p className="text-[0.68rem] uppercase tracking-[0.32em] text-foreground/45">
                  Indice provisional
                </p>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-foreground/34">
                  03 piezas destacadas
                </p>
              </div>

              <div className="mt-6 grid gap-6">
                {featuredArchive.map((entry, index) => (
                  <article
                    key={entry.title}
                    className="grid gap-4 border-b border-line/60 pb-6 last:border-none last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.26em] text-foreground/38">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-3 font-display text-[1.9rem] leading-none tracking-[-0.04em]">
                          {entry.title}
                        </h3>
                      </div>
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-foreground/45">
                        {entry.year}
                      </p>
                    </div>

                    <div className="grid gap-3 text-sm text-foreground/62 sm:grid-cols-2">
                      <p>{entry.summary}</p>
                      <div className="space-y-2">
                        <p className="uppercase tracking-[0.22em] text-foreground/42">
                          {entry.format}
                        </p>
                        <p>{entry.dimensions}</p>
                        <p>{entry.note}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <article className="relative min-h-[24rem] overflow-hidden border border-line/80 bg-background-soft px-6 py-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(196,131,86,0.18),_transparent_22%),linear-gradient(150deg,_rgba(255,255,255,0.02),_transparent_50%,_rgba(123,141,132,0.14)_100%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.28em] text-foreground/45">
                    <span>Montaje placeholder</span>
                    <span>Futura galeria</span>
                  </div>

                  <div className="grid gap-5 md:grid-cols-[1fr_0.65fr]">
                    <div className="space-y-5">
                      <p className="font-display text-[clamp(2.3rem,5vw,4rem)] leading-[0.9] tracking-[-0.05em] text-foreground">
                        Un archivo que deja ver
                        <br />
                        la textura del proceso.
                      </p>
                      <p className="max-w-lg text-sm leading-7 text-foreground/66">
                        Espacio reservado para una imagen protagonista o una
                        pieza audiovisual de apertura. Hoy actua como campo de
                        prueba para el equilibrio entre tipografia, vacio y
                        atmosfera.
                      </p>
                    </div>
                    <div className="flex items-end justify-start">
                      <div className="border-l border-line/80 pl-5 text-[0.72rem] uppercase tracking-[0.26em] text-foreground/44">
                        <p>cover art / still / sala / documento</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="grid gap-4 border border-line/80 p-6 md:grid-cols-[0.9fr_1.1fr]">
                <p className="font-display text-[1.8rem] leading-none tracking-[-0.04em] text-foreground">
                  Notas de archivo
                </p>
                <p className="text-sm leading-7 text-foreground/64">
                  Lorem ipsum sobrio para futuras notas de contexto, creditos,
                  metodologia de catalogacion o relaciones entre obras,
                  artistas y eventos. La estructura ya esta lista para crecer
                  sin perder la sensacion editorial.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="artistas"
        className="section-divider relative px-6 py-16 sm:px-10 lg:px-14 lg:py-24"
      >
        <div className="mx-auto max-w-[90rem] space-y-12">
          <SectionHeading
            eyebrow="Artistas"
            title="Perfiles pensados como entradas de una constelacion."
            body="En esta version los perfiles son sintesis de tono: nombre, campo de trabajo, temporalidad y una breve nota editorial. Luego pueden crecer hacia paginas individuales o integracion con CMS."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredArtists.map((artist) => (
              <article
                key={artist.name}
                className="flex flex-col gap-8 border border-line/80 p-6"
              >
                <div className="space-y-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-foreground/44">
                    {artist.role}
                  </p>
                  <div>
                    <h3 className="font-display text-[2rem] leading-none tracking-[-0.04em] text-foreground">
                      {artist.name}
                    </h3>
                    <p className="mt-2 text-[0.72rem] uppercase tracking-[0.24em] text-foreground/44">
                      {artist.years}
                    </p>
                  </div>
                </div>

                <div className="flex min-h-44 items-end border border-line/80 bg-[linear-gradient(145deg,_rgba(255,255,255,0.02),_rgba(196,131,86,0.14))] p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-foreground/45">
                    Placeholder de retrato / material de proceso
                  </p>
                </div>

                <div className="space-y-4 text-sm leading-7 text-foreground/64">
                  <p>{artist.bio}</p>
                  <p className="uppercase tracking-[0.22em] text-foreground/42">
                    {artist.focus}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="eventos"
        className="section-divider relative px-6 py-16 sm:px-10 lg:px-14 lg:py-24"
      >
        <div className="mx-auto max-w-[90rem] space-y-12">
          <SectionHeading
            eyebrow="Eventos"
            title="Agenda futura y memoria de programas anteriores."
            body="La pagina ya separa automaticamente eventos vigentes o futuros de los ya concluidos. En esta fase la data sigue siendo semilla, pero la logica editorial queda instalada para la siguiente iteracion."
          />

          <div className="grid gap-6 xl:grid-cols-2">
            <div className="border border-line/80 bg-background-soft/55 p-6">
              <div className="flex items-center justify-between border-b border-line/70 pb-4">
                <h3 className="font-display text-[1.8rem] leading-none tracking-[-0.04em] text-foreground">
                  Proximos
                </h3>
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-foreground/42">
                  {upcoming.length} activos
                </p>
              </div>

              <div className="mt-6 grid gap-6">
                {upcoming.map((event) => (
                  <article
                    key={event.title}
                    className="grid gap-4 border-b border-line/60 pb-6 last:border-none last:pb-0"
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3 text-[0.68rem] uppercase tracking-[0.24em] text-foreground/44">
                        <span>{formatEventRange(event.startDate, event.endDate)}</span>
                        <span className="h-px w-6 bg-line" />
                        <span>{event.format}</span>
                      </div>
                      <h4 className="font-display text-[1.6rem] leading-none tracking-[-0.04em] text-foreground">
                        {event.title}
                      </h4>
                    </div>

                    <p className="max-w-xl text-sm leading-7 text-foreground/64">
                      {event.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.72rem] uppercase tracking-[0.22em] text-foreground/44">
                      <span>
                        {event.venue} / {event.city}, {event.country}
                      </span>
                      <span>{event.statusHint}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="border border-line/80 p-6">
              <div className="flex items-center justify-between border-b border-line/70 pb-4">
                <h3 className="font-display text-[1.8rem] leading-none tracking-[-0.04em] text-foreground">
                  Pasados
                </h3>
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-foreground/42">
                  {archive.length} archivados
                </p>
              </div>

              <div className="mt-6 grid gap-6">
                {archive.map((event) => (
                  <article
                    key={event.title}
                    className="grid gap-4 border-b border-line/60 pb-6 last:border-none last:pb-0"
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3 text-[0.68rem] uppercase tracking-[0.24em] text-foreground/40">
                        <span>{formatEventRange(event.startDate, event.endDate)}</span>
                        <span className="h-px w-6 bg-line" />
                        <span>{event.format}</span>
                      </div>
                      <h4 className="font-display text-[1.55rem] leading-none tracking-[-0.04em] text-foreground">
                        {event.title}
                      </h4>
                    </div>

                    <p className="max-w-xl text-sm leading-7 text-foreground/62">
                      {event.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.72rem] uppercase tracking-[0.22em] text-foreground/42">
                      <span>
                        {event.venue} / {event.city}, {event.country}
                      </span>
                      <span>{event.statusHint}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="section-divider relative px-6 py-16 sm:px-10 lg:px-14 lg:py-24"
      >
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-foreground/46">
              Contacto y siguiente paso
            </p>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.9] tracking-[-0.05em] text-foreground">
              La estructura ya esta lista
              <br />
              para poblarse de contenido real.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-foreground/68">
              Esta primera entrega deja una home desplegable y suficientemente
              articulada para mostrar direccion, tono y potencial de crecimiento.
              El siguiente movimiento natural es conectar material real,
              imagenes curatoriales y rutas dedicadas para cada dominio.
            </p>
          </div>

          <div className="grid gap-4 self-end">
            <article className="border border-line/80 p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-foreground/44">
                Correo provisional
              </p>
              <p className="mt-4 text-lg text-foreground/84">
                hola@colectivoxperimental.art
              </p>
            </article>
            <article className="border border-line/80 bg-background-soft/50 p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-foreground/44">
                Proxima capa
              </p>
              <p className="mt-4 text-lg leading-7 text-foreground/78">
                Integrar contenido real, secciones internas y una galeria visual
                con registros seleccionados.
              </p>
            </article>
          </div>
        </div>

        <footer className="mx-auto mt-16 max-w-[90rem] border-t border-line/80 pt-5 text-[0.68rem] uppercase tracking-[0.3em] text-foreground/38">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>Colectivo Xperimental / archivo / artistas / eventos</p>
            <p>Primera version para preview en Vercel</p>
          </div>
        </footer>
      </section>
    </main>
  );
}
