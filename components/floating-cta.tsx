"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Phone, MessageCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    // Show floating CTA after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isMinimized ? (
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-2xl shadow-2xl max-w-sm animate-bounce">
          <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-bold text-lg">Book Your Reading!</span>
          </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-white/70 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <p className="text-sm mb-4 opacity-90">
            Don't wait! Connect with Rhode Island's top psychics today.
          </p>
          
          <div className="space-y-2">
            <Button asChild className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold">
              <a href="https://psychicoz.top?a_aid=688e746fdd2a3&a_bid=7968fcf8" target="_blank" rel="noopener noreferrer sponsored" className="flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4" />
                Book Reading Now
              </a>
            </Button>
            
            <Button asChild size="sm" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
              <Link href="/services" className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                Call Now
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <Sparkles className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
