"use client"

import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 bg-background border-b border-border/40">

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* ================= TEXT ================= */}
        <div className="space-y-5 text-center lg:text-left max-w-md mx-auto lg:mx-0">

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

          <p className="text-sm sm:text-base text-muted-foreground">
            A structured system designed to help you regain control over your body,
            hormones, and energy — built for real, lasting results.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3 justify-center lg:justify-start w-full">

            <Link
              href="#contact"
              className="w-full sm:w-auto rounded-full bg-foreground text-background px-6 py-3 text-sm text-center hover:opacity-90 transition"
            >
              Start Your Journey →
            </Link>

            <Link
              href="#program"
              className="w-full sm:w-auto rounded-full border border-border px-6 py-3 text-sm text-center text-muted-foreground hover:text-foreground transition"
            >
              Explore Program
            </Link>

          </div>

        </div>

        {/* ================= IMAGE ================= */}
        <div className="relative max-w-xs sm:max-w-sm mx-auto lg:ml-auto">

          {/* IMAGE */}
          <Image
            src="/coach.jpeg"
            alt="Karan Sharma — Founder"
            width={400}
            height={520}
            className="rounded-2xl object-cover w-full"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* CONTENT */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">

            <p className="text-[10px] uppercase tracking-wide text-white/70">
              Founder & Coach
            </p>

            <h3 className="text-base sm:text-lg font-medium">
              Karan Sharma
            </h3>

            <p className="mt-1 text-[11px] sm:text-xs text-white/70 leading-relaxed">
              Helping women 30+ regain control over their body, hormones & energy.
            </p>

            <div className="mt-3 border-t border-white/20" />

          </div>

        </div>

      </div>
    </section>
  )
}