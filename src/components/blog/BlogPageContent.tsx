"use client";

import { useState } from "react";
import { motion } from "motion/react";
import ArticleGrid from "./ArticleGrid";
import type { Article } from "@/types";

interface BlogPageContentProps {
  articles: Article[];
  categories: string[];
}

export default function BlogPageContent({
  articles,
  categories,
}: BlogPageContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-green-dark pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-[family-name:var(--font-heading)] text-4xl font-bold text-cream sm:text-5xl"
          >
            Blog & Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-cream/70"
          >
            Practical guides and research-backed insights for raising
            financially confident kids.
          </motion.p>
        </div>
      </div>

      {/* Filter + Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 flex flex-wrap gap-2"
        >
          <button
            onClick={() => setActiveCategory("All")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer ${
              activeCategory === "All"
                ? "bg-tan text-white"
                : "bg-cream-dark text-green-dark/60 hover:bg-tan/10 hover:text-green-dark"
            }`}
          >
            All ({articles.length})
          </button>
          {categories.map((cat) => {
            const count = articles.filter((a) => a.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-tan text-white"
                    : "bg-cream-dark text-green-dark/60 hover:bg-tan/10 hover:text-green-dark"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </motion.div>

        <ArticleGrid articles={filteredArticles} />

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <a
            href="/"
            className="text-sm font-medium text-tan hover:text-tan-dark transition-colors"
          >
            &larr; Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
