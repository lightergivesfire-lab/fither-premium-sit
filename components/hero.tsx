"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"
import { useRef } from "react"

export function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const btnRef = useRef<HTMLAnchorElement>(null)

  // 🔥 MAGNETIC BUTTON EFFECT
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = btnRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const reset = () => {
    if (btnRef.current) btnRef.current.style.transform = "translate(0,0)"
  }

  return (
    <section className="relative pt-20 pb-14 sm:pt-24 sm:pb-16 bg-background overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_40%)]" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center reveal ${
          visible ? "show" : ""
        }`}
      >

        {/* LEFT CONTENT */}
        <div className="space-y-5 text-center lg:text-left">

          <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">
            Wellness for Women 30+
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground">
            Transform Your Body,
            <span className="block">
              Mind & Energy —
            </span>
            <span className="text-primary">
              Without Burnout
            </span>
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto lg:mx-0">
            A structured system designed to help you regain control over your body,
            hormones, and energy — built for real, lasting results.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3 justify-center lg:justify-start">

            {/* MAGNETIC BUTTON */}
            <Link
              ref={btnRef}
              href="#contact"
              onMouseMove={handleMouseMove}
              onMouseLeave={reset}
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 sm:px-8 sm:py-4 text-sm transition-all duration-300"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* SECOND BUTTON */}
            <Link
              href="#program"
              className="rounded-full border border-border px-6 py-3 sm:px-8 sm:py-4 text-sm text-muted-foreground hover:text-foreground transition"
            >
              Explore Program
            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative glow-card rounded-2xl overflow-hidden max-w-sm mx-auto lg:ml-auto"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`)
            e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`)
          }}
        >

          {/* glow layer */}
          <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-2xl" />

          <Image
            src="/coach.jpeg"
            alt="Coach"
            width={400}
            height={520}
            className="relative rounded-2xl object-cover w-full"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        </div>

      </div>
    </section>
  )
}