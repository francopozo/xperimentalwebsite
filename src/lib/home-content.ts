import {
  activeCurator as fallbackCurator,
  events as fallbackEvents,
  featuredArchive as fallbackVideos,
  featuredArtists as fallbackArtists,
  navigation,
} from "@/lib/site-content";
import {
  FEATURED_ARTISTS_QUERY,
  EVENTS_QUERY,
  FEATURED_VIDEOS_QUERY,
  SITE_SETTINGS_QUERY,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";

export type HomeArtist = {
  name: string;
  artistType: "collectiveMember" | "artist";
  profileLabels: ["Artista Miembro del colectivo"] | ["Artista"];
  shortBio?: string;
  slug?: string;
  portrait?: SanityImage;
};

export type HomeCurator = {
  name: string;
  profileLabels: ["Curador", "Artista Miembro del colectivo"];
  shortBio?: string;
  longBio?: string;
  curatorNote?: string;
  slug?: string;
  portrait?: SanityImage;
  links?: SocialLink[];
};

export type HomeProfile = HomeArtist | HomeCurator;

export type HomeEvent = {
  title: string;
  excerpt: string;
  startDate: string;
  endDate: string;
  venue?: string;
  city?: string;
  country?: string;
  format: string;
  statusHint: string;
  slug?: string;
  coverImage?: SanityImage;
};

export type HomeVideo = {
  title: string;
  year: string;
  duration?: string;
  medium: string;
  technicalSheet?: string;
  embedUrl?: string;
  slug?: string;
  coverImage?: SanityImage;
  relatedArtists: Array<{
    name: string;
    slug?: string;
    artistType: "collectiveMember" | "artist";
    profileLabel: "Artista Miembro del colectivo" | "Artista";
  }>;
};

export type SocialLink = {
  _key: string;
  platform: string;
  label: string;
  url: string;
};

export type HomeSiteSettings = {
  siteTitle: string;
  siteDescription: string;
  contactEmail: string;
  collaborationText: string;
  socialLinks: SocialLink[];
  heroImage?: SanityImage;
  aboutLeadImage?: SanityImage;
  aboutMeaningImage?: SanityImage;
  originImage?: SanityImage;
  eventsHeroImage?: SanityImage;
};

export type HomeEventsWidget = {
  upcomingEvents: HomeEvent[];
  pastEvents: HomeEvent[];
  hasUpcomingEvents: boolean;
};

export type SanityImage = {
  alt?: string;
  asset?: {
    url?: string;
    metadata?: {
      lqip?: string;
      dimensions?: {
        width?: number;
        height?: number;
      };
    };
  };
  hotspot?: {
    x?: number;
    y?: number;
    height?: number;
    width?: number;
  };
  crop?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
};

type SanityArtist = {
  name?: string;
  artistType?: "collectiveMember" | "artist";
  shortBio?: string;
  slug?: string;
  portrait?: SanityImage;
};

type SanityCurator = {
  name?: string;
  shortBio?: string;
  longBio?: string;
  curatorNote?: string;
  slug?: string;
  portrait?: SanityImage;
  links?: SocialLink[];
};

type SanityEvent = {
  title?: string;
  excerpt?: string;
  startDate?: string;
  endDate?: string;
  venue?: string;
  city?: string;
  country?: string;
  format?: string;
  statusHint?: string;
  slug?: string;
  coverImage?: SanityImage;
};

type SanityVideo = {
  title?: string;
  year?: string;
  duration?: string;
  medium?: string;
  technicalSheet?: string;
  embedUrl?: string;
  slug?: string;
  coverImage?: SanityImage;
  relatedArtists?: Array<{
    name?: string;
    artistType?: "collectiveMember" | "artist";
    slug?: string;
  }>;
};

type SanitySettings = {
  siteTitle?: string;
  siteDescription?: string;
  contactEmail?: string;
  collaborationText?: string;
  socialLinks?: SocialLink[];
  heroImage?: SanityImage;
  aboutLeadImage?: SanityImage;
  aboutMeaningImage?: SanityImage;
  originImage?: SanityImage;
  eventsHeroImage?: SanityImage;
  featuredArtists?: SanityArtist[];
  activeCurator?: SanityCurator;
  featuredVideos?: SanityVideo[];
};

export const fallbackSiteSettings: HomeSiteSettings = {
  siteTitle: "Colectivo Xperimental",
  siteDescription:
    "Archivo digital y plataforma editorial para un colectivo de arte contemporaneo, experimental y situado.",
  contactEmail: "x.perimental.colectivo@gmail.com",
  collaborationText:
    "Abierto a colaboraciones, propuestas de exhibicion y todo proyecto que expanda el pensamiento del video arte desde Bolivia.",
  socialLinks: [
    {
      _key: "instagram",
      platform: "Instagram",
      label: "Instagram",
      url: "https://www.instagram.com/x.perimental.colectivo",
    },
    {
      _key: "facebook",
      platform: "Facebook",
      label: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100093236080840",
    },
    {
      _key: "youtube",
      platform: "YouTube",
      label: "YouTube",
      url: "https://www.youtube.com/@xperimental_c",
    },
  ],
  heroImage: undefined,
  aboutLeadImage: undefined,
  aboutMeaningImage: undefined,
  originImage: undefined,
  eventsHeroImage: undefined,
};

function normalizeArtist(artist: SanityArtist): HomeArtist | null {
  if (!artist.name || !artist.artistType) {
    return null;
  }

  return {
    name: artist.name,
    artistType: artist.artistType,
    profileLabels:
      artist.artistType === "collectiveMember"
        ? ["Artista Miembro del colectivo"]
        : ["Artista"],
    shortBio: artist.shortBio,
    slug: artist.slug,
    portrait: artist.portrait,
  };
}

function normalizeCurator(curator: SanityCurator): HomeCurator | null {
  if (!curator.name) {
    return null;
  }

  return {
    name: curator.name,
    profileLabels: ["Curador", "Artista Miembro del colectivo"],
    shortBio: curator.shortBio,
    longBio: curator.longBio,
    curatorNote: curator.curatorNote,
    slug: curator.slug,
    portrait: curator.portrait,
    links: curator.links,
  };
}

function normalizeEvent(event: SanityEvent): HomeEvent | null {
  if (
    !event.title ||
    !event.excerpt ||
    !event.startDate ||
    !event.endDate ||
    !event.format
  ) {
    return null;
  }

  return {
    title: event.title,
    excerpt: event.excerpt,
    startDate: event.startDate,
    endDate: event.endDate,
    venue: event.venue,
    city: event.city,
    country: event.country,
    format: event.format,
    statusHint: event.statusHint ?? "",
    slug: event.slug,
    coverImage: event.coverImage,
  };
}

function normalizeVideo(video: SanityVideo): HomeVideo | null {
  if (!video.title || !video.year || !video.medium) {
    return null;
  }

  return {
    title: video.title,
    year: video.year,
    duration: video.duration,
    medium: video.medium,
    technicalSheet: video.technicalSheet,
    embedUrl: video.embedUrl,
    slug: video.slug,
    coverImage: video.coverImage,
    relatedArtists:
      video.relatedArtists
        ?.filter(
          (
            artist,
          ): artist is {
            name: string;
            artistType: "collectiveMember" | "artist";
            slug?: string;
          } => Boolean(artist.name && artist.artistType),
        )
        .map((artist) => ({
          name: artist.name,
          artistType: artist.artistType,
          profileLabel:
            artist.artistType === "collectiveMember"
              ? "Artista Miembro del colectivo"
              : "Artista",
          slug: artist.slug,
        })) ?? [],
  };
}

function fallbackVideoSummary(video: (typeof fallbackVideos)[number]): HomeVideo {
  return {
    title: video.title,
    year: video.year,
    duration: video.dimensions,
    medium: video.format,
    technicalSheet: video.note,
    relatedArtists: [],
  };
}

function mergeVideos(featuredVideos: HomeVideo[], allVideos: HomeVideo[]) {
  const seen = new Set<string>();
  const merged: HomeVideo[] = [];

  for (const video of [...featuredVideos, ...allVideos]) {
    const key = video.slug ?? video.title;

    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    merged.push(video);
  }

  return merged;
}

function resolveEventReferenceDate(event: Pick<HomeEvent, "startDate" | "endDate">) {
  const referenceDate = event.endDate || event.startDate;

  if (!referenceDate) {
    return null;
  }

  return new Date(`${referenceDate}T23:59:59`);
}

function splitHomeEventsByTimeline(
  events: HomeEvent[],
  referenceDate = new Date(),
): HomeEventsWidget {
  const upcomingEvents: HomeEvent[] = [];
  const archivedEvents: HomeEvent[] = [];
  const reference = referenceDate.getTime();

  for (const event of events) {
    const resolvedDate = resolveEventReferenceDate(event);

    if (resolvedDate && resolvedDate.getTime() >= reference) {
      upcomingEvents.push(event);
      continue;
    }

    archivedEvents.push(event);
  }

  archivedEvents.sort((left, right) => right.startDate.localeCompare(left.startDate));
  return {
    upcomingEvents,
    pastEvents: archivedEvents,
    hasUpcomingEvents: upcomingEvents.length > 0,
  };
}

export async function getHomeContent() {
  try {
    const [settings, sanityArtists, sanityEvents, sanityVideos] = await Promise.all([
      sanityFetch<SanitySettings | null>({
        query: SITE_SETTINGS_QUERY,
      }),
      sanityFetch<SanityArtist[]>({
        query: FEATURED_ARTISTS_QUERY,
      }),
      sanityFetch<SanityEvent[]>({
        query: EVENTS_QUERY,
      }),
      sanityFetch<SanityVideo[]>({
        query: FEATURED_VIDEOS_QUERY,
      }),
    ]);

    const featuredArtists =
      settings?.featuredArtists
        ?.map(normalizeArtist)
        .filter((artist): artist is HomeArtist => artist !== null) ?? [];

    const collectiveArtists = featuredArtists.filter(
      (artist) => artist.artistType === "collectiveMember",
    );

    const activeCurator = settings?.activeCurator
      ? normalizeCurator(settings.activeCurator)
      : null;

    const artists =
      collectiveArtists.length > 0
        ? collectiveArtists
        : sanityArtists
            .map(normalizeArtist)
            .filter(
              (artist): artist is HomeArtist =>
                artist !== null && artist.artistType === "collectiveMember",
            );

    const events = sanityEvents
      .map(normalizeEvent)
      .filter((event): event is HomeEvent => event !== null);
    const eventsWidget = splitHomeEventsByTimeline(
      events.length > 0 ? events : fallbackEvents,
    );

    const featuredVideos =
      settings?.featuredVideos
        ?.map(normalizeVideo)
        .filter((video): video is HomeVideo => video !== null) ?? [];

    const allVideos = sanityVideos
      .map(normalizeVideo)
      .filter((video): video is HomeVideo => video !== null);

    const videos = mergeVideos(featuredVideos, allVideos);

    const siteSettings: HomeSiteSettings = {
      siteTitle: settings?.siteTitle ?? fallbackSiteSettings.siteTitle,
      siteDescription:
        settings?.siteDescription ?? fallbackSiteSettings.siteDescription,
      contactEmail: settings?.contactEmail ?? fallbackSiteSettings.contactEmail,
      collaborationText:
        settings?.collaborationText ?? fallbackSiteSettings.collaborationText,
      socialLinks:
        settings?.socialLinks?.length
          ? settings.socialLinks
          : fallbackSiteSettings.socialLinks,
      heroImage: settings?.heroImage ?? fallbackSiteSettings.heroImage,
      aboutLeadImage:
        settings?.aboutLeadImage ?? fallbackSiteSettings.aboutLeadImage,
      aboutMeaningImage:
        settings?.aboutMeaningImage ?? fallbackSiteSettings.aboutMeaningImage,
      originImage: settings?.originImage ?? fallbackSiteSettings.originImage,
      eventsHeroImage:
        settings?.eventsHeroImage ?? fallbackSiteSettings.eventsHeroImage,
    };

    return {
      navigation,
      featuredProfiles:
        activeCurator || artists.length > 0
          ? [activeCurator, ...(artists.length > 0 ? artists : fallbackArtists)].filter(
              (profile): profile is HomeProfile => profile !== null,
            )
          : [normalizeCurator(fallbackCurator), ...fallbackArtists]
              .filter((profile): profile is HomeProfile => profile !== null),
      eventsWidget,
      videos: videos.length > 0 ? videos : fallbackVideos.map(fallbackVideoSummary),
      siteSettings,
    };
  } catch (error) {
    console.error("Falling back to local content because Sanity fetch failed.", error);

    return {
      navigation,
      featuredProfiles: [normalizeCurator(fallbackCurator), ...fallbackArtists].filter(
        (profile): profile is HomeProfile => profile !== null,
      ),
      eventsWidget: splitHomeEventsByTimeline(fallbackEvents),
      videos: fallbackVideos.map(fallbackVideoSummary),
      siteSettings: fallbackSiteSettings,
    };
  }
}
