"use client"

import { ReactNode } from "react"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface OutboundLinkProps {
  href: string
  children: ReactNode
  className?: string
  showIcon?: boolean
  trackingId?: string
  category?: string
  action?: string
}

export function OutboundLink({ 
  href, 
  children, 
  className, 
  showIcon = true,
  trackingId,
  category = "affiliate",
  action = "click"
}: OutboundLinkProps) {
  const handleClick = () => {
    // Google Analytics tracking (if implemented)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: trackingId || href,
        value: 1
      })
    }
    
    // Facebook Pixel tracking (if implemented)
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: trackingId || href,
        content_category: category
      })
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={cn("inline-flex items-center gap-1", className)}
      onClick={handleClick}
      aria-label={`${children} (opens in new tab)`}
    >
      {children}
      {showIcon && <ExternalLink className="h-4 w-4 flex-shrink-0" />}
    </a>
  )
}

// Declare global gtag and fbq for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}





