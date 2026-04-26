import type { Article } from "@/types";
import { articlesPart1 } from "./articles-part1";
import { articlesPart2 } from "./articles-part2";
import { articlesPart3 } from "./articles-part3";

export const articles: Article[] = [
  ...articlesPart1,
  ...articlesPart2,
  ...articlesPart3,
];
