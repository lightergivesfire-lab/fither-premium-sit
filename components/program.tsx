"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dumbbell,
  UtensilsCrossed,
  Brain,
  Video,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Dumbbell,
    title: "Personalized 12-Week Workout Plan",
    description: "15–30 min/day workouts designed for busy schedules",
  },
  {
    icon: UtensilsCrossed,
    title: "Easy Indian Meal Plans",
    description: "Veg/Non-Veg, gluten-free, thyroid-friendly options",
  },
  {
    icon: Brain,
    title: "Hormone & Stress Reset Tools",
    description: "Science-backed techniques for hormonal balance",
  },
  {
    icon: Video,
    title: "Bi-weekly 1:1 Coaching Calls",
    description: "Personal guidance and accountability sessions",
  },
  {
    icon: Users,
    title: "Private WhatsApp Group",
    description: "Community support and daily motivation",
  },
  {
    icon: Clock,
    title: "Sleep, Gut & Time Framework",
    description: "Holistic approach to wellness management",
  },
]

export function Program() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section
      id="program"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#ede8df]"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,180,140,0.18),transparent_60%)]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">

          <span className="uppercase tracking-wide text-[11px] sm:text-xs text-[#b8945c]">
            Signature Program
          </span>

          <h2 className="font-serif text-[2rem] sm:text-[2.4rem] md:text-5xl leading-[1.15] mt-3 mb-5 text-neutral-900">
            The FitHer™ Lifestyle Lean Method
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg">
            A 90-day private coaching system for women who want real results
            without burnout.
          </p>

        </div>

        {/* ================= FEATURES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-16 sm:mb-24">

          {features.map((feature, index) => (
            <Card
              key={index}
              className={`bg-[#fbfaf8] border border-neutral-300 rounded-3xl shadow-sm transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <CardContent className="p-6 sm:p-8">

                <div className="mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#e2d6c3]">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#b8945c]" />
                </div>

                <h3 className="text-base sm:text-lg font-semibold mb-2 text-neutral-900">
                  {feature.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>

              </CardContent>
            </Card>
          ))}

        </div>

        {/* ================= OFFER PANEL ================= */}
        <div className="rounded-[2.5rem] sm:rounded-[3rem] border border-neutral-300 bg-[#f6f2ec] p-6 sm:p-10 lg:p-16 shadow-sm">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT */}
            <div>

              <h3 className="font-serif text-[1.6rem] sm:text-3xl mb-6 sm:mb-10 text-neutral-900">
                What’s Included in Your 90-Day Transformation
              </h3>

              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Personalized fitness assessment & goal setting",
                  "Custom Indian meal plans",
                  "Weekly check-ins and progress tracking",
                  "Private workout library access",
                  "Mindset & stress systems",
                  "Lifetime access to materials",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 sm:gap-4">

                    <CheckCircle className="h-5 w-5 text-[#b8945c] mt-0.5" />

                    <span className="text-sm sm:text-base text-neutral-700">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

            </div>

            {/* RIGHT / PRICE */}
            <div className="rounded-3xl bg-[#ebe3d8] p-6 sm:p-10 text-center border border-neutral-300">

              <p className="text-[11px] sm:text-xs tracking-wide uppercase text-neutral-500 mb-3">
                Investment in Yourself
              </p>

              <div className="mb-5 sm:mb-6">

                <span className="text-4xl sm:text-5xl font-semibold text-neutral-900">
                  ₹24,999
                </span>

                <span className="ml-2 sm:ml-3 text-neutral-500 line-through text-base sm:text-lg">
                  ₹39,999
                </span>

              </div>

              <p className="text-xs sm:text-sm text-[#b8945c] mb-6 sm:mb-8 font-medium">
                Limited-time offer — Save ₹15,000
              </p>

              <div className="space-y-3 sm:space-y-4">

                <Button
                  asChild
                  className="w-full rounded-full bg-[#b8945c] text-white py-5 sm:py-6 h-auto text-base hover:bg-[#a07f4a]"
                >
                  <Link
                    href="#contact"
                    className="flex items-center justify-center gap-2"
                  >
                    Join the Program
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full border-[#b8945c] text-[#b8945c] py-5 sm:py-6 h-auto hover:bg-[#b8945c]/10"
                >
                  <Link href="#contact">
                    Book a Free Discovery Call
                  </Link>
                </Button>

              </div>

              <p className="mt-5 sm:mt-6 text-xs text-neutral-500">
                EMI options available
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
