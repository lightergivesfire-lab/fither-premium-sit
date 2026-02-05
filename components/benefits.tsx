"use client"

import { Scale, Zap, Heart, Moon, CalendarCheck } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const benefits = [
  {
    icon: Scale,
    title: "4-10 kg Fat Loss",
    description: "Sustainably, without crash diets or extreme measures"
  },
  {
    icon: Zap,
    title: "All-Day Energy",
    description: "Energy levels that last from morning to night"
  },
  {
    icon: Heart,
    title: "Hormonal Harmony",
    description: "Support for thyroid, PCOS, and menopause symptoms"
  },
  {
    icon: Moon,
    title: "Peaceful Sleep",
    description: "Better rest and stress mastery techniques"
  },
  {
    icon: CalendarCheck,
    title: "Sustainable Lifestyle",
    description: "A routine you can stick to, even when life gets busy"
  }
]

export function Benefits() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="benefits" className="py-28 bg-secondary/20">
      <div 
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">Your Transformation</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {"What You'll Walk Away With"}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Real, lasting changes that transform not just your body, but your entire life
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card border border-border/50 rounded-2xl p-7 h-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-5">Ready to experience these transformations?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            Start Your Journey Today
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
