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
  CheckCircle
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Dumbbell,
    title: "Personalized 12-Week Workout Plan",
    description: "15-30 min/day workouts designed for busy schedules"
  },
  {
    icon: UtensilsCrossed,
    title: "Easy Indian Meal Plans",
    description: "Veg/Non-Veg, gluten-free, thyroid-friendly options"
  },
  {
    icon: Brain,
    title: "Hormone & Stress Reset Tools",
    description: "Science-backed techniques for hormonal balance"
  },
  {
    icon: Video,
    title: "Bi-weekly 1:1 Coaching Calls",
    description: "Personal guidance and accountability sessions"
  },
  {
    icon: Users,
    title: "Private WhatsApp Group",
    description: "Community support and daily motivation"
  },
  {
    icon: Clock,
    title: "Sleep, Gut & Time Framework",
    description: "Holistic approach to wellness management"
  }
]

export function Program() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="program" className="py-28 bg-background">
      <div 
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">Signature Program</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            The FitHer Lifestyle Lean Method
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A 90-day coaching program for real women who want real results without burnout
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border/50 hover:border-primary/30 transition-all duration-500 group rounded-2xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-7">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Highlights */}
        <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
                {"What's Included in Your 90-Day Transformation"}
              </h3>
              <ul className="space-y-5">
                {[
                  "Personalized fitness assessment & goal setting",
                  "Custom meal plans with Indian recipes",
                  "Weekly check-ins and progress tracking",
                  "Access to exclusive workout library",
                  "Mindfulness and stress management tools",
                  "Lifetime access to course materials"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted/50 rounded-2xl p-10 text-center">
              <p className="text-muted-foreground mb-3 tracking-wide text-sm">Investment in Yourself</p>
              <div className="mb-5">
                <span className="text-5xl font-bold text-foreground">₹24,999</span>
                <span className="text-muted-foreground ml-3 line-through text-lg">₹39,999</span>
              </div>
              <p className="text-sm text-primary mb-8 font-medium">Limited Time Offer — Save ₹15,000</p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 h-auto text-base">
                  <Link href="#contact" className="flex items-center justify-center gap-2">
                    Join the Program
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-border text-foreground hover:bg-muted bg-transparent rounded-xl py-6 h-auto">
                  <Link href="#contact">Book a Free Discovery Call</Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-5">EMI options available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
