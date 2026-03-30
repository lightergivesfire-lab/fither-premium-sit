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
    <section id="program" className="bg-background py-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT: STACKED GALLERY ================= */}
        <div className="relative h-[360px] pb-8">

          {images.map((src, i) => {
            const isActive = i === index

            return (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${
                  isActive
                    ? "z-30 opacity-100 scale-100 rotate-0"
                    : "z-10 opacity-40 scale-95 rotate-[-4deg]"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            )
          })}

          {/* 🔥 DOT CONTROLS */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">

            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-foreground"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground"
                }`}
              />
            ))}

          </div>
        </div>

        {/* ================= RIGHT: TEXT ================= */}
        <div>

          <p className="text-sm text-muted-foreground tracking-tight mb-2">
            The FitHer Method
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight leading-tight text-foreground">
            A system built for
            <span className="block">
              real women with real lives
            </span>
          </h2>

          <div className="mt-8 space-y-8">

            {/* STEP 1 */}
            <div className="flex gap-5">
              <span className="text-muted-foreground/40">01</span>
              <p className="text-muted-foreground max-w-md">
                We start by understanding your routine, stress, and lifestyle — not just your weight.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="flex gap-5">
              <span className="text-muted-foreground/40">02</span>
              <p className="text-muted-foreground max-w-md">
                Your plan is built around your life, not against it — simple, realistic, and sustainable.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="flex gap-5">
              <span className="text-muted-foreground/40">03</span>
              <p className="text-muted-foreground max-w-md">
                You stay consistent with guidance and support — no burnout, no confusion.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}   