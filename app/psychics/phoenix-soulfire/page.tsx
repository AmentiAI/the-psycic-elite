import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Clock, Users, Shield, Award, Heart, ArrowLeft, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Phoenix Soulfire - Relationship Expert & Life Coach | The Conjuring House",
  description: "Connect with Phoenix Soulfire, our certified relationship expert and life coach. Specializing in love, relationships, and personal transformation with 12+ years of experience.",
  keywords: "Phoenix Soulfire, relationship expert, life coach, love readings, twin flame guidance, psychic advisor",
  openGraph: {
    title: "Phoenix Soulfire - Relationship Expert & Life Coach",
    description: "Connect with Phoenix Soulfire, our certified relationship expert and life coach specializing in love and personal transformation.",
    type: "website",
  },
}

const services = [
  "Love & Relationship Readings",
  "Twin Flame Guidance", 
  "Life Coaching Sessions",
  "Manifestation Guidance",
  "Soulmate Connections",
  "Relationship Healing"
]

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Phoenix helped me understand my relationship patterns and guided me to my soulmate. Her insights were incredibly accurate and empowering."
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "The twin flame guidance I received was life-changing. Phoenix's compassionate approach helped me navigate the most challenging time of my life."
  },
  {
    name: "Jessica L.",
    rating: 5,
    text: "Phoenix's life coaching sessions transformed my perspective on love and relationships. I'm now in the healthiest relationship of my life."
  }
]

export default function PhoenixSoulfirePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/psychics">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Psychics
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="/confident-woman-with-warm-smile-and-spiritual-jewe.jpg"
                  alt="Phoenix Soulfire"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Phoenix Soulfire</h1>
                  <p className="text-xl text-muted-foreground">Relationship Expert & Life Coach</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-lg">4.9</span>
                    <span className="text-muted-foreground">(1,089 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">12+ years experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Certified Life Coach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">1,000+ clients helped</span>
                </div>
              </div>

              <div className="mt-8">
                <Badge className="bg-green-500 text-white mb-4">Online Now</Badge>
                <p className="text-lg text-muted-foreground mb-6">
                  Phoenix's journey into spiritual guidance began after her own transformative experience with love and loss. Her unique combination of psychic insight and life coaching has helped thousands of people find their soulmates, heal from past relationships, and create the life they truly desire.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8 py-4">
                    <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                      Book Reading with Phoenix
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                    <Link href="/psychics">View All Psychics</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Specialties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Love & Relationships", "Life Coaching", "Twin Flames", "Manifestation", "Soulmate Connections"].map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Monday - Friday: 8 AM - 10 PM EST</p>
                  <p className="text-sm text-muted-foreground mt-2">Languages: English, Portuguese</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Certified Life Coach</li>
                    <li>• Relationship Specialist</li>
                    <li>• Manifestation Expert</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Services Offered</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Phoenix offers a comprehensive range of services designed to help you navigate love, relationships, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Professional guidance to help you understand and improve your relationships and personal life.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear from clients who have experienced Phoenix's transformative guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-medium text-foreground">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Love Life?</h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with Phoenix today and discover the love and happiness you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Reading with Phoenix
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              <Link href="/psychics">Meet Other Psychics</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
