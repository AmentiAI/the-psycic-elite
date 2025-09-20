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
        <img 
          src="/mystical-forest-with-ethereal-light-rays-and-spiri.jpg" 
          alt="Mystical background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Floating Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 z-10 hidden sm:block">
        <Star className="absolute top-20 left-10 h-6 w-6 text-accent animate-pulse" />
        <Sparkles className="absolute top-32 right-20 h-8 w-8 text-primary animate-bounce" />
        <Moon className="absolute bottom-40 left-20 h-10 w-10 text-accent animate-pulse" />
        <Star className="absolute bottom-20 right-10 h-4 w-4 text-primary animate-ping" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center container-responsive">
        {/* URGENCY BANNER - Mobile optimized */}
        <div className="mb-4 sm:mb-6 bg-gradient-to-r from-red-600 to-pink-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full inline-flex items-center gap-2 animate-pulse text-xs sm:text-sm">
          <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="font-bold">LIMITED TIME: Connect with Expert Psychics!</span>
          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
        </div>

        <h1 className="heading-responsive font-bold text-foreground mb-4 sm:mb-6 text-balance">
          Connect with <span className="text-purple-600 font-extrabold">Expert Psychics</span> Today
        </h1>
        
        {/* SCARCITY & SOCIAL PROOF - Mobile optimized */}
        <div className="mb-4 sm:mb-6 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <div className="bg-green-100 text-green-800 px-2 sm:px-4 py-1 sm:py-2 rounded-full font-semibold">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
            <span className="hidden sm:inline">2,847+ Happy Clients</span>
            <span className="sm:hidden">2,847+ Clients</span>
          </div>
          <div className="bg-blue-100 text-blue-800 px-2 sm:px-4 py-1 sm:py-2 rounded-full font-semibold">
            <Award className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
            <span className="hidden sm:inline">98% Accuracy Rate</span>
            <span className="sm:hidden">98% Accurate</span>
          </div>
          <div className="bg-purple-100 text-purple-800 px-2 sm:px-4 py-1 sm:py-2 rounded-full font-semibold">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
            <span className="hidden sm:inline">Certified Psychics</span>
            <span className="sm:hidden">Certified</span>
          </div>
        </div>

        <p className="text-responsive text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty">
          Embark on a transformative spiritual journey with our most gifted psychics and spiritual advisors. We provide profound insights, divine guidance, and personalized readings that illuminate your path to enlightenment and inner peace.
        </p>

        {/* MASSIVE CTA SECTION - Mobile optimized */}
        <div className="space-y-4 sm:space-y-6">
          {/* PRIMARY CTA - Mobile responsive */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-1 rounded-2xl shadow-2xl">
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
              <h2 className="subheading-responsive font-bold text-gray-900 mb-3 sm:mb-4">
                Connect with Expert Psychics!
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-responsive">
                Discover what the universe has in store for you. Book your reading today!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button asChild size="lg" className="btn-responsive-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto">
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center justify-center gap-2 sm:gap-3">
                    <Sparkles className="h-4 w-4 sm:h-6 sm:w-6" />
                    <span className="text-sm sm:text-xl">Book Your Reading Now</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-responsive border-2 border-purple-600 text-purple-600 hover:bg-purple-50 w-full sm:w-auto">
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center justify-center gap-2">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-lg">Tarot Reading</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* SECONDARY CTAs - Mobile responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <Button asChild className="h-16 sm:h-20 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex flex-col items-center gap-1 sm:gap-2">
                <Phone className="h-4 w-4 sm:h-6 sm:w-6" />
                <span>Call Now</span>
                <span className="text-xs sm:text-sm opacity-90">(401) 555-PSYCH</span>
              </a>
            </Button>
            
            <Button asChild className="h-16 sm:h-20 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex flex-col items-center gap-1 sm:gap-2">
                <MessageCircle className="h-4 w-4 sm:h-6 sm:w-6" />
                <span>Chat Live</span>
                <span className="text-xs sm:text-sm opacity-90">Instant Response</span>
              </a>
            </Button>
            
            <Button asChild className="h-16 sm:h-20 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex flex-col items-center gap-1 sm:gap-2">
                <Calendar className="h-4 w-4 sm:h-6 sm:w-6" />
                <span>Book Session</span>
                <span className="text-xs sm:text-sm opacity-90">Schedule Now</span>
              </a>
            </Button>
          </div>

          {/* URGENCY TIMER */}
          <CountdownTimer />
        </div>

        {/* Trust Indicators - Mobile optimized */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1 sm:gap-2">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-accent fill-current" />
            <span>1000+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span>Certified Psychics</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
            <span>24/7 Available</span>
          </div>
        </div>
      </div>
    </section>
  )
}
