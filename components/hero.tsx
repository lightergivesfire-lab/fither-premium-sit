"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="relative overflow-hidden pt-32 pb-28 bg-[#faf7f2]">

      {/* ================= BACKGROUND GRADIENT ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(216,194,158,0.28),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(238,221,200,0.35),transparent_60%)]" />

      {/* ================= FLORAL OVERLAYS ================= */}
      <img
        src="/floral-soft.png"
        className="pointer-events-none absolute bottom-0 left-0 w-[380px] opacity-[0.06]"
        alt=""
      />
      <img
        src="/floral-soft.png"
        className="pointer-events-none absolute top-0 right-0 w-[320px] rotate-180 opacity-[0.05]"
        alt=""
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-9">

            <span className="inline-block text-sm tracking-wide text-[#b8945c] font-medium">
              Stress-Free Wellness for Women 30+
            </span>

            <h1 className="font-serif text-[2.8rem] md:text-5xl lg:text-6xl leading-[1.15] text-neutral-900">
              Transform Your Body,
              <br />
              Mind & Energy —
              <span className="block text-[#b8945c]">
                The FitHer Way
              </span>
            </h1>

            <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
              Personalized fat loss, hormone balance & lifestyle coaching
              crafted for busy women who want results without burnout.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-5 pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#b8945c] text-white px-11 py-6 h-auto hover:bg-[#a07f4a] shadow-md"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-[#b8945c] text-[#b8945c] px-11 py-6 h-auto hover:bg-[#b8945c]/10"
              >
                <Link href="#lead-magnet">
                  Download Free Guide
                </Link>
              </Button>
            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative">

            {/* soft card backdrop */}
            <div className="absolute -inset-6 rounded-[3.5rem] bg-[#f1e3cf]" />

            <img
              src="/hero-coach.jpg"
              alt="FitHer wellness coaching community"
              className="relative rounded-[2.8rem] object-cover shadow-xl"
            />

          </div>
        </div>
      </div>
    </section>
  )
}
