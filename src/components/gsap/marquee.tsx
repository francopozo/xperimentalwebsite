"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Props = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
};

export function Marquee({ children, className, speed = 20 }: Props) {
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(innerRef.current, {
        xPercent: -50,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: innerRef, dependencies: [speed] },
  );

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div ref={innerRef} className="flex w-max">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
