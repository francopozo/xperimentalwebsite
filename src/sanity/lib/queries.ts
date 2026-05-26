import { defineQuery } from "next-sanity";

const imageFields = /* groq */ `
  asset->{
    _id,
    url,
    metadata{
      lqip,
      dimensions{
        width,
        height
      }
    }
  },
  alt,
  hotspot,
  crop
`;

const socialLinkFields = /* groq */ `
  _key,
  platform,
  label,
  url
`;

const artistCardFields = /* groq */ `
  _id,
  name,
  role,
  shortBio,
  "slug": slug.current,
  portrait{
    ${imageFields}
  }
`;

const eventCardFields = /* groq */ `
  _id,
  title,
  excerpt,
  startDate,
  endDate,
  venue,
  city,
  country,
  format,
  statusHint,
  "slug": slug.current,
  coverImage{
    ${imageFields}
  }
`;

const videoCardFields = /* groq */ `
  _id,
  title,
  year,
  duration,
  medium,
  summary,
  technicalSheet,
  embedUrl,
  "slug": slug.current,
  coverImage{
    ${imageFields}
  },
  relatedArtists[]->{
    _id,
    name,
    "slug": slug.current
  },
  relatedEvents[]->{
    _id,
    title,
    "slug": slug.current
  }
`;

export const SITE_SETTINGS_QUERY = defineQuery(/* groq */ `
  *[_type == "siteSettings"][0]{
    _id,
    siteTitle,
    siteDescription,
    contactEmail,
    collaborationText,
    socialLinks[]{
      ${socialLinkFields}
    },
    featuredArtists[]->{
      ${artistCardFields}
    },
    featuredEvent->{
      ${eventCardFields}
    },
    featuredVideos[]->{
      ${videoCardFields}
    }
  }
`);

export const FEATURED_ARTISTS_QUERY = defineQuery(/* groq */ `
  *[_type == "artist" && defined(slug.current)]
    | order(coalesce(featuredOrder, 999) asc, name asc)[0...8]{
      ${artistCardFields}
    }
`);

export const EVENTS_QUERY = defineQuery(/* groq */ `
  *[_type == "event" && defined(slug.current)]
    | order(startDate asc, title asc){
      ${eventCardFields}
    }
`);

export const FEATURED_VIDEOS_QUERY = defineQuery(/* groq */ `
  *[_type == "videoWork" && defined(slug.current)]
    | order(year desc, title asc)[0...6]{
      ${videoCardFields}
    }
`);

export const ARTIST_SLUGS_QUERY = defineQuery(/* groq */ `
  *[_type == "artist" && defined(slug.current)]{
    "slug": slug.current
  }
`);

export const EVENT_SLUGS_QUERY = defineQuery(/* groq */ `
  *[_type == "event" && defined(slug.current)]{
    "slug": slug.current
  }
`);

export const VIDEO_WORK_SLUGS_QUERY = defineQuery(/* groq */ `
  *[_type == "videoWork" && defined(slug.current)]{
    "slug": slug.current
  }
`);

export const ARTIST_BY_SLUG_QUERY = defineQuery(/* groq */ `
  *[_type == "artist" && slug.current == $slug][0]{
    _id,
    name,
    role,
    shortBio,
    longBio,
    "slug": slug.current,
    portrait{
      ${imageFields}
    },
    links[]{
      ${socialLinkFields}
    }
  }
`);

export const EVENT_BY_SLUG_QUERY = defineQuery(/* groq */ `
  *[_type == "event" && slug.current == $slug][0]{
    ${eventCardFields},
    description,
    gallery[]{
      _key,
      ${imageFields}
    }
  }
`);

export const VIDEO_WORK_BY_SLUG_QUERY = defineQuery(/* groq */ `
  *[_type == "videoWork" && slug.current == $slug][0]{
    ${videoCardFields},
    relatedArtists[]->{
      _id,
      name,
      role,
      "slug": slug.current
    },
    relatedEvents[]->{
      _id,
      title,
      startDate,
      endDate,
      "slug": slug.current
    }
  }
`);
