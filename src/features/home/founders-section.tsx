import Image from "next/image";
import { ScrollReveal } from "@/components/gsap/scroll-reveal";
import { Marquee } from "@/components/gsap/marquee";
import { featuredArtists } from "@/lib/site-content";

const founderImages = [
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
];

export function FoundersSection() {
  return (
    <section
      id="artistas"
        className="relative px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-[90rem] space-y-10">
        <ScrollReveal>
          <div className="space-y-2">
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.92] tracking-[-0.05em]">
              Artistas y lineas
              <span className="block">de exploracion.</span>
            </h2>
          </div>
        </ScrollReveal>

        <Marquee speed={22}>
          {featuredArtists.map((artist, index) => (
            <div
              key={artist.name}
              className="w-[15rem] shrink-0 space-y-4 sm:w-[18rem] mx-3"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-background-soft/60">
                <Image
                  src={founderImages[index % founderImages.length]}
                  alt={artist.name}
                  fill
                  sizes="(min-width: 1024px) 18rem, 15rem"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-[1.15rem] leading-[1.05] tracking-[-0.03em]">
                  {artist.name}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
