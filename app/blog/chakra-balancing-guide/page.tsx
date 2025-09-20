import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Heart, Zap, Sun, Star, Moon } from "lucide-react"

export default function ChakraBalancingGuide() {
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
            <Badge className="mb-4">Energy Healing</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            The Complete Guide to Chakra Balancing in Rhode Island
          </h1>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Phoenix Soulfire</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>January 8, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img 
                src="/ethereal-woman-with-golden-hair-and-angelic-presen.jpg" 
                alt="Chakra balancing meditation" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              Rhode Island's natural beauty and spiritual energy make it an ideal place for chakra balancing and energy healing. From the grounding energy of our rocky coastline to the flowing waters that surround us, the Ocean State provides the perfect environment for aligning your energy centers and achieving spiritual harmony.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">Understanding the Seven Main Chakras</h2>
            
            <p className="text-muted-foreground mb-6">
              The chakra system consists of seven main energy centers that run along your spine, from the base to the crown of your head. Each chakra governs specific aspects of your physical, emotional, and spiritual well-being. In Rhode Island's diverse spiritual community, chakra balancing has become a cornerstone of holistic healing practices.
            </p>

            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span>Root Chakra (Muladhara)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2"><strong>Location:</strong> Base of spine</p>
                  <p className="text-muted-foreground mb-2"><strong>Color:</strong> Red</p>
                  <p className="text-muted-foreground">Governs survival, security, and grounding. Essential for feeling safe and connected to the earth.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <span>Sacral Chakra (Svadhisthana)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2"><strong>Location:</strong> Lower abdomen</p>
                  <p className="text-muted-foreground mb-2"><strong>Color:</strong> Orange</p>
                  <p className="text-muted-foreground">Controls creativity, sexuality, and emotional balance. The center of passion and pleasure.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span>Solar Plexus Chakra (Manipura)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2"><strong>Location:</strong> Upper abdomen</p>
                  <p className="text-muted-foreground mb-2"><strong>Color:</strong> Yellow</p>
                  <p className="text-muted-foreground">Manages personal power, confidence, and self-esteem. Your inner fire and willpower center.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-green-500" />
                    <span>Heart Chakra (Anahata)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2"><strong>Location:</strong> Center of chest</p>
                  <p className="text-muted-foreground mb-2"><strong>Color:</strong> Green</p>
                  <p className="text-muted-foreground">The center of love, compassion, and forgiveness. Bridges the physical and spiritual realms.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span>Throat Chakra (Vishuddha)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2"><strong>Location:</strong> Throat</p>
                  <p className="text-muted-foreground mb-2"><strong>Color:</strong> Blue</p>
                  <p className="text-muted-foreground">Governs communication, self-expression, and truth. Your voice and authentic self.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                    <span>Third Eye Chakra (Ajna)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2"><strong>Location:</strong> Forehead, between eyes</p>
                  <p className="text-muted-foreground mb-2"><strong>Color:</strong> Indigo</p>
                  <p className="text-muted-foreground">Controls intuition, psychic abilities, and spiritual insight. Your inner vision and wisdom.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <span>Crown Chakra (Sahasrara)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2"><strong>Location:</strong> Top of head</p>
                  <p className="text-muted-foreground mb-2"><strong>Color:</strong> Purple/White</p>
                  <p className="text-muted-foreground">Connects you to divine consciousness and universal energy. Your spiritual connection.</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Signs of Imbalanced Chakras</h3>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Physical and Emotional Indicators</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Physical Symptoms:</h5>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>Chronic fatigue or low energy</li>
                    <li>Digestive issues</li>
                    <li>Headaches or migraines</li>
                    <li>Sleep disturbances</li>
                    <li>Muscle tension or pain</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Emotional Symptoms:</h5>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>Anxiety or depression</li>
                    <li>Mood swings</li>
                    <li>Feeling disconnected</li>
                    <li>Lack of motivation</li>
                    <li>Relationship difficulties</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Chakra Balancing Techniques for Rhode Island Residents</h3>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Meditation and Visualization</h4>
                <p className="text-muted-foreground">Practice daily meditation focusing on each chakra. Visualize the corresponding color flowing through each energy center, cleansing and balancing it.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Crystal Healing</h4>
                <p className="text-muted-foreground">Use crystals corresponding to each chakra. Place them on the appropriate body locations during meditation or carry them with you throughout the day.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Sound Therapy</h4>
                <p className="text-muted-foreground">Use singing bowls, tuning forks, or chanting to activate and balance your chakras. Each chakra responds to specific frequencies.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Nature Connection</h4>
                <p className="text-muted-foreground">Spend time in Rhode Island's natural spaces. Walk barefoot on the beach, meditate by the ocean, or sit under trees to ground and balance your energy.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Rhode Island's Sacred Spaces for Chakra Work</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Beavertail State Park</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Perfect for root chakra grounding. The rocky coastline and powerful ocean energy help you connect with earth energy.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Newport's Cliff Walk</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ideal for heart chakra opening. The combination of natural beauty and historic energy creates a powerful healing environment.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Block Island's Mohegan Bluffs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Excellent for third eye and crown chakra activation. The elevated position and ocean views enhance spiritual awareness.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Providence's WaterFire</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Great for sacral chakra work. The fire and water elements create a perfect balance for creativity and passion.</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Daily Chakra Balancing Routine</h3>
            
            <div className="bg-secondary/20 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Morning Practice (10-15 minutes)</h4>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Start with deep breathing and grounding</li>
                <li>Work through each chakra from root to crown</li>
                <li>Visualize each chakra spinning and glowing with its color</li>
                <li>Use affirmations for each energy center</li>
                <li>End with a full-body energy sweep</li>
              </ol>
            </div>

            <div className="bg-secondary/20 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Evening Practice (5-10 minutes)</h4>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Reflect on your day and any energy imbalances</li>
                <li>Focus on the chakras that need extra attention</li>
                <li>Use crystals or essential oils for targeted healing</li>
                <li>Express gratitude for your body and energy system</li>
                <li>Set intentions for balanced energy tomorrow</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Working with a Professional Energy Healer</h3>
            
            <p className="text-muted-foreground mb-6">
              While self-practice is essential, working with a professional energy healer can accelerate your chakra balancing journey. Rhode Island is home to many skilled practitioners who offer:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>Reiki healing sessions for chakra alignment</li>
              <li>Crystal healing treatments</li>
              <li>Chakra reading and assessment</li>
              <li>Personalized healing plans</li>
              <li>Group healing circles and workshops</li>
            </ul>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-4">Experience Professional Chakra Balancing</h4>
              <p className="text-muted-foreground mb-4">
                Our certified energy healers at Conjuring Psychic Services specialize in chakra balancing and energy healing. We can help you identify imbalances and create a personalized healing plan for optimal energy flow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">Book Energy Healing Session</a>
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
