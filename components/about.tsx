"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Heart, Leaf, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()


  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#eceef1]"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= IMAGE ================= */}
            <div className="relative max-w-md mx-auto lg:max-w-none">

  {/* backdrop */}
  <div className="absolute -inset-4 sm:-inset-6 rounded-[2.2rem] sm:rounded-[2.5rem] bg-[#262626] opacity-90" />

  {/* image container */}
  <div className="relative z-10 w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2rem] shadow-2xl">

    <Image
      src="/coach.jpg"
      alt="Karan Sharma — Founder & Lead Coach at FitHer"
      width={500}
      height={700}
      priority
      className="w-full h-auto object-cover object-top"
    />

  </div>
</div>

          {/* ================= TEXT ================= */}
          <div className="space-y-7 sm:space-y-9 text-center lg:text-left">

            <span className="uppercase tracking-wide text-[11px] sm:text-xs text-[#8c6b3f] font-semibold">
              Founder & Lead Coach
            </span>

            <h2 className="font-serif text-[2rem] sm:text-[2.4rem] md:text-5xl leading-[1.15] text-neutral-900">
              Karan Sharma
              <span className="block text-[#8c6b3f]">
                15+ Years Transforming Women’s Health
              </span>
            </h2>

            <div className="space-y-4 sm:space-y-5 text-neutral-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg">
                I help busy women 30+ regain control over their bodies, hormones,
                and energy levels through disciplined systems — not crash diets
                or unsustainable routines.
              </p>

              <p>
                The FitHer™ Method integrates modern sports science, nutrition,
                behavioral psychology, and Ayurvedic medicine to deliver results
                that last.
              </p>
            </div>

            {/* credibility */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 pt-4 sm:pt-6">

              {[
                {
                  icon: Award,
                  title: "15+ Years",
                  sub: "Experience",
                },
                {
                  icon: Heart,
                  title: "Hormone",
                  sub: "Specialist",
                },
                {
                  icon: Leaf,
                  title: "Ayurveda +",
                  sub: "Science",
                },
              ].map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-center justify-center lg:justify-start gap-4 rounded-3xl bg-[#1f1f1f] px-5 py-4 shadow-xl border border-neutral-800"
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#d1b27a]" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {title}
                    </p>
                    <p className="text-xs text-neutral-300">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#8c6b3f] px-9 sm:px-10 py-5 sm:py-6 h-auto text-white hover:bg-[#735531]"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
