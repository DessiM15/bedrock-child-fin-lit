import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Child Financial Literacy | Bedrock Financial Planning",
    template: "%s | Bedrock Financial Planning",
  },
  description:
    "Empowering the next generation with financial confidence. Age-based financial literacy education for children ages 3-18 in The Woodlands & Conroe, TX.",
  keywords: [
    "child financial literacy",
    "kids money education",
    "financial education for children",
    "teaching kids about money",
    "The Woodlands financial planning",
    "Conroe financial literacy",
    "Bedrock Financial Planning",
    "family financial education",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bedrock Financial Planning — Child Financial Literacy",
    title: "Child Financial Literacy | Bedrock Financial Planning",
    description:
      "Empowering the next generation with financial confidence. Age-based financial literacy education for children ages 3-18.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Children learning about financial literacy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Child Financial Literacy | Bedrock Financial Planning",
    description:
      "Empowering the next generation with financial confidence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
