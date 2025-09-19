// Centralized affiliate link configuration
// Replace these placeholder URLs with your actual affiliate links

export const AFFILIATE_CONFIG = {
  // Main affiliate service URL - PsychicOz affiliate link
  baseUrl: "https://psychicoz.top",
  
  // Specific service paths - these will be appended to baseUrl
  services: {
    tarot: "/tarot",
    psychic: "/psychic", 
    love: "/love",
    career: "/career",
    general: "/general-life"
  },
  
  // PsychicOz affiliate parameters
  referralParam: "a_aid=688e746fdd2a3&a_bid=7968fcf8"
}

// Helper function to build affiliate URLs
export function buildAffiliateUrl(service: keyof typeof AFFILIATE_CONFIG.services, customPath?: string): string {
  const baseUrl = AFFILIATE_CONFIG.baseUrl
  const servicePath = customPath || AFFILIATE_CONFIG.services[service]
  const referralParam = AFFILIATE_CONFIG.referralParam
  
  return `${baseUrl}${servicePath}?${referralParam}`
}

// Pre-built URLs for easy use
export const AFFILIATE_URLS = {
  tarot: buildAffiliateUrl('tarot'),
  psychic: buildAffiliateUrl('psychic'),
  love: buildAffiliateUrl('love'),
  career: buildAffiliateUrl('career'),
  general: buildAffiliateUrl('general'),
  
  // Specific reading types
  tarotLove: buildAffiliateUrl('tarot', '/love-relationships'),
  tarotCareer: buildAffiliateUrl('tarot', '/career-finance'),
  tarotGeneral: buildAffiliateUrl('tarot', '/general-life'),
  psychicLove: buildAffiliateUrl('psychic', '/love-relationships'),
  psychicCareer: buildAffiliateUrl('psychic', '/career-finance'),
  psychicGeneral: buildAffiliateUrl('psychic', '/general-life'),
}

