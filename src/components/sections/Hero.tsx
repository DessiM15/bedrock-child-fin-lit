"use client";

import { motion } from "motion/react";
import { ArrowDown, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { useHeroParallax } from "@/hooks/useParallax";

export default function Hero() {
  const { ref, y, opacity } = useHeroParallax();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-dark/80 via-green-dark/60 to-green-dark/90" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-tan-light/30 bg-tan/10 px-4 py-1.5 text-sm font-medium text-tan-light backdrop-blur-sm">
            Bedrock Financial Planning — The Woodlands & Conroe, TX
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Empowering the Next{" "}
          <span className="text-tan-light">Generation</span> with Financial
          Confidence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/80 sm:text-xl"
        >
          Give your children the gift that keeps on growing — financial literacy.
          Our age-based program equips families with the tools to build lifelong
          money skills, from piggy banks to portfolios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button variant="primary" size="lg" href="#overview">
            Learn More
          </Button>
          <Button variant="outline" size="lg" href="#contact">
            <Phone size={18} />
            Get Started
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.a
          href="#overview"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-cream/50 hover:text-cream/80 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
