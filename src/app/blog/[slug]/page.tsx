import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/blog/ArticleContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getArticleBySlug, getPublishedSlugs } from "@/lib/articles";

export const revalidate = 86400;

export async function generateStaticParams() {
  const slugs = getPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 800,
          height: 400,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <ArticleContent article={article} />
      <Footer />
    </>
  );
}
