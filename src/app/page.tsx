import { HeroSection } from "@/features/home/hero-section";
import { AboutSection } from "@/features/home/about-section";
import { OriginSection } from "@/features/home/origin-section";
import { FoundersSection } from "@/features/home/founders-section";
import { EventsSection } from "@/features/home/events-section";
import { ContactSection } from "@/features/home/contact-section";
import { VideoArtSection } from "@/features/home/video-art-section";
import { getHomeContent } from "@/lib/home-content";

export const revalidate = 60;

export default async function Home() {
  const homeContent = await getHomeContent();

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <HeroSection
        navigationItems={homeContent.navigation}
        siteTitle={homeContent.siteSettings.siteTitle}
        siteDescription={homeContent.siteSettings.siteDescription}
        heroImage={homeContent.siteSettings.heroImage}
      />
      <AboutSection
        aboutLeadImage={homeContent.siteSettings.aboutLeadImage}
        aboutMeaningImage={homeContent.siteSettings.aboutMeaningImage}
      />
      <OriginSection originImageAsset={homeContent.siteSettings.originImage} />
      <FoundersSection profiles={homeContent.featuredProfiles} />
      <VideoArtSection videos={homeContent.videos} />
      <EventsSection
        upcomingEvents={homeContent.eventsWidget.upcomingEvents}
        pastEvents={homeContent.eventsWidget.pastEvents}
        heroImage={homeContent.siteSettings.eventsHeroImage}
      />
      <ContactSection siteSettings={homeContent.siteSettings} />
    </main>
  );
}
