"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8586916398?text=Hi!%20I'm%20interested%20in%20the%20FitHer%20program."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 sm:hover:scale-110 group"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />

      {/* Tooltip (desktop only) */}
      <span className="hidden sm:block absolute right-full mr-3 px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with us!
      </span>
    </a>
  )
}
