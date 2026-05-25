import Image from "next/image";
import { TextReveal } from "@/components/gsap/text-reveal";

const originImage = "/images/image9.jpg";

export function OriginSection() {
  return (
    <section
      id="origen"
      className="relative px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-[90rem] space-y-12">
        <TextReveal>
          <h2 className="display-title">
            Del taller a la constelacion.
          </h2>
        </TextReveal>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={originImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <article className="space-y-4">
              <TextReveal>
                <span className="block text-sm uppercase tracking-[0.18em] text-foreground/50">
                  KIOSKO Galeria · Santa Cruz, Bolivia
                </span>
              </TextReveal>

              <TextReveal>
                <h3 className="font-display text-[2rem] leading-[1.02] tracking-[-0.04em]">
                  Otro modo de ver
                </h3>
              </TextReveal>

              <TextReveal>
                <span className="block text-sm uppercase tracking-[0.16em] text-foreground/50">
                  28 feb — 03 mar 2023
                </span>
              </TextReveal>

              <TextReveal>
                <span className="block body-large">
                  Taller de Video Arte impartido por Ivan Caceres.
                </span>
                <span className="block body-large">
                  Dirigido a estudiantes y personas que inician su vinculacion
                  con el arte: informar y formar en videoarte desde perspectivas
                  artisticas, expositivas y de proyectos.
                </span>
              </TextReveal>

              <TextReveal>
                <span className="block text-sm uppercase tracking-[0.16em] text-foreground/45">
                  Sesiones
                </span>
                <span className="block body-large">
                  <span className="text-75">Introductoria</span> — Video y arte contemporaneo.
                </span>
                <span className="block body-large">
                  <span className="text-75">Video Creacion</span> — Imagen, movimiento, tiempo, sonido.
                </span>
                <span className="block body-large">
                  <span className="text-75">Edicion Basica</span> — Manejo basico en edicion.
                </span>
                <span className="block body-large">
                  <span className="text-75">Creativo Concepto</span> — Realizacion de obra y presentacion.
                </span>
              </TextReveal>
            </article>

            <article className="space-y-4 border-l-2 border-accent-warm/30 pl-5">
              <TextReveal>
                <span className="block text-sm uppercase tracking-[0.18em] text-foreground/50">
                  La iniciativa
                </span>
                <span className="block body-large">
                  El tiempo del video arte es hoy mas que nunca. Es donde cabe
                  implementar proyectos que esperaban ser encaminados.
                </span>
              </TextReveal>

              <TextReveal>
                <span className="block font-display text-[1.3rem] leading-[1.1] tracking-[-0.03em]">
                  6 de junio de 2023
                </span>
                <span className="block body-large">
                  Dia del Video Arte Boliviano, anunciado en KIOSKO Galeria.
                </span>
              </TextReveal>

              <TextReveal>
                <span className="block text-sm uppercase tracking-[0.16em] text-foreground/40">
                  Instructor
                </span>
                <span className="block font-display text-[1.3rem] leading-[1.05] tracking-[-0.03em]">
                  Ivan Caceres
                </span>
              </TextReveal>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
