"use client"

import Link from "next/link"
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
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="relative h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-serif text-primary-foreground font-bold text-lg">F</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-foreground tracking-wide">
                  FitHer<span className="text-primary">™</span>
                </span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  Studio
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Stress-Free Wellness for Every Woman
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FitHer™ Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
