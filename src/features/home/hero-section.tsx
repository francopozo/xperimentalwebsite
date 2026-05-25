"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navigation } from "@/lib/site-content";

gsap.registerPlugin(useGSAP);

const heroImage = "/images/image1.jpg";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const scope = sectionRef.current;
      if (!scope) return;

      const navLinks = gsap.utils.toArray<HTMLElement>(
        scope.querySelectorAll(".hero-nav"),
      );
      const title = scope.querySelector(".hero-title");
      const subtitle = scope.querySelector(".hero-subtitle");
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

      if (title) {
        tl.from(title, {
          y: 48,
          opacity: 0,
          duration: 1.2,
        }, 0.15);
      }

      if (subtitle) {
        tl.from(subtitle, {
          y: 28,
          opacity: 0,
          duration: 1,
        }, 0.35);
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
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[90rem] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <header className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm uppercase tracking-[0.18em] text-foreground/55">
            {navigation.map((item) => (
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
            <h1 className="hero-title font-display text-[clamp(4.2rem,10vw,9rem)] leading-[0.84] tracking-[-0.06em]">
              X-PERIMENTAL
            </h1>
            <p className="hero-subtitle reading-measure text-lg leading-8 text-foreground/60">
              Colectivo de video arte contemporaneo boliviano. Primer colectivo
              boliviano de video arte. Plataforma para exhibir, guardar y
              activar procesos desde la imagen en movimiento, el sonido y la
              curaduria situada.
            </p>
          </div>

        </div>

        <div className="hero-image relative aspect-[3/4] overflow-hidden">
          <Image
            src={heroImage}
            alt="X-PERIMENTAL — Colectivo de video arte"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
