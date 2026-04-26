"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { navItems } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-dark text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/images/logos/bedrock-logo-white.png"
                alt="Bedrock Financial Planning"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-cream/70">
              Empowering the next generation with the financial knowledge and
              confidence they need to build a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-tan">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-tan-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-tan">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:7199302059"
                  className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-tan-light"
                >
                  <Phone size={16} className="text-tan" />
                  (719) 930-2059
                </a>
              </li>
              <li>
                <a
                  href="mailto:david@financialfreedom-inc.net"
                  className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-tan-light"
                >
                  <Mail size={16} className="text-tan" />
                  david@financialfreedom-inc.net
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-cream/70">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-tan" />
                  The Woodlands & Conroe, TX
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-tan">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "LinkedIn"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-sm font-medium text-cream/70 transition-all hover:bg-tan hover:text-white"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-cream/40">
              Social links coming soon
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-cream/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-cream/50">
              &copy; {currentYear} Bedrock Financial Planning. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-cream/40 transition-colors hover:text-tan-light"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-cream/40 transition-colors hover:text-tan-light"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
