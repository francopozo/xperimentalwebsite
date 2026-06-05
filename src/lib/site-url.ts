const localhostSiteUrl = "http://localhost:3000";

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    return localhostSiteUrl;
  }

  return siteUrl.startsWith("http")
    ? siteUrl
    : `https://${siteUrl}`;
}
