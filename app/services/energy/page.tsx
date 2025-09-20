import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Zap, Clock, Users, Shield, Award, ExternalLink, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Energy Healing Services | The Conjuring House",
  description: "Experience transformative energy healing sessions with our certified healers. Restore balance and harmony through powerful energy modalities including Reiki, chakra balancing, and crystal therapy.",
  keywords: "energy healing, Reiki, chakra balancing, crystal therapy, aura cleansing, energy work",
  openGraph: {
    title: "Energy Healing Services | The Conjuring House",
    description: "Experience transformative energy healing sessions with our certified healers.",
    type: "website",
  },
}

const healingModalities = [
  {
    title: "Reiki Energy Healing",
    description: "Channel universal life force energy to promote healing and balance throughout your body, mind, and spirit.",
    duration: "60-90 min",
    benefits: ["Stress Reduction", "Pain Relief", "Emotional Healing", "Spiritual Growth"]
  },
  {
    title: "Chakra Balancing",
    description: "Align and balance your seven main energy centers to restore harmony and optimal energy flow.",
    duration: "45-60 min",
    benefits: ["Energy Alignment", "Emotional Balance", "Physical Wellness", "Spiritual Awakening"]
  },
  {
    title: "Aura Cleansing",
    description: "Remove negative energy and blockages from your energy field to restore your natural vitality.",
    duration: "30-45 min",
    benefits: ["Energy Protection", "Mental Clarity", "Emotional Release", "Spiritual Cleansing"]
  },
  {
    title: "Crystal Therapy",
    description: "Use the healing properties of crystals to address specific physical, emotional, and spiritual needs.",
    duration: "45-75 min",
    benefits: ["Targeted Healing", "Energy Amplification", "Emotional Support", "Spiritual Guidance"]
  }
]

const features = [
  {
    title: "Certified Healers",
    description: "All our energy healers are certified and have years of experience",
    icon: Award,
  },
  {
    title: "Personalized Sessions",
    description: "Each healing session is tailored to your specific needs and energy",
    icon: Users,
  },
  {
    title: "Safe & Gentle",
    description: "All healing modalities are safe, gentle, and non-invasive",
    icon: Shield,
  },
  {
    title: "Immediate Results",
    description: "Many clients experience relief and clarity immediately after sessions",
    icon: Clock,
  },
]

export default function EnergyHealingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/services">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Services
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Energy Healing Services
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Experience transformative healing through various energy modalities designed to clear blockages, 
                balance chakras, and restore your natural vitality. Our certified healers work with universal 
                life force energy to promote physical, emotional, and spiritual well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-4">
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                    Book Energy Healing Session
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/mystical-forest-with-ethereal-light-rays-and-spiri.jpg" 
                alt="Energy healing session"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
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

      {/* Healing Modalities Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Healing Modalities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our certified energy healers offer a variety of healing modalities to address your specific needs and promote overall well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healingModalities.map((modality, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{modality.title}</CardTitle>
                    <Badge variant="outline">{modality.duration}</Badge>
                  </div>
                  <CardDescription>{modality.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {modality.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                          <Zap className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Restore Your Energy?</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the transformative power of energy healing and restore balance to your mind, body, and spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Energy Healing Session
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              <Link href="/psychics">Meet Our Healers</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
