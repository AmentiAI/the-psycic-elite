import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { PsychicProfiles } from "@/components/psychic-profiles"
import { Testimonials } from "@/components/testimonials"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PageBanner } from "@/components/page-banner"
import { FloatingCTA } from "@/components/floating-cta"
import { UrgentTestimonials } from "@/components/urgent-testimonials"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Conjuring House - Expert Psychic Readings & Spiritual Guidance",
  description: "Connect with gifted psychics for tarot readings, astrology, spiritual guidance, and more. Professional psychic services with certified readers. Book your reading today.",
  keywords: "psychic reading, tarot cards, astrology, spiritual guidance, psychic advisor, clairvoyant, medium, energy healing, crystal healing, dream interpretation",
  openGraph: {
    title: "The Conjuring House - Expert Psychic Readings & Spiritual Guidance",
    description: "Connect with gifted psychics for tarot readings, astrology, spiritual guidance, and more. Professional psychic services.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageBanner componentId="banner-cta" />
      <Hero />
      <UrgentTestimonials />
      <Services />
      <PsychicProfiles />
      <Testimonials />
      <BlogSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
