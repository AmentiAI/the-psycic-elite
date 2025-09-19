import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Clock, Award, Heart } from "lucide-react"

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
    description:
      "Luna has been guiding souls for over 15 years with her intuitive tarot readings and deep astrological knowledge. Her compassionate approach helps clients find clarity in love, career, and spiritual growth.",
    status: "online",
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
    description:
      "Sage connects with the spirit world to bring messages of healing and hope. Her gift for mediumship and energy healing has helped thousands find peace and closure.",
    status: "busy",
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
    description:
      "Crystal's natural clairvoyant abilities allow her to see beyond the veil and interpret the messages in your dreams. Her crystal healing sessions bring balance and clarity.",
    status: "online",
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
    description:
      "Phoenix specializes in matters of the heart and personal transformation. Her empowering readings help clients overcome obstacles and manifest their deepest desires.",
    status: "online",
  },
]

export function PsychicProfiles() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Meet Our Gifted Spiritual Guides</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our extraordinary team of gifted psychics, mediums, and spiritual advisors who have dedicated their lives to serving the divine and guiding souls toward their highest potential. Each master practitioner brings decades of experience, unique spiritual gifts, and profound wisdom to illuminate your path with love, compassion, and divine insight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {psychics.map((psychic) => (
            <Card key={psychic.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={psychic.image || "/placeholder.svg"}
                  alt={psychic.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge
                    variant={psychic.status === "online" ? "default" : "secondary"}
                    className={
                      psychic.status === "online"
                        ? "bg-green-500 text-white"
                        : psychic.status === "busy"
                          ? "bg-yellow-500 text-white"
                          : "bg-gray-500 text-white"
                    }
                  >
                    {psychic.status}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground">{psychic.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{psychic.title}</CardDescription>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{psychic.rating}</span>
                    <span className="text-muted-foreground">({psychic.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{psychic.experience}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {psychic.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3">{psychic.description}</p>

                <div className="flex items-center justify-center">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Award className="h-3 w-3 mr-1" />
                    Top Rated
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button asChild size="sm" className="flex-1">
                    <Link href={`/book?psychic=${psychic.id}`}>Book Reading</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/psychics/${psychic.id}`}>
                      <Heart className="h-4 w-4" />
                    </Link>
                  </Button>
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
  )
}
