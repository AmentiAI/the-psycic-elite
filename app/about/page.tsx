import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Users, Award, Shield, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | The Conjuring House - Premier Psychic Services",
  description: "Learn about The Conjuring House, trusted psychic services provider. Discover our mission, values, and the gifted psychics who make up our team.",
  keywords: "about us, psychic services, spiritual guidance, team, mission, values, psychic readers, spiritual advisors",
  openGraph: {
    title: "About Us | The Conjuring House",
    description: "Learn about The Conjuring House, trusted psychic services provider and our mission to provide spiritual guidance.",
    type: "website",
  },
}

const values = [
  {
    title: "Authenticity",
    description: "We believe in genuine spiritual guidance and authentic psychic abilities. Every reading is conducted with honesty and integrity.",
    icon: Heart
  },
  {
    title: "Compassion",
    description: "Our psychics approach every client with empathy and understanding, providing gentle guidance during life's most challenging moments.",
    icon: Users
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in all our services, ensuring every client receives the best possible spiritual guidance.",
    icon: Award
  },
  {
    title: "Privacy",
    description: "Your personal information and reading details are completely confidential. We respect your privacy and maintain strict confidentiality.",
    icon: Shield
  }
]

const team = [
  {
    name: "Luna Starweaver",
    role: "Master Tarot Reader & Astrologer",
    experience: "15+ years",
    specialty: "Tarot and Astrology"
  },
  {
    name: "Sage Moonwhisper", 
    role: "Psychic Medium & Energy Healer",
    experience: "20+ years",
    specialty: "Mediumship and Energy Healing"
  },
  {
    name: "Crystal Visionheart",
    role: "Clairvoyant & Dream Interpreter", 
    experience: "8+ years",
    specialty: "Dream Analysis and Crystal Healing"
  },
  {
    name: "Phoenix Soulfire",
    role: "Relationship Expert & Life Coach",
    experience: "12+ years", 
    specialty: "Love and Relationship Guidance"
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            About The Conjuring House
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            For over a decade, The Conjuring House has been Rhode Island's most trusted source for authentic 
            psychic services and spiritual guidance. We are dedicated to helping you find clarity, peace, 
            and direction in your life's journey.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At The Conjuring House, our mission is to provide authentic, compassionate, and accurate 
                spiritual guidance to help you navigate life's challenges and discover your true potential. 
                We believe that everyone deserves access to genuine psychic insight and spiritual wisdom.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our team of gifted psychics, mediums, and spiritual advisors has dedicated their lives to 
                developing their abilities and helping others. Each reading is conducted with the highest 
                level of professionalism, integrity, and respect for your spiritual journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                    Book Your Reading
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/psychics">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/mystical-forest-with-ethereal-light-rays-and-spiri.jpg" 
                alt="Mystical forest representing our spiritual journey"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and ensure that every client receives the highest quality spiritual guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Gifted Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our psychics are carefully selected for their accuracy, compassion, and dedication to helping you find clarity and peace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Experience:</strong> {member.experience}</p>
                    <p><strong>Specialty:</strong> {member.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/psychics">View All Psychics</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              The Conjuring House was founded in 2010 with a simple yet profound mission: to provide authentic 
              spiritual guidance to those seeking answers and clarity in their lives. What began as a small 
              practice in Providence, Rhode Island, has grown into one of the most respected psychic services 
              in the region.
            </p>
            <p>
              Our founder, recognizing the need for genuine spiritual guidance in an increasingly complex world, 
              carefully selected each member of our team based on their natural gifts, professional training, 
              and commitment to helping others. Today, we're proud to serve clients from all walks of life, 
              providing guidance on love, career, family, and spiritual growth.
            </p>
            <p>
              We believe that everyone has the right to access authentic psychic insight and spiritual wisdom. 
              Our commitment to excellence, integrity, and compassion has made us the trusted choice for 
              thousands of clients seeking guidance and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Spiritual Journey?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of clients who have found clarity, peace, and direction through our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Your Reading Today
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
