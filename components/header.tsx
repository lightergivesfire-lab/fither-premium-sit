"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#program", label: "Program" },
    { href: "#benefits", label: "Benefits" },
    { href: "#testimonials", label: "Results" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-md shadow-xl border border-border/50" 
          : "bg-card/80 backdrop-blur-sm border border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="FitHer Studio - Strong • Balanced • Unstoppable"
              width={140}
              height={50}
              className="h-11 w-auto object-contain rounded-lg"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6">
              <Link href="#contact">Book Free Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-foreground p-2 hover:bg-muted rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 mt-2">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Free Call
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
