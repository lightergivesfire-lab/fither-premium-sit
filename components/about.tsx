"use client"

import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-background py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* ================= IMAGE ================= */}
        <div className="relative max-w-[320px] lg:max-w-[360px] mx-auto lg:mx-0">

          {/* subtle glow */}
          <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-xl" />

          <Image
            src="/coach.jpg"
            alt="Karan Sharma — Founder"
            width={360}
            height={460}
            className="relative rounded-xl object-cover w-full"
          />
        </div>

        {/* ================= TEXT ================= */}
        <div className="max-w-md mx-auto lg:mx-0">

          <p className="text-sm text-muted-foreground mb-2">
            Founder & Coach
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground leading-tight">
            Karan Sharma
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            I help women 30+ regain control over their body, hormones, and energy
            through structured systems — not crash diets or unsustainable routines.
          </p>

          {/* 👇 EMPTY SPACE RESERVED */}
          <div className="mt-10 border-t border-border pt-6">

            <p className="text-xs text-muted-foreground">
              Certifications & Credentials
            </p>

            {/* placeholder */}
            <div className="mt-4 h-16 border border-dashed border-border rounded-lg flex items-center justify-center text-xs text-muted-foreground">
              (add certificates here)
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}