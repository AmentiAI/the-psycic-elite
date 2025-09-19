"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"
import { OutboundLink } from "./outbound-link"

interface CTABannerProps {
  title: string
  description: string
  buttonText: string
  href: string
  variant?: "default" | "success" | "warning" | "info"
  dismissible?: boolean
  trackingId?: string
}

export function CTABanner({ 
  title, 
  description, 
  buttonText, 
  href, 
  variant = "default",
  dismissible = true,
  trackingId
}: CTABannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const variantStyles = {
    default: "bg-gradient-to-r from-purple-600 to-indigo-600",
    success: "bg-gradient-to-r from-green-600 to-emerald-600",
    warning: "bg-gradient-to-r from-orange-600 to-red-600",
    info: "bg-gradient-to-r from-blue-600 to-cyan-600"
  }

  return (
    <div className={`${variantStyles[variant]} text-white py-4 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <OutboundLink
            href={href}
            trackingId={trackingId}
            category="banner"
            action="cta_click"
            className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {buttonText}
          </OutboundLink>
          {dismissible && (
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}





