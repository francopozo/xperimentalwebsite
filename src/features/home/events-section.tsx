import Image from "next/image";
import { TextReveal } from "@/components/gsap/text-reveal";
import { SanityImage } from "@/components/media/sanity-image";
import type { HomeEvent } from "@/lib/home-content";
import { formatEventRange } from "@/lib/site-content";

const eventsImage = "/images/image4.jpg";

type EventsSectionProps = {
  events: HomeEvent[];
};

export function EventsSection({ events }: EventsSectionProps) {
  return (
    <>
      <div className="relative h-[40vh] w-full overflow-hidden">
        {events[0]?.coverImage?.asset?.url ? (
          <SanityImage
            value={events[0].coverImage}
            alt={events[0].title}
            sizes="100vw"
            className="object-cover"
            priority
          />
        ) : (
          <Image
            src={eventsImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
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
                key={event.slug ?? event.title}
                className="grid gap-5 border-t border-foreground/10 pt-6 md:grid-cols-[13rem_1fr] lg:grid-cols-[15rem_1fr]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-background-soft/70">
                  {event.coverImage?.asset?.url ? (
                    <SanityImage
                      value={event.coverImage}
                      alt={event.title}
                      sizes="(min-width: 1024px) 15rem, (min-width: 768px) 13rem, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <Image
                      src={eventsImage}
                      alt={event.title}
                      fill
                      sizes="(min-width: 1024px) 15rem, (min-width: 768px) 13rem, 100vw"
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                </div>

                <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
                  <div className="space-y-3">
                    <span className="block text-sm uppercase tracking-[0.16em] text-foreground/50">
                      {formatEventRange(event.startDate, event.endDate)} · {event.format}
                    </span>
                    <h3 className="font-display text-[1.5rem] leading-[1.02] tracking-[-0.04em]">
                      {event.title}
                    </h3>
                    <div className="space-y-1 text-sm uppercase tracking-[0.16em] text-foreground/45">
                      <span className="block">{event.venue}</span>
                      <span className="block">
                        {event.city}, {event.country}
                      </span>
                    </div>
                    {event.statusHint ? (
                      <span className="inline-flex border border-foreground/12 px-3 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-foreground/52">
                        {event.statusHint}
                      </span>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <p className="body-large">{event.excerpt}</p>
                  </div>
                </div>
              </article>
            ))}
          </TextReveal>
        </div>
      </section>
    </>
  );
}
