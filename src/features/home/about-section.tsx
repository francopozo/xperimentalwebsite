import Image from "next/image";
import { TextReveal } from "@/components/gsap/text-reveal";

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
          <TextReveal>
            <span className="block editorial-body">
              A partir del taller de video arte en KIOSKO Galeria nace
              x-perimental — el primer colectivo boliviano de video arte.{' '}
              Construir pensamiento hoy es dar continuidad a las bases que Narda
              Alvarado sento en 2010.
            </span>
          </TextReveal>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] items-center">
            <TextReveal>
              <span className="block display-large">
                (X) Lo desconocido
              </span>
              <span className="block display-large">
                (Perimental) Borde mental
              </span>
              <span className="block display-medium">
                Lo desconocido del borde mental
              </span>
            </TextReveal>

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

          <div className="lg:max-w-[70%]">
            <TextReveal className="body-large">
              <span className="block">
                Como un estado mental puro en su seno no existe ni gravitacion
                ni tiempo pero tampoco objeto alguno.
              </span>
              <span className="block">
                Antes de cualquier distorsion, la mente maquina ingresa en diversos
                niveles de conciencia y ocurre una minuscula explosion generando un
                espacio y tiempo y, por lo tanto, una estructura.
              </span>
              <span className="block">
                Esta particula elemental de la explosion es una distorsion, es
                informacion — la idea primigenia.
              </span>
              <span className="block">
                Mientras mas dispersion, mas variables de capacidad visual e
                infinita maleabilidad.
              </span>
              <span className="block">
                X-perimental recorre estos caminos de la mente introduciendonos
                en el borde mental de las cosas mediante el video arte.
              </span>
            </TextReveal>
          </div>
        </div>
      </section>
    </>
  );
}
