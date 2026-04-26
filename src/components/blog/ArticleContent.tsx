"use client";

import { motion } from "motion/react";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/types";

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <article className="bg-cream min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-dark/90 via-green-dark/50 to-green-dark/20" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="mx-auto max-w-4xl">
            <motion.a
              href="/blog"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block rounded-full bg-tan/90 px-3 py-1 text-xs font-semibold text-white">
                {article.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-cream sm:text-4xl md:text-5xl leading-tight"
            >
              {article.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 flex flex-wrap items-center gap-4 text-sm text-cream/60"
            >
              <span className="flex items-center gap-1">
                <User size={14} />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {formatDate(article.publishDate)}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {article.readTime} min read
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16"
      >
        <div className="prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-heading)] prose-headings:text-green-dark prose-p:text-green-dark/70 prose-p:leading-relaxed prose-a:text-tan prose-a:no-underline hover:prose-a:underline prose-strong:text-green-dark prose-li:text-green-dark/70 prose-blockquote:border-tan prose-blockquote:text-green-dark/60">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-green-dark p-8 text-center md:p-12">
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-cream">
            Ready to Start Your Child&apos;s Financial Education?
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-cream/70">
            Every great financial journey starts with a single conversation.
            Let us help your family build a stronger financial future.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-tan px-8 py-3 font-semibold text-white transition-colors hover:bg-tan-dark"
            >
              Get Started
            </a>
            <a
              href="tel:7199302059"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-8 py-3 font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              Call (719) 930-2059
            </a>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
