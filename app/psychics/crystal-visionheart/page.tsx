import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Clock, Users, Shield, Award, Heart, ArrowLeft, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Crystal Visionheart - Clairvoyant & Dream Interpreter | The Conjuring House",
  description: "Connect with Crystal Visionheart, our gifted clairvoyant and dream interpreter. Specializing in crystal healing and dream analysis with 8+ years of experience.",
  keywords: "Crystal Visionheart, clairvoyant, dream interpreter, crystal healing, aura reading, psychic advisor",
  openGraph: {
    title: "Crystal Visionheart - Clairvoyant & Dream Interpreter",
    description: "Connect with Crystal Visionheart, our gifted clairvoyant and dream interpreter specializing in crystal healing and dream analysis.",
    type: "website",
  },
}

const services = [
  "Clairvoyant Readings",
  "Dream Interpretation", 
  "Crystal Healing Sessions",
  "Aura Reading",
  "Psychic Development",
  "Crystal Therapy"
]

const testimonials = [
  {
    name: "Emma K.",
    rating: 5,
    text: "Crystal's dream interpretation was incredibly accurate. She helped me understand the messages my subconscious was trying to send me."
  },
  {
    name: "David P.",
    rating: 5,
    text: "The crystal healing session was transformative. I felt a deep sense of peace and clarity after working with Crystal."
  },
  {
    name: "Lisa M.",
    rating: 5,
    text: "Crystal's clairvoyant abilities are remarkable. She saw things about my future that no one else could have known."
  }
]

export default function CrystalVisionheartPage() {
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
                  src="/young-woman-with-bright-eyes-holding-crystals.jpg"
                  alt="Crystal Visionheart"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Crystal Visionheart</h1>
                  <p className="text-xl text-muted-foreground">Clairvoyant & Dream Interpreter</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-lg">4.7</span>
                    <span className="text-muted-foreground">(634 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">8+ years experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Certified Clairvoyant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">500+ clients helped</span>
                </div>
              </div>

              <div className="mt-8">
                <Badge className="bg-green-500 text-white mb-4">Online Now</Badge>
                <p className="text-lg text-muted-foreground mb-6">
                  Crystal discovered her clairvoyant abilities at a young age when she began having vivid, prophetic dreams. Her natural connection to the crystal realm and her ability to interpret dream symbols has made her a sought-after advisor for those seeking deeper spiritual understanding.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8 py-4">
                    <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                      Book Reading with Crystal
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
                    {["Clairvoyance", "Dream Analysis", "Crystal Healing", "Aura Reading", "Psychic Development"].map((specialty, index) => (
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
                  <p className="text-muted-foreground">Monday - Thursday: 11 AM - 7 PM EST</p>
                  <p className="text-sm text-muted-foreground mt-2">Languages: English, French</p>
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
                    <li>• Certified Clairvoyant</li>
                    <li>• Crystal Healing Practitioner</li>
                    <li>• Dream Analysis Specialist</li>
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
              Crystal offers specialized services in clairvoyance, dream interpretation, and crystal healing.
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
                    Professional guidance to help you understand your dreams and develop your psychic abilities.
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
              Hear from clients who have experienced Crystal's unique gifts.
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Unlock Your Dreams?</h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with Crystal today and discover the hidden messages in your dreams and subconscious.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Reading with Crystal
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
