import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Sun, ExternalLink, ArrowLeft, Clock, Users, Shield, Award, Star, Moon, Zap, BookOpen, Sparkles, Compass } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Astrology Readings | Birth Chart Analysis | The Conjuring House",
  description: "Unlock the secrets of your birth chart with our certified astrologers. Comprehensive birth chart analysis, compatibility readings, and timing guidance. Discover your cosmic blueprint today!",
  keywords: "astrology readings, birth chart analysis, horoscope, planetary influences, cosmic guidance, zodiac signs, natal chart, astrologer, compatibility reading",
  openGraph: {
    title: "Professional Astrology Readings | Birth Chart Analysis",
    description: "Unlock the secrets of your birth chart with our certified astrologers. Comprehensive birth chart analysis and timing guidance.",
    type: "website",
  },
}

const zodiacSigns = [
  { name: "Aries", element: "Fire", dates: "Mar 21 - Apr 19", traits: "Bold, ambitious, independent" },
  { name: "Taurus", element: "Earth", dates: "Apr 20 - May 20", traits: "Reliable, patient, practical" },
  { name: "Gemini", element: "Air", dates: "May 21 - Jun 20", traits: "Adaptable, versatile, communicative" },
  { name: "Cancer", element: "Water", dates: "Jun 21 - Jul 22", traits: "Loyal, emotional, intuitive" },
  { name: "Leo", element: "Fire", dates: "Jul 23 - Aug 22", traits: "Creative, passionate, generous" },
  { name: "Virgo", element: "Earth", dates: "Aug 23 - Sep 22", traits: "Hardworking, practical, loyal" },
  { name: "Libra", element: "Air", dates: "Sep 23 - Oct 22", traits: "Cooperative, diplomatic, gracious" },
  { name: "Scorpio", element: "Water", dates: "Oct 23 - Nov 21", traits: "Resourceful, brave, passionate" },
  { name: "Sagittarius", element: "Fire", dates: "Nov 22 - Dec 21", traits: "Generous, idealistic, great sense of humor" },
  { name: "Capricorn", element: "Earth", dates: "Dec 22 - Jan 19", traits: "Responsible, disciplined, self-control" },
  { name: "Aquarius", element: "Air", dates: "Jan 20 - Feb 18", traits: "Progressive, independent, humanitarian" },
  { name: "Pisces", element: "Water", dates: "Feb 19 - Mar 20", traits: "Compassionate, artistic, intuitive" }
]

const readingTypes = [
  {
    name: "Birth Chart Analysis",
    description: "Complete analysis of your natal chart revealing your personality, strengths, challenges, and life purpose.",
    duration: "60-90 min",
    includes: ["Planet positions", "Aspect analysis", "House interpretations", "Life purpose guidance"]
  },
  {
    name: "Compatibility Reading",
    description: "In-depth analysis of relationship compatibility between two people based on their birth charts.",
    duration: "45-75 min",
    includes: ["Synastry analysis", "Composite chart", "Relationship dynamics", "Communication styles"]
  },
  {
    name: "Transit Reading",
    description: "Current planetary influences and how they're affecting your life right now.",
    duration: "30-45 min",
    includes: ["Current transits", "Timing guidance", "Opportunity periods", "Challenging aspects"]
  },
  {
    name: "Career Guidance",
    description: "Astrological insights into your ideal career path, timing for changes, and professional strengths.",
    duration: "45-60 min",
    includes: ["Career analysis", "Timing guidance", "Strengths assessment", "Opportunity periods"]
  }
]

const planets = [
  { name: "Sun", meaning: "Core identity, ego, life purpose" },
  { name: "Moon", meaning: "Emotions, instincts, subconscious" },
  { name: "Mercury", meaning: "Communication, thinking, learning" },
  { name: "Venus", meaning: "Love, beauty, values, relationships" },
  { name: "Mars", meaning: "Energy, action, passion, drive" },
  { name: "Jupiter", meaning: "Expansion, wisdom, luck, growth" },
  { name: "Saturn", meaning: "Discipline, structure, lessons, karma" },
  { name: "Uranus", meaning: "Innovation, rebellion, sudden change" },
  { name: "Neptune", meaning: "Intuition, spirituality, dreams" },
  { name: "Pluto", meaning: "Transformation, power, regeneration" }
]

const benefits = [
  {
    title: "Self-Discovery",
    description: "Gain deep insights into your personality, strengths, and life purpose through your birth chart.",
    icon: Compass
  },
  {
    title: "Relationship Guidance",
    description: "Understand compatibility and relationship dynamics with detailed synastry analysis.",
    icon: Star
  },
  {
    title: "Timing Guidance",
    description: "Learn the best times for important decisions and life changes based on planetary movements.",
    icon: Clock
  },
  {
    title: "Life Planning",
    description: "Make informed decisions about career, relationships, and personal growth using astrological insights.",
    icon: BookOpen
  }
]

const faqs = [
  {
    question: "What information do I need for an astrology reading?",
    answer: "You'll need your exact birth date, time, and place of birth. The more precise the information, the more accurate your birth chart will be. If you don't know your exact birth time, we can still provide valuable insights, though some details may be less specific."
  },
  {
    question: "How accurate are astrology readings?",
    answer: "Astrology readings are highly accurate when based on precise birth information. Our certified astrologers maintain an 85-95% accuracy rate based on client feedback. The birth chart is a snapshot of the sky at your moment of birth and provides reliable insights into your personality and life patterns."
  },
  {
    question: "Can astrology predict the future?",
    answer: "Astrology reveals potential trends and influences rather than predicting specific events. It shows you the energies available and the best times to take action, but your free will and choices always play a role in how these influences manifest in your life."
  },
  {
    question: "What's the difference between astrology and horoscopes?",
    answer: "Horoscopes are general predictions based only on your sun sign, while astrology readings use your complete birth chart including all planets, houses, and aspects. This provides much more personalized and accurate insights into your unique personality and life path."
  },
  {
    question: "How often should I get an astrology reading?",
    answer: "It depends on your needs. Many clients get a comprehensive birth chart analysis once, then follow up with transit readings every 6-12 months to understand current influences. Others prefer annual check-ins or readings during major life transitions."
  }
]

export default function AstrologyReadingsPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Professional Astrology Readings
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Unlock the secrets of your birth chart with our certified astrologers. Discover your cosmic blueprint, 
                understand planetary influences, and gain clarity on your life path through comprehensive birth chart analysis.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">1,800+ Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-medium">Certified Astrologers</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-4">
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                    Book Your Astrology Reading
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Link href="/psychics">Meet Our Astrologers</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/wise-older-woman-with-silver-hair-and-gentle-eyes.jpg" 
                alt="Professional astrology reading session"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Astrology Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What is Astrology?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Astrology is the ancient study of celestial bodies and their influence on human affairs and natural phenomena. 
                By analyzing the positions of planets, stars, and other celestial objects at the time of your birth, 
                astrologers can reveal insights about your personality, relationships, and life path.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Your birth chart (or natal chart) is a snapshot of the sky at the exact moment you were born. It shows 
                where each planet was positioned and how they interact with each other, creating a unique cosmic blueprint 
                that influences your personality, strengths, challenges, and life experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">10</div>
                  <div className="text-sm text-muted-foreground">Planets Analyzed</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Houses Examined</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    The History of Astrology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Astrology dates back over 4,000 years to ancient Mesopotamia. It was practiced by the Babylonians, 
                    Greeks, and Romans, and continues to be a valuable tool for self-understanding and life guidance today.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    How It Works
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our astrologers analyze the positions and relationships of planets in your birth chart to understand 
                    your unique personality traits, life patterns, and potential for growth and fulfillment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reading Types Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Types of Astrology Readings</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of astrology services, each designed to provide specific insights for different aspects of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {readingTypes.map((reading, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{reading.name}</CardTitle>
                    <Badge variant="outline">{reading.duration}</Badge>
                  </div>
                  <CardDescription>{reading.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Includes:</h4>
                      <ul className="space-y-1">
                        {reading.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                            <Star className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zodiac Signs Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">The Twelve Zodiac Signs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each zodiac sign has unique characteristics and traits. Discover your sign and learn about the others 
              to better understand yourself and those around you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zodiacSigns.map((sign, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{sign.name}</CardTitle>
                    <Badge variant="outline">{sign.element}</Badge>
                  </div>
                  <CardDescription>{sign.dates}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{sign.traits}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planets Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Understanding the Planets</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each planet in your birth chart represents different aspects of your personality and life experience. 
              Understanding their meanings helps you better understand yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planets.map((planet, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">{planet.name}</h3>
                  <p className="text-sm text-muted-foreground">{planet.meaning}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Benefits of Astrology Reading</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how astrology can provide valuable insights and guidance for your life journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about astrology readings and birth chart analysis.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore Your Cosmic Blueprint?</h2>
          <p className="text-xl text-white/90 mb-8">
            Book your professional astrology reading today and discover the celestial influences that shape your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Your Astrology Reading
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              <Link href="/psychics">Meet Our Astrologers</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
