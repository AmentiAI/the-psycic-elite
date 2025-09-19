#!/usr/bin/env tsx

import { initializeDatabase } from '../lib/database'
import { abTestingDBService } from '../lib/ab-testing-db'

async function setupComplete() {
  try {
    console.log('🚀 Setting up complete A/B testing and referral link system...')
    
    // Initialize database
    console.log('📊 Initializing database schema...')
    await initializeDatabase()
    console.log('✅ Database initialized successfully!')
    
    // Create default campaigns
    console.log('🎯 Creating default A/B test campaigns...')
    
    // Hero CTA Campaign
    const heroCampaign = await abTestingDBService.createCampaign({
      name: 'Hero CTA Optimization',
      description: 'Test different hero CTA variations for better conversion',
      status: 'active',
      startDate: new Date().toISOString(),
      targetAudience: 'all',
      trafficAllocation: 100
    })
    
    // Create hero variants
    await abTestingDBService.createVariant({
      campaignId: heroCampaign.id,
      name: 'Control - Default',
      description: 'Original hero CTA design',
      weight: 50,
      isControl: true,
      isActive: true,
      config: {
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
        trackingId: 'hero-cta-control',
        affiliateUrl: 'https://example-psychic-service.com/psychic?ref=conjuring-psychic',
        utmParams: {
          utm_source: 'conjuring-psychic',
          utm_medium: 'website',
          utm_campaign: 'hero-cta',
          utm_content: 'control'
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
      }
    })
    
    await abTestingDBService.createVariant({
      campaignId: heroCampaign.id,
      name: 'Variant 1 - Urgency',
      description: 'Add urgency to the CTA',
      weight: 50,
      isControl: false,
      isActive: true,
      config: {
        type: 'button',
        title: 'Get Free Reading - Limited Time!',
        description: 'Connect with expert psychics today',
        buttonText: 'Claim Free Reading Now',
        buttonColor: '#EF4444',
        backgroundColor: 'transparent',
        textColor: '#FFFFFF',
        position: 'inline',
        size: 'large',
        animation: 'none',
        trackingId: 'hero-cta-urgency',
        affiliateUrl: 'https://example-psychic-service.com/psychic?ref=conjuring-psychic',
        utmParams: {
          utm_source: 'conjuring-psychic',
          utm_medium: 'website',
          utm_campaign: 'hero-cta',
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
      }
    })
    
    // Service Card Campaign
    const serviceCampaign = await abTestingDBService.createCampaign({
      name: 'Service Card Optimization',
      description: 'Test different service card CTA variations',
      status: 'active',
      startDate: new Date().toISOString(),
      targetAudience: 'all',
      trafficAllocation: 100
    })
    
    await abTestingDBService.createVariant({
      campaignId: serviceCampaign.id,
      name: 'Control - Default',
      description: 'Original service card design',
      weight: 50,
      isControl: true,
      isActive: true,
      config: {
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
        trackingId: 'service-card-control',
        affiliateUrl: 'https://example-psychic-service.com/tarot?ref=conjuring-psychic',
        utmParams: {
          utm_source: 'conjuring-psychic',
          utm_medium: 'website',
          utm_campaign: 'service-card',
          utm_content: 'control'
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
      }
    })
    
    await abTestingDBService.createVariant({
      campaignId: serviceCampaign.id,
      name: 'Variant 1 - Social Proof',
      description: 'Add social proof to the CTA',
      weight: 50,
      isControl: false,
      isActive: true,
      config: {
        type: 'card',
        title: 'Tarot Card Reading',
        description: 'Join 10,000+ satisfied clients who found clarity',
        buttonText: 'Join 10,000+ Happy Clients',
        buttonColor: '#10B981',
        backgroundColor: '#FFFFFF',
        textColor: '#1F2937',
        position: 'inline',
        size: 'medium',
        animation: 'none',
        trackingId: 'service-card-social-proof',
        affiliateUrl: 'https://example-psychic-service.com/tarot?ref=conjuring-psychic',
        utmParams: {
          utm_source: 'conjuring-psychic',
          utm_medium: 'website',
          utm_campaign: 'service-card',
          utm_content: 'social-proof'
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
      }
    })
    
    console.log('✅ Default campaigns created successfully!')
    
    console.log('🎉 Setup complete! You can now:')
    console.log('   • Visit /admin to manage A/B test campaigns')
    console.log('   • Visit /admin/links to manage referral and outbound links')
    console.log('   • Use DynamicCTA components in your pages')
    console.log('   • Track conversions and revenue automatically')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error during setup:', error)
    process.exit(1)
  }
}

setupComplete()




