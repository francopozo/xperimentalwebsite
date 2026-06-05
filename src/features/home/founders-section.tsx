import Image from "next/image";
import { TextReveal } from "@/components/gsap/text-reveal";
import { Marquee } from "@/components/gsap/marquee";
import { SanityImage } from "@/components/media/sanity-image";
import type { HomeArtist } from "@/lib/home-content";

const founderImages = [
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image10.jpg",
];

type FoundersSectionProps = {
  artists: HomeArtist[];
};

export function FoundersSection({ artists }: FoundersSectionProps) {
  return (
    <section
      id="artistas"
        className="relative px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-[90rem] space-y-10">
        <TextReveal>
          <h2 className="display-title">
            <span className="block">Artistas y lineas</span>
            <span className="block">de exploracion.</span>
          </h2>
        </TextReveal>

        <Marquee speed={32}>
          {artists.map((artist, index) => (
            <div
              key={artist.name}
              className="w-[15rem] shrink-0 space-y-4 sm:w-[18rem] mx-3"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-background-soft/60">
                {artist.portrait?.asset?.url ? (
                  <SanityImage
                    value={artist.portrait}
                    alt={artist.name}
                    sizes="(min-width: 1024px) 18rem, 15rem"
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src={founderImages[index % founderImages.length]}
                    alt={artist.name}
                    fill
                    sizes="(min-width: 1024px) 18rem, 15rem"
                    className="object-cover"
                  />
                )}
              </div>
              <div>
                <p className="font-display text-[1.15rem] leading-[1.05] tracking-[-0.03em]">
                  {artist.name}
                </p>
                {artist.shortBio ? (
                  <p className="mt-2 text-[0.98rem] leading-6 text-foreground/70">
                    {artist.shortBio}
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
