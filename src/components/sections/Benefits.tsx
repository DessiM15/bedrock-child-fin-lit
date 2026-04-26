"use client";

import { motion } from "motion/react";
import {
  Sprout,
  HeartHandshake,
  GraduationCap,
  TrendingUp,
  ShieldCheck,
  Scale,
} from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { benefits } from "@/data/benefits";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sprout,
  HeartHandshake,
  GraduationCap,
  TrendingUp,
  ShieldCheck,
  Scale,
};

export default function Benefits() {
  return (
    <SectionWrapper id="benefits" background="cream" padding="lg">
      <div className="text-center">
        <AnimatedText
          as="span"
          className="inline-block text-sm font-semibold uppercase tracking-widest text-tan"
        >
          The Benefits
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.1}
          className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-green-dark sm:text-4xl md:text-5xl"
        >
          Why Financial Literacy for Kids?
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="mx-auto mt-6 max-w-2xl text-lg text-green-dark/70"
        >
          Early financial education doesn&apos;t just teach kids about money — it
          transforms their entire future.
        </AnimatedText>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => {
          const Icon = iconMap[benefit.icon];
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-tan-light/20 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-tan/10 text-tan transition-colors group-hover:bg-tan group-hover:text-white">
                {Icon && <Icon size={28} />}
              </div>
              <h3 className="mb-3 text-xl font-bold text-green-dark font-[family-name:var(--font-heading)]">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-green-dark/60">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
