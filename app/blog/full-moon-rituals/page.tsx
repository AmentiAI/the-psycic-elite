import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Moon, Star, Heart, Zap } from "lucide-react"

export default function FullMoonRituals() {
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
            <Badge className="mb-4">Moon Magic</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Powerful Full Moon Rituals for Manifestation in Rhode Island
          </h1>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Luna Starweaver</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>January 3, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img 
                src="/mystical-woman-with-long-flowing-hair-and-crystal-.jpg" 
                alt="Full moon ritual by the ocean" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              Rhode Island's coastal energy and natural beauty make it an ideal location for powerful full moon rituals. The Ocean State's unique combination of water energy, historic spiritual sites, and natural vortexes creates the perfect environment for manifestation and spiritual work during the full moon.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">The Power of Full Moon Energy in Rhode Island</h2>
            
            <p className="text-muted-foreground mb-6">
              The full moon's energy is amplified by Rhode Island's coastal location and natural energy vortexes. The combination of lunar energy with the ocean's powerful vibrations creates an ideal environment for manifestation, healing, and spiritual transformation.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Best Locations for Full Moon Rituals in Rhode Island</h3>
            
            <div className="space-y-4 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Moon className="h-5 w-5 text-blue-500" />
                    <span>Beavertail State Park, Jamestown</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Perfect for grounding and earth energy work. The rocky coastline provides excellent energy for manifestation rituals and connecting with the elements.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-purple-500" />
                    <span>Block Island's Mohegan Bluffs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ideal for high-energy rituals and spiritual elevation. The elevated position and ocean views enhance the full moon's power.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-pink-500" />
                    <span>Newport's Cliff Walk</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Great for love and relationship rituals. The historic energy and ocean views create a romantic and powerful setting.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <span>Providence's WaterFire</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Perfect for transformation and renewal rituals. The combination of fire and water elements amplifies manifestation energy.</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Essential Full Moon Ritual Supplies</h3>
            
            <div className="bg-secondary/20 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Basic Ritual Items</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>White candles (for purity and clarity)</li>
                <li>Clear quartz crystals (for amplifying energy)</li>
                <li>Sea salt (for cleansing and protection)</li>
                <li>Moon water (collected during the full moon)</li>
                <li>Journal and pen (for writing intentions)</li>
                <li>Offering items (flowers, herbs, or small tokens)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Step-by-Step Full Moon Ritual</h3>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">1. Preparation (30 minutes before moonrise)</h4>
                <p className="text-muted-foreground">Cleanse yourself with a salt bath or shower. Set up your ritual space with candles, crystals, and offerings. Center yourself through meditation.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">2. Grounding and Centering</h4>
                <p className="text-muted-foreground">Stand barefoot on the earth (or sand if at the beach). Visualize roots extending from your feet into the ground, connecting you to Rhode Island's energy.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">3. Calling the Elements</h4>
                <p className="text-muted-foreground">Face each direction and call upon the elements: Earth (North), Air (East), Fire (South), Water (West). Feel their energy surrounding you.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">4. Moon Invocation</h4>
                <p className="text-muted-foreground">Face the full moon and speak your invocation. Ask the moon to bless your ritual and amplify your intentions.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">5. Intention Setting</h4>
                <p className="text-muted-foreground">Write your intentions on paper or speak them aloud. Be specific and positive. Visualize your desires manifesting.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">6. Energy Work</h4>
                <p className="text-muted-foreground">Use crystals, visualization, or energy healing techniques to charge your intentions with lunar energy.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">7. Offering and Gratitude</h4>
                <p className="text-muted-foreground">Make an offering to the moon and express gratitude for the blessings in your life. Thank the elements and spirits for their assistance.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">8. Closing the Ritual</h4>
                <p className="text-muted-foreground">Ground any excess energy back into the earth. Thank the moon and elements. Close your ritual space and journal about your experience.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Rhode Island-Specific Full Moon Rituals</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ocean Cleansing Ritual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Use Rhode Island's ocean energy to cleanse negative energy and emotions. Stand in the water (if safe) or on the shore and let the waves wash away what no longer serves you.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lighthouse Guidance Ritual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Use the energy of Rhode Island's lighthouses to seek guidance and direction. Visualize the lighthouse beam illuminating your path forward.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Historic Energy Ritual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Connect with Rhode Island's rich history and ancestral energy. Visit historic sites during the full moon to honor the past and manifest future prosperity.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Seasonal Manifestation Ritual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Align your manifestations with Rhode Island's seasonal energy. Use the changing seasons to support different types of goals and intentions.</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Full Moon Ritual Safety Tips</h3>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Important Safety Considerations</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Always check weather conditions before outdoor rituals</li>
                <li>Bring a friend or let someone know your location</li>
                <li>Respect private property and public space regulations</li>
                <li>Bring appropriate clothing and supplies for the weather</li>
                <li>Be mindful of tides and ocean conditions</li>
                <li>Clean up after yourself and leave no trace</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 mt-6">Working with a Professional for Full Moon Rituals</h3>
            
            <p className="text-muted-foreground mb-6">
              While personal rituals are powerful, working with a professional spiritual guide can enhance your full moon experience. Rhode Island is home to many experienced practitioners who offer:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>Group full moon ceremonies and circles</li>
              <li>Personalized ritual guidance and coaching</li>
              <li>Energy healing sessions during the full moon</li>
              <li>Manifestation workshops and classes</li>
              <li>Custom ritual design for specific goals</li>
            </ul>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-4">Enhance Your Full Moon Practice</h4>
              <p className="text-muted-foreground mb-4">
                Our experienced spiritual guides at Conjuring Psychic Services can help you create powerful full moon rituals tailored to your specific needs and goals. We offer personalized guidance and group ceremonies throughout Rhode Island.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/book?service=energy">Book Energy Healing Session</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Join Our Full Moon Circles</Link>
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
