"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Star } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Conjuring Psychic Services</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <div className="flex items-center space-x-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/tarot-reading">Tarot Reading</Link>
              </Button>
              <Button asChild size="sm">
                <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored">Get Reading</a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/tarot-reading" onClick={() => setIsOpen(false)}>
                    Tarot Reading
                  </Link>
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
