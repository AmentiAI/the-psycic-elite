import { query, transaction } from './database'

export interface ReferralLink {
  id: number
  name: string
  description?: string
  baseUrl: string
  affiliateId: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  utmTerm?: string
  customParams: Record<string, string>
  isActive: boolean
  clickCount: number
  conversionCount: number
  revenue: number
  createdAt: string
  updatedAt: string
}

export interface OutboundLink {
  id: number
  name: string
  description?: string
  url: string
  componentId?: string
  trackingId?: string
  category?: string
  action?: string
  relAttributes: string
  isActive: boolean
  clickCount: number
  conversionCount: number
  revenue: number
  createdAt: string
  updatedAt: string
}

export interface LinkClick {
  id: number
  linkId: number
  linkType: 'referral' | 'outbound'
  userId?: string
  ipAddress?: string
  userAgent?: string
  referrer?: string
  utmParams: Record<string, string>
  clickedAt: string
}

export interface Conversion {
  id: number
  linkId: number
  linkType: 'referral' | 'outbound'
  userId?: string
  conversionType: string
  revenue: number
  metadata: Record<string, any>
  convertedAt: string
}

export class ReferralLinkService {
  // Referral Link operations
  async getReferralLinks(): Promise<ReferralLink[]> {
    const result = await query('SELECT * FROM referral_links ORDER BY created_at DESC')
    return result.rows.map(row => ({
      id: row.id,
      name: row.name,
      description: row.description,
      baseUrl: row.base_url,
      affiliateId: row.affiliate_id,
      utmSource: row.utm_source,
      utmMedium: row.utm_medium,
      utmCampaign: row.utm_campaign,
      utmContent: row.utm_content,
      utmTerm: row.utm_term,
      customParams: row.custom_params || {},
      isActive: row.is_active,
      clickCount: row.click_count,
      conversionCount: row.conversion_count,
      revenue: parseFloat(row.revenue),
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }))
  }

  async getReferralLink(id: number): Promise<ReferralLink | null> {
    const result = await query('SELECT * FROM referral_links WHERE id = $1', [id])
    if (result.rows.length === 0) return null
    
    const row = result.rows[0]
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      baseUrl: row.base_url,
      affiliateId: row.affiliate_id,
      utmSource: row.utm_source,
      utmMedium: row.utm_medium,
      utmCampaign: row.utm_campaign,
      utmContent: row.utm_content,
      utmTerm: row.utm_term,
      customParams: row.custom_params || {},
      isActive: row.is_active,
      clickCount: row.click_count,
      conversionCount: row.conversion_count,
      revenue: parseFloat(row.revenue),
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }
  }

  async createReferralLink(link: Omit<ReferralLink, 'id' | 'clickCount' | 'conversionCount' | 'revenue' | 'createdAt' | 'updatedAt'>): Promise<ReferralLink> {
    const result = await query(`
      INSERT INTO referral_links (name, description, base_url, affiliate_id, utm_source, utm_medium, utm_campaign, utm_content, utm_term, custom_params, is_active, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      RETURNING *
    `, [
      link.name, link.description, link.baseUrl, link.affiliateId,
      link.utmSource, link.utmMedium, link.utmCampaign, link.utmContent, link.utmTerm,
      JSON.stringify(link.customParams), link.isActive
    ])

    const row = result.rows[0]
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      baseUrl: row.base_url,
      affiliateId: row.affiliate_id,
      utmSource: row.utm_source,
      utmMedium: row.utm_medium,
      utmCampaign: row.utm_campaign,
      utmContent: row.utm_content,
      utmTerm: row.utm_term,
      customParams: row.custom_params || {},
      isActive: row.is_active,
      clickCount: row.click_count,
      conversionCount: row.conversion_count,
      revenue: parseFloat(row.revenue),
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }
  }

  async updateReferralLink(id: number, updates: Partial<ReferralLink>): Promise<ReferralLink | null> {
    const setClause = []
    const values = []
    let paramCount = 1

    if (updates.name !== undefined) {
      setClause.push(`name = $${paramCount++}`)
      values.push(updates.name)
    }
    if (updates.description !== undefined) {
      setClause.push(`description = $${paramCount++}`)
      values.push(updates.description)
    }
    if (updates.baseUrl !== undefined) {
      setClause.push(`base_url = $${paramCount++}`)
      values.push(updates.baseUrl)
    }
    if (updates.affiliateId !== undefined) {
      setClause.push(`affiliate_id = $${paramCount++}`)
      values.push(updates.affiliateId)
    }
    if (updates.utmSource !== undefined) {
      setClause.push(`utm_source = $${paramCount++}`)
      values.push(updates.utmSource)
    }
    if (updates.utmMedium !== undefined) {
      setClause.push(`utm_medium = $${paramCount++}`)
      values.push(updates.utmMedium)
    }
    if (updates.utmCampaign !== undefined) {
      setClause.push(`utm_campaign = $${paramCount++}`)
      values.push(updates.utmCampaign)
    }
    if (updates.utmContent !== undefined) {
      setClause.push(`utm_content = $${paramCount++}`)
      values.push(updates.utmContent)
    }
    if (updates.utmTerm !== undefined) {
      setClause.push(`utm_term = $${paramCount++}`)
      values.push(updates.utmTerm)
    }
    if (updates.customParams !== undefined) {
      setClause.push(`custom_params = $${paramCount++}`)
      values.push(JSON.stringify(updates.customParams))
    }
    if (updates.isActive !== undefined) {
      setClause.push(`is_active = $${paramCount++}`)
      values.push(updates.isActive)
    }

    if (setClause.length === 0) return null

    setClause.push(`updated_at = CURRENT_TIMESTAMP`)
    values.push(id)

    await query(`
      UPDATE referral_links 
      SET ${setClause.join(', ')}
      WHERE id = $${paramCount}
    `, values)

    return this.getReferralLink(id)
  }

  async deleteReferralLink(id: number): Promise<boolean> {
    const result = await query('DELETE FROM referral_links WHERE id = $1', [id])
    return result.rowCount > 0
  }

  // Generate referral URL
  generateReferralUrl(link: ReferralLink, additionalParams: Record<string, string> = {}): string {
    const url = new URL(link.baseUrl)
    
    // Add UTM parameters
    if (link.utmSource) url.searchParams.set('utm_source', link.utmSource)
    if (link.utmMedium) url.searchParams.set('utm_medium', link.utmMedium)
    if (link.utmCampaign) url.searchParams.set('utm_campaign', link.utmCampaign)
    if (link.utmContent) url.searchParams.set('utm_content', link.utmContent)
    if (link.utmTerm) url.searchParams.set('utm_term', link.utmTerm)
    
    // Add custom parameters
    Object.entries(link.customParams).forEach(([key, value]) => {
      url.searchParams.set(key, value)
    })
    
    // Add additional parameters
    Object.entries(additionalParams).forEach(([key, value]) => {
      url.searchParams.set(key, value)
    })
    
    return url.toString()
  }

  // Track click
  async trackClick(linkId: number, linkType: 'referral' | 'outbound', trackingData: {
    userId?: string
    ipAddress?: string
    userAgent?: string
    referrer?: string
    utmParams?: Record<string, string>
  }): Promise<void> {
    await transaction(async (client) => {
      // Insert click record
      await client.query(`
        INSERT INTO link_clicks (link_id, link_type, user_id, ip_address, user_agent, referrer, utm_params)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `, [
        linkId, linkType, trackingData.userId, trackingData.ipAddress,
        trackingData.userAgent, trackingData.referrer, JSON.stringify(trackingData.utmParams || {})
      ])

      // Update click count
      const tableName = linkType === 'referral' ? 'referral_links' : 'outbound_links'
      await client.query(`
        UPDATE ${tableName} 
        SET click_count = click_count + 1, updated_at = CURRENT_TIMESTAMP
        WHERE id = $1
      `, [linkId])
    })
  }

  // Track conversion
  async trackConversion(linkId: number, linkType: 'referral' | 'outbound', conversionData: {
    userId?: string
    conversionType: string
    revenue: number
    metadata?: Record<string, any>
  }): Promise<void> {
    await transaction(async (client) => {
      // Insert conversion record
      await client.query(`
        INSERT INTO conversions (link_id, link_type, user_id, conversion_type, revenue, metadata)
        VALUES ($1, $2, $3, $4, $5, $6)
      `, [
        linkId, linkType, conversionData.userId, conversionData.conversionType,
        conversionData.revenue, JSON.stringify(conversionData.metadata || {})
      ])

      // Update conversion count and revenue
      const tableName = linkType === 'referral' ? 'referral_links' : 'outbound_links'
      await client.query(`
        UPDATE ${tableName} 
        SET conversion_count = conversion_count + 1, 
            revenue = revenue + $2, 
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $1
      `, [linkId, conversionData.revenue])
    })
  }

  // Outbound Link operations
  async getOutboundLinks(): Promise<OutboundLink[]> {
    const result = await query('SELECT * FROM outbound_links ORDER BY created_at DESC')
    return result.rows.map(row => ({
      id: row.id,
      name: row.name,
      description: row.description,
      url: row.url,
      componentId: row.component_id,
      trackingId: row.tracking_id,
      category: row.category,
      action: row.action,
      relAttributes: row.rel_attributes,
      isActive: row.is_active,
      clickCount: row.click_count,
      conversionCount: row.conversion_count,
      revenue: parseFloat(row.revenue),
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }))
  }

  async getOutboundLink(id: number): Promise<OutboundLink | null> {
    const result = await query('SELECT * FROM outbound_links WHERE id = $1', [id])
    if (result.rows.length === 0) return null
    
    const row = result.rows[0]
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      url: row.url,
      componentId: row.component_id,
      trackingId: row.tracking_id,
      category: row.category,
      action: row.action,
      relAttributes: row.rel_attributes,
      isActive: row.is_active,
      clickCount: row.click_count,
      conversionCount: row.conversion_count,
      revenue: parseFloat(row.revenue),
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }
  }

  async createOutboundLink(link: Omit<OutboundLink, 'id' | 'clickCount' | 'conversionCount' | 'revenue' | 'createdAt' | 'updatedAt'>): Promise<OutboundLink> {
    const result = await query(`
      INSERT INTO outbound_links (name, description, url, component_id, tracking_id, category, action, rel_attributes, is_active, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      RETURNING *
    `, [
      link.name, link.description, link.url, link.componentId, link.trackingId,
      link.category, link.action, link.relAttributes, link.isActive
    ])

    const row = result.rows[0]
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      url: row.url,
      componentId: row.component_id,
      trackingId: row.tracking_id,
      category: row.category,
      action: row.action,
      relAttributes: row.rel_attributes,
      isActive: row.is_active,
      clickCount: row.click_count,
      conversionCount: row.conversion_count,
      revenue: parseFloat(row.revenue),
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }
  }

  async updateOutboundLink(id: number, updates: Partial<OutboundLink>): Promise<OutboundLink | null> {
    const setClause = []
    const values = []
    let paramCount = 1

    if (updates.name !== undefined) {
      setClause.push(`name = $${paramCount++}`)
      values.push(updates.name)
    }
    if (updates.description !== undefined) {
      setClause.push(`description = $${paramCount++}`)
      values.push(updates.description)
    }
    if (updates.url !== undefined) {
      setClause.push(`url = $${paramCount++}`)
      values.push(updates.url)
    }
    if (updates.componentId !== undefined) {
      setClause.push(`component_id = $${paramCount++}`)
      values.push(updates.componentId)
    }
    if (updates.trackingId !== undefined) {
      setClause.push(`tracking_id = $${paramCount++}`)
      values.push(updates.trackingId)
    }
    if (updates.category !== undefined) {
      setClause.push(`category = $${paramCount++}`)
      values.push(updates.category)
    }
    if (updates.action !== undefined) {
      setClause.push(`action = $${paramCount++}`)
      values.push(updates.action)
    }
    if (updates.relAttributes !== undefined) {
      setClause.push(`rel_attributes = $${paramCount++}`)
      values.push(updates.relAttributes)
    }
    if (updates.isActive !== undefined) {
      setClause.push(`is_active = $${paramCount++}`)
      values.push(updates.isActive)
    }

    if (setClause.length === 0) return null

    setClause.push(`updated_at = CURRENT_TIMESTAMP`)
    values.push(id)

    await query(`
      UPDATE outbound_links 
      SET ${setClause.join(', ')}
      WHERE id = $${paramCount}
    `, values)

    return this.getOutboundLink(id)
  }

  async deleteOutboundLink(id: number): Promise<boolean> {
    const result = await query('DELETE FROM outbound_links WHERE id = $1', [id])
    return result.rowCount > 0
  }

  // Analytics
  async getLinkAnalytics(linkId: number, linkType: 'referral' | 'outbound', days: number = 30): Promise<{
    clicks: number
    conversions: number
    revenue: number
    conversionRate: number
    clickThroughRate: number
    dailyStats: Array<{
      date: string
      clicks: number
      conversions: number
      revenue: number
    }>
  }> {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    // Get overall stats
    const statsResult = await query(`
      SELECT 
        COALESCE(SUM(lc.click_count), 0) as total_clicks,
        COALESCE(SUM(c.conversion_count), 0) as total_conversions,
        COALESCE(SUM(c.revenue), 0) as total_revenue
      FROM ${linkType === 'referral' ? 'referral_links' : 'outbound_links'} l
      LEFT JOIN link_clicks lc ON l.id = lc.link_id AND lc.link_type = $1
      LEFT JOIN conversions c ON l.id = c.link_id AND c.link_type = $1
      WHERE l.id = $2 AND lc.clicked_at >= $3
    `, [linkType, linkId, startDate.toISOString()])

    const stats = statsResult.rows[0]
    const totalClicks = parseInt(stats.total_clicks) || 0
    const totalConversions = parseInt(stats.total_conversions) || 0
    const totalRevenue = parseFloat(stats.total_revenue) || 0

    // Get daily stats
    const dailyResult = await query(`
      SELECT 
        DATE(lc.clicked_at) as date,
        COUNT(*) as clicks,
        COALESCE(SUM(c.revenue), 0) as revenue,
        COUNT(c.id) as conversions
      FROM link_clicks lc
      LEFT JOIN conversions c ON lc.link_id = c.link_id AND lc.link_type = c.link_type
      WHERE lc.link_id = $1 AND lc.link_type = $2 AND lc.clicked_at >= $3
      GROUP BY DATE(lc.clicked_at)
      ORDER BY date
    `, [linkId, linkType, startDate.toISOString()])

    const dailyStats = dailyResult.rows.map(row => ({
      date: row.date,
      clicks: parseInt(row.clicks),
      conversions: parseInt(row.conversions),
      revenue: parseFloat(row.revenue)
    }))

    return {
      clicks: totalClicks,
      conversions: totalConversions,
      revenue: totalRevenue,
      conversionRate: totalClicks > 0 ? (totalConversions / totalClicks) * 100 : 0,
      clickThroughRate: 0, // This would need to be calculated based on impressions
      dailyStats
    }
  }
}

export const referralLinkService = new ReferralLinkService()




