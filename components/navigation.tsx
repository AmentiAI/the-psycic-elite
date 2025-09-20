"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Star, ChevronDown, Heart, Eye, Sun, Moon, Zap, Sparkles } from "lucide-react"

const services = [
  {
    name: "Tarot Readings",
    href: "/services/tarot",
    description: "Discover your future with tarot cards",
    icon: Star
  },
  {
    name: "Astrology",
    href: "/services/astrology", 
    description: "Birth chart analysis & cosmic guidance",
    icon: Sun
  },
  {
    name: "Psychic Readings",
    href: "/services/psychic",
    description: "Intuitive guidance & spiritual insight",
    icon: Eye
  },
  {
    name: "Love & Relationships",
    href: "/services/love",
    description: "Find clarity in matters of the heart",
    icon: Heart
  },
  {
    name: "Energy Healing",
    href: "/services/energy",
    description: "Restore balance & harmony",
    icon: Zap
  },
  {
    name: "Dream Interpretation",
    href: "/services/dream",
    description: "Understand your dreams",
    icon: Moon
  }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  // Close services dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Star className="h-8 w-8 text-primary" />
            <span className="text-lg sm:text-xl font-bold text-foreground">The Conjuring House</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => {
                        const IconComponent = service.icon
                        return (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                              <IconComponent className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link
                        href="/services"
                        className="block w-full text-center py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/psychics" className="text-foreground hover:text-primary transition-colors font-medium">
              Psychics
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button asChild variant="outline" size="sm">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Book Reading
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">
                Get Reading
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <Link
                href="/"
                className="block px-3 py-3 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-muted-foreground mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  {services.map((service) => {
                    const IconComponent = service.icon
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent className="h-4 w-4 text-primary" />
                        <span className="text-foreground">{service.name}</span>
                      </Link>
                    )
                  })}
                  <Link
                    href="/services"
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-foreground">View All Services</span>
                  </Link>
                </div>
              </div>

              <Link
                href="/psychics"
                className="block px-3 py-3 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Psychics
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-3 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block px-3 py-3 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-3 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile CTA Buttons */}
              <div className="px-3 py-2 space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" onClick={() => setIsOpen(false)}>
                    Book Reading
                  </a>
                </Button>
                <Button asChild className="w-full">
                  <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" onClick={() => setIsOpen(false)}>
                    Get Reading
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
