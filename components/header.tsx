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
          ? "bg-white/90 backdrop-blur-md shadow-sm rounded-b-3xl mx-4 mt-2"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl text-neutral-900">
              Fit<span className="text-[#b8945c]">Her</span>
            </span>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-700">
            <Link href="#home" className="hover:text-[#b8945c] transition">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#b8945c] transition">
              About
            </Link>
            <Link href="#program" className="hover:text-[#b8945c] transition">
              Program
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-[#b8945c] transition"
            >
              Success Stories
            </Link>
            <Link href="#blog" className="hover:text-[#b8945c] transition">
              Blog
            </Link>
          </nav>

          {/* ================= DESKTOP CTA ================= */}
          <Button
            asChild
            className="hidden md:inline-flex rounded-full bg-[#b8945c] px-6 py-3 text-sm font-medium text-white hover:bg-[#a07f4a]"
          >
            <Link href="#contact">Book a Free Consultation</Link>
          </Button>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-neutral-900"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-3xl bg-white/95 backdrop-blur-md shadow-lg p-6 flex flex-col gap-5 text-neutral-800">

          <Link onClick={() => setOpen(false)} href="#home">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} href="#about">
            About
          </Link>
          <Link onClick={() => setOpen(false)} href="#program">
            Program
          </Link>
          <Link onClick={() => setOpen(false)} href="#testimonials">
            Success Stories
          </Link>
          <Link onClick={() => setOpen(false)} href="#blog">
            Blog
          </Link>

          <Button
            asChild
            className="mt-2 rounded-full bg-[#b8945c] py-3 text-white hover:bg-[#a07f4a]"
          >
            <Link onClick={() => setOpen(false)} href="#contact">
              Book a Free Consultation
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
