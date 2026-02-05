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
      className="relative py-32 bg-[#faf7f2]"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(216,194,158,0.2),transparent_60%)]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="uppercase tracking-wide text-xs text-[#b8945c]">
            Your Transformation
          </span>

          <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] mt-4 mb-6 text-neutral-900">
            What You’ll Walk Away With
          </h2>

          <p className="text-neutral-600 text-lg">
            Real, lasting changes that reshape not just your body —
            but your energy, confidence, and lifestyle.
          </p>
        </div>

        {/* ================= BENEFITS GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="h-full rounded-3xl border border-neutral-200 bg-white/85 backdrop-blur p-8 shadow-sm hover:shadow-md transition">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#efe4d3]">
                  <benefit.icon className="h-8 w-8 text-[#b8945c]" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-neutral-900">
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
        <div className="mt-24 text-center">

          <p className="text-neutral-600 mb-6">
            Ready to experience these transformations?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#b8945c] px-8 py-4 text-[#b8945c] font-medium hover:bg-[#b8945c]/10 transition"
          >
            Start Your Journey Today
            <ArrowRight className="h-4 w-4" />
          </a>

        </div>
      </div>
    </section>
  )
}
