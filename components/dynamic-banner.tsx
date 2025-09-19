"use client"

import { DynamicCTA } from "./dynamic-cta"

interface DynamicBannerProps {
  componentId: string
  userId?: string
  className?: string
}

export function DynamicBanner({ 
  componentId, 
  userId = 'anonymous', 
  className = "" 
}: DynamicBannerProps) {
  return (
    <DynamicCTA
      componentId={componentId}
      userId={userId}
      className={className}
    />
  )
}




