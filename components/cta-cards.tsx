import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { OutboundLink } from "./outbound-link"
import { Star, Sparkles, Clock, Users } from "lucide-react"
import { AFFILIATE_URLS } from "@/lib/affiliate-config"

interface CTACardProps {
  title: string
  description: string
  href: string
  features: string[]
  popular?: boolean
  icon?: React.ComponentType<{ className?: string }>
  trackingId?: string
  category?: string
}

export function CTACard({
  title,
  description,
  href,
  features,
  popular = false,
  icon: Icon,
  trackingId,
  category = "service"
}: CTACardProps) {
  return (
    <Card className={`relative hover:shadow-lg transition-all duration-300 ${popular ? 'ring-2 ring-purple-500' : ''}`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
          Most Popular
        </Badge>
      )}
      <CardHeader className="text-center">
        {Icon && (
          <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
            <Icon className="h-8 w-8 text-purple-600" />
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <Sparkles className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <OutboundLink
          href={href}
          trackingId={trackingId}
          category={category}
          action="service_click"
          className="w-full"
        >
          <Button className={`w-full ${popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}>
            Get Started Now
          </Button>
        </OutboundLink>
      </CardContent>
    </Card>
  )
}

interface CTASectionProps {
  title: string
  description: string
  cards: CTACardProps[]
  className?: string
}

export function CTASection({ title, description, cards, className = "" }: CTASectionProps) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <CTACard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Pre-built CTA card configurations
export const psychicServiceCards: CTACardProps[] = [
  {
    title: "Tarot Card Reading",
    description: "Discover your future with expert tarot card readers",
    href: AFFILIATE_URLS.tarot,
    features: ["Past, Present, Future", "Love & Relationships", "Career Guidance", "Spiritual Growth"],
    popular: true,
    icon: Star,
    trackingId: "tarot-reading",
    category: "tarot"
  },
  {
    title: "Psychic Reading",
    description: "Connect with certified psychics for spiritual guidance",
    href: AFFILIATE_URLS.psychic,
    features: ["Intuitive Guidance", "Spirit Communication", "Energy Reading", "Life Purpose"],
    popular: false,
    icon: Sparkles,
    trackingId: "psychic-reading",
    category: "psychic"
  },
  {
    title: "Love Reading",
    description: "Find clarity in matters of the heart",
    href: AFFILIATE_URLS.love,
    features: ["Soulmate Connections", "Relationship Healing", "Twin Flame Guidance", "Love Compatibility"],
    popular: false,
    icon: Users,
    trackingId: "love-reading",
    category: "love"
  }
]



