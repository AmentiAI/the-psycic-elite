import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Heart, Eye, Zap, Moon, Sun, Clock } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Psychic Services | Tarot, Astrology, Energy Healing | The Conjuring House",
  description: "Discover our comprehensive psychic services including tarot readings, astrology, energy healing, dream interpretation, and more. Professional spiritual guidance from certified psychics.",
  keywords: "psychic services, tarot readings, astrology, energy healing, dream interpretation, love readings, spiritual guidance, psychic advisor",
  openGraph: {
    title: "Psychic Services | Tarot, Astrology, Energy Healing",
    description: "Discover our comprehensive psychic services including tarot readings, astrology, energy healing, and more.",
    type: "website",
  },
}

const allServices = [
  {
    id: "tarot",
    title: "Tarot Card Readings",
    description: "Discover insights into your past, present, and future through the ancient art of tarot.",
    longDescription:
      "Our expert tarot readers use traditional and modern decks to provide you with detailed insights into your life's journey. Whether you're seeking guidance on love, career, or personal growth, tarot cards reveal the hidden truths and potential paths ahead.",
    icon: Star,
    duration: "30-60 min",
    category: "Divination",
    features: [
      "Past, Present, Future Spread",
      "Love & Relationships Reading",
      "Career & Finance Guidance",
      "Spiritual Growth Insights",
      "Celtic Cross Reading",
      "Single Card Daily Guidance",
    ],
  },
  {
    id: "astrology",
    title: "Astrology Readings",
    description: "Unlock the secrets of your birth chart and understand your cosmic blueprint.",
    longDescription:
      "Dive deep into the celestial influences that shape your personality, relationships, and life path. Our certified astrologers provide comprehensive birth chart analysis, compatibility readings, and timing guidance based on planetary movements.",
    icon: Sun,
    duration: "45-90 min",
    category: "Cosmic Guidance",
    features: [
      "Complete Birth Chart Analysis",
      "Compatibility & Synastry",
      "Transit & Progression Reading",
      "Career & Life Purpose",
      "Relationship Dynamics",
      "Timing for Major Decisions",
    ],
  },
  {
    id: "psychic",
    title: "Psychic Readings",
    description: "Connect with your spiritual guides through intuitive psychic insights.",
    longDescription:
      "Experience the power of pure intuition as our gifted psychics tap into the universal energy surrounding you. Receive messages from spirit guides, deceased loved ones, and your higher self to gain clarity on life's most important questions.",
    icon: Eye,
    duration: "30-60 min",
    category: "Intuitive Guidance",
    features: [
      "Clairvoyant Visions",
      "Spirit Guide Communication",
      "Mediumship Sessions",
      "Energy & Aura Reading",
      "Life Purpose Discovery",
      "Psychic Protection Guidance",
    ],
  },
  {
    id: "love",
    title: "Love & Relationships",
    description: "Find clarity in matters of the heart and discover your romantic destiny.",
    longDescription:
      "Navigate the complex world of love and relationships with specialized readings focused on your romantic life. Whether you're single, dating, or in a committed relationship, gain insights into your love patterns and future romantic possibilities.",
    icon: Heart,
    duration: "30-45 min",
    category: "Love & Romance",
    features: [
      "Soulmate & Twin Flame Guidance",
      "Relationship Compatibility",
      "Healing Past Relationships",
      "Attracting True Love",
      "Marriage & Commitment Timing",
      "Overcoming Love Blocks",
    ],
  },
  {
    id: "energy",
    title: "Energy Healing",
    description: "Restore balance and harmony through powerful energy healing sessions.",
    longDescription:
      "Experience transformative healing through various energy modalities designed to clear blockages, balance chakras, and restore your natural vitality. Our certified healers work with universal life force energy to promote physical, emotional, and spiritual well-being.",
    icon: Zap,
    duration: "60-90 min",
    category: "Healing & Wellness",
    features: [
      "Chakra Balancing & Alignment",
      "Aura Cleansing & Protection",
      "Reiki Energy Healing",
      "Crystal Therapy Sessions",
      "Emotional Release Work",
      "Distance Healing Available",
    ],
  },
  {
    id: "dream",
    title: "Dream Interpretation",
    description: "Understand the hidden messages and symbols within your dreams.",
    longDescription:
      "Unlock the wisdom of your subconscious mind through professional dream analysis. Our dream interpreters help you understand recurring dreams, nightmares, and prophetic visions, revealing the deeper meanings and guidance your dreams contain.",
    icon: Moon,
    duration: "30-45 min",
    category: "Subconscious Wisdom",
    features: [
      "Recurring Dream Analysis",
      "Nightmare Resolution",
      "Prophetic Dream Interpretation",
      "Symbol & Metaphor Decoding",
      "Lucid Dreaming Guidance",
      "Dream Journal Consultation",
    ],
  },
]

const categories = [
  "All",
  "Divination",
  "Cosmic Guidance",
  "Intuitive Guidance",
  "Love & Romance",
  "Healing & Wellness",
  "Subconscious Wisdom",
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Sacred Psychic Services & Spiritual Guidance
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            Embark on a profound spiritual journey with our comprehensive range of sacred psychic services. Each divine reading is meticulously personalized to your unique soul signature and life circumstances, offering you the celestial guidance, spiritual wisdom, and transformative insights needed to navigate your path with divine confidence and enlightened purpose.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {allServices.map((service) => {
              const IconComponent = service.icon
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {service.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {service.duration}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground mt-4">{service.longDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-muted-foreground">
                            <Star className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 pt-4">
                      <Button asChild className="flex-1">
                        <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">Book Now</a>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href={`/services/${service.id}`}>Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Begin Your Spiritual Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your reading today and discover the insights that await you. Our experienced psychics are here to guide
            you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">Book Your Reading</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/psychics">Meet Our Psychics</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
