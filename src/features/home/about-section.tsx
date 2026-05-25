import Image from "next/image";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";

const aboutImage = "/images/image2.jpg";
const meaningImage = "/images/image3.jpg";

export function AboutSection() {
  return (
    <>
      <div className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src={aboutImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <section
        id="sobre"
        className="relative px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
      >
        <div className="mx-auto max-w-[90rem] space-y-20">
          <ScrollReveal>
            <p className="reading-measure text-lg leading-8 text-foreground/60">
              A partir del taller de video arte en KIOSKO Galeria nace
              x-perimental — el primer colectivo boliviano de video arte.
              Construir pensamiento hoy es dar continuidad a las bases que Narda
              Alvarado sento en 2010.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] items-center">
              <div className="space-y-4">
                <p className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] tracking-[-0.04em]">
                  (X) Lo desconocido
                </p>
                <p className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] tracking-[-0.04em]">
                  (Perimental) Borde mental
                </p>
                <p className="font-display text-[clamp(1.4rem,2.5vw,2.2rem)] leading-[1.05] tracking-[-0.03em] text-foreground/70">
                  Lo desconocido del borde mental
                </p>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={meaningImage}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:max-w-[70%]">
            <ScrollReveal>
              <div className="space-y-5 text-lg leading-8 text-foreground/60">
                <p>
                  Como un estado mental puro en su seno no existe ni gravitacion
                  ni tiempo pero tampoco objeto alguno. Antes de cualquier
                  distorsion, la mente maquina ingresa en diversos niveles de
                  conciencia y ocurre una minuscula explosion generando un espacio
                  y tiempo y, por lo tanto, una estructura.
                </p>
                <p>
                  Esta particula elemental de la explosion es una distorsion, es
                  informacion — la idea primigenia. Mientras mas dispersion, mas
                  variables de capacidad visual e infinita maleabilidad.
                </p>
                <p>
                  X-perimental recorre estos caminos de la mente introduciendonos
                  en el borde mental de las cosas mediante el video arte.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
