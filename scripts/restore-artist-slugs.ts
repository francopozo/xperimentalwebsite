import { getCliClient } from "sanity/cli";

type ArtistDoc = {
  _id: string;
  name?: string;
  artistType?: "collectiveMember" | "artist" | null;
  slug?: string;
};

const client = getCliClient({ apiVersion: "2025-08-15" });

const slugByName: Record<string, string> = {
  "María José Menacho": "watoka",
  "Luciana Dalman": "luciana-dalman",
  "Brenda Bazan": "yinimotion",
  "Franco Pozo": "francofx",
  "Pedro Octavio Pereira": "pedro-octavio",
};

async function main() {
  const artists = await client.fetch<ArtistDoc[]>(
    `*[_type == "artist" && defined(artistType)]{
      _id,
      name,
      artistType,
      "slug": slug.current
    }`,
  );

  const transaction = client.transaction();
  let updates = 0;

  for (const artist of artists) {
    if (!artist.name) {
      continue;
    }

    const targetSlug = slugByName[artist.name];

    if (!targetSlug || artist.slug === targetSlug) {
      continue;
    }

    transaction.patch(artist._id, (patch) =>
      patch.set({
        slug: {
          _type: "slug",
          current: targetSlug,
        },
      }),
    );
    updates += 1;
  }

  if (updates === 0) {
    console.log("No artist slugs needed restoration.");
    return;
  }

  await transaction.commit();
  console.log(`Restored ${updates} artist slugs.`);
}

main().catch((error) => {
  console.error("Failed to restore artist slugs.", error);
  process.exit(1);
});
