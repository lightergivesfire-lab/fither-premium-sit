// FitHer Landing Page
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Program } from "@/components/program"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { LeadMagnet } from "@/components/lead-magnet"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Program />
      <Benefits />
      <Testimonials />
      <LeadMagnet />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
