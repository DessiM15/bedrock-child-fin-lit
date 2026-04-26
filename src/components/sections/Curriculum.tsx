"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Baby, Compass, Building, Rocket, CheckCircle } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { curriculumGroups } from "@/data/curriculum";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Baby,
  Compass,
  Building,
  Rocket,
};

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState(0);
  const activeGroup = curriculumGroups[activeTab];
  const Icon = iconMap[activeGroup.icon];

  return (
    <SectionWrapper id="curriculum" background="green-dark" padding="lg">
      <div className="text-center">
        <AnimatedText
          as="span"
          className="inline-block text-sm font-semibold uppercase tracking-widest text-tan-light"
        >
          How It Works
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.1}
          className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-cream sm:text-4xl md:text-5xl"
        >
          Age-Based Financial Education
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="mx-auto mt-6 max-w-2xl text-lg text-cream/70"
        >
          Every child learns differently at every stage. Our curriculum grows
          with your child, meeting them where they are.
        </AnimatedText>
      </div>

      {/* Tab Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 flex flex-wrap justify-center gap-3"
      >
        {curriculumGroups.map((group, index) => {
          const TabIcon = iconMap[group.icon];
          return (
            <button
              key={group.ageRange}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === index
                  ? "bg-tan text-white shadow-lg"
                  : "bg-cream/10 text-cream/70 hover:bg-cream/20 hover:text-cream"
              }`}
            >
              {TabIcon && <TabIcon size={18} />}
              <span>Ages {group.ageRange}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Content */}
      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl rounded-3xl border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-tan/20 text-tan-light">
                {Icon && <Icon size={32} />}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cream font-[family-name:var(--font-heading)]">
                  {activeGroup.label}
                </h3>
                <p className="text-sm text-tan-light">
                  Ages {activeGroup.ageRange}
                </p>
              </div>
            </div>

            <p className="mb-8 text-cream/70 leading-relaxed">
              {activeGroup.description}
            </p>

            <ul className="space-y-4">
              {activeGroup.topics.map((topic, i) => (
                <motion.li
                  key={topic}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-tan-light"
                  />
                  <span className="text-cream/90">{topic}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
