"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28 bg-[#f4efe6]">

      {/* ================= BACKGROUND GRADIENT ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(200,176,135,0.22),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(220,200,170,0.26),transparent_60%)]" />

      {/* ================= MOBILE BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 lg:hidden pointer-events-none">
        <img
          src="/hero-coach.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#f4efe6]/80" />
      </div>

      {/* ================= FLORAL OVERLAYS ================= */}
      <img
        src="/floral-soft.png"
        className="pointer-events-none absolute bottom-0 left-0 w-[220px] sm:w-[300px] opacity-[0.04]"
        alt=""
      />
      <img
        src="/floral-soft.png"
        className="pointer-events-none absolute top-0 right-0 w-[200px] sm:w-[260px] rotate-180 opacity-[0.035]"
        alt=""
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-7 sm:space-y-9">

            <span className="inline-block text-xs sm:text-sm tracking-wide text-[#b8945c] font-medium">
              Stress-Free Wellness for Women 30+
            </span>

            <h1 className="font-serif text-[2.1rem] sm:text-[2.6rem] md:text-5xl lg:text-6xl leading-[1.15] text-neutral-900">
              Transform Your Body,
              <br />
              Mind & Energy —
              <span className="block text-[#b8945c]">
                The FitHer Way
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
              Personalized fat loss, hormone balance & lifestyle coaching
              crafted for busy women who want results without burnout.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-3 sm:pt-4">

              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#b8945c] text-white px-9 sm:px-11 py-5 sm:py-6 h-auto hover:bg-[#a07f4a] shadow-md"
              >
                <Link href="#contact" className="flex items-center justify-center gap-2">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-[#b8945c] text-[#b8945c] px-9 sm:px-11 py-5 sm:py-6 h-auto hover:bg-[#b8945c]/10"
              >
                <Link href="#lead-magnet" className="text-center">
                  Download Free Guide
                </Link>
              </Button>

            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative mt-10 lg:mt-0 hidden lg:block">

            {/* soft card backdrop */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#eadcc5]" />

            <img
              src="/hero-coach.jpg"
              alt="FitHer wellness coaching community"
              className="relative w-full max-w-md sm:max-w-lg mx-auto rounded-[2.2rem] sm:rounded-[2.8rem] object-cover shadow-xl"
            />

          </div>
        </div>
      </div>
    </section>
  )
}
