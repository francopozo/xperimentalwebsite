import Image from "next/image";
import type { HomeArtist, HomeEvent, HomeVideo, SanityImage } from "@/lib/home-content";
import { urlFor } from "@/sanity/lib/image";

type ImageValue =
  | SanityImage
  | HomeArtist["portrait"]
  | HomeEvent["coverImage"]
  | HomeVideo["coverImage"];

type SanityImageProps = {
  value?: ImageValue;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function SanityImage({
  value,
  alt,
  sizes,
  className,
  priority = false,
}: SanityImageProps) {
  if (!value?.asset?.url) {
    return null;
  }

  const width = value.asset.metadata?.dimensions?.width ?? 1200;
  const blurDataURL = value.asset.metadata?.lqip;

  return (
    <Image
      src={urlFor(value).width(width).fit("max").auto("format").url()}
      alt={value.alt ?? alt}
      fill
      sizes={sizes}
      className={className}
      priority={priority}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
    />
  );
}
