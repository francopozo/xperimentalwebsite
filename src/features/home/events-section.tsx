import Image from "next/image";
import { TextReveal } from "@/components/gsap/text-reveal";
import { SanityImage } from "@/components/media/sanity-image";
import type { HomeEvent, HomeSiteSettings } from "@/lib/home-content";
import { formatEventRange } from "@/lib/site-content";

const eventsImage = "/images/image4.jpg";

type EventsSectionProps = {
  upcomingEvents: HomeEvent[];
  pastEvents: HomeEvent[];
  heroImage?: HomeSiteSettings["eventsHeroImage"];
};

export function EventsSection({
  upcomingEvents,
  pastEvents,
  heroImage,
}: EventsSectionProps) {
  const sectionTitle = "Cartografia de encuentros.";
  const leadEvent = upcomingEvents[0] ?? pastEvents[0];
  const visibleUpcoming = upcomingEvents.slice(0, 3);
  const remainingSlots = Math.max(0, 3 - visibleUpcoming.length);
  const visiblePast = pastEvents.slice(0, remainingSlots);
  const visibleEvents = [
    ...visibleUpcoming.map((event) => ({ ...event, timelineLabel: "Proximo" })),
    ...visiblePast.map((event) => ({ ...event, timelineLabel: "Pasado" })),
  ];

  function getEventLocation(event: HomeEvent) {
    const locationParts = [event.venue, event.city, event.country].filter(Boolean);

    if (locationParts.length === 0) {
      return null;
    }

    return locationParts.join(" · ");
  }

  return (
    <>
      <div className="relative h-[40vh] w-full overflow-hidden">
        {heroImage?.asset?.url ? (
          <SanityImage
            value={heroImage}
            alt="Imagen principal de la seccion Eventos"
            sizes="100vw"
            className="object-cover"
            priority
          />
        ) : leadEvent?.coverImage?.asset?.url ? (
          <SanityImage
            value={leadEvent.coverImage}
            alt={leadEvent.title}
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
          <TextReveal className="space-y-6">
            <h2 className="display-title">{sectionTitle}</h2>
          </TextReveal>

          <TextReveal className="space-y-8" stagger={0.15}>
            {visibleEvents.length > 0 ? (
              visibleEvents.map((event) => {
                const eventLocation = getEventLocation(event);

                return (
                  <article
                    key={`${event.timelineLabel}-${event.slug ?? event.title}`}
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
                        <span className="inline-flex border border-foreground/12 px-3 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-foreground/52">
                          {event.timelineLabel}
                        </span>
                        <span className="block text-sm uppercase tracking-[0.16em] text-foreground/50">
                          {formatEventRange(event.startDate, event.endDate)} · {event.format}
                        </span>
                        <h3 className="font-display text-[1.5rem] leading-[1.02] tracking-[-0.04em]">
                          {event.title}
                        </h3>
                        {eventLocation ? (
                          <div className="space-y-1 text-sm uppercase tracking-[0.16em] text-foreground/45">
                            <span className="block">{eventLocation}</span>
                          </div>
                        ) : null}
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
                );
              })
            ) : (
              <p className="max-w-2xl text-base leading-7 text-foreground/58">
                Aun no hay eventos publicados. Este widget mostrara una seleccion
                breve apenas el calendario editorial se active.
              </p>
            )}
          </TextReveal>

          <TextReveal>
            <div className="flex justify-center pt-4">
              <button
                type="button"
                className="inline-flex min-w-[13rem] items-center justify-center border border-foreground/14 px-7 py-4 text-sm uppercase tracking-[0.24em] text-foreground/72 transition-colors duration-300 hover:border-foreground/28 hover:bg-foreground/4"
              >
                Ver todo
              </button>
            </div>
          </TextReveal>
        </div>
      </section>
    </>
  );
}
