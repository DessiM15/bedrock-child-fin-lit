"use client";

import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ArticleCard from "./ArticleCard";
import Button from "@/components/ui/Button";
import type { Article } from "@/types";

interface LatestArticlesProps {
  articles: Article[];
}

export default function LatestArticles({ articles }: LatestArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <SectionWrapper id="blog" background="cream" padding="lg">
      <div className="text-center">
        <AnimatedText
          as="span"
          className="inline-block text-sm font-semibold uppercase tracking-widest text-tan"
        >
          From the Blog
        </AnimatedText>
        <AnimatedText
          as="h2"
          delay={0.1}
          className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-green-dark sm:text-4xl md:text-5xl"
        >
          Latest Articles & Resources
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="mx-auto mt-6 max-w-2xl text-lg text-green-dark/70"
        >
          Practical guides, research-backed insights, and actionable tips to
          help you raise financially confident kids.
        </AnimatedText>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" href="/blog">
          View All Articles
          <ArrowRight size={18} />
        </Button>
      </div>
    </SectionWrapper>
  );
}
