import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Clock, Users, Shield, Award, Heart, ArrowLeft, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Sage Moonwhisper - Psychic Medium & Energy Healer | The Conjuring House",
  description: "Connect with Sage Moonwhisper, our gifted psychic medium and energy healer. Specializing in mediumship and energy healing with 20+ years of experience.",
  keywords: "Sage Moonwhisper, psychic medium, energy healer, mediumship, spirit communication, energy healing",
  openGraph: {
    title: "Sage Moonwhisper - Psychic Medium & Energy Healer",
    description: "Connect with Sage Moonwhisper, our gifted psychic medium and energy healer specializing in mediumship and energy healing.",
    type: "website",
  },
}

export default function SageMoonwhisperPage() {
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
                  src="/wise-older-woman-with-silver-hair-and-gentle-eyes.jpg"
                  alt="Sage Moonwhisper"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Sage Moonwhisper</h1>
                  <p className="text-xl text-muted-foreground">Psychic Medium & Energy Healer</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-lg">4.8</span>
                    <span className="text-muted-foreground">(892 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">20+ years experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Certified Medium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">800+ clients helped</span>
                </div>
              </div>

              <div className="mt-8">
                <Badge className="bg-yellow-500 text-white mb-4">Busy</Badge>
                <p className="text-lg text-muted-foreground mb-6">
                  Sage's extraordinary gift of mediumship emerged during a profound spiritual awakening in her early twenties. With over two decades of experience, she has become one of the most respected mediums in the spiritual community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8 py-4">
                    <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                      Book Reading with Sage
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
                    {["Mediumship", "Energy Healing", "Spirit Guides", "Past Life Regression", "Chakra Balancing"].map((specialty, index) => (
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
                  <p className="text-muted-foreground">Tuesday - Saturday: 10 AM - 8 PM EST</p>
                  <p className="text-sm text-muted-foreground mt-2">Languages: English</p>
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
                    <li>• Certified Medium</li>
                    <li>• Reiki Master</li>
                    <li>• Energy Healing Practitioner</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Connect with the Spirit World?</h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with Sage today and receive messages from your departed loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Reading with Sage
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
