"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  "/program1.png",
  "/program2.png",
  "/program3.png",
]

export function Program() {
  const [index, setIndex] = useState(0)

  // 🔥 AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="program"
      className="bg-background py-14 sm:py-20 border-t border-border/40 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* ================= TEXT FIRST (MOBILE) ================= */}
        <div className="order-1 lg:order-2 text-center lg:text-left max-w-md mx-auto lg:mx-0">

          <p className="text-xs sm:text-sm text-muted-foreground mb-2">
            The FitHer Method
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight text-foreground">
            Built for women who want
            <span className="block">
              results without burnout
            </span>
          </h2>

          <div className="mt-6 space-y-6 text-sm sm:text-base text-muted-foreground">

            <div className="flex gap-4 items-start justify-center lg:justify-start">
              <span className="text-muted-foreground/40 text-sm">01</span>
              <p>
                We understand your lifestyle, stress, and routine — not just your weight.
              </p>
            </div>

            <div className="flex gap-4 items-start justify-center lg:justify-start">
              <span className="text-muted-foreground/40 text-sm">02</span>
              <p>
                Your plan is designed to fit your life — simple, realistic, and sustainable.
              </p>
            </div>

            <div className="flex gap-4 items-start justify-center lg:justify-start">
              <span className="text-muted-foreground/40 text-sm">03</span>
              <p>
                You stay consistent with guidance and clarity — no confusion, no extremes.
              </p>
            </div>

          </div>

        </div>

        {/* ================= IMAGE SECOND (MOBILE) ================= */}
        <div className="order-2 lg:order-1 relative h-[300px] sm:h-[360px] mt-6 lg:mt-0 pb-6">

          {images.map((src, i) => {
            const isActive = i === index

            return (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${
                  isActive
                    ? "z-30 opacity-100 scale-100 rotate-0"
                    : "z-10 opacity-40 scale-95 rotate-[-3deg]"
                }`}
              >
                <Image
                  src={src}
                  alt={`Program ${i + 1}`}
                  fill
                  className="object-cover rounded-xl shadow-md"
                />
              </div>
            )
          })}

          {/* 🔥 DOT CONTROLS */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-foreground"
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}