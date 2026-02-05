"use client"

import { Scale, Zap, Heart, Moon, CalendarCheck, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const benefits = [
  {
    icon: Scale,
    title: "4–10 kg Fat Loss",
    description: "Sustainable results without crash dieting or extreme restrictions.",
  },
  {
    icon: Zap,
    title: "All-Day Energy",
    description: "Stable energy levels from morning to night without burnout.",
  },
  {
    icon: Heart,
    title: "Hormonal Balance",
    description: "Support for thyroid, PCOS, and menopause-related symptoms.",
  },
  {
    icon: Moon,
    title: "Peaceful Sleep",
    description: "Deeper rest paired with stress-regulation systems.",
  },
  {
    icon: CalendarCheck,
    title: "A Sustainable Lifestyle",
    description: "Routines that fit busy lives and last long after coaching ends.",
  },
]

export function Benefits() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section
      id="benefits"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#f6f2ec]"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(200,180,140,0.18),transparent_60%)]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">

          <span className="uppercase tracking-wide text-[11px] sm:text-xs text-[#b8945c]">
            Your Transformation
          </span>

          <h2 className="font-serif text-[2rem] sm:text-[2.4rem] md:text-5xl leading-[1.15] mt-3 mb-4 sm:mb-6 text-neutral-900">
            What You’ll Walk Away With
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg">
            Real, lasting changes that reshape not just your body —
            but your energy, confidence, and lifestyle.
          </p>

        </div>

        {/* ================= BENEFITS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-8">

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="h-full rounded-3xl border border-neutral-200 bg-white/85 backdrop-blur p-6 sm:p-8 shadow-sm hover:shadow-md transition">

                <div className="mb-5 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#efe4d3]">
                  <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#b8945c]" />
                </div>

                <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-neutral-900">
                  {benefit.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-16 sm:mt-24 text-center">

          <p className="text-neutral-600 mb-5 sm:mb-6">
            Ready to experience these transformations?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#b8945c] px-7 sm:px-8 py-3.5 sm:py-4 text-[#b8945c] font-medium hover:bg-[#b8945c]/10 transition"
          >
            Start Your Journey Today
            <ArrowRight className="h-4 w-4" />
          </a>

        </div>

      </div>
    </section>
  )
}
