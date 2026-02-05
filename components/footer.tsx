"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, MessageCircle } from "lucide-react"

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#program", label: "Program" },
  { href: "#benefits", label: "Benefits" },
  { href: "#testimonials", label: "Results" },
  { href: "#lead-magnet", label: "Free Guide" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://wa.me/919876543210", icon: MessageCircle, label: "WhatsApp" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#f6f2ec] border-t border-neutral-300">

      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_rgba(216,194,158,0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-12 py-20 md:grid-cols-3 items-center">

          {/* Logo */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.jpeg"
                alt="FitHer Studio — Strong · Balanced · Unstoppable"
                width={150}
                height={60}
                className="h-12 w-auto object-contain rounded-md"
              />
            </Link>

            <p className="max-w-xs text-sm text-neutral-600">
              Transform your body, energy, and hormones — the FitHer™ way.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-600 hover:text-[#b8945c] transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white/80 text-[#8c6b3f] hover:bg-[#b8945c] hover:text-white transition"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-300 py-8 text-sm text-neutral-500">

          <p>
            © {new Date().getFullYear()} FitHer Studio. All rights reserved.
          </p>

          <div className="flex gap-8">
            <Link
              href="#"
              className="hover:text-[#b8945c] transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-[#b8945c] transition"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  )
}
