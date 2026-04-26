"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import SectionWrapper from "@/components/ui/SectionWrapper";
import StatsCounter from "@/components/ui/StatsCounter";

const stats = [
  {
    end: 7,
    suffix: "",
    prefix: "Age ",
    label: "When Money Habits Form",
    source: "Cambridge University, 2013",
    delay: 0,
  },
  {
    end: 1,
    suffix: " in 5",
    prefix: "",
    label: "U.S. Teens Lack Basic Financial Literacy",
    source: "PISA 2022",
    delay: 0.1,
  },
  {
    end: 246,
    suffix: "B",
    prefix: "$",
    label: "Annual Cost of Financial Illiteracy",
    source: "NFEC, 2025",
    delay: 0.2,
  },
  {
    end: 56,
    suffix: "%",
    prefix: "",
    label: "Of Parents Reluctant to Discuss Finances",
    source: "T. Rowe Price, 2022",
    delay: 0.3,
  },
];

export default function ProgramOverview() {
  return (
    <SectionWrapper id="overview" background="cream-dark" padding="lg">
      <div className="text-center">
        <AnimatedText
          as="span"
          className="inline-block text-sm font-semibold uppercase tracking-widest text-tan"
        >
          Why It Matters
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.1}
          className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-green-dark sm:text-4xl md:text-5xl"
        >
          The Financial Literacy Gap Is Real
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-green-dark/70"
        >
          Most adults never received formal financial education — and the
          consequences ripple through generations. Only 43% of U.S. adults can
          answer three basic financial questions, and 57% of parents received
          little or no financial education from their own parents. The cycle
          stops here.
        </AnimatedText>
      </div>

      {/* Stats Grid */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCounter key={stat.label} {...stat} />
        ))}
      </div>

      {/* Call to Action Text */}
      <AnimatedText
        as="p"
        delay={0.4}
        className="mt-16 text-center text-xl font-semibold text-green-dark font-[family-name:var(--font-heading)]"
      >
        Your child&apos;s financial future starts with the conversations you
        have today.
      </AnimatedText>
    </SectionWrapper>
  );
}
