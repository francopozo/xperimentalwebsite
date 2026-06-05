import {
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
  role: string;
  shortBio?: string;
  slug?: string;
  portrait?: SanityImage;
};

export type HomeEvent = {
  title: string;
  excerpt: string;
  startDate: string;
  endDate: string;
  venue: string;
  city: string;
  country: string;
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
  relatedArtists: Pick<HomeArtist, "name" | "role" | "slug">[];
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
  events: HomeEvent[];
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
  role?: string;
  shortBio?: string;
  slug?: string;
  portrait?: SanityImage;
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
    role?: string;
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
  if (!artist.name || !artist.role) {
    return null;
  }

  return {
    name: artist.name,
    role: artist.role,
    shortBio: artist.shortBio,
    slug: artist.slug,
    portrait: artist.portrait,
  };
}

function normalizeEvent(event: SanityEvent): HomeEvent | null {
  if (
    !event.title ||
    !event.excerpt ||
    !event.startDate ||
    !event.endDate ||
    !event.venue ||
    !event.city ||
    !event.country ||
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
          (artist): artist is { name: string; role: string; slug?: string } =>
            Boolean(artist.name && artist.role),
        )
        .map((artist) => ({
          name: artist.name,
          role: artist.role,
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

  if (upcomingEvents.length > 0) {
    return {
      events: upcomingEvents,
      hasUpcomingEvents: true,
    };
  }

  return {
    events: archivedEvents,
    hasUpcomingEvents: false,
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

    const artists =
      featuredArtists.length > 0
        ? featuredArtists
        : sanityArtists
            .map(normalizeArtist)
            .filter((artist): artist is HomeArtist => artist !== null);

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
      featuredArtists: artists.length > 0 ? artists : fallbackArtists,
      eventsWidget,
      videos: videos.length > 0 ? videos : fallbackVideos.map(fallbackVideoSummary),
      siteSettings,
    };
  } catch (error) {
    console.error("Falling back to local content because Sanity fetch failed.", error);

    return {
      navigation,
      featuredArtists: fallbackArtists,
      eventsWidget: splitHomeEventsByTimeline(fallbackEvents),
      videos: fallbackVideos.map(fallbackVideoSummary),
      siteSettings: fallbackSiteSettings,
    };
  }
}
