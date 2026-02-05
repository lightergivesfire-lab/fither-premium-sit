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
      className="relative py-32 bg-[#f1ede6]"
    >
      {/* subtle hero-style glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(216,194,158,0.2),transparent_60%)]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="uppercase tracking-wide text-xs text-[#b8945c]">
            Signature Program
          </span>

          <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] mt-4 mb-6 text-neutral-900">
            The FitHer™ Lifestyle Lean Method
          </h2>

          <p className="text-neutral-600 text-lg">
            A 90-day private coaching system for women who want real results
            without burnout.
          </p>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`bg-[#fbfaf8] border border-neutral-300 rounded-3xl shadow-sm transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#e2d6c3]">
                  <feature.icon className="h-7 w-7 text-[#b8945c]" />
                </div>

                <h3 className="text-lg font-semibold mb-2 text-neutral-900">
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
        <div className="rounded-[3rem] border border-neutral-300 bg-[#f7f3ed] p-10 lg:p-16 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <h3 className="font-serif text-3xl mb-10 text-neutral-900">
                What’s Included in Your 90-Day Transformation
              </h3>

              <ul className="space-y-6">
                {[
                  "Personalized fitness assessment & goal setting",
                  "Custom Indian meal plans",
                  "Weekly check-ins and progress tracking",
                  "Private workout library access",
                  "Mindset & stress systems",
                  "Lifetime access to materials",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle className="h-5 w-5 text-[#b8945c] mt-1" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT / PRICE */}
            <div className="rounded-3xl bg-[#ede6dc] p-10 text-center border border-neutral-300">

              <p className="text-xs tracking-wide uppercase text-neutral-500 mb-3">
                Investment in Yourself
              </p>

              <div className="mb-6">
                <span className="text-5xl font-semibold text-neutral-900">
                  ₹24,999
                </span>
                <span className="ml-3 text-neutral-500 line-through text-lg">
                  ₹39,999
                </span>
              </div>

              <p className="text-sm text-[#b8945c] mb-8 font-medium">
                Limited-time offer — Save ₹15,000
              </p>

              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full rounded-full bg-[#b8945c] text-white py-6 h-auto text-base hover:bg-[#a07f4a]"
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
                  className="w-full rounded-full border-[#b8945c] text-[#b8945c] py-6 h-auto hover:bg-[#b8945c]/10"
                >
                  <Link href="#contact">
                    Book a Free Discovery Call
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-xs text-neutral-500">
                EMI options available
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
