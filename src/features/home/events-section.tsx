import Image from "next/image";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";
import { StaggerReveal } from "@/components/gsap/stagger-reveal";
import { events, formatEventRange } from "@/lib/site-content";

const eventsImage = "/images/image10.jpg";

export function EventsSection() {
  return (
    <>
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src={eventsImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <section
        id="eventos"
        className="relative px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
      >
        <div className="mx-auto max-w-[90rem] space-y-12">
          <ScrollReveal>
            <div className="space-y-2">
              <h2 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.92] tracking-[-0.05em]">
                Memoria de lo que fue.
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal className="space-y-8">
            {events.map((event) => (
              <article
                key={event.title}
                className="grid gap-6 lg:grid-cols-[1fr_1.3fr]"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.16em] text-foreground/50">
                    <span>{formatEventRange(event.startDate, event.endDate)}</span>
                    <span className="h-px w-6 bg-line" />
                    <span>{event.format}</span>
                  </div>
                  <h3 className="font-display text-[1.5rem] leading-[1.02] tracking-[-0.04em]">
                    {event.title}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.16em] text-foreground/45">
                    {event.venue} · {event.city}, {event.country}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-base leading-7 text-foreground/55">{event.excerpt}</p>
                  <p className="text-sm uppercase tracking-[0.16em] text-foreground/40">
                    {event.statusHint}
                  </p>
                </div>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </>
  );
}
