"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
};

export function ParallaxImage({ children, className, speed = 15 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(innerRef.current, {
        yPercent: speed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    },
    { scope: containerRef, dependencies: [speed] },
  );

  return (
    <div ref={containerRef} className={`overflow-hidden ${className ?? ""}`}>
      <div
        ref={innerRef}
        className="h-[125%] w-full relative"
        style={{ top: "-12.5%" }}
      >
        {children}
      </div>
    </div>
  );
}
