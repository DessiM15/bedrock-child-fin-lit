import type { CurriculumGroup } from "@/types";

export const curriculumGroups: CurriculumGroup[] = [
  {
    ageRange: "3-5",
    label: "Little Learners",
    description:
      "Building the foundation of financial understanding through play, exploration, and everyday moments.",
    topics: [
      "Coin recognition and counting",
      "Concept of exchange — \"you give money to get things\"",
      "Wants vs. needs at a basic level",
      "Patience and delayed gratification",
    ],
    icon: "Baby",
    color: "tan",
  },
  {
    ageRange: "6-8",
    label: "Money Explorers",
    description:
      "Developing real-world money skills through hands-on activities and goal-setting.",
    topics: [
      "Saving toward a goal (visual jars & trackers)",
      "Comparing prices and opportunity cost",
      "The \"Save, Spend, Give\" system",
      "Earning through chores and small tasks",
    ],
    icon: "Compass",
    color: "green-dark",
  },
  {
    ageRange: "9-12",
    label: "Financial Builders",
    description:
      "Introducing more complex financial concepts and building confidence with money decisions.",
    topics: [
      "Introduction to compound interest",
      "Basic budgeting (weekly/monthly)",
      "Introduction to investing concepts",
      "Entrepreneurship basics",
      "Digital money and online transactions",
    ],
    icon: "Building",
    color: "tan-dark",
  },
  {
    ageRange: "13-18",
    label: "Future Leaders",
    description:
      "Preparing teens for financial independence with real-world knowledge and practical skills.",
    topics: [
      "Credit scores and credit management",
      "Student loans and financing education",
      "Retirement savings — starting early matters!",
      "Taxes, insurance, and real-world finances",
      "Entrepreneurship and business planning",
    ],
    icon: "Rocket",
    color: "green-dark-light",
  },
];
