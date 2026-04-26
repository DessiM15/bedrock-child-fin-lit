"use client";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "dark";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-tan text-white hover:bg-tan-dark shadow-lg hover:shadow-xl",
  secondary:
    "bg-cream text-green-dark hover:bg-cream-dark border border-tan-light",
  outline:
    "bg-transparent text-tan border-2 border-tan hover:bg-tan hover:text-white",
  dark:
    "bg-green-dark text-cream hover:bg-green-dark-light shadow-lg hover:shadow-xl",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer font-[family-name:var(--font-body)]",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
