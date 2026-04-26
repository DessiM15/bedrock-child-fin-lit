"use client";

import { useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

export function useParallax(distance: number = 100) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, distance]);

  return { ref, y };
}

export function useHeroParallax(): {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return { ref, y, opacity };
}
