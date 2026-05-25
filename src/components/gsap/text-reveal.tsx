"use client";

import { Children, useRef } from "react";
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
  delay?: number;
  scrollTrigger?: boolean;
};

export function TextReveal({
  children,
  className,
  y = 40,
  duration = 0.9,
  stagger = 0.1,
  delay = 0,
  scrollTrigger = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const lines = gsap.utils.toArray(
        ref.current?.querySelectorAll(".text-reveal-line") ?? [],
      );

      const vars: gsap.TweenVars = {
        y,
        opacity: 0,
        duration,
        stagger,
        delay,
        ease: "power2.out",
      };

      if (scrollTrigger) {
        vars.scrollTrigger = {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        };
      }

      gsap.from(lines, vars);
    },
    { scope: ref, dependencies: [y, duration, stagger, delay, scrollTrigger] },
  );

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => (
        <div
          key={i}
          className="text-reveal-line"
          style={{ willChange: "transform, opacity" }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
