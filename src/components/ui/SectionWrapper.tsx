"use client";

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: "cream" | "cream-dark" | "green-dark" | "white";
  padding?: "sm" | "md" | "lg";
}

const backgrounds = {
  cream: "bg-cream",
  "cream-dark": "bg-cream-dark",
  "green-dark": "bg-green-dark text-cream",
  white: "bg-white",
};

const paddings = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
};

export default function SectionWrapper({
  id,
  children,
  className,
  background = "cream",
  padding = "md",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(backgrounds[background], paddings[padding], className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
