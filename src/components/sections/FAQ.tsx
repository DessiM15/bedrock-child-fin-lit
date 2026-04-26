"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" background="cream" padding="lg">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <AnimatedText
            as="span"
            className="inline-block text-sm font-semibold uppercase tracking-widest text-tan"
          >
            Common Questions
          </AnimatedText>
          <AnimatedText
            as="h2"
            delay={0.1}
            className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-green-dark sm:text-4xl md:text-5xl"
          >
            Frequently Asked Questions
          </AnimatedText>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="overflow-hidden rounded-2xl border border-tan-light/20 bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 p-6 text-left cursor-pointer"
              >
                <h3
                  className={cn(
                    "text-lg font-semibold transition-colors font-[family-name:var(--font-heading)]",
                    openIndex === index ? "text-tan" : "text-green-dark"
                  )}
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-tan"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6">
                      <p className="leading-relaxed text-green-dark/60">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
