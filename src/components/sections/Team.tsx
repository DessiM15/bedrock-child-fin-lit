"use client";

import { motion } from "motion/react";
import { Phone } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <SectionWrapper id="team" background="cream-dark" padding="lg">
      <div className="text-center">
        <AnimatedText
          as="span"
          className="inline-block text-sm font-semibold uppercase tracking-widest text-tan"
        >
          Meet Your Guides
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.1}
          className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-green-dark sm:text-4xl md:text-5xl"
        >
          The Team Behind Bedrock
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="mx-auto mt-6 max-w-2xl text-lg text-green-dark/70"
        >
          Passionate financial professionals dedicated to empowering the next
          generation with financial confidence.
        </AnimatedText>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            {/* Photo */}
            <div className="relative h-80 overflow-hidden bg-cream-dark">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-dark/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            {/* Info */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-green-dark font-[family-name:var(--font-heading)]">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-tan">
                {member.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-green-dark/60">
                {member.bio}
              </p>
              {member.phone && (
                <a
                  href={`tel:${member.phone.replace(/\D/g, "")}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-tan hover:text-tan-dark transition-colors"
                >
                  <Phone size={16} />
                  {member.phone}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
