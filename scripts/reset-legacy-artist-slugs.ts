import { getCliClient } from "sanity/cli";

type LegacyArtist = {
  _id: string;
  name?: string;
  slug?: string;
};

const client = getCliClient({ apiVersion: "2025-08-15" });

async function main() {
  const legacyArtists = await client.fetch<LegacyArtist[]>(
    `*[_type == "artist" && !defined(artistType) && defined(slug.current)]{
      _id,
      name,
      "slug": slug.current
    }`,
  );

  if (legacyArtists.length === 0) {
    console.log("No legacy artist slugs found.");
    return;
  }

  console.log(
    `Resetting ${legacyArtists.length} legacy artist slugs: ${legacyArtists
      .map((artist) => `${artist.name ?? artist._id} (${artist.slug ?? "no-slug"})`)
      .join(", ")}`,
  );

  const transaction = client.transaction();

  for (const artist of legacyArtists) {
    transaction.patch(artist._id, (patch) => patch.unset(["slug"]));
  }

  await transaction.commit();
  console.log("Legacy artist slugs reset successfully.");
}

main().catch((error) => {
  console.error("Failed to reset legacy artist slugs.", error);
  process.exit(1);
});
