import { TextReveal } from "@/components/gsap/text-reveal";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-[90rem] space-y-10">
        <TextReveal>
          <h2 className="display-title">
            Escribir, conectar.
          </h2>
        </TextReveal>

        <TextReveal delay={0.15} stagger={0.12}>
          <span className="block editorial-body">
            x.perimental.colectivo@gmail.com
          </span>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.instagram.com/x.perimental.colectivo"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link inline-flex items-center gap-2 editorial-body"
            >
              Instagram <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093236080840"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link inline-flex items-center gap-2 editorial-body"
            >
              Facebook <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.youtube.com/@xperimental_c"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link inline-flex items-center gap-2 editorial-body"
            >
              YouTube <span aria-hidden="true">↗</span>
            </a>
          </div>
          <span className="block body-large mt-8">
            Abierto a colaboraciones, propuestas de exhibicion y todo proyecto
            que expanda el pensamiento del video arte desde Bolivia.
          </span>
        </TextReveal>
      </div>

      <footer className="mx-auto mt-20 max-w-[90rem] pt-6">
        <div className="flex flex-row justify-between">
          <span className="footer-meta">© 2026 Colectivo Xperimental · Bolivia</span>
          <span className="footer-meta">Desarrollado por francofx</span>
        </div>
      </footer>
    </section>
  );
}
