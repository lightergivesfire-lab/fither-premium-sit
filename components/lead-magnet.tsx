"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, CheckCircle, BookOpen } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function LeadMagnet() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="lead-magnet" className="py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div 
        ref={ref}
        className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-14 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Free Guide</span>
                </div>
                
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5 text-balance">
                  5 Weight Loss Mistakes Women 30+ Make
                </h2>
                <p className="text-muted-foreground mb-8">
                  (And How to Fix Them)
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Why your diet keeps failing",
                    "The hormone connection you're missing",
                    "Simple swaps that actually work",
                    "The #1 exercise mistake",
                    "How to stay consistent"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Form */}
              <div>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 h-auto text-base rounded-xl"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Now — Free
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      {"We respect your privacy. Unsubscribe anytime."}
                    </p>
                  </form>
                ) : (
                  <div className="text-center p-10 bg-primary/10 rounded-2xl">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-5" />
                    <h3 className="font-semibold text-foreground text-xl mb-3">
                      Check Your Inbox!
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {"Your free guide is on its way. Don't forget to check your spam folder!"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
