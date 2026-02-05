"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Working Mom, 38",
    quote:
      "Before FitHer, I was stuck. Now I've lost 7 kg, my PCOS symptoms are under control, and I feel confident again. Karan's approach is so practical for busy moms!",
    rating: 5,
    result: "Lost 7 kg",
  },
  {
    name: "Anjali Mehta",
    role: "IT Professional, 42",
    quote:
      "I tried everything for my thyroid weight gain. FitHer was the first program that actually worked. Lost 9 kg in 3 months and my energy is through the roof!",
    rating: 5,
    result: "Lost 9 kg",
  },
  {
    name: "Deepika Reddy",
    role: "Homemaker, 35",
    quote:
      "The meal plans are so easy to follow with Indian recipes my family loves. I've never felt better — sleeping well, stress-free, and down 2 dress sizes!",
    rating: 5,
    result: "2 Dress Sizes Down",
  },
  {
    name: "Kavitha Nair",
    role: "Business Owner, 45",
    quote:
      "Managing menopause symptoms while running a business seemed impossible. FitHer gave me the tools to feel in control again. Best investment ever!",
    rating: 5,
    result: "Menopause Relief",
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section
      id="testimonials"
      className="relative py-32 bg-[#f6f2ec]"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(216,194,158,0.18),transparent_60%)]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="uppercase tracking-wide text-xs text-[#b8945c]">
            Success Stories
          </span>

          <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] mt-4 mb-6 text-neutral-900">
            Real Women, Real Results
          </h2>

          <p className="text-neutral-600 text-lg">
            Join hundreds of women who’ve transformed their health with FitHer.
          </p>
        </div>

        {/* ================= TESTIMONIALS GRID ================= */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`rounded-3xl border border-neutral-200 bg-white/90 backdrop-blur shadow-sm transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <CardContent className="p-9">

                {/* top row */}
                <div className="flex items-start justify-between gap-4 mb-6">

                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#efe4d3]">
                      <span className="font-serif text-lg text-[#b8945c]">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-medium text-neutral-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-neutral-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#efe4d3] px-4 py-1.5 text-xs font-medium text-[#8c6b3f]">
                    {testimonial.result}
                  </span>
                </div>

                {/* stars */}
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#b8945c] text-[#b8945c]"
                    />
                  ))}
                </div>

                {/* quote */}
                <div className="relative pl-8">
                  <Quote className="absolute left-0 top-0 h-7 w-7 text-[#b8945c]/20" />
                  <p className="text-neutral-600 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Women Transformed" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "95%", label: "Success Rate" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`rounded-3xl border border-neutral-200 bg-white/90 p-8 text-center shadow-sm transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${400 + index * 90}ms` }}
            >
              <p className="mb-2 text-4xl font-semibold text-[#b8945c]">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
