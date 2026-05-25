import Image from "next/image";
import { TextReveal } from "@/components/gsap/text-reveal";
import { events, formatEventRange } from "@/lib/site-content";

const eventsImage = "/images/image4.jpg";

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
          <TextReveal>
          <h2 className="display-title">
            Memoria de lo que fue.
          </h2>
          </TextReveal>

          <TextReveal className="space-y-8" stagger={0.15}>
            {events.map((event) => (
              <article
                key={event.title}
                className="grid gap-6 lg:grid-cols-[1fr_1.3fr]"
              >
                <div className="space-y-2">
                  <span className="block text-sm uppercase tracking-[0.16em] text-foreground/50">
                    {formatEventRange(event.startDate, event.endDate)} —{" "}
                    {event.format}
                  </span>
                  <h3 className="font-display text-[1.5rem] leading-[1.02] tracking-[-0.04em]">
                    {event.title}
                  </h3>
                  <span className="block text-sm uppercase tracking-[0.16em] text-foreground/45">
                    {event.venue} · {event.city}, {event.country}
                  </span>
                </div>
                <div className="space-y-2">
                  <span className="block body-large">
                    {event.excerpt}
                  </span>
                  <span className="block text-sm uppercase tracking-[0.16em] text-foreground/40">
                    {event.statusHint}
                  </span>
                </div>
              </article>
            ))}
          </TextReveal>
        </div>
      </section>
    </>
  );
}
