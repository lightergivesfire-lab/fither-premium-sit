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
    <footer className="bg-card border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-14 grid md:grid-cols-3 gap-10 items-center">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.jpeg"
                alt="FitHer Studio - Strong • Balanced • Unstoppable"
                width={140}
                height={52}
                className="h-12 w-auto object-contain rounded-lg"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Stress-Free Wellness for Every Woman
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
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
                className="w-11 h-11 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FitHer Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
