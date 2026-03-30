"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border border-border rounded-b-2xl mx-4 mt-2"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl tracking-tight text-foreground">
              Fit<span className="opacity-70">Her</span>
            </span>
          </Link>

          {/* ================= NAV ================= */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight text-muted-foreground">
            <Link href="#program" className="hover:text-foreground transition">
              Program
            </Link>
            <Link href="#benefits" className="hover:text-foreground transition">
              Benefits
            </Link>
            <Link href="#testimonials" className="hover:text-foreground transition">
              Results
            </Link>
          </nav>

          {/* ================= CTA ================= */}
          <Button
            asChild
            className="hidden md:inline-flex rounded-full bg-foreground text-background px-6 py-2.5 text-sm font-medium tracking-tight hover:opacity-90 hover:scale-[1.03] transition"
          >
            <Link href="#contact">
              Start Your Journey
            </Link>
          </Button>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl bg-card/95 backdrop-blur-md border border-border p-6 flex flex-col gap-5 text-foreground tracking-tight">

          <Link onClick={() => setOpen(false)} href="#program">
            Program
          </Link>
          <Link onClick={() => setOpen(false)} href="#benefits">
            Benefits
          </Link>
          <Link onClick={() => setOpen(false)} href="#testimonials">
            Results
          </Link>

          <Button
            asChild
            className="mt-2 rounded-full bg-foreground text-background py-3 hover:opacity-90 transition"
          >
            <Link onClick={() => setOpen(false)} href="#contact">
              Start Your Journey
            </Link>
          </Button>

        </div>
      </div>
    </header>
  )
}