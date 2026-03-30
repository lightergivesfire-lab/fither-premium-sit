"use client"

import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* ================= TOP ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* BRAND */}
          <div className="text-center md:text-left">

            <h3 className="font-serif text-xl text-foreground">
              Fit<span className="text-primary">Her</span>
            </h3>

            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Strong. Balanced. Sustainable.
            </p>

          </div>

          {/* LINKS */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">

            <Link href="#about" className="hover:text-foreground transition">
              About
            </Link>

            <Link href="#program" className="hover:text-foreground transition">
              Program
            </Link>

            <Link href="#benefits" className="hover:text-foreground transition">
              Benefits
            </Link>

            <Link href="#testimonials" className="hover:text-foreground transition">
              Results
            </Link>

            <Link href="#contact" className="hover:text-foreground transition">
              Contact
            </Link>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-3">

            {/* WhatsApp */}
            <a
              href="https://wa.me/8586916398?text=Hi!%20I%27m%20interested%20in%20the%20FitHer%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-white hover:bg-[#25D366] transition"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/Karan_fitindia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition"
            >
              <Instagram className="w-4 h-4" />
            </a>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">

          <p>
            © {new Date().getFullYear()} FitHer Studio
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition">
              Terms
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}