"use client"

import { useEffect, useState } from "react"
import { abTestingService, CampaignVariant } from "@/lib/ab-testing"
import { OutboundLink } from "./outbound-link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Star, Sparkles } from "lucide-react"

interface DynamicCTAProps {
  componentId: string
  userId?: string
  fallbackConfig?: CampaignVariant['config']
  className?: string
}

export function DynamicCTA({ 
  componentId, 
  userId = 'anonymous', 
  fallbackConfig,
  className = "" 
}: DynamicCTAProps) {
  const [variant, setVariant] = useState<CampaignVariant | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get variant for this user and component
    const selectedVariant = abTestingService.getVariant(componentId, userId)
    setVariant(selectedVariant)
    setLoading(false)

    // Track impression
    if (selectedVariant) {
      abTestingService.trackImpression(selectedVariant.id)
    }
  }, [componentId, userId])

  const handleClick = () => {
    if (variant) {
      abTestingService.trackClick(variant.id)
    }
  }

  const handleConversion = (revenue: number = 0) => {
    if (variant) {
      abTestingService.trackConversion(variant.id, revenue)
    }
  }

  if (loading) {
    return <div className={`animate-pulse ${className}`}>Loading...</div>
  }

  if (!variant) {
    return null
  }

  const config = variant.config

  // Render based on CTA type
  switch (config.type) {
    case 'banner':
      return (
        <DynamicBanner
          config={config}
          onClick={handleClick}
          className={className}
        />
      )
    case 'card':
      return (
        <DynamicCard
          config={config}
          onClick={handleClick}
          className={className}
        />
      )
    case 'button':
      return (
        <DynamicButton
          config={config}
          onClick={handleClick}
          className={className}
        />
      )
    case 'section':
      return (
        <DynamicSection
          config={config}
          onClick={handleClick}
          className={className}
        />
      )
    default:
      return null
  }
}

// Dynamic Banner Component
function DynamicBanner({ 
  config, 
  onClick, 
  className 
}: { 
  config: CampaignVariant['config']
  onClick: () => void
  className?: string 
}) {
  const bannerStyle = {
    backgroundColor: config.backgroundColor,
    color: config.textColor,
    ...config.customStyles
  }

  return (
    <div 
      className={`py-4 px-4 sm:px-6 lg:px-8 ${className}`}
      style={bannerStyle}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{config.title}</h3>
          <p className="text-sm opacity-90">{config.description}</p>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <OutboundLink
            href={config.affiliateUrl}
            trackingId={config.trackingId}
            category="ab_test"
            action="cta_click"
            className="px-6 py-2 rounded-lg font-medium transition-colors"
            style={{
              backgroundColor: config.buttonColor,
              color: config.textColor
            }}
            onClick={onClick}
          >
            {config.buttonText}
          </OutboundLink>
        </div>
      </div>
    </div>
  )
}

// Dynamic Card Component
function DynamicCard({ 
  config, 
  onClick, 
  className 
}: { 
  config: CampaignVariant['config']
  onClick: () => void
  className?: string 
}) {
  const cardStyle = {
    backgroundColor: config.backgroundColor,
    color: config.textColor,
    ...config.customStyles
  }

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 ${className}`} style={cardStyle}>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{config.title}</CardTitle>
        <CardDescription>{config.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <OutboundLink
          href={config.affiliateUrl}
          trackingId={config.trackingId}
          category="ab_test"
          action="cta_click"
          className="w-full"
          onClick={onClick}
        >
          <Button 
            className="w-full"
            style={{
              backgroundColor: config.buttonColor,
              color: config.textColor
            }}
          >
            {config.buttonText}
          </Button>
        </OutboundLink>
      </CardContent>
    </Card>
  )
}

// Dynamic Button Component
function DynamicButton({ 
  config, 
  onClick, 
  className 
}: { 
  config: CampaignVariant['config']
  onClick: () => void
  className?: string 
}) {
  const buttonStyle = {
    backgroundColor: config.buttonColor,
    color: config.textColor,
    ...config.customStyles
  }

  return (
    <OutboundLink
      href={config.affiliateUrl}
      trackingId={config.trackingId}
      category="ab_test"
      action="cta_click"
      className={className}
      onClick={onClick}
    >
      <Button 
        size={config.size as any}
        style={buttonStyle}
        className="flex items-center gap-2"
      >
        {config.buttonText}
        <ExternalLink className="h-4 w-4" />
      </Button>
    </OutboundLink>
  )
}

// Dynamic Section Component
function DynamicSection({ 
  config, 
  onClick, 
  className 
}: { 
  config: CampaignVariant['config']
  onClick: () => void
  className?: string 
}) {
  const sectionStyle = {
    backgroundColor: config.backgroundColor,
    color: config.textColor,
    ...config.customStyles
  }

  return (
    <section 
      className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}
      style={sectionStyle}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{config.title}</h2>
        <p className="text-xl mb-8 opacity-90">{config.description}</p>
        <OutboundLink
          href={config.affiliateUrl}
          trackingId={config.trackingId}
          category="ab_test"
          action="cta_click"
          className="inline-flex items-center gap-2"
          onClick={onClick}
        >
          <Button 
            size="lg"
            style={{
              backgroundColor: config.buttonColor,
              color: config.textColor
            }}
            className="text-lg px-8 py-4"
          >
            {config.buttonText}
            <ExternalLink className="h-5 w-5" />
          </Button>
        </OutboundLink>
      </div>
    </section>
  )
}

// Hook for A/B testing
export function useABTest(componentId: string, userId?: string) {
  const [variant, setVariant] = useState<CampaignVariant | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const selectedVariant = abTestingService.getVariant(componentId, userId || 'anonymous')
    setVariant(selectedVariant)
    setLoading(false)

    if (selectedVariant) {
      abTestingService.trackImpression(selectedVariant.id)
    }
  }, [componentId, userId])

  const trackClick = () => {
    if (variant) {
      abTestingService.trackClick(variant.id)
    }
  }

  const trackConversion = (revenue: number = 0) => {
    if (variant) {
      abTestingService.trackConversion(variant.id, revenue)
    }
  }

  return {
    variant,
    loading,
    trackClick,
    trackConversion
  }
}




