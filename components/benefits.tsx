"use client"

import { Scale, Zap, Heart, Moon, CalendarCheck } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Scale,
    title: "Sustainable Fat Loss",
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
    <section
      id="benefits"
      className="bg-background py-16 sm:py-20 border-t border-border/40 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT ================= */}
        <div className="max-w-md mx-auto lg:mx-0 text-left">

          {/* HEADER */}
          <div className="mb-10">
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">
              Your Transformation
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight text-foreground">
              What actually changes
              <span className="block">when you follow the system</span>
            </h2>
          </div>

          {/* ================= TIMELINE FLOW ================= */}
          <div className="relative mt-10">

            {/* vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10">

              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 group transition-all duration-300 hover:translate-x-1"
                >

                  {/* ICON */}
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-sm group-hover:border-foreground/40 transition">

                    <b.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />

                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-base font-medium text-foreground">
                      {b.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-1 max-w-sm leading-relaxed">
                      {b.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* ================= RESULT ================= */}
          <div className="mt-12 border-t border-border pt-8">

            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Most clients experience
            </p>

            <h3 className="mt-3 font-serif text-2xl sm:text-3xl text-foreground leading-snug">
              <span className="text-primary font-semibold">
                8–10 kg fat loss
              </span>

              <span className="block text-muted-foreground font-normal text-base sm:text-lg mt-2">
                along with better energy & hormonal balance
              </span>
            </h3>

            <p className="mt-3 text-sm text-muted-foreground">
              without extreme routines or burnout
            </p>

          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex justify-center lg:justify-end">

          <div className="border border-border rounded-2xl p-6 sm:p-8 bg-card w-full max-w-sm text-center hover:scale-[1.02] transition">

            <p className="text-xs font-medium text-primary mb-3">
              FREE GUIDE
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground leading-snug">
              5 Mistakes Stopping
              <span className="block text-primary">
                Your Fat Loss
              </span>
            </h3>

            <p className="text-xs text-muted-foreground mt-2 mb-5">
              Simple fixes. Real results.
            </p>

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