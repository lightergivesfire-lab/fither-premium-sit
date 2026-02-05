"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Heart, Leaf, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="about" className="py-28 bg-secondary/20">
      <div 
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-card border border-border/50 shadow-2xl">
              <Image
                src="/coach.jpg"
                alt="Karan Sharma - Founder & Coach of FitHer Studio"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-primary/10 rounded-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-40 h-40 border-2 border-primary/20 rounded-3xl -z-10" />
          </div>

          {/* Content Column */}
          <div>
            <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">Meet Your Coach</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance leading-tight">
              {"Hi, I'm Karan Sharma — Founder of FitHer Studio"}
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p className="text-lg">
                I help busy women 30+ (working professionals, postpartum moms, and homemakers) achieve sustainable fat loss, stress relief, and hormonal balance without extreme diets or hours at the gym.
              </p>
              <p>
                {"After 15+ years in the industry, I created the FitHer Method — a science-backed system blending fitness, lifestyle, and Ayurvedic wisdom for results that last."}
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300">
                <Award className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Certified</p>
                  <p className="text-xs text-muted-foreground">Fitness Coach</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300">
                <Heart className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Hormone</p>
                  <p className="text-xs text-muted-foreground">Specialist</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300">
                <Leaf className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Ayurvedic</p>
                  <p className="text-xs text-muted-foreground">Wellness Expert</p>
                </div>
              </div>
            </div>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 h-auto">
              <Link href="#contact" className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
