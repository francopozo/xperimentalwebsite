const fallbackProjectId = "fipkcv8f";
const fallbackDataset = "production";
const fallbackApiVersion = "2026-05-25";

export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? fallbackProjectId;

export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? fallbackDataset;

export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? fallbackApiVersion;

export const sanityReadToken = process.env.SANITY_API_READ_TOKEN;
