import { TextReveal } from "@/components/gsap/text-reveal";
import type { HomeSiteSettings } from "@/lib/home-content";

type ContactSectionProps = {
  siteSettings: HomeSiteSettings;
};

export function ContactSection({ siteSettings }: ContactSectionProps) {
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
            {siteSettings.contactEmail}
          </span>
          <div className="flex flex-wrap gap-6">
            {siteSettings.socialLinks.map((link) => (
              <a
                key={link._key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link inline-flex items-center gap-2 editorial-body"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <span className="block body-large mt-8">
            {siteSettings.collaborationText}
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
