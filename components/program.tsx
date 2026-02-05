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
  return (
    <section id="program" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Signature Program</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            The FitHer™ Lifestyle Lean Method™
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A 90-day coaching program for real women who want real results without burnout
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-colors group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Highlights */}
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
                {"What's Included in Your 90-Day Transformation"}
              </h3>
              <ul className="space-y-4">
                {[
                  "Personalized fitness assessment & goal setting",
                  "Custom meal plans with Indian recipes",
                  "Weekly check-ins and progress tracking",
                  "Access to exclusive workout library",
                  "Mindfulness and stress management tools",
                  "Lifetime access to course materials"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted rounded-xl p-8 text-center">
              <p className="text-muted-foreground mb-2">Investment in Yourself</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">₹24,999</span>
                <span className="text-muted-foreground ml-2 line-through">₹39,999</span>
              </div>
              <p className="text-sm text-primary mb-6">Limited Time Offer - Save ₹15,000</p>
              <div className="space-y-3">
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#contact" className="flex items-center justify-center gap-2">
                    Join the Program
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-primary/50 text-foreground hover:bg-primary/10 bg-transparent">
                  <Link href="#contact">Book a Free Discovery Call</Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">EMI options available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
