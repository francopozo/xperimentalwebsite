import Image from "next/image";
import { TextReveal } from "@/components/gsap/text-reveal";
import { Marquee } from "@/components/gsap/marquee";
import { SanityImage } from "@/components/media/sanity-image";
import type { HomeProfile } from "@/lib/home-content";

const founderImages = [
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image10.jpg",
];

type FoundersSectionProps = {
  profiles: HomeProfile[];
};

export function FoundersSection({ profiles }: FoundersSectionProps) {
  return (
    <section
      id="artistas"
      className="relative px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-[90rem] space-y-10">
        <TextReveal>
          <h2 className="display-title">
            <span className="block">Artistas del</span>
            <span className="block">colectivo.</span>
          </h2>
        </TextReveal>

        <Marquee speed={32}>
          {profiles.map((profile, index) => (
            <div
              key={profile.slug ?? profile.name}
              className="w-[15rem] shrink-0 space-y-4 sm:w-[18rem] mx-3"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-background-soft/60">
                {profile.portrait?.asset?.url ? (
                  <SanityImage
                    value={profile.portrait}
                    alt={profile.name}
                    sizes="(min-width: 1024px) 18rem, 15rem"
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src={founderImages[index % founderImages.length]}
                    alt={profile.name}
                    fill
                    sizes="(min-width: 1024px) 18rem, 15rem"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.68rem] uppercase tracking-[0.18em] text-foreground/50">
                  {profile.profileLabels.map((label) => (
                    <div
                      key={`${profile.slug ?? profile.name}-${label}`}
                      className="inline-flex items-center"
                    >
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <p className="font-display text-[1.15rem] leading-[1.05] tracking-[-0.03em]">
                  {profile.name}
                </p>
                {profile.shortBio ? (
                  <p className="text-[0.98rem] leading-6 text-foreground/70">
                    {profile.shortBio}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
