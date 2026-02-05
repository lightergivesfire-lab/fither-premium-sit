"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Calendar,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    struggles: "",
    preferredTime: "",
  })

  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#f4efe8]"
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(200,180,140,0.16),transparent_60%)]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-24">

          <span className="uppercase tracking-wide text-[11px] sm:text-xs text-[#b8945c]">
            Get Started
          </span>

          <h2 className="font-serif text-[2rem] sm:text-[2.4rem] md:text-5xl leading-[1.15] mt-3 mb-4 sm:mb-6 text-neutral-900">
            Ready to Start Your Wellness Journey?
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg">
            Book a free discovery call to discuss your goals and see if FitHer is
            right for you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">

          {/* ================= INFO ================= */}
          <div className="space-y-10">

            <div>
              <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4 text-neutral-900">
                Get in Touch
              </h3>
              <p className="text-neutral-600 leading-relaxed max-w-md">
                Have questions? Reach out through any channel or book a call
                using the form.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">

              {[
                {
                  icon: Phone,
                  label: "WhatsApp",
                  value: "+91 98765 43210",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@fitherstudio.com",
                },
                {
                  icon: MessageCircle,
                  label: "Instagram",
                  value: "@fitherstudio",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-3xl border border-neutral-300 bg-white/90 p-4 sm:p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#efe4d3]">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#b8945c]" />
                  </div>

                  <div>
                    <p className="font-medium text-neutral-900">
                      {label}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {value}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            <div className="rounded-3xl border border-neutral-300 bg-[#ebe3d8] p-6 sm:p-8">

              <Calendar className="h-8 w-8 sm:h-9 sm:w-9 text-[#b8945c] mb-3 sm:mb-4" />

              <h4 className="font-medium text-neutral-900 text-base sm:text-lg mb-2 sm:mb-3">
                Free Discovery Call
              </h4>

              <p className="text-sm text-neutral-700 leading-relaxed">
                30 minutes to discuss your goals, challenges, and how the
                FitHer™ Method can help you achieve lasting results.
              </p>
            </div>

          </div>

          {/* ================= FORM ================= */}
          <div className="rounded-[2.5rem] sm:rounded-[3rem] border border-neutral-300 bg-white/95 p-6 sm:p-10 shadow-sm">

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

                <div>
                  <Label className="text-neutral-900 font-medium">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      handleChange("name", e.target.value)
                    }
                    required
                    className="mt-2 h-11 sm:h-12 rounded-xl border-neutral-300 bg-[#faf7f2]"
                  />
                </div>

                <div>
                  <Label className="text-neutral-900 font-medium">
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      handleChange("email", e.target.value)
                    }
                    required
                    className="mt-2 h-11 sm:h-12 rounded-xl border-neutral-300 bg-[#faf7f2]"
                  />
                </div>

                <div>
                  <Label className="text-neutral-900 font-medium">
                    Age Range
                  </Label>

                  <Select
                    onValueChange={(value) =>
                      handleChange("age", value)
                    }
                  >
                    <SelectTrigger className="mt-2 h-11 sm:h-12 rounded-xl border-neutral-300 bg-[#faf7f2]">
                      <SelectValue placeholder="Select your age range" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="25-30">25–30</SelectItem>
                      <SelectItem value="30-35">30–35</SelectItem>
                      <SelectItem value="35-40">35–40</SelectItem>
                      <SelectItem value="40-45">40–45</SelectItem>
                      <SelectItem value="45-50">45–50</SelectItem>
                      <SelectItem value="50+">50+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-neutral-900 font-medium">
                    Main Struggles
                  </Label>
                  <Textarea
                    rows={4}
                    placeholder="Tell us about your health goals and challenges..."
                    value={formData.struggles}
                    onChange={(e) =>
                      handleChange("struggles", e.target.value)
                    }
                    className="mt-2 resize-none rounded-xl border-neutral-300 bg-[#faf7f2]"
                  />
                </div>

                <div>
                  <Label className="text-neutral-900 font-medium">
                    Preferred Call Time
                  </Label>

                  <Select
                    onValueChange={(value) =>
                      handleChange("preferredTime", value)
                    }
                  >
                    <SelectTrigger className="mt-2 h-11 sm:h-12 rounded-xl border-neutral-300 bg-[#faf7f2]">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="morning">
                        Morning (9–12)
                      </SelectItem>
                      <SelectItem value="afternoon">
                        Afternoon (12–5)
                      </SelectItem>
                      <SelectItem value="evening">
                        Evening (5–8)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-[#b8945c] py-5 sm:py-6 h-auto text-white hover:bg-[#a07f4a]"
                >
                  Book Free Discovery Call
                </Button>

                <p className="text-xs text-center text-neutral-500">
                  By submitting, you agree to receive wellness tips via email.
                  You can unsubscribe anytime.
                </p>

              </form>
            ) : (
              <div className="py-16 sm:py-20 text-center">

                <CheckCircle className="h-14 w-14 sm:h-16 sm:w-16 text-[#b8945c] mx-auto mb-5 sm:mb-6" />

                <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 mb-3 sm:mb-4">
                  Thank You!
                </h3>

                <p className="text-neutral-600 mb-5 sm:mb-6">
                  Your request has been received. We’ll contact you within 24
                  hours to schedule your free call.
                </p>

                <p className="text-sm text-[#b8945c]">
                  Follow us on Instagram @fitherstudio
                </p>

              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  )
}
