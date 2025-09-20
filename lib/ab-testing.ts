// A/B Testing System for CTA Components

export interface Campaign {
  id: string
  name: string
  description: string
  status: 'draft' | 'active' | 'paused' | 'completed'
  startDate: string
  endDate?: string
  targetAudience: 'all' | 'new_visitors' | 'returning_visitors' | 'mobile' | 'desktop'
  trafficAllocation: number // Percentage of traffic to show this campaign
  createdAt: string
  updatedAt: string
}

export interface CampaignVariant {
  id: string
  campaignId: string
  name: string
  description: string
  weight: number // Percentage of campaign traffic for this variant
  isControl: boolean
  isActive: boolean
  config: CTAConfig
  metrics: VariantMetrics
  createdAt: string
  updatedAt: string
}

export interface CTAConfig {
  type: 'banner' | 'card' | 'button' | 'section'
  title: string
  description: string
  buttonText: string
  buttonColor: string
  backgroundColor: string
  textColor: string
  position: 'top' | 'bottom' | 'inline' | 'floating'
  size: 'small' | 'medium' | 'large'
  animation?: 'fade' | 'slide' | 'bounce' | 'none'
  customStyles?: Record<string, string>
  trackingId: string
  affiliateUrl: string
  utmParams: Record<string, string>
}

export interface VariantMetrics {
  impressions: number
  clicks: number
  conversions: number
  conversionRate: number
  clickThroughRate: number
  revenue: number
  lastUpdated: string
}

export interface TestResult {
  variantId: string
  variantName: string
  isWinner: boolean
  confidence: number
  improvement: number
  sampleSize: number
}

// Default CTA configurations for different component types
export const DEFAULT_CTA_CONFIGS: Record<string, CTAConfig> = {
  'hero-cta': {
    type: 'button',
    title: 'Get Free Reading',
    description: 'Connect with expert psychics today',
    buttonText: 'Get Free Reading',
    buttonColor: '#8B5CF6',
    backgroundColor: 'transparent',
    textColor: '#FFFFFF',
    position: 'inline',
    size: 'large',
    animation: 'none',
    trackingId: 'hero-cta-default',
    affiliateUrl: 'https://example-psychic-service.com/psychic?ref=conjuring-psychic',
    utmParams: {
      utm_source: 'conjuring-psychic',
      utm_medium: 'website',
      utm_campaign: 'hero-cta',
      utm_content: 'default'
    }
  },
  'service-card': {
    type: 'card',
    title: 'Tarot Card Reading',
    description: 'Discover your future with expert tarot readers',
    buttonText: 'Book This Reading',
    buttonColor: '#8B5CF6',
    backgroundColor: '#FFFFFF',
    textColor: '#1F2937',
    position: 'inline',
    size: 'medium',
    animation: 'none',
    trackingId: 'service-card-default',
    affiliateUrl: 'https://example-psychic-service.com/tarot?ref=conjuring-psychic',
    utmParams: {
      utm_source: 'conjuring-psychic',
      utm_medium: 'website',
      utm_campaign: 'service-card',
      utm_content: 'default'
    }
  },
  'banner-cta': {
    type: 'banner',
    title: 'Get Your Free Reading Today!',
    description: 'Join thousands of satisfied clients',
    buttonText: 'Start Now',
    buttonColor: '#FFFFFF',
    backgroundColor: '#8B5CF6',
    textColor: '#FFFFFF',
    position: 'top',
    size: 'medium',
    animation: 'slide',
    trackingId: 'banner-cta-default',
    affiliateUrl: 'https://example-psychic-service.com/psychic?ref=conjuring-psychic',
    utmParams: {
      utm_source: 'conjuring-psychic',
      utm_medium: 'banner',
      utm_campaign: 'banner-cta',
      utm_content: 'default'
    }
  }
}

// A/B Testing Logic
export class ABTestingService {
  private static instance: ABTestingService
  private campaigns: Map<string, Campaign> = new Map()
  private variants: Map<string, CampaignVariant[]> = new Map()
  private userAssignments: Map<string, Map<string, string>> = new Map()

  static getInstance(): ABTestingService {
    if (!ABTestingService.instance) {
      ABTestingService.instance = new ABTestingService()
    }
    return ABTestingService.instance
  }

  // Initialize with default campaigns
  initialize() {
    this.createDefaultCampaigns()
  }

  private createDefaultCampaigns() {
    // Hero CTA Campaign
    const heroCampaign: Campaign = {
      id: 'hero-cta-campaign',
      name: 'Hero CTA Optimization',
      description: 'Test different hero CTA variations',
      status: 'active',
      startDate: new Date().toISOString(),
      targetAudience: 'all',
      trafficAllocation: 100,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    const heroVariants: CampaignVariant[] = [
      {
        id: 'hero-cta-control',
        campaignId: 'hero-cta-campaign',
        name: 'Control - Default',
        description: 'Original hero CTA design',
        weight: 50,
        isControl: true,
        isActive: true,
        config: DEFAULT_CTA_CONFIGS['hero-cta'],
        metrics: {
          impressions: 0,
          clicks: 0,
          conversions: 0,
          conversionRate: 0,
          clickThroughRate: 0,
          revenue: 0,
          lastUpdated: new Date().toISOString()
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'hero-cta-variant-1',
        campaignId: 'hero-cta-campaign',
        name: 'Variant 1 - Urgency',
        description: 'Add urgency to the CTA',
        weight: 50,
        isControl: false,
        isActive: true,
        config: {
          ...DEFAULT_CTA_CONFIGS['hero-cta'],
          title: 'Get Free Reading - Limited Time!',
          buttonText: 'Claim Free Reading Now',
          buttonColor: '#EF4444',
          trackingId: 'hero-cta-urgency',
          utmParams: {
            ...DEFAULT_CTA_CONFIGS['hero-cta'].utmParams,
            utm_content: 'urgency'
          }
        },
        metrics: {
          impressions: 0,
          clicks: 0,
          conversions: 0,
          conversionRate: 0,
          clickThroughRate: 0,
          revenue: 0,
          lastUpdated: new Date().toISOString()
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ]

    this.campaigns.set(heroCampaign.id, heroCampaign)
    this.variants.set(heroCampaign.id, heroVariants)
  }

  // Get active campaign for a component
  getActiveCampaign(componentId: string): Campaign | null {
    for (const campaign of this.campaigns.values()) {
      if (campaign.status === 'active' && this.isComponentInCampaign(campaign.id, componentId)) {
        return campaign
      }
    }
    return null
  }

  // Get variant for a user and component
  getVariant(componentId: string, userId: string): CampaignVariant | null {
    const campaign = this.getActiveCampaign(componentId)
    if (!campaign) {
      return this.getDefaultVariant(componentId)
    }

    // Check if user is already assigned
    if (!this.userAssignments.has(userId)) {
      this.userAssignments.set(userId, new Map())
    }

    const userAssignment = this.userAssignments.get(userId)!
    if (userAssignment.has(componentId)) {
      const variantId = userAssignment.get(componentId)!
      return this.getVariantById(variantId)
    }

    // Assign user to variant based on weights
    const variants = this.variants.get(campaign.id) || []
    const activeVariants = variants.filter(v => v.isActive)
    
    if (activeVariants.length === 0) {
      return this.getDefaultVariant(componentId)
    }

    const variant = this.selectVariantByWeight(activeVariants)
    userAssignment.set(componentId, variant.id)
    
    return variant
  }

  private selectVariantByWeight(variants: CampaignVariant[]): CampaignVariant {
    const totalWeight = variants.reduce((sum, v) => sum + v.weight, 0)
    let random = Math.random() * totalWeight
    
    for (const variant of variants) {
      random -= variant.weight
      if (random <= 0) {
        return variant
      }
    }
    
    return variants[0] // Fallback
  }

  private getDefaultVariant(componentId: string): CampaignVariant | null {
    const defaultConfig = DEFAULT_CTA_CONFIGS[componentId]
    if (!defaultConfig) return null

    return {
      id: `${componentId}-default`,
      campaignId: 'default',
      name: 'Default',
      description: 'Default configuration',
      weight: 100,
      isControl: true,
      isActive: true,
      config: defaultConfig,
      metrics: {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        conversionRate: 0,
        clickThroughRate: 0,
        revenue: 0,
        lastUpdated: new Date().toISOString()
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  }

  private getVariantById(variantId: string): CampaignVariant | null {
    for (const variants of this.variants.values()) {
      const variant = variants.find(v => v.id === variantId)
      if (variant) return variant
    }
    return null
  }

  private isComponentInCampaign(campaignId: string, componentId: string): boolean {
    // This would be configured in the admin panel
    // For now, we'll use a simple mapping
    const componentCampaigns: Record<string, string[]> = {
      'hero-cta': ['hero-cta-campaign'],
      'service-card': ['service-card-campaign'],
      'banner-cta': ['banner-cta-campaign']
    }

    return componentCampaigns[componentId]?.includes(campaignId) || false
  }

  // Track events
  trackImpression(variantId: string) {
    const variant = this.getVariantById(variantId)
    if (variant) {
      variant.metrics.impressions++
      variant.metrics.lastUpdated = new Date().toISOString()
      this.updateConversionRate(variant)
    }
  }

  trackClick(variantId: string) {
    const variant = this.getVariantById(variantId)
    if (variant) {
      variant.metrics.clicks++
      variant.metrics.lastUpdated = new Date().toISOString()
      this.updateConversionRate(variant)
    }
  }

  trackConversion(variantId: string, revenue: number = 0) {
    const variant = this.getVariantById(variantId)
    if (variant) {
      variant.metrics.conversions++
      variant.metrics.revenue += revenue
      variant.metrics.lastUpdated = new Date().toISOString()
      this.updateConversionRate(variant)
    }
  }

  private updateConversionRate(variant: CampaignVariant) {
    if (variant.metrics.impressions > 0) {
      variant.metrics.conversionRate = (variant.metrics.conversions / variant.metrics.impressions) * 100
    }
    if (variant.metrics.impressions > 0) {
      variant.metrics.clickThroughRate = (variant.metrics.clicks / variant.metrics.impressions) * 100
    }
  }

  // Admin functions
  createCampaign(campaign: Omit<Campaign, 'id' | 'createdAt' | 'updatedAt'>): Campaign {
    const newCampaign: Campaign = {
      ...campaign,
      id: `campaign-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    this.campaigns.set(newCampaign.id, newCampaign)
    return newCampaign
  }

  createVariant(variant: Omit<CampaignVariant, 'id' | 'createdAt' | 'updatedAt'>): CampaignVariant {
    const newVariant: CampaignVariant = {
      ...variant,
      id: `variant-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    if (!this.variants.has(variant.campaignId)) {
      this.variants.set(variant.campaignId, [])
    }
    
    this.variants.get(variant.campaignId)!.push(newVariant)
    return newVariant
  }

  getCampaigns(): Campaign[] {
    return Array.from(this.campaigns.values())
  }

  getVariants(campaignId: string): CampaignVariant[] {
    return this.variants.get(campaignId) || []
  }

  getCampaignMetrics(campaignId: string): TestResult[] {
    const variants = this.getVariants(campaignId)
    const control = variants.find(v => v.isControl)
    
    if (!control) return []

    return variants.map(variant => {
      const improvement = control.metrics.conversionRate > 0 
        ? ((variant.metrics.conversionRate - control.metrics.conversionRate) / control.metrics.conversionRate) * 100
        : 0

      return {
        variantId: variant.id,
        variantName: variant.name,
        isWinner: variant.metrics.conversionRate > control.metrics.conversionRate,
        confidence: this.calculateConfidence(variant, control),
        improvement,
        sampleSize: variant.metrics.impressions
      }
    })
  }

  private calculateConfidence(variant: CampaignVariant, control: CampaignVariant): number {
    // Simplified confidence calculation
    // In a real implementation, you'd use statistical significance tests
    const minSampleSize = 100
    if (variant.metrics.impressions < minSampleSize || control.metrics.impressions < minSampleSize) {
      return 0
    }
    
    const diff = Math.abs(variant.metrics.conversionRate - control.metrics.conversionRate)
    return Math.min(diff * 2, 100) // Simplified confidence score
  }
}

// Export singleton instance
export const abTestingService = ABTestingService.getInstance()






