import { artistType } from "./documents/artist";
import { curatorType } from "./documents/curator";
import { eventType } from "./documents/event";
import { siteSettingsType } from "./documents/site-settings";
import { videoWorkType } from "./documents/video-work";
import { imageWithAltType } from "./objects/image-with-alt";
import { socialLinkType } from "./objects/social-link";

export const schemaTypes = [
  artistType,
  curatorType,
  eventType,
  videoWorkType,
  siteSettingsType,
  socialLinkType,
  imageWithAltType,
];
