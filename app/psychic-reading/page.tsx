import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Clock, Users, Shield, ExternalLink, Sparkles } from "lucide-react"
import Link from "next/link"
import { AFFILIATE_URLS } from "@/lib/affiliate-config"

export const metadata: Metadata = {
  title: "Professional Psychic Readings | Connect with Expert Psychics",
  description: "Get accurate psychic readings from certified psychics. Love, career, and life guidance available 24/7. Free consultation with our top-rated psychics!",
  keywords: "psychic reading, psychic advisor, spiritual guidance, clairvoyant, medium, psychic consultation",
  openGraph: {
    title: "Professional Psychic Readings | Connect with Expert Psychics",
    description: "Get accurate psychic readings from certified psychics. Love, career, and life guidance available 24/7.",
    type: "website",
  },
}

const features = [
  {
    title: "Certified Psychics",
    description: "All our psychics are verified and have years of experience",
    icon: Eye,
  },
  {
    title: "Available 24/7",
    description: "Get instant readings anytime, day or night",
    icon: Clock,
  },
  {
    title: "100% Private",
    description: "Your reading is completely confidential and secure",
    icon: Shield,
  },
  {
    title: "Satisfied Clients",
    description: "Join thousands who found clarity and guidance",
    icon: Users,
  },
]

const psychicTypes = [
  {
    title: "Love & Relationships",
    description: "Get insights into your romantic life and find your soulmate",
    popular: true,
    features: ["Soulmate Reading", "Relationship Healing", "Love Compatibility", "Twin Flame Guidance"],
    affiliateUrl: AFFILIATE_URLS.psychicLove,
  },
  {
    title: "Career & Finance",
    description: "Discover your professional path and financial opportunities",
    popular: false,
    features: ["Career Guidance", "Financial Outlook", "Business Decisions", "Success Path"],
    affiliateUrl: AFFILIATE_URLS.psychicCareer,
  },
  {
    title: "General Life Reading",
    description: "Comprehensive guidance on all aspects of your life",
    popular: false,
    features: ["Life Purpose", "Spiritual Growth", "Personal Development", "Future Insights"],
    affiliateUrl: AFFILIATE_URLS.psychicGeneral,
  },
]

export default function PsychicReadingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800">
            🔮 Expert Psychics Available
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect with <span className="text-indigo-600">Expert Psychics</span> Today
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get accurate psychic readings from certified psychics. Our gifted advisors provide profound insights 
            into your love life, career, and spiritual journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="text-lg px-8 py-4 bg-indigo-600 hover:bg-indigo-700"
            >
              <a 
                href={AFFILIATE_URLS.psychic} 
                target="_blank" 
                rel="noopener noreferrer sponsored"
                className="flex items-center gap-2"
              >
                <Eye className="h-5 w-5" />
                Get Free Reading
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
            Why Choose Our Psychic Readings?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-indigo-100 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-indigo-600" />
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

      {/* Psychic Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Reading Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {psychicTypes.map((reading, index) => (
              <Card key={index} className={`relative ${reading.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {reading.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{reading.title}</CardTitle>
                  <CardDescription>{reading.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="text-sm text-gray-600 mb-6 space-y-2">
                    {reading.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Sparkles className="h-4 w-4 text-indigo-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${reading.popular ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`}
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

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Reading</h3>
              <p className="text-gray-600">Select the type of psychic reading that interests you most</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect with a Psychic</h3>
              <p className="text-gray-600">Get matched with a certified psychic who specializes in your area of interest</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Reading</h3>
              <p className="text-gray-600">Receive your personalized reading and gain clarity on your questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Connect with Your Psychic?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied clients who found clarity and guidance through our psychic readings.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-8 py-4 bg-white text-indigo-600 hover:bg-gray-100"
          >
            <a 
              href={AFFILIATE_URLS.psychic} 
              target="_blank" 
              rel="noopener noreferrer sponsored"
              className="flex items-center gap-2"
            >
              <Eye className="h-5 w-5" />
              Get Your Free Reading Now
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}



