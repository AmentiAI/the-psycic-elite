import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "California",
    rating: 5,
    text: "Luna's tarot reading was incredibly accurate and insightful. She helped me understand my relationship patterns and gave me the clarity I needed to move forward. Highly recommended!",
    service: "Tarot Reading",
  },
  {
    id: 2,
    name: "Michael R.",
    location: "New York",
    rating: 5,
    text: "Sage's mediumship session brought me so much peace. She connected with my late father and delivered messages that only he would know. It was truly healing.",
    service: "Mediumship",
  },
  {
    id: 3,
    name: "Emma L.",
    location: "Texas",
    rating: 5,
    text: "Crystal's dream interpretation opened my eyes to what my subconscious was trying to tell me. Her insights helped me overcome recurring nightmares and sleep peacefully again.",
    service: "Dream Interpretation",
  },
  {
    id: 4,
    name: "David K.",
    location: "Florida",
    rating: 5,
    text: "Phoenix's relationship reading was spot on. She identified the core issues in my marriage and provided practical guidance that saved our relationship. Forever grateful!",
    service: "Love Reading",
  },
  {
    id: 5,
    name: "Jennifer W.",
    location: "Oregon",
    rating: 5,
    text: "The astrology reading revealed so much about my personality and life path. It helped me understand my strengths and challenges, and I feel more aligned with my purpose now.",
    service: "Astrology",
  },
  {
    id: 6,
    name: "Robert T.",
    location: "Colorado",
    rating: 5,
    text: "The energy healing session was transformative. I felt lighter and more balanced afterward. The chakra work really helped clear blockages I didn't even know I had.",
    service: "Energy Healing",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Read testimonials from thousands of satisfied clients who have found guidance, healing, and clarity through
            our psychic services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/30" />
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{testimonial.text}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div>
              <span>10,000+ Happy Clients</span>
            </div>
            <div>
              <span>99% Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
