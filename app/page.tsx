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
