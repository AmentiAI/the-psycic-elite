import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | The Conjuring House - Get in Touch",
  description: "Contact The Conjuring House for questions about our psychic services, booking information, or spiritual guidance. We're here to help you on your journey.",
  keywords: "contact us, psychic services, spiritual guidance, booking, questions, Rhode Island",
  openGraph: {
    title: "Contact Us | The Conjuring House",
    description: "Contact The Conjuring House for questions about our psychic services or to book your reading.",
    type: "website",
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "(401) 555-PSYCH",
    description: "Call us for immediate assistance"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@theconjuringhouse.net",
    description: "Send us your questions"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Providence, Rhode Island",
    description: "Serving all of Rhode Island"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "24/7 Online Services",
    description: "Available anytime, anywhere"
  }
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            Have questions about our psychic services? Need help booking a reading? 
            We're here to help you on your spiritual journey. Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-foreground mb-2">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
            <p className="text-lg text-muted-foreground">
              Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                We typically respond within 24 hours during business days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this about?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1">
                    Send Message
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                      Book Reading Instead
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Before contacting us, you might find the answer to your question in our FAQ section.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">How do I book a reading?</h3>
                <p className="text-sm text-muted-foreground">
                  Simply click any "Book Now" button on our website to be directed to our booking platform where you can choose your preferred psychic and schedule your reading.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">What services do you offer?</h3>
                <p className="text-sm text-muted-foreground">
                  We offer tarot readings, astrology consultations, psychic readings, love and relationship guidance, energy healing, and dream interpretation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">Are your psychics certified?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, all our psychics are carefully vetted and certified professionals with years of experience and proven track records of accuracy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">How much do readings cost?</h3>
                <p className="text-sm text-muted-foreground">
                  Reading costs vary by service type and duration. You can view specific pricing when you book your reading through our platform.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Spiritual Journey?</h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait - book your reading today and discover the guidance that awaits you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-purple-600 hover:bg-gray-100">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Your Reading Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
