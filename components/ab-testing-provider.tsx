"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { abTestingService } from "@/lib/ab-testing"

interface ABTestingContextType {
  userId: string
  setUserId: (userId: string) => void
  getVariant: (componentId: string) => any
  trackEvent: (event: string, variantId: string, data?: any) => void
}

const ABTestingContext = createContext<ABTestingContextType | undefined>(undefined)

export function useABTesting() {
  const context = useContext(ABTestingContext)
  if (context === undefined) {
    throw new Error('useABTesting must be used within an ABTestingProvider')
  }
  return context
}

interface ABTestingProviderProps {
  children: ReactNode
}

export function ABTestingProvider({ children }: ABTestingProviderProps) {
  const [userId, setUserId] = useState<string>('anonymous')
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    // Initialize A/B testing service
    abTestingService.initialize()
    setInitialized(true)

    // Generate or retrieve user ID
    const storedUserId = localStorage.getItem('ab-testing-user-id')
    if (storedUserId) {
      setUserId(storedUserId)
    } else {
      const newUserId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      setUserId(newUserId)
      localStorage.setItem('ab-testing-user-id', newUserId)
    }
  }, [])

  const getVariant = (componentId: string) => {
    if (!initialized) return null
    return abTestingService.getVariant(componentId, userId)
  }

  const trackEvent = (event: string, variantId: string, data: any = {}) => {
    if (!initialized) return

    switch (event) {
      case 'impression':
        abTestingService.trackImpression(variantId)
        break
      case 'click':
        abTestingService.trackClick(variantId)
        break
      case 'conversion':
        abTestingService.trackConversion(variantId, data.revenue || 0)
        break
    }

    // Also send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, {
        event_category: 'ab_testing',
        event_label: variantId,
        value: data.revenue || 1
      })
    }
  }

  const value: ABTestingContextType = {
    userId,
    setUserId,
    getVariant,
    trackEvent
  }

  return (
    <ABTestingContext.Provider value={value}>
      {children}
    </ABTestingContext.Provider>
  )
}






