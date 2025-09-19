import { query, transaction } from './database'
import { Campaign, CampaignVariant, TestResult } from './ab-testing'

export class ABTestingDBService {
  // Campaign operations
  async getCampaigns(): Promise<Campaign[]> {
    const result = await query('SELECT * FROM campaigns ORDER BY created_at DESC')
    return result.rows.map(row => ({
      id: row.id,
      name: row.name,
      description: row.description,
      status: row.status,
      startDate: row.start_date,
      endDate: row.end_date,
      targetAudience: row.target_audience,
      trafficAllocation: row.traffic_allocation,
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }))
  }

  async getCampaign(id: string): Promise<Campaign | null> {
    const result = await query('SELECT * FROM campaigns WHERE id = $1', [id])
    if (result.rows.length === 0) return null
    
    const row = result.rows[0]
    return {
      id: row.id,
      name: row.name,
      description: row.description,
      status: row.status,
      startDate: row.start_date,
      endDate: row.end_date,
      targetAudience: row.target_audience,
      trafficAllocation: row.traffic_allocation,
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }
  }

  async createCampaign(campaign: Omit<Campaign, 'id' | 'createdAt' | 'updatedAt'>): Promise<Campaign> {
    const id = `campaign-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const now = new Date().toISOString()
    
    await query(`
      INSERT INTO campaigns (id, name, description, status, start_date, end_date, target_audience, traffic_allocation, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `, [
      id, campaign.name, campaign.description, campaign.status, 
      campaign.startDate, campaign.endDate, campaign.targetAudience, 
      campaign.trafficAllocation, now, now
    ])

    return {
      ...campaign,
      id,
      createdAt: now,
      updatedAt: now
    }
  }

  async updateCampaign(id: string, updates: Partial<Campaign>): Promise<Campaign | null> {
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
    if (updates.status !== undefined) {
      setClause.push(`status = $${paramCount++}`)
      values.push(updates.status)
    }
    if (updates.endDate !== undefined) {
      setClause.push(`end_date = $${paramCount++}`)
      values.push(updates.endDate)
    }
    if (updates.targetAudience !== undefined) {
      setClause.push(`target_audience = $${paramCount++}`)
      values.push(updates.targetAudience)
    }
    if (updates.trafficAllocation !== undefined) {
      setClause.push(`traffic_allocation = $${paramCount++}`)
      values.push(updates.trafficAllocation)
    }

    if (setClause.length === 0) return null

    setClause.push(`updated_at = $${paramCount++}`)
    values.push(new Date().toISOString())
    values.push(id)

    await query(`
      UPDATE campaigns 
      SET ${setClause.join(', ')}
      WHERE id = $${paramCount}
    `, values)

    return this.getCampaign(id)
  }

  async deleteCampaign(id: string): Promise<boolean> {
    const result = await query('DELETE FROM campaigns WHERE id = $1', [id])
    return result.rowCount > 0
  }

  // Variant operations
  async getVariants(campaignId: string): Promise<CampaignVariant[]> {
    const result = await query('SELECT * FROM variants WHERE campaign_id = $1 ORDER BY created_at ASC', [campaignId])
    return result.rows.map(row => ({
      id: row.id,
      campaignId: row.campaign_id,
      name: row.name,
      description: row.description,
      weight: row.weight,
      isControl: row.is_control,
      isActive: row.is_active,
      config: row.config,
      metrics: row.metrics,
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }))
  }

  async getVariant(id: string): Promise<CampaignVariant | null> {
    const result = await query('SELECT * FROM variants WHERE id = $1', [id])
    if (result.rows.length === 0) return null
    
    const row = result.rows[0]
    return {
      id: row.id,
      campaignId: row.campaign_id,
      name: row.name,
      description: row.description,
      weight: row.weight,
      isControl: row.is_control,
      isActive: row.is_active,
      config: row.config,
      metrics: row.metrics,
      createdAt: row.created_at,
      updatedAt: row.updated_at
    }
  }

  async createVariant(variant: Omit<CampaignVariant, 'id' | 'createdAt' | 'updatedAt'>): Promise<CampaignVariant> {
    const id = `variant-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const now = new Date().toISOString()
    
    await query(`
      INSERT INTO variants (id, campaign_id, name, description, weight, is_control, is_active, config, metrics, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `, [
      id, variant.campaignId, variant.name, variant.description, 
      variant.weight, variant.isControl, variant.isActive, 
      JSON.stringify(variant.config), JSON.stringify(variant.metrics), 
      now, now
    ])

    return {
      ...variant,
      id,
      createdAt: now,
      updatedAt: now
    }
  }

  async updateVariant(id: string, updates: Partial<CampaignVariant>): Promise<CampaignVariant | null> {
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
    if (updates.weight !== undefined) {
      setClause.push(`weight = $${paramCount++}`)
      values.push(updates.weight)
    }
    if (updates.isControl !== undefined) {
      setClause.push(`is_control = $${paramCount++}`)
      values.push(updates.isControl)
    }
    if (updates.isActive !== undefined) {
      setClause.push(`is_active = $${paramCount++}`)
      values.push(updates.isActive)
    }
    if (updates.config !== undefined) {
      setClause.push(`config = $${paramCount++}`)
      values.push(JSON.stringify(updates.config))
    }
    if (updates.metrics !== undefined) {
      setClause.push(`metrics = $${paramCount++}`)
      values.push(JSON.stringify(updates.metrics))
    }

    if (setClause.length === 0) return null

    setClause.push(`updated_at = $${paramCount++}`)
    values.push(new Date().toISOString())
    values.push(id)

    await query(`
      UPDATE variants 
      SET ${setClause.join(', ')}
      WHERE id = $${paramCount}
    `, values)

    return this.getVariant(id)
  }

  async deleteVariant(id: string): Promise<boolean> {
    const result = await query('DELETE FROM variants WHERE id = $1', [id])
    return result.rowCount > 0
  }

  // User assignment operations
  async getUserAssignment(userId: string, componentId: string): Promise<string | null> {
    const result = await query(
      'SELECT variant_id FROM user_assignments WHERE user_id = $1 AND component_id = $2',
      [userId, componentId]
    )
    return result.rows.length > 0 ? result.rows[0].variant_id : null
  }

  async setUserAssignment(userId: string, componentId: string, variantId: string): Promise<void> {
    await query(`
      INSERT INTO user_assignments (user_id, component_id, variant_id)
      VALUES ($1, $2, $3)
      ON CONFLICT (user_id, component_id)
      DO UPDATE SET variant_id = $3, assigned_at = CURRENT_TIMESTAMP
    `, [userId, componentId, variantId])
  }

  // Metrics operations
  async trackImpression(variantId: string): Promise<void> {
    await query(`
      UPDATE variants 
      SET metrics = jsonb_set(
        jsonb_set(metrics, '{impressions}', (COALESCE((metrics->>'impressions')::int, 0) + 1)::text::jsonb),
        '{last_updated}', to_jsonb(CURRENT_TIMESTAMP)
      )
      WHERE id = $1
    `, [variantId])
  }

  async trackClick(variantId: string): Promise<void> {
    await query(`
      UPDATE variants 
      SET metrics = jsonb_set(
        jsonb_set(metrics, '{clicks}', (COALESCE((metrics->>'clicks')::int, 0) + 1)::text::jsonb),
        '{last_updated}', to_jsonb(CURRENT_TIMESTAMP)
      )
      WHERE id = $1
    `, [variantId])
  }

  async trackConversion(variantId: string, revenue: number = 0): Promise<void> {
    await query(`
      UPDATE variants 
      SET metrics = jsonb_set(
        jsonb_set(
          jsonb_set(metrics, '{conversions}', (COALESCE((metrics->>'conversions')::int, 0) + 1)::text::jsonb),
          '{revenue}', (COALESCE((metrics->>'revenue')::decimal, 0) + $2)::text::jsonb
        ),
        '{last_updated}', to_jsonb(CURRENT_TIMESTAMP)
      )
      WHERE id = $1
    `, [variantId, revenue])
  }

  async updateConversionRates(variantId: string): Promise<void> {
    const variant = await this.getVariant(variantId)
    if (!variant) return

    const { impressions, clicks, conversions } = variant.metrics
    const conversionRate = impressions > 0 ? (conversions / impressions) * 100 : 0
    const clickThroughRate = impressions > 0 ? (clicks / impressions) * 100 : 0

    await query(`
      UPDATE variants 
      SET metrics = jsonb_set(
        jsonb_set(metrics, '{conversion_rate}', $2::text::jsonb),
        '{click_through_rate}', $3::text::jsonb
      )
      WHERE id = $1
    `, [variantId, conversionRate, clickThroughRate])
  }

  // Test results
  async getCampaignMetrics(campaignId: string): Promise<TestResult[]> {
    const variants = await this.getVariants(campaignId)
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
    const minSampleSize = 100
    if (variant.metrics.impressions < minSampleSize || control.metrics.impressions < minSampleSize) {
      return 0
    }
    
    const diff = Math.abs(variant.metrics.conversionRate - control.metrics.conversionRate)
    return Math.min(diff * 2, 100)
  }
}

export const abTestingDBService = new ABTestingDBService()




