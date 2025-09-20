import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Shield, ExternalLink } from "lucide-react"
import Link from "next/link"
import { AFFILIATE_URLS } from "@/lib/affiliate-config"

export const metadata: Metadata = {
  title: "Professional Tarot Card Readings | Get Your Free Reading Today",
  description: "Discover your future with our expert tarot card readers. Get accurate, personalized readings for love, career, and life guidance. Free consultation available!",
  keywords: "tarot reading, tarot cards, psychic reading, fortune telling, love reading, career guidance",
  openGraph: {
    title: "Professional Tarot Card Readings | Get Your Free Reading Today",
    description: "Discover your future with our expert tarot card readers. Get accurate, personalized readings for love, career, and life guidance.",
    type: "website",
  },
}

const features = [
  {
    title: "Expert Tarot Readers",
    description: "Certified and experienced tarot card readers with years of practice",
    icon: Star,
  },
  {
    title: "Instant Readings",
    description: "Get your reading immediately - no waiting, no appointments needed",
    icon: Clock,
  },
  {
    title: "100% Confidential",
    description: "Your reading is completely private and secure",
    icon: Shield,
  },
  {
    title: "Satisfied Clients",
    description: "Join thousands of happy customers who found clarity",
    icon: Users,
  },
]

const readingTypes = [
  {
    title: "Love & Relationships",
    description: "Get insights into your romantic life, soulmate connections, and relationship guidance",
    popular: true,
    affiliateUrl: AFFILIATE_URLS.tarotLove,
  },
  {
    title: "Career & Finance",
    description: "Discover your professional path and financial opportunities",
    popular: false,
    affiliateUrl: AFFILIATE_URLS.tarotCareer,
  },
  {
    title: "General Life Reading",
    description: "Comprehensive guidance on all aspects of your life",
    popular: false,
    affiliateUrl: AFFILIATE_URLS.tarotGeneral,
  },
]

export default function TarotReadingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800">
            🔮 Most Popular Service
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get Your <span className="text-purple-600">Free Tarot Reading</span> Today
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover what the cards have to say about your future. Our expert tarot readers provide accurate, 
            personalized readings that will guide you toward your true path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-8 py-4 bg-purple-600 hover:bg-purple-700"
            >
              <a 
                href={AFFILIATE_URLS.tarot} 
                target="_blank" 
                rel="noopener noreferrer sponsored"
                className="flex items-center gap-2"
              >
                <Star className="h-5 w-5" />
                Get Free Reading Now
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Tarot Readings?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reading Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Reading Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {readingTypes.map((reading, index) => (
              <Card key={index} className={`relative ${reading.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {reading.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{reading.title}</CardTitle>
                  <CardDescription>{reading.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    asChild 
                    className={`w-full ${reading.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                  >
                    <a 
                      href={reading.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="flex items-center justify-center gap-2"
                    >
                      Start Reading
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The tarot reading was incredibly accurate and gave me the clarity I needed about my career path. Highly recommend!"
                </p>
                <p className="font-semibold text-gray-900">- Sarah M.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I was skeptical at first, but the reading about my relationship was spot on. It helped me make important decisions."
                </p>
                <p className="font-semibold text-gray-900">- Michael R.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discover Your Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied clients who found clarity and guidance through our tarot readings.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100"
          >
            <a 
              href={AFFILIATE_URLS.tarot} 
              target="_blank" 
              rel="noopener noreferrer sponsored"
              className="flex items-center gap-2"
            >
              <Star className="h-5 w-5" />
              Get Your Free Reading Now
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}



