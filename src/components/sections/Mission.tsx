"use client";

import { motion } from "motion/react";
import { Target, Heart, Lightbulb } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionWrapper from "@/components/ui/SectionWrapper";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To equip every child with the financial knowledge and confidence they need to build a secure, prosperous future — regardless of their family's starting point.",
  },
  {
    icon: Heart,
    title: "Our Why",
    text: "We believe financial literacy is not a privilege — it's a right. Every child deserves to understand money, and every parent deserves the tools to teach them.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    text: "A generation of financially confident young adults who save wisely, invest early, give generously, and break the cycle of financial stress for their families.",
  },
];

export default function Mission() {
  return (
    <SectionWrapper id="mission" background="cream" padding="lg">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1602008228722-2348a4cd5a6a?w=800&q=80"
              alt="Parent and child learning about finances together"
              className="h-[500px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 rounded-2xl bg-tan p-6 text-white shadow-xl max-w-[200px]">
            <p className="text-3xl font-bold font-[family-name:var(--font-heading)]">
              10+
            </p>
            <p className="text-sm text-white/80">
              Years empowering families
            </p>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div>
          <AnimatedText
            as="span"
            className="inline-block text-sm font-semibold uppercase tracking-widest text-tan"
          >
            About Bedrock
          </AnimatedText>
          <AnimatedText
            as="h2"
            delay={0.1}
            className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-green-dark sm:text-4xl"
          >
            Building Financial Foundations That Last Generations
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="mt-6 text-lg leading-relaxed text-green-dark/70"
          >
            At Bedrock Financial Planning, we know that the most powerful
            investment you can make isn&apos;t in the stock market — it&apos;s in your
            child&apos;s financial education. Based in The Woodlands and Conroe,
            Texas, we&apos;re on a mission to change how families talk about,
            think about, and build wealth together.
          </AnimatedText>

          <div className="mt-10 space-y-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tan/10 text-tan">
                  <pillar.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-green-dark font-[family-name:var(--font-heading)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-green-dark/60">
                    {pillar.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
