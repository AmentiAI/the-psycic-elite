"use client"

import { DynamicBanner } from "./dynamic-banner"

interface PageBannerProps {
  componentId?: string
  userId?: string
  className?: string
}

export function PageBanner({ 
  componentId = "banner-cta", 
  userId = "anonymous", 
  className = "" 
}: PageBannerProps) {
  return (
    <DynamicBanner
      componentId={componentId}
      userId={userId}
      className={className}
    />
  )
}




