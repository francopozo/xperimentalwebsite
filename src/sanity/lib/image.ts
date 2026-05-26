import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityDataset, sanityProjectId } from "@/sanity/env";

const imageBuilder = createImageUrlBuilder({
  projectId: sanityProjectId,
  dataset: sanityDataset,
});

export function urlFor(source: unknown) {
  return imageBuilder.image(
    source as Parameters<typeof imageBuilder.image>[0],
  );
}
