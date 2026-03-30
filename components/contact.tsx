"use client"

import { MessageCircle, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-background py-10 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* HEADLINE */}
        <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-foreground">
          Ready to take control
          <span className="block">of your body again?</span>
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 text-muted-foreground">
          No confusion. No extreme routines.
          <br />
          Just a system that works.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* WHATSAPP (PRIMARY) */}
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20know%20more%20about%20your%20program"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium bg-[#25D366] text-white hover:opacity-90 transition hover:scale-[1.03]"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>

          {/* INSTAGRAM (SECONDARY) */}
          <a
  href="https://instagram.com/YOUR_USERNAME"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm font-medium text-white 
  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
  hover:opacity-90 transition hover:scale-[1.03]"
>
  <Instagram className="w-4 h-4" />
  Follow on Instagram
</a>

        </div>

        {/* TRUST LINE */}
        <p className="mt-6 text-xs text-muted-foreground">
          Start today. Your future self will thank you.
        </p>

      </div>
    </section>
  )
}