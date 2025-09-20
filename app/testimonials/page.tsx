import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Star, Quote, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Client Testimonials | The Conjuring House Reviews",
  description: "Read authentic testimonials from our satisfied clients. Discover how our psychic services have helped thousands find clarity, peace, and direction in their lives.",
  keywords: "testimonials, reviews, client feedback, psychic services, spiritual guidance, success stories",
  openGraph: {
    title: "Client Testimonials | The Conjuring House Reviews",
    description: "Read authentic testimonials from our satisfied clients about their psychic reading experiences.",
    type: "website",
  },
}

const testimonials = [
  {
    name: "Sarah M.",
    location: "Providence, RI",
    service: "Love Reading with Phoenix",
    rating: 5,
    text: "Phoenix helped me understand my relationship patterns and guided me to my soulmate. Her insights were incredibly accurate and empowering. I'm now in the healthiest relationship of my life!",
    date: "2 weeks ago"
  },
  {
    name: "Michael R.",
    location: "Newport, RI", 
    service: "Mediumship Session with Sage",
    rating: 5,
    text: "Sage connected me with my departed grandmother in the most beautiful way. The messages she shared were so specific and meaningful. I finally found the closure I needed after years of grief.",
    date: "1 month ago"
  },
  {
    name: "Jessica L.",
    location: "Warwick, RI",
    service: "Tarot Reading with Luna",
    rating: 5,
    text: "Luna's tarot reading was spot-on about my career situation. She predicted the job offer I received just two weeks later. Her guidance helped me make the right decision for my future.",
    date: "3 weeks ago"
  },
  {
    name: "David P.",
    location: "Cranston, RI",
    service: "Dream Interpretation with Crystal",
    rating: 5,
    text: "Crystal's dream interpretation was incredibly accurate. She helped me understand the messages my subconscious was trying to send me. The clarity I gained was life-changing.",
    date: "1 week ago"
  },
  {
    name: "Emma K.",
    location: "Pawtucket, RI",
    service: "Energy Healing with Sage",
    rating: 5,
    text: "The energy healing session was transformative. I felt a deep sense of peace and clarity after working with Sage. My anxiety has significantly decreased, and I feel more balanced than ever.",
    date: "2 weeks ago"
  },
  {
    name: "Robert T.",
    location: "East Providence, RI",
    service: "Astrology Reading with Luna",
    rating: 5,
    text: "Luna's birth chart analysis was incredibly detailed and accurate. She explained aspects of my personality I never understood before. The timing guidance she provided was spot-on for my major life decisions.",
    date: "1 month ago"
  },
  {
    name: "Lisa M.",
    location: "Woonsocket, RI",
    service: "Clairvoyant Reading with Crystal",
    rating: 5,
    text: "Crystal's clairvoyant abilities are remarkable. She saw things about my future that no one else could have known. Her gentle approach made me feel comfortable and safe during the reading.",
    date: "3 weeks ago"
  },
  {
    name: "James W.",
    location: "North Providence, RI",
    service: "Twin Flame Guidance with Phoenix",
    rating: 5,
    text: "Phoenix's twin flame guidance was exactly what I needed during the most challenging time of my life. Her empowering approach helped me navigate the complex emotions and find my path forward.",
    date: "2 months ago"
  },
  {
    name: "Maria G.",
    location: "Central Falls, RI",
    service: "Crystal Healing with Crystal",
    rating: 5,
    text: "The crystal healing session was unlike anything I've experienced. Crystal's knowledge of crystals and their healing properties is extensive. I felt immediate relief from my physical and emotional pain.",
    date: "1 week ago"
  },
  {
    name: "Thomas H.",
    location: "Johnston, RI",
    service: "Psychic Reading with Luna",
    rating: 5,
    text: "Luna's psychic reading provided the clarity I desperately needed about my family situation. Her compassionate guidance helped me understand the dynamics and find peace with difficult relationships.",
    date: "2 weeks ago"
  },
  {
    name: "Amanda S.",
    location: "Lincoln, RI",
    service: "Past Life Regression with Sage",
    rating: 5,
    text: "Sage's past life regression session was profound and healing. Understanding my past lives helped me make sense of current patterns and relationships. I feel more connected to my soul's journey now.",
    date: "1 month ago"
  },
  {
    name: "Christopher B.",
    location: "Barrington, RI",
    service: "Aura Reading with Crystal",
    rating: 5,
    text: "Crystal's aura reading was incredibly insightful. She identified energy blockages I wasn't aware of and provided specific guidance on how to clear them. The results were immediate and lasting.",
    date: "3 weeks ago"
  }
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Client Testimonials
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            Read authentic testimonials from our satisfied clients who have experienced the transformative 
            power of our psychic services. Discover how we've helped thousands find clarity, peace, and direction.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <Quote className="h-6 w-6 text-primary mb-2" />
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">{testimonial.service}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                      </div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Magic?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of satisfied clients who have found clarity, peace, and direction through our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                Book Your Reading
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              <Link href="/psychics">Meet Our Psychics</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
