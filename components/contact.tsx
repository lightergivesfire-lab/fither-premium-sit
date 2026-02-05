"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, CheckCircle, Phone, Mail, MessageCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    struggles: "",
    preferredTime: ""
  })
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-28 bg-secondary/20">
      <div 
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-medium mb-4 tracking-widest uppercase text-sm">Get Started</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {"Ready to Start Your Wellness Journey?"}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Book a free discovery call to discuss your goals and see if FitHer is right for you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-5">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Have questions? I'm here to help. Reach out through any of these channels or fill out the form to schedule your free consultation."}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">hello@fitherstudio.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Instagram</p>
                  <p className="text-sm text-muted-foreground">@fitherstudio</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20">
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-semibold text-foreground text-lg mb-3">Free Discovery Call</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {"30 minutes to discuss your goals, challenges, and how the FitHer Method can help you achieve lasting results."}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age" className="text-foreground font-medium">Age</Label>
                  <Select onValueChange={(value) => handleChange("age", value)}>
                    <SelectTrigger className="bg-muted/50 border-border/50 text-foreground rounded-xl h-12">
                      <SelectValue placeholder="Select your age range" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border rounded-xl">
                      <SelectItem value="25-30">25-30</SelectItem>
                      <SelectItem value="30-35">30-35</SelectItem>
                      <SelectItem value="35-40">35-40</SelectItem>
                      <SelectItem value="40-45">40-45</SelectItem>
                      <SelectItem value="45-50">45-50</SelectItem>
                      <SelectItem value="50+">50+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="struggles" className="text-foreground font-medium">Main Struggles</Label>
                  <Textarea
                    id="struggles"
                    placeholder="Tell us about your health goals and challenges..."
                    value={formData.struggles}
                    onChange={(e) => handleChange("struggles", e.target.value)}
                    rows={4}
                    className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground resize-none rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-foreground font-medium">Preferred Call Time</Label>
                  <Select onValueChange={(value) => handleChange("preferredTime", value)}>
                    <SelectTrigger className="bg-muted/50 border-border/50 text-foreground rounded-xl h-12">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border rounded-xl">
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 h-auto text-base rounded-xl"
                >
                  Book Free Discovery Call
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  {"By submitting, you agree to receive wellness tips via email. You can unsubscribe anytime."}
                </p>
              </form>
            ) : (
              <div className="text-center py-16">
                <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {"Thank You!"}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {"Your request has been received. I'll be in touch within 24 hours to schedule your free discovery call."}
                </p>
                <p className="text-sm text-primary">
                  {"In the meantime, follow us on Instagram @fitherstudio"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
