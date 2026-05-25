import { ScrollReveal } from "@/components/gsap/scroll-reveal";

export function ContactSection() {
  return (
    <section
      id="contacto"
        className="relative px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-[90rem] space-y-10">
        <ScrollReveal>
          <div className="space-y-2">
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.92] tracking-[-0.05em]">
              Escribir, conectar.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-5">
              <p className="text-xl sm:text-2xl text-foreground/75">
                x.perimental.colectivo@gmail.com
              </p>
              <div className="flex flex-wrap gap-6 text-xl sm:text-2xl">
                <a
                  href="https://www.instagram.com/x.perimental.colectivo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link inline-flex items-center gap-2 text-foreground/75"
                >
                  Instagram <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100093236080840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link inline-flex items-center gap-2 text-foreground/75"
                >
                  Facebook <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <p className="text-base leading-7 text-foreground/50 self-end">
              Abierto a colaboraciones, propuestas de exhibicion y todo proyecto
              que expanda el pensamiento del video arte desde Bolivia.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <footer className="mx-auto mt-20 max-w-[90rem] pt-6 text-sm uppercase tracking-[0.18em] text-foreground/35">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <p>Colectivo Xperimental · video arte contemporaneo boliviano</p>
          <p>2023 — presente</p>
        </div>
      </footer>
    </section>
  );
}
