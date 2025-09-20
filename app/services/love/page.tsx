import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, ExternalLink, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Love & Relationship Readings | The Conjuring House",
  description: "Find clarity in matters of the heart and discover your romantic destiny. Get specialized readings focused on your romantic life and relationships.",
  keywords: "love readings, relationship guidance, soulmate, twin flame, love compatibility, relationship healing",
  openGraph: {
    title: "Love & Relationship Readings | The Conjuring House",
    description: "Find clarity in matters of the heart and discover your romantic destiny.",
    type: "website",
  },
}

export default function LoveReadingsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/services">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Services
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Love & Relationship Readings
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Navigate the complex world of love and relationships with specialized readings focused on your romantic life. 
                Whether you're single, dating, or in a committed relationship, gain insights into your love patterns and future romantic possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-4">
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                    Book Love Reading
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/confident-woman-with-warm-smile-and-spiritual-jewe.jpg" 
                alt="Love and relationship reading"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Soulmate?</h2>
          <p className="text-xl text-white/90 mb-8">
            Discover the love and happiness you deserve with our specialized relationship guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Love Reading
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              <Link href="/psychics">Meet Our Psychics</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
