import type { Metadata } from "next";
import BlogPageContent from "@/components/blog/BlogPageContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getPublishedArticles, getAllCategories } from "@/lib/articles";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "Practical guides, research-backed insights, and actionable tips for teaching your children about money and building financial confidence.",
};

export default function BlogPage() {
  const articles = getPublishedArticles();
  const categories = getAllCategories();

  return (
    <>
      <Header />
      <BlogPageContent articles={articles} categories={categories} />
      <Footer />
    </>
  );
}
