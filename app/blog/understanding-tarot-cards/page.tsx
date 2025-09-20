import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Star, Heart, Eye, Zap, Moon, Sun } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Understanding Tarot Cards: A Beginner's Guide | The Conjuring House",
  description: "Learn the basics of tarot cards with our comprehensive beginner's guide. Discover the Major and Minor Arcana, popular spreads, and how to find the perfect tarot reader.",
  keywords: "tarot cards, tarot guide, beginner tarot, tarot reading, major arcana, minor arcana, tarot spreads, tarot meanings",
  openGraph: {
    title: "Understanding Tarot Cards: A Beginner's Guide",
    description: "Learn the basics of tarot cards with our comprehensive beginner's guide. Discover the Major and Minor Arcana, popular spreads, and how to find the perfect tarot reader.",
    type: "article",
    publishedTime: "2024-01-15T00:00:00.000Z",
    authors: ["Luna Starweaver"],
  },
}

export default function UnderstandingTarotCards() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            <Badge className="mb-4">Tarot</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Understanding Tarot Cards: A Beginner's Guide for Rhode Island Seekers
          </h1>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Luna Starweaver</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img 
                src="/mystical-woman-with-long-flowing-hair-and-crystal-.jpg" 
                alt="Tarot cards spread on mystical background" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              Welcome to the mystical world of tarot cards, where ancient wisdom meets modern guidance. For those seeking spiritual clarity in Rhode Island's vibrant communities—from Providence's historic streets to Newport's coastal charm—tarot offers a powerful tool for self-discovery and divine insight.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">The Sacred Art of Tarot in the Ocean State</h2>
            
            <p className="text-muted-foreground mb-6">
              Rhode Island, known as the Ocean State, has long been a haven for spiritual seekers and those drawn to the mystical arts. From the colonial-era mysticism of Newport to the modern spiritual communities in Warwick and Cranston, tarot has found a special place in our state's rich tapestry of beliefs and practices.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Understanding the Tarot Deck Structure</h3>
            
            <p className="text-muted-foreground mb-6">
              A standard tarot deck contains 78 cards, divided into two main sections: the Major Arcana (22 cards) and the Minor Arcana (56 cards). Each card carries its own unique energy and message, waiting to guide you on your spiritual journey.
            </p>

            <div className="bg-secondary/20 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">The Major Arcana: Your Soul's Journey</h4>
              <p className="text-muted-foreground mb-4">
                The Major Arcana represents life's most significant lessons and spiritual milestones. These powerful cards speak to the deeper aspects of your journey, from The Fool's new beginnings to The World's completion and fulfillment.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>The Fool:</strong> New beginnings and fresh starts</li>
                <li><strong>The Magician:</strong> Personal power and manifestation</li>
                <li><strong>The High Priestess:</strong> Intuition and hidden knowledge</li>
                <li><strong>The Empress:</strong> Abundance and nurturing energy</li>
                <li><strong>The Emperor:</strong> Structure and authority</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">The Minor Arcana: Daily Life Guidance</h3>
            
            <p className="text-muted-foreground mb-6">
              The Minor Arcana consists of four suits—Cups, Pentacles, Swords, and Wands—each representing different aspects of human experience. These cards offer practical guidance for your daily life and relationships.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span>Cups (Water)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Emotions, relationships, and matters of the heart. Perfect for guidance on love, family, and emotional healing.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>Pentacles (Earth)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Material world, finances, and practical matters. Ideal for career guidance and financial decisions.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-blue-500" />
                    <span>Swords (Air)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Thoughts, communication, and mental clarity. Great for decision-making and conflict resolution.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sun className="h-5 w-5 text-orange-500" />
                    <span>Wands (Fire)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Passion, creativity, and spiritual growth. Perfect for inspiration and personal development.</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Popular Tarot Spreads for Rhode Island Seekers</h3>
            
            <p className="text-muted-foreground mb-6">
              Whether you're seeking guidance in Providence's bustling downtown or finding peace in Block Island's serene landscapes, these tarot spreads can help illuminate your path:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Three-Card Spread</h4>
                <p className="text-muted-foreground">Perfect for daily guidance. Past, Present, Future layout offers quick insights for busy Rhode Islanders.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Celtic Cross Spread</h4>
                <p className="text-muted-foreground">Comprehensive reading for complex situations. Ideal for major life decisions or deep spiritual exploration.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Relationship Spread</h4>
                <p className="text-muted-foreground">Focus on love and relationships. Perfect for those seeking clarity in matters of the heart.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Finding Your Perfect Tarot Reader in Rhode Island</h3>
            
            <p className="text-muted-foreground mb-6">
              Rhode Island is home to many gifted tarot readers and spiritual practitioners. When choosing a reader, consider their experience, specialties, and the connection you feel during your consultation. Look for readers who:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>Have years of experience with tarot and spiritual guidance</li>
              <li>Create a safe, welcoming space for your reading</li>
              <li>Explain the cards clearly and offer practical advice</li>
              <li>Respect your privacy and maintain confidentiality</li>
              <li>Focus on empowerment rather than dependency</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Getting Started with Tarot</h3>
            
            <p className="text-muted-foreground mb-6">
              Ready to begin your tarot journey? Start by choosing a deck that resonates with you. Many Rhode Island metaphysical shops offer a variety of decks, from traditional Rider-Waite-Smith to modern interpretations. Trust your intuition when selecting your first deck.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Beginner's Tips for Tarot Success</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Start with daily one-card draws to build your intuition</li>
                <li>Keep a tarot journal to track your insights and progress</li>
                <li>Practice regularly but don't over-read (once daily is ideal)</li>
                <li>Trust your first impressions when interpreting cards</li>
                <li>Join local tarot study groups or online communities</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">The Spiritual Community in Rhode Island</h3>
            
            <p className="text-muted-foreground mb-6">
              Rhode Island's spiritual community is thriving, with regular tarot meetups, workshops, and events throughout the state. From Providence's diverse spiritual centers to Newport's historic mystical traditions, there are many opportunities to connect with like-minded seekers and experienced practitioners.
            </p>

            <p className="text-muted-foreground mb-8">
              Whether you're drawn to tarot for personal growth, spiritual guidance, or simply curiosity, this ancient art offers profound insights into your life's journey. In the Ocean State, where the mystical meets the practical, tarot can be your compass for navigating life's challenges and celebrating its joys.
            </p>

            <div className="bg-secondary/20 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-4">Ready to Begin Your Tarot Journey?</h4>
              <p className="text-muted-foreground mb-4">
                Connect with our experienced tarot readers at Conjuring Psychic Services. We offer personalized readings that honor your unique spiritual path and provide the guidance you need to move forward with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">Book Your Tarot Reading</a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/psychics">Meet Our Tarot Readers</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
