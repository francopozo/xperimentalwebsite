import Image from "next/image";
import { TextReveal } from "@/components/gsap/text-reveal";
import { SanityImage } from "@/components/media/sanity-image";
import type { HomeVideo } from "@/lib/home-content";

const fallbackVideoImage = "/images/image4.jpg";

type VideoArtSectionProps = {
  videos: HomeVideo[];
};

function getVideoPlatformLabel(url?: string) {
  if (!url) {
    return "Ver pieza";
  }

  if (url.includes("youtu")) {
    return "Ver en YouTube";
  }

  if (url.includes("vimeo")) {
    return "Ver en Vimeo";
  }

  return "Ver pieza";
}

export function VideoArtSection({ videos }: VideoArtSectionProps) {
  if (videos.length === 0) {
    return null;
  }

  return (
    <section
      id="videoarte"
      className="relative px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
    >
      <div className="mx-auto max-w-[90rem] space-y-12">
        <TextReveal>
          <h2 className="display-title">Videoarte en circulacion.</h2>
          <p className="mt-4 max-w-[44rem] body-large">
            Fichas abiertas de obras en movimiento: registros, derivas y piezas
            que amplian el archivo vivo del colectivo.
          </p>
        </TextReveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, index) => (
            <article
              key={video.slug ?? video.title}
              className="grid gap-4 border border-foreground/10 bg-background/70 p-4 transition-colors duration-300 hover:border-accent/35 sm:p-5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-background-soft/70">
                {video.coverImage?.asset?.url ? (
                  <SanityImage
                    value={video.coverImage}
                    alt={video.title}
                    sizes="(min-width: 1280px) 28vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover"
                    priority={index < 2}
                  />
                ) : (
                  <Image
                    src={fallbackVideoImage}
                    alt={video.title}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <span className="block text-sm uppercase tracking-[0.16em] text-foreground/45">
                    {video.year}
                    {video.duration ? ` · ${video.duration}` : ""}
                    {video.medium ? ` · ${video.medium}` : ""}
                  </span>
                  <h3 className="font-display text-[1.55rem] leading-[0.98] tracking-[-0.05em]">
                    {video.title}
                  </h3>
                  {video.relatedArtists.length > 0 ? (
                    <span className="block text-sm uppercase tracking-[0.16em] text-foreground/45">
                      {video.relatedArtists.map((artist) => artist.name).join(" · ")}
                    </span>
                  ) : null}
                </div>

                <div className="space-y-3">
                  <p className="text-[1.03rem] leading-7 text-foreground/84">
                    {video.summary}
                  </p>
                  {video.technicalSheet ? (
                    <p className="text-[0.96rem] leading-6 text-foreground/68">
                      {video.technicalSheet}
                    </p>
                  ) : null}
                  {video.embedUrl ? (
                    <a
                      href={video.embedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 nav-link pt-2 text-sm uppercase tracking-[0.16em]"
                    >
                      {getVideoPlatformLabel(video.embedUrl)}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
