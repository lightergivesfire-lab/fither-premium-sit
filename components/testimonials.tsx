"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    image: "/testimonial1.png",
    text: (
      <>
        <span className="italic">
          Before FitHer, I felt completely{" "}
          <span className="text-foreground font-medium">
            stuck with PCOS and constant fatigue
          </span>.
          <br /><br />
          I tried everything — nothing worked.
          <br /><br />
          Now I've lost{" "}
          <span className="text-foreground font-medium">7 kg</span>, my energy is
          back, and I finally feel{" "}
          <span className="text-foreground font-medium">
            in control of my body again
          </span>.
        </span>
      </>
    ),
    name: "Priya Sharma",
    info: "38 • Working Mom",
    result: "Lost 7 kg",
  },
  {
    image: "/testimonial2.png",
    text: (
      <>
        <span className="italic">
          This is the first time I stayed consistent{" "}
          <span className="text-foreground font-medium">
            without burnout
          </span>.
          <br /><br />
          My energy is stable, my sleep has improved, and I finally feel{" "}
          <span className="text-foreground font-medium">
            confident in my routine
          </span>.
        </span>
      </>
    ),
    name: "Anjali Mehta",
    info: "42 • Entrepreneur",
    result: "Lost 9 kg",
  },
  {
    image: "/testimonial3.png",
    text: (
      <>
        <span className="italic">
          I didn't change my whole life — I just followed the system.
          <br /><br />
          That helped me become{" "}
          <span className="text-foreground font-medium">
            more consistent than ever
          </span>{" "}
          and finally build something I can{" "}
          <span className="text-foreground font-medium">
            sustain long-term
          </span>.
        </span>
      </>
    ),
    name: "Deepika Verma",
    info: "35 • Working Professional",
    result: "2 sizes down",
  },
]

const INTERVAL = 3500

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const startX = useRef(0)
  const paused = useRef(false)

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) {
        setIndex((prev) => (prev + 1) % testimonials.length)
      }
    }, INTERVAL)

    return () => clearInterval(id)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX
    if (diff > 50) setIndex((p) => (p + 1) % testimonials.length)
    if (diff < -50) setIndex((p) => (p - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      className="bg-background py-12 sm:py-16 scroll-mt-24"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-8 sm:mb-10 text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-muted-foreground mb-2">
            Success Stories
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight text-foreground">
            Real women.
            <span className="block">Real transformation.</span>
          </h2>
        </div>

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">

          {/* IMAGE */}
          <div className="relative w-[220px] sm:w-[260px] lg:w-[300px] h-[300px] sm:h-[340px] flex-shrink-0 mx-auto lg:mx-0">

            <div className="absolute -inset-3 bg-white/5 blur-xl rounded-xl" />

            {testimonials.map((t, i) => (
              <Image
                key={i}
                src={t.image}
                alt={t.name}
                width={300}
                height={360}
                className={`absolute inset-0 rounded-xl object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              />
            ))}
          </div>

          {/* TEXT */}
          <div className="relative w-full max-w-md h-[220px] sm:h-[240px] flex items-center text-center lg:text-left">

            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <span className="text-2xl sm:text-3xl opacity-20">“</span>

                <div className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground px-2 sm:px-0">
                  {t.text}
                </div>

                <div className="mt-5 flex items-center justify-between flex-wrap gap-3 px-2 sm:px-0">

                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.info}
                    </p>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-foreground text-background">
                    {t.result}
                  </span>

                </div>
              </div>
            ))}

          </div>

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-foreground scale-125"
                  : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}