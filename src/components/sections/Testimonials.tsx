"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(
        ((index % testimonials.length) + testimonials.length) %
          testimonials.length
      );
    },
    []
  );

  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-green-dark/85 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimatedText
            as="span"
            className="inline-block text-sm font-semibold uppercase tracking-widest text-tan-light"
          >
            What Parents Say
          </AnimatedText>
          <AnimatedText
            as="h2"
            delay={0.1}
            className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-cream sm:text-4xl md:text-5xl"
          >
            Stories from Families Like Yours
          </AnimatedText>
        </div>

        {/* Carousel */}
        <div className="relative mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mx-auto max-w-3xl text-center"
            >
              <Quote
                size={48}
                className="mx-auto mb-6 text-tan/40"
              />
              <blockquote className="text-xl leading-relaxed text-cream/90 md:text-2xl font-[family-name:var(--font-heading)] italic">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="text-lg font-semibold text-tan-light">
                  {testimonials[currentIndex].name}
                </p>
                <p className="mt-1 text-sm text-cream/50">
                  {testimonials[currentIndex].childAge} &middot;{" "}
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream/60 transition-all hover:bg-cream/20 hover:text-cream cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream/60 transition-all hover:bg-cream/20 hover:text-cream cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "w-8 bg-tan"
                  : "w-2 bg-cream/30 hover:bg-cream/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
