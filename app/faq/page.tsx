import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { HelpCircle, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | The Conjuring House",
  description: "Find answers to common questions about our psychic services, readings, and spiritual guidance. Get the information you need before booking your reading.",
  keywords: "FAQ, frequently asked questions, psychic services, tarot readings, spiritual guidance, help",
  openGraph: {
    title: "Frequently Asked Questions | The Conjuring House",
    description: "Find answers to common questions about our psychic services, readings, and spiritual guidance.",
    type: "website",
  },
}

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What services do you offer?",
        answer: "We offer a comprehensive range of psychic services including tarot card readings, astrology consultations, psychic readings, love and relationship guidance, energy healing, and dream interpretation. Each service is designed to provide you with spiritual insight and guidance."
      },
      {
        question: "How do I book a reading?",
        answer: "Booking a reading is easy! Simply click on any 'Book Now' button throughout our website, and you'll be directed to our partner platform where you can choose your preferred psychic and schedule your reading. All readings are conducted online for your convenience."
      },
      {
        question: "Are your psychics certified?",
        answer: "Yes, all our psychics are carefully vetted and certified professionals with years of experience. They have undergone rigorous training and have proven track records of accuracy and client satisfaction. Each psychic has their own unique specialties and gifts."
      },
      {
        question: "How much do readings cost?",
        answer: "Reading costs vary depending on the type of service and duration. Our partner platform offers competitive pricing with various packages to suit different budgets. You can view specific pricing when you book your reading."
      }
    ]
  },
  {
    category: "About Readings",
    questions: [
      {
        question: "How accurate are the readings?",
        answer: "Our psychics have high accuracy rates, with most maintaining 85-95% accuracy based on client feedback. However, it's important to remember that psychic readings provide guidance and possibilities, not absolute certainties. The future is fluid and can change based on your choices and actions."
      },
      {
        question: "What should I expect during a reading?",
        answer: "During your reading, the psychic will connect with your energy and provide insights about your situation. They may use tools like tarot cards, astrology charts, or their intuitive abilities. Readings are conducted in a safe, confidential environment, and you can ask questions throughout the session."
      },
      {
        question: "How long do readings last?",
        answer: "Reading durations vary by service type. Tarot readings typically last 30-60 minutes, while astrology consultations may run 45-90 minutes. Energy healing sessions usually take 60-90 minutes. You can choose the duration that works best for you when booking."
      },
      {
        question: "Can I ask specific questions?",
        answer: "Absolutely! In fact, having specific questions in mind can help the psychic provide more focused and relevant guidance. Whether you're asking about love, career, family, or spiritual growth, our psychics are here to help you find clarity."
      }
    ]
  },
  {
    category: "Technical & Privacy",
    questions: [
      {
        question: "Is my reading confidential?",
        answer: "Yes, complete confidentiality is guaranteed. All readings are conducted in private, and your personal information and reading details are never shared with third parties. We take your privacy very seriously."
      },
      {
        question: "Do I need any special equipment?",
        answer: "No special equipment is required. You just need a device with internet connection (computer, tablet, or smartphone) and a quiet, private space where you can focus during your reading. Video calls are conducted through our secure platform."
      },
      {
        question: "What if I'm not satisfied with my reading?",
        answer: "We strive for complete client satisfaction. If you're not happy with your reading experience, please contact our support team, and we'll work with you to resolve any concerns. Our psychics are committed to providing valuable guidance."
      },
      {
        question: "Can I get a refund?",
        answer: "Refund policies are handled by our partner platform. Generally, refunds are available if there are technical issues or if you're not satisfied with your reading experience. Please check the specific terms when booking your reading."
      }
    ]
  },
  {
    category: "Spiritual & Ethical",
    questions: [
      {
        question: "Are your practices ethical?",
        answer: "Yes, we adhere to the highest ethical standards in all our practices. Our psychics are committed to providing honest, compassionate guidance without making unrealistic promises or exploiting vulnerable clients. We believe in empowering people through spiritual insight."
      },
      {
        question: "Do you offer free readings?",
        answer: "We occasionally offer free introductory readings or consultations. Check our website regularly for special promotions. However, our professional psychics typically charge for their time and expertise, as this is their livelihood."
      },
      {
        question: "Can readings predict the future?",
        answer: "Psychic readings can reveal potential future outcomes based on current energies and patterns, but the future is not set in stone. Your choices and actions can influence outcomes. Think of readings as guidance to help you make informed decisions."
      },
      {
        question: "Is this real or just entertainment?",
        answer: "Our services are genuine spiritual guidance provided by trained professionals. While we can't guarantee specific outcomes, our psychics have helped thousands of clients find clarity, healing, and direction in their lives. We take our work seriously and with respect for the spiritual realm."
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
            Find answers to common questions about our psychic services, readings, and spiritual guidance. 
            If you don't see your question answered here, please don't hesitate to contact us.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-primary" />
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`} className="border rounded-lg px-4">
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
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you didn't find the answer you were looking for, our support team is here to help. 
            Contact us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                Book a Reading
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
