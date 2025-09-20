import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, ExternalLink, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Tarot Card Readings | The Conjuring House",
  description: "Discover insights into your past, present, and future through the ancient art of tarot. Expert tarot readers provide detailed insights into your life's journey.",
  keywords: "tarot readings, tarot cards, fortune telling, love reading, career guidance, spiritual growth",
  openGraph: {
    title: "Tarot Card Readings | The Conjuring House",
    description: "Discover insights into your past, present, and future through the ancient art of tarot.",
    type: "website",
  },
}

export default function TarotReadingsPage() {
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
                Tarot Card Readings
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Our expert tarot readers use traditional and modern decks to provide you with detailed insights into your life's journey. 
                Whether you're seeking guidance on love, career, or personal growth, tarot cards reveal the hidden truths and potential paths ahead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-4">
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                    Book Tarot Reading
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
                src="/mystical-woman-with-long-flowing-hair-and-crystal-.jpg" 
                alt="Tarot card reading session"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Discover Your Future?</h2>
          <p className="text-xl text-white/90 mb-8">
            Unlock the secrets of the tarot and gain clarity on your life's path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Tarot Reading
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
