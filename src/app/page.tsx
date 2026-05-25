import { HeroSection } from "@/features/home/hero-section";
import { AboutSection } from "@/features/home/about-section";
import { OriginSection } from "@/features/home/origin-section";
import { FoundersSection } from "@/features/home/founders-section";
import { EventsSection } from "@/features/home/events-section";
import { ContactSection } from "@/features/home/contact-section";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <OriginSection />
      <FoundersSection />
      <EventsSection />
      <ContactSection />
    </main>
  );
}
