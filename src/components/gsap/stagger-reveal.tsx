"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  stagger?: number;
};

export function StaggerReveal({
  children,
  className,
  y = 32,
  duration = 1,
  stagger = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(
        ref.current?.children ?? [],
      );

      gsap.from(items, {
        y,
        opacity: 0,
        duration,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [y, duration, stagger] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
