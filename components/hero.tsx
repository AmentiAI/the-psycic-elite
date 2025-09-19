import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DynamicCTA } from "@/components/dynamic-cta"
import { CountdownTimer } from "@/components/countdown-timer"
import { Sparkles, Star, Moon, Zap, Clock, Shield, Award, Users, ArrowRight, Phone, MessageCircle, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/mystical-forest-with-ethereal-light-rays-and-spiri.jpg" alt="Mystical background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <Star className="absolute top-20 left-10 h-6 w-6 text-accent animate-pulse" />
        <Sparkles className="absolute top-32 right-20 h-8 w-8 text-primary animate-bounce" />
        <Moon className="absolute bottom-40 left-20 h-10 w-10 text-accent animate-pulse" />
        <Star className="absolute bottom-20 right-10 h-4 w-4 text-primary animate-ping" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* URGENCY BANNER */}
        <div className="mb-6 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 animate-pulse">
          <Zap className="h-5 w-5" />
          <span className="font-bold">LIMITED TIME: Connect with Rhode Island's Top Psychics!</span>
          <Clock className="h-4 w-4" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          Rhode Island's Premier <span className="text-primary bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Psychic</span> Services
        </h1>
        
        {/* SCARCITY & SOCIAL PROOF */}
        <div className="mb-6 flex flex-wrap justify-center items-center gap-4 text-sm">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
            <Users className="h-4 w-4 inline mr-1" />
            2,847+ Happy Clients
          </div>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
            <Award className="h-4 w-4 inline mr-1" />
            98% Accuracy Rate
          </div>
          <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">
            <Shield className="h-4 w-4 inline mr-1" />
            Certified Psychics
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
          Embark on a transformative spiritual journey with Rhode Island's most gifted psychics and spiritual advisors. Serving Providence, Newport, Warwick, and all of the Ocean State, we provide profound insights, divine guidance, and personalized readings that illuminate your path to enlightenment and inner peace.
        </p>

        {/* MASSIVE CTA SECTION */}
        <div className="space-y-6">
          {/* PRIMARY CTA - HUGE */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-1 rounded-2xl shadow-2xl">
            <div className="bg-white rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Connect with Rhode Island's Top Psychics!
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Discover what the universe has in store for you. Book your reading today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6" />
                    Book Your Reading Now
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Link href="/tarot-reading" className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Tarot Reading
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* SECONDARY CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild className="h-20 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <Link href="/services" className="flex flex-col items-center gap-2">
                <Phone className="h-6 w-6" />
                <span>Call Now</span>
                <span className="text-sm opacity-90">(401) 555-PSYCH</span>
              </Link>
            </Button>
            
            <Button asChild className="h-20 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <Link href="/contact" className="flex flex-col items-center gap-2">
                <MessageCircle className="h-6 w-6" />
                <span>Chat Live</span>
                <span className="text-sm opacity-90">Instant Response</span>
              </Link>
            </Button>
            
            <Button asChild className="h-20 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <Link href="/book" className="flex flex-col items-center gap-2">
                <Calendar className="h-6 w-6" />
                <span>Book Session</span>
                <span className="text-sm opacity-90">Schedule Now</span>
              </Link>
            </Button>
          </div>

          {/* URGENCY TIMER */}
          <CountdownTimer />
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-accent fill-current" />
            <span>1000+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Certified Psychics</span>
          </div>
          <div className="flex items-center gap-2">
            <Moon className="h-4 w-4 text-accent" />
            <span>24/7 Available</span>
          </div>
        </div>
      </div>
    </section>
  )
}
