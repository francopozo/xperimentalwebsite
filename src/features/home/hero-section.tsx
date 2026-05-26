"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextReveal } from "@/components/gsap/text-reveal";
import type { NavItem } from "@/lib/site-content";

gsap.registerPlugin(useGSAP);

const heroImage = "/images/image1.jpg";

type HeroSectionProps = {
  navigationItems: NavItem[];
  siteTitle: string;
  siteDescription: string;
};

export function HeroSection({
  navigationItems,
  siteTitle,
  siteDescription,
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const scope = sectionRef.current;
      if (!scope) return;

      const navLinks = gsap.utils.toArray<HTMLElement>(
        scope.querySelectorAll(".hero-nav"),
      );
      const image = scope.querySelector(".hero-image");

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      if (navLinks.length) {
        tl.from(navLinks, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
        }, 0);
      }

      if (image) {
        tl.from(image, {
          y: 36,
          opacity: 0,
          duration: 1.1,
        }, 0.4);
      }
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen px-6 py-20 sm:px-10 lg:px-20"
    >
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-[90rem] items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-8 lg:pr-8">
          <header className="nav-text flex flex-wrap items-center gap-x-6 gap-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                className="nav-link hero-nav"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </header>

          <div className="space-y-5">
            <TextReveal scrollTrigger={false} stagger={0.05} y={56} duration={1.2}>
              <h1 className="display-hero">
                {siteTitle}
              </h1>
            </TextReveal>

            <TextReveal scrollTrigger={false} stagger={0.08} duration={0.9} delay={0.3}>
              <span className="block editorial-body">
                {siteDescription}
              </span>
            </TextReveal>
          </div>
        </div>

        <div className="hero-image relative aspect-[3/4] overflow-hidden lg:ml-4">
          <Image
            src={heroImage}
            alt="X-PERIMENTAL — Colectivo de video arte"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
