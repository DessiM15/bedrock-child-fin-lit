"use client";

import { motion } from "motion/react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { sectionIds } from "@/data/navigation";
import { cn } from "@/lib/utils";

const sectionLabels: Record<string, string> = {
  hero: "Home",
  overview: "Overview",
  benefits: "Benefits",
  curriculum: "Curriculum",
  mission: "Mission",
  team: "Team",
  testimonials: "Reviews",
  faq: "FAQ",
  blog: "Blog",
  contact: "Contact",
};

export default function DotNavigation() {
  const activeSection = useActiveSection();

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex"
      aria-label="Section navigation"
    >
      {sectionIds.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-3"
          aria-label={`Go to ${sectionLabels[id]}`}
        >
          <span
            className={cn(
              "text-xs font-medium uppercase tracking-wider opacity-0 transition-all duration-300 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0",
              activeSection === id ? "text-tan" : "text-green-dark/50"
            )}
          >
            {sectionLabels[id]}
          </span>
          <span className="relative flex items-center justify-center">
            <span
              className={cn(
                "block rounded-full transition-all duration-300",
                activeSection === id
                  ? "h-3 w-3 bg-tan shadow-md"
                  : "h-2 w-2 bg-green-dark/20 group-hover:bg-tan-light group-hover:h-2.5 group-hover:w-2.5"
              )}
            />
            {activeSection === id && (
              <motion.span
                layoutId="activeDot"
                className="absolute h-5 w-5 rounded-full border-2 border-tan/30"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </span>
        </a>
      ))}
    </motion.nav>
  );
}
