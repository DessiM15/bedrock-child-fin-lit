export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  author: string;
  category: string;
  readTime: number;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  phone?: string;
  image: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface CurriculumGroup {
  ageRange: string;
  label: string;
  description: string;
  topics: string[];
  icon: string;
  color: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  childAge: string;
  location: string;
}

export interface NavItem {
  label: string;
  href: string;
}
