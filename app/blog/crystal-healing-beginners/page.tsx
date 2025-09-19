import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Star, Heart, Zap, Moon } from "lucide-react"

export default function CrystalHealingBeginners() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            <Badge className="mb-4">Crystal Healing</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Crystal Healing for Beginners: A Rhode Island Guide
          </h1>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Crystal Visionheart</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>December 28, 2023</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img 
                src="/young-woman-with-bright-eyes-holding-crystals.jpg" 
                alt="Crystal healing for beginners" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              Rhode Island's natural beauty and spiritual energy make it an ideal place to begin your crystal healing journey. From the grounding energy of our rocky coastline to the transformative power of the ocean, the Ocean State provides the perfect environment for working with crystals and developing your healing abilities.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Understanding Crystal Healing in Rhode Island</h2>
            
            <p className="text-muted-foreground mb-6">
              Crystal healing is an ancient practice that uses the natural energy of crystals and gemstones to promote physical, emotional, and spiritual well-being. Rhode Island's diverse spiritual community and natural energy vortexes make it an excellent place to learn and practice crystal healing techniques.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Essential Crystals for Beginners</h3>
            
            <div className="space-y-4 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-purple-500" />
                    <span>Clear Quartz - The Master Healer</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2"><strong>Properties:</strong> Amplifies energy, enhances clarity, and balances all chakras</p>
                  <p className="text-muted-foreground mb-2"><strong>Best for:</strong> Beginners, energy amplification, and general healing</p>
                  <p className="text-muted-foreground"><strong>Rhode Island Connection:</strong> Perfect for cleansing and energizing in our coastal environment</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-pink-500" />
                    <span>Rose Quartz - The Love Stone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2"><strong>Properties:</strong> Opens the heart chakra, promotes love and compassion</p>
                  <p className="text-muted-foreground mb-2"><strong>Best for:</strong> Emotional healing, relationships, and self-love</p>
                  <p className="text-muted-foreground"><strong>Rhode Island Connection:</strong> Ideal for healing emotional wounds from past relationships</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span>Citrine - The Success Stone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2"><strong>Properties:</strong> Attracts abundance, enhances creativity, and boosts confidence</p>
                  <p className="text-muted-foreground mb-2"><strong>Best for:</strong> Career success, financial abundance, and personal power</p>
                  <p className="text-muted-foreground"><strong>Rhode Island Connection:</strong> Great for Rhode Island entrepreneurs and business owners</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Moon className="h-5 w-5 text-blue-500" />
                    <span>Amethyst - The Spiritual Stone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2"><strong>Properties:</strong> Enhances intuition, promotes spiritual growth, and aids meditation</p>
                  <p className="text-muted-foreground mb-2"><strong>Best for:</strong> Spiritual development, psychic abilities, and stress relief</p>
                  <p className="text-muted-foreground"><strong>Rhode Island Connection:</strong> Perfect for meditation by the ocean or in historic Newport</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">How to Choose Your First Crystals</h3>
            
            <div className="bg-secondary/20 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Trust Your Intuition</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Let the crystal choose you - you'll feel drawn to certain stones</li>
                <li>Notice which crystals catch your eye or make you feel something</li>
                <li>Hold different crystals and see which ones feel right in your hand</li>
                <li>Pay attention to any physical sensations or emotions you experience</li>
                <li>Don't overthink it - your first instinct is usually correct</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Cleansing and Charging Your Crystals</h3>
            
            <p className="text-muted-foreground mb-6">
              Rhode Island's natural environment provides excellent opportunities for cleansing and charging your crystals. The ocean, fresh air, and natural energy make our state ideal for crystal care.
            </p>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Ocean Water Cleansing</h4>
                <p className="text-muted-foreground">Use Rhode Island's ocean water to cleanse your crystals. Place them in a safe container and let the saltwater cleanse away negative energy. Rinse with fresh water afterward.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Moonlight Charging</h4>
                <p className="text-muted-foreground">Place your crystals outside during the full moon to charge them with lunar energy. Rhode Island's clear skies make this especially effective.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Earth Burial</h4>
                <p className="text-muted-foreground">Bury your crystals in Rhode Island's rich soil for 24 hours to ground and cleanse them. This is especially effective for grounding stones.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Sage Smudging</h4>
                <p className="text-muted-foreground">Use white sage or palo santo to smudge your crystals and cleanse them of negative energy. This is a traditional Native American practice.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Basic Crystal Healing Techniques</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Meditation with Crystals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Hold a crystal during meditation to enhance your practice. Focus on the crystal's energy and allow it to guide your meditation experience.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Chakra Balancing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Place crystals on your chakra points while lying down. Use different colored crystals for each chakra to balance your energy centers.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Crystal Grids</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Arrange crystals in geometric patterns to create energy grids. This amplifies the healing energy and focuses it on specific intentions.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Carrying Crystals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Keep crystals in your pocket or wear them as jewelry to benefit from their energy throughout the day. Choose stones that support your current needs.</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Rhode Island's Best Locations for Crystal Work</h3>
            
            <div className="space-y-4 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Beavertail State Park</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Perfect for grounding work with earth stones. The rocky coastline provides excellent energy for grounding and stability crystals.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Block Island's Mohegan Bluffs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ideal for high-energy spiritual work. The elevated position and ocean views enhance the power of spiritual and intuitive crystals.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Newport's Historic Mansions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Great for prosperity and abundance work. The historic energy of these grand estates amplifies the power of success and wealth crystals.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Providence's WaterFire</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Perfect for transformation and renewal work. The combination of fire and water elements enhances the energy of healing and change crystals.</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Common Beginner Mistakes to Avoid</h3>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Crystal Healing Mistakes</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Not cleansing crystals before first use</li>
                <li>Using too many crystals at once (start with 1-3)</li>
                <li>Ignoring your intuition in favor of book meanings</li>
                <li>Not setting clear intentions for your crystal work</li>
                <li>Expecting immediate results (crystal healing is a process)</li>
                <li>Not properly storing or caring for your crystals</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Building Your Crystal Collection</h3>
            
            <p className="text-muted-foreground mb-6">
              Start small and build your collection gradually. Rhode Island has several metaphysical shops where you can find quality crystals and receive guidance from experienced practitioners.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Start with 3-5 crystals</h4>
                  <p className="text-muted-foreground">Choose crystals for different purposes: one for grounding, one for emotional healing, one for spiritual growth, and one for protection.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Learn about each crystal</h4>
                  <p className="text-muted-foreground">Study the properties and uses of each crystal in your collection. Understanding their energy helps you use them more effectively.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Practice regularly</h4>
                  <p className="text-muted-foreground">Use your crystals daily through meditation, carrying them, or placing them in your environment. Regular use strengthens your connection to their energy.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-4">Enhance Your Crystal Healing Journey</h4>
              <p className="text-muted-foreground mb-4">
                Our experienced crystal healers at Conjuring Psychic Services can help you choose the right crystals for your needs and teach you advanced healing techniques. We offer personalized guidance and crystal healing sessions throughout Rhode Island.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/book?service=energy">Book Crystal Healing Session</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/services">Explore Our Healing Services</Link>
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
