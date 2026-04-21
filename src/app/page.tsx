import Image from "next/image";

import {
  editorialNotes,
  featuredArchive,
  featuredArtists,
  formatEventRange,
  navigation,
  splitEventsByTimeline,
} from "@/lib/site-content";

const heroImages = {
  primary: "/images/image1.jpg",
  detail: "/images/image2.jpg",
};

const archiveImage = "/images/image3.jpg";

const artistPortraits = [
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
];

const contactImage = "/images/image8.jpg";

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
    <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
      <div className="space-y-2">
        <p className="text-[0.75rem] uppercase tracking-[0.2em] text-foreground/60">
          {eyebrow}
        </p>
        <h2 className="font-display text-[clamp(2.2rem,4.6vw,4.4rem)] leading-[0.95] tracking-[-0.04em]">
          {title}
        </h2>
      </div>
      <p className="reading-measure text-base leading-8 text-foreground/70">
        {body}
      </p>
    </div>
  );
}

export default function Home() {
  const { upcoming, archive } = splitEventsByTimeline();

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      {/* Background grid removed: clean editorial background overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(144,96,54,0.22),_transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_80%_90%,_rgba(90,141,176,0.16),_transparent_70%)]"
      />

      <section
        id="inicio"
        className="relative min-h-screen px-6 py-10 sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[100rem] flex-col gap-12">
          <header className="flex flex-col gap-4 pb-6">
            <div className="flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.24em] text-foreground/70">
              <span>Colectivo Xperimental</span>
              <span className="h-px w-8 bg-foreground/30" />
              <span>La Paz — Bolivia</span>
              <span className="h-px w-8 bg-foreground/30" />
              <span>Archivo y agenda cultural</span>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[0.72rem] uppercase tracking-[0.22em] text-foreground/60">
              {navigation.map((item) => (
                <a key={item.href} className="nav-link" href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="grid flex-1 gap-10 lg:grid-cols-[0.65fr_1.1fr_0.6fr]">
            <div className="space-y-6 soft-reveal">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-foreground/70">
                Edicion abril 2026 / Archivo vivo
              </p>
              <p className="reading-measure text-base leading-8 text-foreground/75">
                Esta entrega deja una home desplegada como publicacion digital:
                hero editorial, indice de archivo, constelacion de artistas y
                una agenda que respira el mismo tono curatorial.
              </p>
              <div className="space-y-3 text-[0.72rem] uppercase tracking-[0.2em] text-foreground/60">
                <p className="flex items-center gap-2">
                  <span className="h-px w-8 bg-foreground/40" /> agenda semanal /
                  boletin
                </p>
                <a
                  className="nav-link inline-flex items-center gap-2 text-foreground"
                  href="#contacto"
                >
                  Escribir a hola@colectivoxperimental.art
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="space-y-6 soft-reveal-delay">
              <h1 className="font-display text-[clamp(3.4rem,10vw,8.2rem)] leading-[0.88] tracking-[-0.06em]">
                Archivo vivo,
                <span className="block">constelaciones activas.</span>
              </h1>
              <p className="reading-measure text-lg leading-8 text-foreground/72">
                Un sitio para obras, artistas, notas de proceso y eventos que se
                leen como un archivo en movimiento. La estructura prioriza
                atmosfera, ritmo editorial y una voz serena antes de conectar la
                base de datos definitiva.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-[0.78rem] uppercase tracking-[0.24em] text-foreground/70">
                <a className="nav-link" href="#archivo">
                  Indice curatorial
                </a>
                <a className="nav-link" href="#eventos">
                  Agenda viva
                </a>
                <a className="nav-link" href="#artistas">
                  Constelacion de artistas
                </a>
              </div>
            </div>

            <div className="space-y-4 soft-reveal-delay">
              <article className="paper-fiber relative overflow-hidden bg-background-soft px-5 py-6">
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.26em] text-foreground/60">
                    <span>Pieza destacada</span>
                    <span>01 / 05</span>
                  </div>
<div className="space-y-3">
                      <div className="relative h-[28rem] overflow-hidden">
                        <Image
                          src={heroImages.primary}
                          alt="Registro visual del colectivo"
                          fill
                          sizes="(min-width: 1024px) 320px, 90vw"
                          className="object-cover"
                          priority
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(0,0,0,0.35)] via-transparent to-transparent" />
                      </div>
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={heroImages.detail}
                          alt="Detalle de materia y textura"
                          fill
                          sizes="(min-width: 1024px) 240px, 80vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  <div className="space-y-2">
                    <p className="font-display text-3xl leading-[1.05] tracking-[-0.04em]">
                      Imagen, materia, silencio
                    </p>
                    <p className="text-sm leading-6 text-foreground/70">
                      Marco curatorial para futuras fotografias de sala con tono
                      intimista y materialidad tactil.
                    </p>
                  </div>
                </div>
              </article>
              <article className="bg-[rgba(255,255,255,0.72)] px-5 py-4 text-[0.78rem] uppercase tracking-[0.22em] text-foreground/70">
                <div className="flex items-center justify-between">
                  <span>Metodologia en curso</span>
                  <span>Archivo vivo</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="colectivo"
        className="section-divider relative px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-[100rem] space-y-12">
          <SectionHeading
            eyebrow="Colectivo"
            title="Una plataforma para exhibir, guardar y activar procesos."
            body="El sitio funciona como revista expandida: manifiesto, notas de metodo y piezas listas para derivar hacia rutas, CMS y capas de archivo especificas."
          />

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.55fr]">
            <div className="space-y-8">
              <p className="reading-measure text-base leading-8 text-foreground/72">
                El lenguaje visual prioriza calma y decision: tipografia con
                presencia editorial, fondos en tono lino, lineas finas y
                transiciones suaves. Cada bloque puede crecer sin romper la
                atmosfera.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <article className="bg-background-soft/80 p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.25em] text-foreground/55">
                    Enfoque
                  </p>
                  <p className="mt-4 text-lg leading-7 text-foreground/80">
                    Archivo cultural pensado como constelacion: obras, artistas,
                    eventos y notas habitan la misma reticula.
                  </p>
                </article>
                <article className="bg-[rgba(144,96,54,0.12)] p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.25em] text-foreground/60">
                    Estado
                  </p>
                  <p className="mt-4 text-lg leading-7 text-foreground/80">
                    Primera version en produccion: copy provisional, imagenes
                    placeholder y logica lista para recibir contenido real.
                  </p>
                </article>
              </div>
            </div>

            <aside className="space-y-8 pl-6">
              {editorialNotes.map((note, index) => (
                <article
                  key={note.title}
                  className={`space-y-3 pb-6 ${
                    index !== editorialNotes.length - 1 ? "pb-6" : ""
                  }`}
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-foreground/55">
                    {String(index + 1).padStart(2, "0")} — {note.eyebrow}
                  </p>
                  <h3 className="font-display text-[1.6rem] leading-[1.05] tracking-[-0.03em]">
                    {note.title}
                  </h3>
                  <p className="text-sm leading-7 text-foreground/70">{note.body}</p>
                </article>
              ))}
              <div className="space-y-2 text-[0.72rem] uppercase tracking-[0.2em] text-foreground/65">
                <p>Metodo 2026 · investigacion situada · montaje digital</p>
                <p>Proxima capa: vincular CMS y sumar rutas especificas</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="archivo"
        className="section-divider relative px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-[100rem] space-y-12">
          <SectionHeading
            eyebrow="Archivo"
            title="Obras y rastros que se ordenan sin perder misterio."
            body="Las fichas funcionan como piezas curatoriales: indice numerado, metadata precisa y descripciones breves que conservan el tono del colectivo."
          />

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-background-soft/70 p-6">
              <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.26em] text-foreground/60">
                <span>Indice provisional</span>
                <span>{featuredArchive.length.toString().padStart(2, "0")} piezas</span>
              </div>
              <div className="mt-6 space-y-6">
                {featuredArchive.map((entry, index) => (
                  <article
                    key={entry.title}
                    className={`space-y-4 ${
                      index !== featuredArchive.length - 1 ? "pb-6" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-foreground/55">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 font-display text-[2rem] leading-[1.02] tracking-[-0.04em]">
                          {entry.title}
                        </h3>
                      </div>
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-foreground/55">
                        {entry.year}
                      </p>
                    </div>
                    <div className="grid gap-4 text-sm text-foreground/72 sm:grid-cols-2">
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-foreground/50">
                          Descripcion
                        </p>
                        <p className="mt-1 leading-7">{entry.summary}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-foreground/50">
                          Formato
                        </p>
                        <p>{entry.format}</p>
                        <p>{entry.dimensions}</p>
                        <p>{entry.note}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <article className="paper-fiber relative min-h-[32rem] overflow-hidden bg-background-soft px-6 py-6">
                <div className="absolute inset-0">
                  <Image
                    src={archiveImage}
                    alt="Collage curatorial del archivo"
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(237,236,226,0.92)] via-[rgba(237,236,226,0.4)] to-[rgba(144,96,54,0.3)]" />
                </div>
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.24em] text-foreground/55">
                    <span>Montaje virtual</span>
                    <span>Galeria futura</span>
                  </div>
                  <div className="grid gap-5 md:grid-cols-[1fr_0.65fr]">
                    <div className="space-y-5">
                      <p className="font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.92] tracking-[-0.05em]">
                        Un archivo que deja ver la textura del proceso.
                      </p>
                      <p className="reading-measure text-sm leading-7 text-foreground/72">
                        Espacio reservado para imagenes curatoriales o piezas
                        audiovisuales. Hoy funciona como campo de prueba para
                        equilibrio entre tipografia, vacio y atmosfera.
                      </p>
                    </div>
                    <div className="flex items-end justify-start">
                      <div className="pl-5 text-[0.72rem] uppercase tracking-[0.22em] text-foreground/55">
                        <p>cover art / still / sala / documento</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

<article className="bg-background-soft/80 p-6">
                <p className="font-display text-[1.9rem] leading-[1.05] tracking-[-0.04em]">
                  Notas de archivo
                </p>
                <p className="mt-4 text-sm leading-7 text-foreground/72">
                  Texto provisional para sumar contexto, creditos y metadatos
                  cuando conectemos la base real. La composicion ya sostiene
                  citas, timelines o enlaces a documentos descargables.
                </p>
                <p className="mt-5 text-[0.72rem] uppercase tracking-[0.22em] text-foreground/60">
                  Proxima capa: documentos PDF, audio guias y rutas internas.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="artistas"
        className="section-divider relative px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-[100rem] space-y-12">
          <SectionHeading
            eyebrow="Artistas"
            title="Perfiles pensados como entradas de una constelacion."
            body="Cada registro funciona como ficha editorial breve. Luego podran crecer hacia paginas individuales o integracion con el CMS."
          />

          <div className="space-y-8">
            {featuredArtists.map((artist, index) => (
              <article
                key={artist.name}
                className="grid gap-6 px-6 py-8 lg:grid-cols-[0.4fr_0.35fr_0.85fr]"
              >
                <div className="space-y-3">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-foreground/55">
                    {String(index + 1).padStart(2, "0")} · {artist.role}
                  </p>
                  <div>
                    <h3 className="font-display text-[2rem] leading-[1] tracking-[-0.04em]">
                      {artist.name}
                    </h3>
                    <p className="mt-2 text-[0.72rem] uppercase tracking-[0.2em] text-foreground/55">
                      {artist.years}
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[3/5] overflow-hidden bg-background-soft/60">
                  <Image
                    src={artistPortraits[index % artistPortraits.length]}
                    alt={`Material de proceso de ${artist.name}`}
                    fill
                    sizes="(min-width: 1024px) 220px, 60vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 text-sm leading-7 text-foreground/72">
                  <p>{artist.bio}</p>
                  <p className="uppercase tracking-[0.22em] text-foreground/55">
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
        className="section-divider relative px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-[100rem] space-y-12">
          <SectionHeading
            eyebrow="Eventos"
            title="Agenda futura y memoria de programas anteriores."
            body="La pagina separa automaticamente los eventos vigentes de los ya concluidos. El tono sigue siendo editorial: fechas como cintillos, sedes descritas con calma y estados breves."
          />

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="bg-background-soft/70 p-6">
              <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.22em] text-foreground/60">
                <span>Proximos</span>
                <span>{upcoming.length} activos</span>
              </div>
              <div className="mt-6 space-y-6">
                {upcoming.map((event) => (
                  <article
                    key={event.title}
                    className="space-y-4 rounded-sm bg-[rgba(255,255,255,0.65)] p-5"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-foreground/60">
                      <span className="rounded-full px-3 py-1">
                        {formatEventRange(event.startDate, event.endDate)}
                      </span>
                      <span>{event.format}</span>
                    </div>
                    <h4 className="font-display text-[1.65rem] leading-[1.02] tracking-[-0.04em]">
                      {event.title}
                    </h4>
                    <p className="text-sm leading-7 text-foreground/72">{event.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-[0.72rem] uppercase tracking-[0.2em] text-foreground/60">
                      <span>
                        {event.venue} · {event.city}, {event.country}
                      </span>
                      <span>{event.statusHint}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.22em] text-foreground/60">
                <span>Pasados</span>
                <span>{archive.length} archivados</span>
              </div>
              <div className="mt-6 space-y-6">
                {archive.map((event) => (
                  <article
                    key={event.title}
                    className="space-y-4 pl-5"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-foreground/50">
                      <span>{formatEventRange(event.startDate, event.endDate)}</span>
                      <span className="h-px w-6 bg-line" />
                      <span>{event.format}</span>
                    </div>
                    <h4 className="font-display text-[1.5rem] leading-[1.02] tracking-[-0.04em]">
                      {event.title}
                    </h4>
                    <p className="text-sm leading-7 text-foreground/68">{event.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-[0.7rem] uppercase tracking-[0.2em] text-foreground/55">
                      <span>
                        {event.venue} · {event.city}, {event.country}
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
        className="section-divider relative px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto grid max-w-[100rem] gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-foreground/60">
              Contacto y siguiente paso
            </p>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.9] tracking-[-0.05em]">
              La estructura esta lista
              <span className="block">para poblarse de contenido real.</span>
            </h2>
            <p className="reading-measure text-base leading-8 text-foreground/72">
              Esta version deja sentada la direccion visual calida y editorial.
              Lo que sigue: integrar material fotografico, fichas completas y
              rutas dedicadas para cada dominio del colectivo.
            </p>
          </div>

          <div className="grid gap-4">
            <article className="bg-background-soft/80 p-6">
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-foreground/60">
                Correo provisional
              </p>
              <p className="mt-4 text-xl text-foreground/85">
                hola@colectivoxperimental.art
              </p>
            </article>
            <article className="paper-fiber relative overflow-hidden bg-background-soft p-6">
              <div className="absolute inset-0">
                <Image
                  src={contactImage}
                  alt="Detalle de mesa de trabajo del colectivo"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(237,236,226,0.85)] to-[rgba(255,255,255,0.25)]" />
              </div>
              <div className="relative">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-foreground/60">
                  Proxima capa
                </p>
                <p className="mt-4 text-lg leading-7 text-foreground/80">
                  Integrar contenido real, secciones internas y una galeria visual
                  con registros seleccionados. La linea editorial ya sostiene el
                  crecimiento.
                </p>
              </div>
            </article>
          </div>
        </div>

        <footer className="mx-auto mt-16 max-w-[100rem] pt-5 text-[0.68rem] uppercase tracking-[0.24em] text-foreground/55">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>Colectivo Xperimental / archivo / artistas / eventos</p>
            <p>Version editorial serena · lista para iterar</p>
          </div>
        </footer>
      </section>
    </main>
  );
}
