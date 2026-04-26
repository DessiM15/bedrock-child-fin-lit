import { articles } from "@/data/articles";
import type { Article } from "@/types";

export function getPublishedArticles(): Article[] {
  const today = new Date().toISOString().split("T")[0];
  return articles
    .filter((article) => article.publishDate <= today)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export function getLatestArticles(count: number): Article[] {
  return getPublishedArticles().slice(0, count);
}

export function getArticleBySlug(slug: string): Article | undefined {
  const today = new Date().toISOString().split("T")[0];
  return articles.find(
    (article) => article.slug === slug && article.publishDate <= today
  );
}

export function getArticlesByCategory(category: string): Article[] {
  return getPublishedArticles().filter(
    (article) => article.category === category
  );
}

export function getAllCategories(): string[] {
  const published = getPublishedArticles();
  return [...new Set(published.map((article) => article.category))];
}

export function getPublishedSlugs(): string[] {
  return getPublishedArticles().map((article) => article.slug);
}
