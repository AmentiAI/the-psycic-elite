import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { OutboundLink } from "./outbound-link"
import { DynamicCTA } from "./dynamic-cta"
import { Star, Heart, Eye, Zap, Moon, Sun, ArrowRight, Clock, Shield, Award } from "lucide-react"

const services = [
  {
    id: "tarot",
    title: "Tarot Card Readings",
    description: "Discover insights into your past, present, and future through the ancient art of tarot.",
    icon: Star,
    duration: "30-60 min",
    features: ["Past, Present, Future", "Love & Relationships", "Career Guidance", "Spiritual Growth"],
  },
  {
    id: "astrology",
    title: "Astrology Readings",
    description: "Unlock the secrets of your birth chart and understand your cosmic blueprint.",
    icon: Sun,
    duration: "45-90 min",
    features: ["Birth Chart Analysis", "Compatibility Reading", "Life Path Guidance", "Planetary Influences"],
  },
  {
    id: "psychic",
    title: "Psychic Readings",
    description: "Connect with your spiritual guides through intuitive psychic insights.",
    icon: Eye,
    duration: "30-60 min",
    features: ["Intuitive Guidance", "Spirit Communication", "Energy Reading", "Life Purpose"],
  },
  {
    id: "love",
    title: "Love & Relationships",
    description: "Find clarity in matters of the heart and discover your romantic destiny.",
    icon: Heart,
    duration: "30-45 min",
    features: ["Soulmate Connections", "Relationship Healing", "Twin Flame Guidance", "Love Compatibility"],
  },
  {
    id: "energy",
    title: "Energy Healing",
    description: "Restore balance and harmony through powerful energy healing sessions.",
    icon: Zap,
    duration: "60-90 min",
    features: ["Chakra Balancing", "Aura Cleansing", "Reiki Healing", "Crystal Therapy"],
  },
  {
    id: "dream",
    title: "Dream Interpretation",
    description: "Understand the hidden messages and symbols within your dreams.",
    icon: Moon,
    duration: "30-45 min",
    features: ["Symbol Analysis", "Recurring Dreams", "Prophetic Dreams", "Nightmare Resolution"],
  },
]

export function Services() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-responsive">
        {/* URGENCY BANNER - Mobile optimized */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-3 sm:p-4 rounded-2xl mb-6 sm:mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-bold text-sm sm:text-lg">LIMITED TIME OFFER</span>
            <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <h2 className="subheading-responsive font-bold mb-2">Connect with Expert Psychics!</h2>
          <p className="text-responsive opacity-90">Choose any service below and book your reading today!</p>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-responsive font-bold text-foreground mb-4 text-balance">Sacred Spiritual Services</h2>
          <p className="text-responsive text-muted-foreground max-w-3xl mx-auto text-pretty">
            Experience the profound wisdom of ancient spiritual practices through our comprehensive range of psychic and mystical services. Each sacred offering is carefully crafted to provide you with divine clarity, spiritual guidance, and transformative insights that illuminate your soul's journey toward enlightenment and fulfillment.
          </p>
        </div>

        <div className="grid-responsive-3">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-border/50 relative overflow-hidden">
                {/* BOOK NOW BADGE - Mobile optimized */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    BOOK NOW!
                  </div>
                </div>
                
                <CardHeader className="text-center pb-4 card-responsive">
                  <div className="mx-auto mb-4 p-2 sm:p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 card-responsive">
                  <div className="flex justify-center items-center text-xs sm:text-sm">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span className="text-muted-foreground">{service.duration}</span>
                  </div>
                  
                  {/* BOOK NOW - Mobile optimized */}
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-purple-600">Book Today</div>
                    <div className="text-xs sm:text-sm text-gray-500">Professional Readings</div>
                  </div>
                  
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <Star className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* URGENT CTA - Mobile optimized */}
                  <div className="space-y-2">
                    <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 btn-responsive">
                      <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center justify-center gap-2">
                        <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">Book {service.title} Now!</span>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                    </Button>
                    
                    <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        <span>100% Safe</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        <span>Guaranteed</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* MASSIVE CTA SECTION - Mobile optimized */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-1 rounded-2xl shadow-2xl">
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 text-center">
            <h3 className="subheading-responsive font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-responsive text-gray-600 mb-4 sm:mb-6">
              Join thousands who have discovered their true path through our professional psychic readings!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button asChild size="lg" className="btn-responsive-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto">
                <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center justify-center gap-2 sm:gap-3">
                  <Zap className="h-4 w-4 sm:h-6 sm:w-6" />
                  <span className="text-sm sm:text-xl">Book Your Reading Now!</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-responsive border-2 border-purple-600 text-purple-600 hover:bg-purple-50 w-full sm:w-auto">
                <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center justify-center gap-2">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-lg">Call (401) 555-PSYCH</span>
                </a>
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              ⚡ Limited time offer - Don't miss out! ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
