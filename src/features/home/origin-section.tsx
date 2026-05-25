import Image from "next/image";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";

const originImage = "/images/image4.jpg";

export function OriginSection() {
  return (
    <section
      id="origen"
        className="relative px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-[90rem] space-y-12">
        <ScrollReveal>
          <div className="space-y-2">
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.92] tracking-[-0.05em]">
              Del taller a la constelacion.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <ScrollReveal>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={originImage}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="space-y-8">
              <article className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-foreground/50">
                    KIOSKO Galeria · Santa Cruz, Bolivia
                  </p>
                  <h3 className="mt-3 font-display text-[2rem] leading-[1.02] tracking-[-0.04em]">
                    Otro modo de ver
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-foreground/50">
                    28 feb — 03 mar 2023
                  </p>
                </div>

                <p className="text-base leading-7 text-foreground/60">
                  Taller de Video Arte impartido por Ivan Caceres. Dirigido a
                  estudiantes y personas que inician su vinculacion con el arte:
                  informar y formar en videoarte desde perspectivas artisticas,
                  expositivas y de proyectos.
                </p>

                <div className="space-y-1.5">
                  <p className="text-sm uppercase tracking-[0.16em] text-foreground/45">
                    Sesiones
                  </p>
                  <div className="space-y-1.5 text-base leading-7 text-foreground/55">
                    <p><span className="text-foreground/75">Introductoria</span> — Video y arte contemporaneo.</p>
                    <p><span className="text-foreground/75">Video Creacion</span> — Imagen, movimiento, tiempo, sonido.</p>
                    <p><span className="text-foreground/75">Edicion Basica</span> — Manejo basico en edicion.</p>
                    <p><span className="text-foreground/75">Creativo Concepto</span> — Realizacion de obra y presentacion.</p>
                  </div>
                </div>
              </article>

              <article className="space-y-4 border-l-2 border-accent-warm/30 pl-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-foreground/50">
                    La iniciativa
                  </p>
                  <p className="mt-2 text-base leading-7 text-foreground/60">
                    El tiempo del video arte es hoy mas que nunca. Es donde cabe
                    implementar proyectos que esperaban ser encaminados.
                  </p>
                </div>
                <div>
                  <p className="font-display text-[1.3rem] leading-[1.1] tracking-[-0.03em]">
                    6 de junio de 2023
                  </p>
                  <p className="mt-2 text-base leading-7 text-foreground/55">
                    Dia del Video Arte Boliviano, anunciado en KIOSKO Galeria.
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-sm uppercase tracking-[0.16em] text-foreground/40">
                    Instructor
                  </p>
                  <p className="font-display text-[1.3rem] leading-[1.05] tracking-[-0.03em]">
                    Ivan Caceres
                  </p>
                </div>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
