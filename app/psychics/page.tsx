import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PsychicProfiles } from "@/components/psychic-profiles"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Clock, Users, Shield, Award, Heart, Eye, Zap, Moon, Sun } from "lucide-react"

export const metadata: Metadata = {
  title: "Meet Our Gifted Psychics | Certified Spiritual Advisors",
  description: "Discover our team of certified psychics, mediums, and spiritual advisors. Each with unique gifts and decades of experience to guide you on your spiritual journey.",
  keywords: "psychics, spiritual advisors, mediums, tarot readers, astrologers, energy healers",
  openGraph: {
    title: "Meet Our Gifted Psychics | Certified Spiritual Advisors",
    description: "Discover our team of certified psychics, mediums, and spiritual advisors with unique gifts and decades of experience.",
    type: "website",
  },
}

const psychics = [
  {
    id: "luna-starweaver",
    name: "Luna Starweaver",
    title: "Master Tarot Reader & Astrologer",
    image: "/mystical-woman-with-long-flowing-hair-and-crystal-.jpg",
    rating: 4.9,
    reviews: 1247,
    experience: "15+ years",
    specialties: ["Tarot", "Astrology", "Love Readings"],
    description: "Luna has been guiding souls for over 15 years with her intuitive tarot readings and deep astrological knowledge. Her compassionate approach helps clients find clarity in love, career, and spiritual growth.",
    status: "online",
    detailedDescription: "Luna's journey into the mystical arts began in her childhood when she first felt the pull of the cosmos. With over 15 years of professional experience, she has developed a unique approach that combines traditional tarot wisdom with modern psychological insights. Her readings are known for their accuracy and compassionate guidance, helping thousands of clients navigate life's most challenging moments.",
    services: ["Tarot Card Readings", "Birth Chart Analysis", "Love & Relationship Guidance", "Career Path Reading", "Spiritual Growth Sessions"],
    availability: "Monday - Friday: 9 AM - 9 PM EST",
    languages: ["English", "Spanish"],
    certifications: ["Certified Tarot Master", "Professional Astrologer", "Reiki Level 3"]
  },
  {
    id: "sage-moonwhisper",
    name: "Sage Moonwhisper",
    title: "Psychic Medium & Energy Healer",
    image: "/wise-older-woman-with-silver-hair-and-gentle-eyes.jpg",
    rating: 4.8,
    reviews: 892,
    experience: "20+ years",
    specialties: ["Mediumship", "Energy Healing", "Spirit Guides"],
    description: "Sage connects with the spirit world to bring messages of healing and hope. Her gift for mediumship and energy healing has helped thousands find peace and closure.",
    status: "busy",
    detailedDescription: "Sage's extraordinary gift of mediumship emerged during a profound spiritual awakening in her early twenties. With over two decades of experience, she has become one of the most respected mediums in the spiritual community. Her gentle yet powerful connection to the spirit world has brought comfort and closure to countless families seeking to communicate with their departed loved ones.",
    services: ["Mediumship Sessions", "Energy Healing", "Spirit Guide Communication", "Past Life Regression", "Chakra Balancing"],
    availability: "Tuesday - Saturday: 10 AM - 8 PM EST",
    languages: ["English"],
    certifications: ["Certified Medium", "Reiki Master", "Energy Healing Practitioner"]
  },
  {
    id: "crystal-visionheart",
    name: "Crystal Visionheart",
    title: "Clairvoyant & Dream Interpreter",
    image: "/young-woman-with-bright-eyes-holding-crystals.jpg",
    rating: 4.7,
    reviews: 634,
    experience: "8+ years",
    specialties: ["Clairvoyance", "Dream Analysis", "Crystal Healing"],
    description: "Crystal's natural clairvoyant abilities allow her to see beyond the veil and interpret the messages in your dreams. Her crystal healing sessions bring balance and clarity.",
    status: "online",
    detailedDescription: "Crystal discovered her clairvoyant abilities at a young age when she began having vivid, prophetic dreams. Her natural connection to the crystal realm and her ability to interpret dream symbols has made her a sought-after advisor for those seeking deeper spiritual understanding. Her gentle, intuitive approach helps clients unlock the wisdom within their own subconscious.",
    services: ["Clairvoyant Readings", "Dream Interpretation", "Crystal Healing", "Aura Reading", "Psychic Development"],
    availability: "Monday - Thursday: 11 AM - 7 PM EST",
    languages: ["English", "French"],
    certifications: ["Certified Clairvoyant", "Crystal Healing Practitioner", "Dream Analysis Specialist"]
  },
  {
    id: "phoenix-soulfire",
    name: "Phoenix Soulfire",
    title: "Relationship Expert & Life Coach",
    image: "/confident-woman-with-warm-smile-and-spiritual-jewe.jpg",
    rating: 4.9,
    reviews: 1089,
    experience: "12+ years",
    specialties: ["Love & Relationships", "Life Coaching", "Twin Flames"],
    description: "Phoenix specializes in matters of the heart and personal transformation. Her empowering readings help clients overcome obstacles and manifest their deepest desires.",
    status: "online",
    detailedDescription: "Phoenix's journey into spiritual guidance began after her own transformative experience with love and loss. Her unique combination of psychic insight and life coaching has helped thousands of people find their soulmates, heal from past relationships, and create the life they truly desire. Her readings are known for their empowering and actionable guidance.",
    services: ["Love & Relationship Readings", "Twin Flame Guidance", "Life Coaching", "Manifestation Sessions", "Soulmate Connections"],
    availability: "Monday - Friday: 8 AM - 10 PM EST",
    languages: ["English", "Portuguese"],
    certifications: ["Certified Life Coach", "Relationship Specialist", "Manifestation Expert"]
  }
]

const features = [
  {
    title: "Certified Psychics",
    description: "All our psychics are verified and have years of experience",
    icon: Award,
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

export default function PsychicsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Meet Our Gifted Spiritual Guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            Discover our extraordinary team of gifted psychics, mediums, and spiritual advisors who have dedicated their lives to serving the divine and guiding souls toward their highest potential. Each master practitioner brings decades of experience, unique spiritual gifts, and profound wisdom to illuminate your path with love, compassion, and divine insight.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Psychic Profiles */}
      <PsychicProfiles />

      {/* Detailed Psychic Information */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Psychics?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our psychics are carefully selected for their accuracy, compassion, and dedication to helping you find clarity and peace.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {psychics.map((psychic) => (
              <Card key={psychic.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={psychic.image}
                      alt={psychic.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-xl">{psychic.name}</CardTitle>
                      <CardDescription>{psychic.title}</CardDescription>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{psychic.rating}</span>
                        <span className="text-muted-foreground">({psychic.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{psychic.detailedDescription}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Services Offered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {psychic.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Availability:</span>
                      <p className="text-muted-foreground">{psychic.availability}</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Languages:</span>
                      <p className="text-muted-foreground">{psychic.languages.join(", ")}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                        Book Reading
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/psychics/${psychic.id}`}>
                        <Heart className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Connect with Your Perfect Psychic?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose from our carefully selected team of gifted psychics and start your spiritual journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Your Reading Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
