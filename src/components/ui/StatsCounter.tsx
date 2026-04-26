"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface StatsCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  source: string;
  duration?: number;
  delay?: number;
}

export default function StatsCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  source,
  duration = 2,
  delay = 0,
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, end, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl font-bold font-[family-name:var(--font-heading)] text-tan md:text-5xl lg:text-6xl">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-lg font-semibold text-green-dark">{label}</p>
      <p className="mt-1 text-sm text-green-dark/60">{source}</p>
    </motion.div>
  );
}
