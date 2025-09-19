// Affiliate tracking utilities for SEO-friendly outbound links
import { AFFILIATE_CONFIG as CONFIG } from './affiliate-config'

export interface AffiliateLinkConfig {
  baseUrl: string
  affiliateId: string
  trackingParams: {
    ref: string
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_content?: string
  }
}

// Use centralized affiliate configuration
export const AFFILIATE_CONFIG: AffiliateLinkConfig = {
  baseUrl: CONFIG.baseUrl,
  affiliateId: CONFIG.referralParam.split('=')[1], // Extract affiliate ID from ref param
  trackingParams: {
    ref: CONFIG.referralParam.split('=')[1],
    utm_source: CONFIG.referralParam.split('=')[1],
    utm_medium: 'affiliate',
    utm_campaign: 'psychic-services',
  }
}

// Service-specific tracking configurations
export const SERVICE_TRACKING = {
  tarot: {
    utm_content: 'tarot-reading',
    utm_campaign: 'tarot-affiliate'
  },
  psychic: {
    utm_content: 'psychic-reading',
    utm_campaign: 'psychic-affiliate'
  },
  love: {
    utm_content: 'love-reading',
    utm_campaign: 'love-affiliate'
  },
  astrology: {
    utm_content: 'astrology-reading',
    utm_campaign: 'astrology-affiliate'
  },
  energy: {
    utm_content: 'energy-healing',
    utm_campaign: 'energy-affiliate'
  },
  dream: {
    utm_content: 'dream-interpretation',
    utm_campaign: 'dream-affiliate'
  }
}

/**
 * Generate SEO-friendly affiliate URLs with proper tracking parameters
 */
export function generateAffiliateUrl(
  service: keyof typeof SERVICE_TRACKING,
  path: string = '',
  additionalParams: Record<string, string> = {}
): string {
  const config = AFFILIATE_CONFIG
  const serviceConfig = SERVICE_TRACKING[service]
  
  const url = new URL(`${config.baseUrl}/${path}`)
  
  // Add affiliate tracking parameters
  Object.entries({
    ...config.trackingParams,
    ...serviceConfig,
    ...additionalParams
  }).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value)
    }
  })
  
  return url.toString()
}

/**
 * Generate UTM parameters for tracking
 */
export function generateUTMParams(
  source: string,
  medium: string,
  campaign: string,
  content?: string,
  term?: string
): Record<string, string> {
  const params: Record<string, string> = {
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
  }
  
  if (content) params.utm_content = content
  if (term) params.utm_term = term
  
  return params
}

/**
 * Track affiliate clicks for analytics
 */
export function trackAffiliateClick(
  service: string,
  action: string,
  value?: number
): void {
  if (typeof window === 'undefined') return
  
  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: 'affiliate',
      event_label: service,
      value: value || 1,
      custom_parameter_1: 'psychic-services'
    })
  }
  
  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: service,
      content_category: 'psychic-services',
      value: value || 0,
      currency: 'USD'
    })
  }
  
  // Custom tracking (if needed)
  if (window.customTracking) {
    window.customTracking('affiliate_click', {
      service,
      action,
      value: value || 1,
      timestamp: Date.now()
    })
  }
}

// Declare global tracking functions for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
    customTracking: (event: string, data: any) => void
  }
}



