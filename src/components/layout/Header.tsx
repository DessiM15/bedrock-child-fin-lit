"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src={isScrolled ? "/images/logos/bedrock-financial-logo.png" : "/images/logos/bedrock-logo-white.png"}
                alt="Bedrock Financial Planning"
                className="h-10 w-auto transition-all duration-300 md:h-12"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-tan/10",
                    isScrolled
                      ? "text-green-dark hover:text-tan"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:7199302059"
                className={cn(
                  "hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:inline-flex",
                  isScrolled
                    ? "bg-tan text-white hover:bg-tan-dark shadow-md"
                    : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm"
                )}
              >
                <Phone size={16} />
                <span>(719) 930-2059</span>
              </a>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={cn(
                  "rounded-lg p-2 transition-colors lg:hidden",
                  isScrolled
                    ? "text-green-dark hover:bg-tan/10"
                    : "text-white hover:bg-white/10"
                )}
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-green-dark/95 backdrop-blur-lg lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="text-2xl font-medium text-cream hover:text-tan transition-colors font-[family-name:var(--font-heading)]"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:7199302059"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-tan px-8 py-3 text-lg font-semibold text-white"
              >
                <Phone size={20} />
                (719) 930-2059
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
