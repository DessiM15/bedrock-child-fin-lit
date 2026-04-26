"use client";

import { motion } from "motion/react";
import { Clock, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <motion.a
      href={`/blog/${article.slug}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-tan/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-green-dark/50">
          <time>{formatDate(article.publishDate)}</time>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {article.readTime} min read
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-snug text-green-dark font-[family-name:var(--font-heading)] group-hover:text-tan transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-green-dark/60 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-tan group-hover:gap-2 transition-all">
          Read Article
          <ArrowRight size={16} />
        </div>
      </div>
    </motion.a>
  );
}
