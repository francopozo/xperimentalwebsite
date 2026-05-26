import { createClient, type QueryParams } from "next-sanity";
import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
  sanityReadToken,
} from "@/sanity/env";

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
  token: sanityReadToken,
  perspective: "published",
  stega: false,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
}) {
  return sanityClient.fetch<QueryResponse>(query, params, {
    next: revalidate === false ? undefined : { revalidate },
  });
}
