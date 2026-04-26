"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { contactSchema, type ContactFormData } from "@/lib/validation";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Something went wrong");
      }
      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <SectionWrapper id="contact" background="cream-dark" padding="lg">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left: Info */}
        <div>
          <AnimatedText
            as="span"
            className="inline-block text-sm font-semibold uppercase tracking-widest text-tan"
          >
            Get in Touch
          </AnimatedText>
          <AnimatedText
            as="h2"
            delay={0.1}
            className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-green-dark sm:text-4xl"
          >
            Start Your Child&apos;s Financial Education Journey
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="mt-6 text-lg leading-relaxed text-green-dark/70"
          >
            Ready to give your child the gift of financial confidence? Reach out
            for a free consultation and learn how we can help your family build a
            stronger financial future.
          </AnimatedText>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 space-y-5"
          >
            <a
              href="tel:7199302059"
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tan/10 text-tan transition-colors group-hover:bg-tan group-hover:text-white">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-green-dark/50">Call us directly</p>
                <p className="text-lg font-semibold text-green-dark">
                  (719) 930-2059
                </p>
              </div>
            </a>

            <a
              href="mailto:david@financialfreedom-inc.net"
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tan/10 text-tan transition-colors group-hover:bg-tan group-hover:text-white">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-green-dark/50">Email us</p>
                <p className="text-lg font-semibold text-green-dark">
                  david@financialfreedom-inc.net
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tan/10 text-tan">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-green-dark/50">Serving</p>
                <p className="text-lg font-semibold text-green-dark">
                  The Woodlands & Conroe, TX
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-white p-8 shadow-lg md:p-10"
        >
          <h3 className="text-2xl font-bold text-green-dark font-[family-name:var(--font-heading)]">
            Request a Free Consultation
          </h3>
          <p className="mt-2 text-sm text-green-dark/50">
            Fill out the form below and we&apos;ll be in touch within 24 hours.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
            noValidate
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-green-dark"
              >
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className={cn(
                  "mt-1 w-full rounded-xl border bg-cream/50 px-4 py-3 text-green-dark placeholder:text-green-dark/30 transition-colors focus:outline-none focus:ring-2 focus:ring-tan/30 focus:border-tan",
                  errors.name ? "border-red-400" : "border-tan-light/30"
                )}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-green-dark"
              >
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={cn(
                  "mt-1 w-full rounded-xl border bg-cream/50 px-4 py-3 text-green-dark placeholder:text-green-dark/30 transition-colors focus:outline-none focus:ring-2 focus:ring-tan/30 focus:border-tan",
                  errors.email ? "border-red-400" : "border-tan-light/30"
                )}
                placeholder="you@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-green-dark"
              >
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className={cn(
                  "mt-1 w-full rounded-xl border bg-cream/50 px-4 py-3 text-green-dark placeholder:text-green-dark/30 transition-colors focus:outline-none focus:ring-2 focus:ring-tan/30 focus:border-tan",
                  errors.phone ? "border-red-400" : "border-tan-light/30"
                )}
                placeholder="(555) 123-4567"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-green-dark"
              >
                Message{" "}
                <span className="text-green-dark/40">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className={cn(
                  "mt-1 w-full resize-none rounded-xl border bg-cream/50 px-4 py-3 text-green-dark placeholder:text-green-dark/30 transition-colors focus:outline-none focus:ring-2 focus:ring-tan/30 focus:border-tan",
                  errors.message ? "border-red-400" : "border-tan-light/30"
                )}
                placeholder="Tell us about your family's financial education goals..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={submitStatus === "loading"}
            >
              {submitStatus === "loading" ? (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="inline-block h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                />
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </Button>
          </form>

          {/* Status Messages */}
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 p-4 text-green-700"
              >
                <CheckCircle size={20} />
                <span className="text-sm font-medium">
                  Thank you! We&apos;ll be in touch within 24 hours.
                </span>
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 p-4 text-red-700"
              >
                <AlertCircle size={20} />
                <span className="text-sm font-medium">
                  Something went wrong. Please try calling us directly.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
