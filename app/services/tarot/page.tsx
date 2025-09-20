import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Star, ExternalLink, ArrowLeft, Clock, Users, Shield, Award, Heart, Eye, Zap, Moon, Sun, BookOpen, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Tarot Card Readings | Expert Tarot Readers | The Conjuring House",
  description: "Discover your future with our expert tarot card readers. Professional tarot readings for love, career, and life guidance. Certified readers with 15+ years experience. Book your reading today!",
  keywords: "tarot readings, tarot cards, tarot reader, fortune telling, love reading, career guidance, spiritual growth, tarot spreads, tarot deck, psychic tarot",
  openGraph: {
    title: "Professional Tarot Card Readings | Expert Tarot Readers",
    description: "Discover your future with our expert tarot card readers. Professional tarot readings for love, career, and life guidance.",
    type: "website",
  },
}

const tarotSpreads = [
  {
    name: "Celtic Cross",
    description: "The most comprehensive tarot spread, offering deep insights into your situation, challenges, and potential outcomes.",
    cards: 10,
    duration: "45-60 min",
    bestFor: "Complex life situations, major decisions, comprehensive guidance"
  },
  {
    name: "Three Card Spread",
    description: "A simple yet powerful spread revealing past influences, present circumstances, and future possibilities.",
    cards: 3,
    duration: "20-30 min",
    bestFor: "Quick guidance, daily insights, specific questions"
  },
  {
    name: "Love Spread",
    description: "Specialized spread focusing on relationships, love life, and romantic connections.",
    cards: 7,
    duration: "30-45 min",
    bestFor: "Love and relationship questions, romantic guidance"
  },
  {
    name: "Career Path Spread",
    description: "Professional guidance spread examining your career direction, opportunities, and obstacles.",
    cards: 6,
    duration: "35-50 min",
    bestFor: "Career decisions, job changes, professional growth"
  }
]

const majorArcana = [
  { name: "The Fool", meaning: "New beginnings, innocence, spontaneity" },
  { name: "The Magician", meaning: "Manifestation, willpower, skill" },
  { name: "The High Priestess", meaning: "Intuition, mystery, subconscious" },
  { name: "The Empress", meaning: "Fertility, abundance, nature" },
  { name: "The Emperor", meaning: "Authority, structure, leadership" },
  { name: "The Hierophant", meaning: "Tradition, spirituality, guidance" },
  { name: "The Lovers", meaning: "Love, relationships, choices" },
  { name: "The Chariot", meaning: "Determination, control, victory" },
  { name: "Strength", meaning: "Courage, inner strength, patience" },
  { name: "The Hermit", meaning: "Soul-searching, introspection, guidance" }
]

const benefits = [
  {
    title: "Clarity & Direction",
    description: "Gain clear insights into your life path and make informed decisions with confidence.",
    icon: Eye
  },
  {
    title: "Emotional Healing",
    description: "Address past wounds and emotional blockages to move forward with peace and understanding.",
    icon: Heart
  },
  {
    title: "Spiritual Growth",
    description: "Deepen your spiritual connection and understanding of your soul's journey.",
    icon: Sparkles
  },
  {
    title: "Future Planning",
    description: "Understand potential outcomes and prepare for what lies ahead in your life.",
    icon: BookOpen
  }
]

const faqs = [
  {
    question: "How accurate are tarot readings?",
    answer: "Our tarot readers maintain an 85-95% accuracy rate based on client feedback. Tarot cards provide guidance and possibilities rather than absolute certainties, as the future is fluid and can change based on your choices and actions."
  },
  {
    question: "What should I ask during my tarot reading?",
    answer: "You can ask about any aspect of your life - love, career, family, health, or spiritual growth. Specific questions often yield more detailed and helpful guidance. Avoid yes/no questions and instead ask open-ended questions that allow for deeper insight."
  },
  {
    question: "How long does a tarot reading take?",
    answer: "Reading duration varies by spread type. Simple 3-card spreads take 20-30 minutes, while comprehensive Celtic Cross readings can take 45-60 minutes. We also offer extended sessions for deeper exploration of complex situations."
  },
  {
    question: "Can tarot readings predict the future?",
    answer: "Tarot cards reveal potential future outcomes based on current energies and patterns, but the future is not set in stone. Your choices and actions can influence outcomes. Think of tarot as guidance to help you make informed decisions."
  },
  {
    question: "Do I need to bring anything to my reading?",
    answer: "No special preparation is needed. Just come with an open mind and any questions you'd like to explore. Some people like to focus on a specific question or situation, while others prefer general guidance."
  }
]

export default function TarotReadingsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Tarot Card Readings",
    "description": "Expert tarot card readings for love, career, and life guidance by certified readers with 15+ years experience.",
    "provider": {
      "@type": "Organization",
      "name": "The Conjuring House",
      "url": "https://www.theconjuringhouse.net"
    },
    "serviceType": "Tarot Card Reading",
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8",
      "serviceName": "Online Tarot Reading"
    },
    "offers": {
      "@type": "Offer",
      "description": "Professional tarot readings with certified readers",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
                Professional Tarot Card Readings
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover your future with our expert tarot card readers. Our certified professionals use traditional and modern decks 
                to provide detailed insights into your life's journey, helping you navigate love, career, and personal growth with clarity and confidence.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium">2,500+ Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-medium">Certified Readers</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-4">
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                    Book Your Tarot Reading
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Link href="/psychics">Meet Our Tarot Readers</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/mystical-woman-with-long-flowing-hair-and-crystal-.jpg" 
                alt="Professional tarot card reading session"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Tarot Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What is Tarot Reading?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tarot reading is an ancient divination practice that uses a special deck of 78 cards to provide guidance, 
                insight, and clarity about your life's journey. Each card carries symbolic meaning and energy that, when 
                interpreted by a skilled reader, can reveal hidden truths about your past, present, and future.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                The tarot deck consists of two main parts: the Major Arcana (22 cards representing life's major themes 
                and spiritual lessons) and the Minor Arcana (56 cards representing everyday situations and challenges). 
                Together, they create a comprehensive map of human experience and spiritual growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">22</div>
                  <div className="text-sm text-muted-foreground">Major Arcana Cards</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">56</div>
                  <div className="text-sm text-muted-foreground">Minor Arcana Cards</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    The History of Tarot
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tarot cards originated in 15th-century Italy as playing cards, but evolved into a powerful 
                    divination tool in the 18th century. Today, they're used worldwide for spiritual guidance, 
                    self-reflection, and life planning.
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
                    Our readers use their intuitive abilities to interpret the cards' symbolism and energy. 
                    The cards act as a mirror, reflecting your inner wisdom and the universal energies surrounding your situation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tarot Spreads Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Tarot Spreads</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our variety of tarot spreads, each designed to provide specific insights for different life situations and questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tarotSpreads.map((spread, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{spread.name}</CardTitle>
                    <Badge variant="outline">{spread.cards} Cards</Badge>
                  </div>
                  <CardDescription>{spread.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{spread.duration}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Best For:</h4>
                      <p className="text-sm text-muted-foreground">{spread.bestFor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Arcana Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Understanding the Major Arcana</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Major Arcana represents life's major themes and spiritual lessons. These powerful cards often appear 
              in readings when significant life changes or spiritual growth is occurring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorArcana.map((card, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">{card.name}</h3>
                  <p className="text-sm text-muted-foreground">{card.meaning}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Benefits of Tarot Reading</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how tarot readings can transform your life and provide the guidance you need to navigate any situation.
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
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about tarot readings and how they can help you.
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Discover Your Future?</h2>
          <p className="text-xl text-white/90 mb-8">
            Book your professional tarot reading today and unlock the secrets of your life's journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Your Tarot Reading
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              <Link href="/psychics">Meet Our Tarot Readers</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
