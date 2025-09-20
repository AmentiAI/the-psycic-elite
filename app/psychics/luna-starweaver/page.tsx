import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Clock, Users, Shield, Award, Heart, ArrowLeft, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Luna Starweaver - Master Tarot Reader & Astrologer | The Conjuring House",
  description: "Connect with Luna Starweaver, our master tarot reader and astrologer. Specializing in tarot readings and birth chart analysis with 15+ years of experience.",
  keywords: "Luna Starweaver, tarot reader, astrologer, birth chart analysis, love readings, psychic advisor",
  openGraph: {
    title: "Luna Starweaver - Master Tarot Reader & Astrologer",
    description: "Connect with Luna Starweaver, our master tarot reader and astrologer specializing in tarot readings and birth chart analysis.",
    type: "website",
  },
}

export default function LunaStarweaverPage() {
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
                  src="/mystical-woman-with-long-flowing-hair-and-crystal-.jpg"
                  alt="Luna Starweaver"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Luna Starweaver</h1>
                  <p className="text-xl text-muted-foreground">Master Tarot Reader & Astrologer</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-lg">4.9</span>
                    <span className="text-muted-foreground">(1,247 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">15+ years experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Certified Tarot Master</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">1,200+ clients helped</span>
                </div>
              </div>

              <div className="mt-8">
                <Badge className="bg-green-500 text-white mb-4">Online Now</Badge>
                <p className="text-lg text-muted-foreground mb-6">
                  Luna's journey into the mystical arts began in her childhood when she first felt the pull of the cosmos. With over 15 years of professional experience, she has developed a unique approach that combines traditional tarot wisdom with modern psychological insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8 py-4">
                    <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                      Book Reading with Luna
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
                    {["Tarot", "Astrology", "Love Readings", "Birth Chart Analysis", "Career Guidance"].map((specialty, index) => (
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
                  <p className="text-muted-foreground">Monday - Friday: 9 AM - 9 PM EST</p>
                  <p className="text-sm text-muted-foreground mt-2">Languages: English, Spanish</p>
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
                    <li>• Certified Tarot Master</li>
                    <li>• Professional Astrologer</li>
                    <li>• Reiki Level 3</li>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Discover Your Future?</h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with Luna today and unlock the secrets of the tarot and stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Reading with Luna
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
