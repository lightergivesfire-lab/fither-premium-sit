"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <div 
        ref={ref}
        className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 mb-10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">Strong · Balanced · Unstoppable</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8 text-balance">
            Transform Your{" "}
            <span className="text-primary">Body, Mind & Energy</span>
            {" "}— The FitHer Way
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
            Stress-Free Wellness for Busy Women 30+. Personalized Fat Loss, Hormone Balance & Lifestyle Coaching That Fits Your Life
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 h-auto rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
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
              className="border-border text-foreground hover:bg-muted hover:border-primary/30 text-base px-8 py-6 h-auto bg-transparent rounded-xl transition-all duration-300"
            >
              <Link href="#lead-magnet">Download Free Guide</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-20 pt-10 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-6 tracking-wide">Trusted by women across India</p>
            <div className="flex flex-wrap items-center justify-center gap-10 text-muted-foreground">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-xs tracking-wide mt-1">Women Transformed</p>
              </div>
              <div className="w-px h-10 bg-border/50" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-xs tracking-wide mt-1">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-border/50" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">4.9/5</p>
                <p className="text-xs tracking-wide mt-1">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
