"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Heart, Leaf, ArrowRight } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border">
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-serif text-5xl font-bold text-primary">KS</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Karan Sharma</p>
                  <p className="text-xs text-muted-foreground/70">Founder & Coach</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div>
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Meet Your Coach</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {"Hi, I'm Karan Sharma — Founder of FitHer™"}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I help busy women 30+ (working professionals, postpartum moms, and homemakers) achieve sustainable fat loss, stress relief, and hormonal balance without extreme diets or hours at the gym.
              </p>
              <p>
                {"After 15+ years in the industry, I created the FitHer™ Method — a science-backed system blending fitness, lifestyle, and Ayurvedic wisdom for results that last."}
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <Award className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Certified</p>
                  <p className="text-xs text-muted-foreground">Fitness Coach</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <Heart className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Hormone</p>
                  <p className="text-xs text-muted-foreground">Specialist</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <Leaf className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Ayurvedic</p>
                  <p className="text-xs text-muted-foreground">Wellness Expert</p>
                </div>
              </div>
            </div>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact" className="flex items-center gap-2">
                Meet Your Coach
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
