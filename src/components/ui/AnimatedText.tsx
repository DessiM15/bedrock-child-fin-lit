"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export default function AnimatedText({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      <Tag className={cn(className)}>{children}</Tag>
    </motion.div>
  );
}
