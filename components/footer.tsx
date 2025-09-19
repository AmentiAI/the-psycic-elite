import Link from "next/link"
import { Star, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Star className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Conjuring Psychic Services</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rhode Island's premier source for spiritual guidance and psychic insights. Connect with gifted psychics in Providence, Newport, Warwick, and throughout the Ocean State to discover your path to clarity and enlightenment.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="#" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="#" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="#" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="#" aria-label="YouTube">
                    <Youtube className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Tarot Card Readings
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Astrology Readings
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Psychic Readings
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Love & Relationships
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Energy Healing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Dream Interpretation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Blog & Articles
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Featured Articles */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Featured Articles</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/understanding-tarot-cards" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Understanding Tarot Cards: Rhode Island Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog/mercury-retrograde-guide" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Mercury Retrograde: What It Really Means
                  </Link>
                </li>
                <li>
                  <Link href="/blog/developing-psychic-abilities" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Developing Your Natural Psychic Abilities
                  </Link>
                </li>
                <li>
                  <Link href="/blog/chakra-balancing-guide" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Complete Guide to Chakra Balancing
                  </Link>
                </li>
                <li>
                  <Link href="/blog/dream-interpretation-symbols" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Common Dream Symbols and Meanings
                  </Link>
                </li>
                <li>
                  <Link href="/blog/full-moon-rituals" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Powerful Full Moon Rituals for Manifestation
                  </Link>
                </li>
                <li>
                  <Link href="/blog/angel-numbers-guide" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Angel Numbers: Divine Messages
                  </Link>
                </li>
                <li>
                  <Link href="/blog/crystal-healing-beginners" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Crystal Healing for Beginners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Stay Connected</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>1-800-CONJURE-1</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@conjuringpsychic.com</span>
                </div>
                <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span>Available 24/7 Online</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Newsletter</p>
                <p className="text-xs text-muted-foreground">Get weekly spiritual insights</p>
                <div className="flex space-x-2">
                  <Input placeholder="Your email" className="text-xs" />
                  <Button size="sm">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">© 2024 Conjuring Psychic Services. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
