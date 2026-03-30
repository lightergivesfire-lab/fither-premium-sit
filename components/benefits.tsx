"use client"

import { Scale, Zap, Heart, Moon, CalendarCheck } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Scale,
    title: "4–10 kg Fat Loss",
    desc: "Without extreme dieting or restriction",
  },
  {
    icon: Zap,
    title: "All-day Energy",
    desc: "No crashes, no burnout",
  },
  {
    icon: Heart,
    title: "Hormonal Balance",
    desc: "PCOS, thyroid & menopause support",
  },
  {
    icon: Moon,
    title: "Better Sleep",
    desc: "Deeper rest, lower stress",
  },
  {
    icon: CalendarCheck,
    title: "Sustainable Lifestyle",
    desc: "Fits your real routine",
  },
]

export function Benefits() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="benefits" className="bg-background py-8 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT ================= */}
        <div>

          {/* HEADER */}
          <div className="mb-12">
            <p className="text-sm text-muted-foreground mb-2">
              Your Transformation
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-foreground max-w-xl">
              What actually changes
              <span className="block">when you follow the system</span>
            </h2>
          </div>

          {/* FLOW */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-5 group">

                  <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background border border-border">
                    <b.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />
                  </div>

                  <div>
                    <h3 className="text-[15px] font-medium text-foreground">
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {b.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* RESULT */}
          <div className="mt-14 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              Most clients experience
            </p>

            <p className="text-3xl font-semibold text-foreground mt-2">
              6–8 kg fat loss
            </p>

            <p className="text-sm text-muted-foreground mt-1">
              within 12–16 weeks — without extreme routines
            </p>
          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative flex justify-center lg:justify-end">

          {/* glow */}
          <div className="absolute -inset-6 bg-primary/10 blur-2xl rounded-2xl" />

          <div className="relative border border-border rounded-2xl p-6 sm:p-8 bg-card w-full max-w-sm text-center mx-auto lg:mx-0 hover:scale-[1.02] transition">

            {/* FREE TAG */}
            <p className="text-xs font-medium text-primary mb-3">
              FREE GUIDE
            </p>

            {/* HEADLINE */}
            <h3 className="text-lg sm:text-xl font-semibold text-foreground leading-snug">
              5 Mistakes Stopping
              <span className="block text-primary">
                Your Fat Loss
              </span>
            </h3>

            {/* SUBTEXT */}
            <p className="text-xs text-muted-foreground mt-2 mb-5">
              Simple fixes. Real results.
            </p>

            {/* FORM */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">

                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-background border-border text-sm"
                />

                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background border-border text-sm"
                />

                <Button className="w-full rounded-full py-4 text-sm font-medium bg-primary text-primary-foreground">
                  Get Free Guide →
                </Button>

                <p className="text-[11px] text-muted-foreground">
                  Instant access • No spam
                </p>

              </form>
            ) : (
              <p className="text-sm text-foreground">
                Check your inbox — it's sent.
              </p>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}