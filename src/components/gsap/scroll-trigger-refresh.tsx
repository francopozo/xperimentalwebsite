"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollTriggerRefresh() {
  useEffect(() => {
    ScrollTrigger.refresh();

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return null;
}
