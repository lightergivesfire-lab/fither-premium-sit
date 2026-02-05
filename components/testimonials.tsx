"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Working Mom, 38",
    quote: "Before FitHer™, I was stuck. Now I've lost 7 kg, my PCOS symptoms are under control, and I feel confident again. Karan's approach is so practical for busy moms!",
    rating: 5,
    result: "Lost 7 kg"
  },
  {
    name: "Anjali Mehta",
    role: "IT Professional, 42",
    quote: "I tried everything for my thyroid weight gain. FitHer™ was the first program that actually worked. Lost 9 kg in 3 months and my energy is through the roof!",
    rating: 5,
    result: "Lost 9 kg"
  },
  {
    name: "Deepika Reddy",
    role: "Homemaker, 35",
    quote: "The meal plans are so easy to follow with Indian recipes my family loves. I've never felt better — sleeping well, stress-free, and down 2 dress sizes!",
    rating: 5,
    result: "2 Dress Sizes Down"
  },
  {
    name: "Kavitha Nair",
    role: "Business Owner, 45",
    quote: "Managing menopause symptoms while running a business seemed impossible. FitHer™ gave me the tools to feel in control again. Best investment ever!",
    rating: 5,
    result: "Menopause Relief"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Success Stories</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Real Women, Real Results
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join hundreds of women who have transformed their health with FitHer™
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-lg font-bold text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {testimonial.result}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 w-8 h-8 text-primary/10" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {testimonial.quote}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Women Transformed" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "95%", label: "Success Rate" },
            { value: "15+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-card border border-border">
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
