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
    <section
      id="lead-magnet"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#f6f2ec] overflow-hidden"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,180,140,0.18),transparent_60%)]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-5xl mx-auto">

          <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border border-neutral-300 bg-[#f6f1ea] p-6 sm:p-10 lg:p-16 shadow-sm">

            {/* accent orb */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-[#e3d4b8] blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

              {/* ================= CONTENT ================= */}
              <div>

                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#efe4d3] px-4 sm:px-5 py-2 text-xs sm:text-sm text-[#8c6b3f] border border-[#e0cfb4]">
                  <BookOpen className="h-4 w-4" />
                  Free Guide
                </div>

                <h2 className="font-serif text-[1.7rem] sm:text-3xl md:text-4xl leading-tight text-neutral-900 mb-3 sm:mb-4">
                  5 Weight-Loss Mistakes Women 30+ Make
                </h2>

                <p className="text-neutral-600 mb-7 sm:mb-10">
                  (And exactly how to fix them using science-backed systems.)
                </p>

                <ul className="space-y-4 sm:space-y-5">
                  {[
                    "Why your diet keeps failing",
                    "The hormone connection you’re missing",
                    "Simple Indian-meal swaps that work",
                    "The #1 exercise mistake",
                    "How to stay consistent long-term",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-neutral-700"
                    >
                      <CheckCircle className="h-5 w-5 text-[#b8945c] mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

              </div>

              {/* ================= FORM ================= */}
              <div>

                {!isSubmitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-3xl bg-white/90 p-6 sm:p-8 border border-neutral-300 shadow-sm space-y-4 sm:space-y-5"
                  >
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-11 sm:h-12 rounded-xl border-neutral-300 bg-[#faf7f2]"
                    />

                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11 sm:h-12 rounded-xl border-neutral-300 bg-[#faf7f2]"
                    />

                    <Button
                      type="submit"
                      className="w-full rounded-full bg-[#b8945c] py-5 sm:py-6 h-auto text-white hover:bg-[#a07f4a]"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Free Guide
                    </Button>

                    <p className="text-xs text-center text-neutral-500">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </form>
                ) : (
                  <div className="rounded-3xl bg-white/90 border border-neutral-300 p-8 sm:p-10 text-center shadow-sm">
                    <CheckCircle className="h-12 w-12 sm:h-14 sm:w-14 text-[#b8945c] mx-auto mb-5 sm:mb-6" />

                    <h3 className="font-medium text-neutral-900 text-lg sm:text-xl mb-2 sm:mb-3">
                      Check Your Inbox
                    </h3>

                    <p className="text-neutral-600 text-sm">
                      Your free guide is on its way. Please check spam or
                      promotions if you don’t see it.
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
