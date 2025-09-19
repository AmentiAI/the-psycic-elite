import { Pool } from 'pg'

// Database connection configuration
const pool = new Pool({
  connectionString: process.env.DBCONN || 'postgresql://neondb_owner:npg_Sl4GpUvDLg0C@ep-super-union-adv3x527-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: {
    rejectUnauthorized: false
  }
})

export { pool }

// Database initialization function
export async function initializeDatabase() {
  const client = await pool.connect()
  
  try {
    // Create campaigns table
    await client.query(`
      CREATE TABLE IF NOT EXISTS campaigns (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        status VARCHAR(50) NOT NULL DEFAULT 'draft',
        start_date TIMESTAMP NOT NULL,
        end_date TIMESTAMP,
        target_audience VARCHAR(50) NOT NULL DEFAULT 'all',
        traffic_allocation INTEGER NOT NULL DEFAULT 100,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create variants table
    await client.query(`
      CREATE TABLE IF NOT EXISTS variants (
        id VARCHAR(255) PRIMARY KEY,
        campaign_id VARCHAR(255) NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        weight INTEGER NOT NULL DEFAULT 50,
        is_control BOOLEAN NOT NULL DEFAULT FALSE,
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        config JSONB NOT NULL,
        metrics JSONB NOT NULL DEFAULT '{"impressions": 0, "clicks": 0, "conversions": 0, "conversion_rate": 0, "click_through_rate": 0, "revenue": 0, "last_updated": "1970-01-01T00:00:00.000Z"}',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create user assignments table
    await client.query(`
      CREATE TABLE IF NOT EXISTS user_assignments (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        component_id VARCHAR(255) NOT NULL,
        variant_id VARCHAR(255) NOT NULL REFERENCES variants(id) ON DELETE CASCADE,
        assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, component_id)
      )
    `)

    // Create referral links table
    await client.query(`
      CREATE TABLE IF NOT EXISTS referral_links (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        base_url VARCHAR(500) NOT NULL,
        affiliate_id VARCHAR(255) NOT NULL,
        utm_source VARCHAR(255),
        utm_medium VARCHAR(255),
        utm_campaign VARCHAR(255),
        utm_content VARCHAR(255),
        utm_term VARCHAR(255),
        custom_params JSONB DEFAULT '{}',
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        click_count INTEGER NOT NULL DEFAULT 0,
        conversion_count INTEGER NOT NULL DEFAULT 0,
        revenue DECIMAL(10,2) NOT NULL DEFAULT 0.00,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create outbound links table
    await client.query(`
      CREATE TABLE IF NOT EXISTS outbound_links (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        url VARCHAR(1000) NOT NULL,
        component_id VARCHAR(255),
        tracking_id VARCHAR(255),
        category VARCHAR(100),
        action VARCHAR(100),
        rel_attributes VARCHAR(255) DEFAULT 'noopener noreferrer sponsored',
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        click_count INTEGER NOT NULL DEFAULT 0,
        conversion_count INTEGER NOT NULL DEFAULT 0,
        revenue DECIMAL(10,2) NOT NULL DEFAULT 0.00,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create link clicks table for detailed tracking
    await client.query(`
      CREATE TABLE IF NOT EXISTS link_clicks (
        id SERIAL PRIMARY KEY,
        link_id INTEGER,
        link_type VARCHAR(50) NOT NULL, -- 'referral' or 'outbound'
        user_id VARCHAR(255),
        ip_address INET,
        user_agent TEXT,
        referrer VARCHAR(500),
        utm_params JSONB,
        clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create conversions table
    await client.query(`
      CREATE TABLE IF NOT EXISTS conversions (
        id SERIAL PRIMARY KEY,
        link_id INTEGER,
        link_type VARCHAR(50) NOT NULL,
        user_id VARCHAR(255),
        conversion_type VARCHAR(100) NOT NULL,
        revenue DECIMAL(10,2) DEFAULT 0.00,
        metadata JSONB DEFAULT '{}',
        converted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create indexes for better performance
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_user_assignments_user_component 
      ON user_assignments(user_id, component_id)
    `)

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_variants_campaign_id 
      ON variants(campaign_id)
    `)

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_link_clicks_link_id 
      ON link_clicks(link_id)
    `)

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_conversions_link_id 
      ON conversions(link_id)
    `)

    console.log('Database initialized successfully')
  } catch (error) {
    console.error('Error initializing database:', error)
    throw error
  } finally {
    client.release()
  }
}

// Helper function to execute queries
export async function query(text: string, params?: any[]) {
  const client = await pool.connect()
  try {
    const result = await client.query(text, params)
    return result
  } finally {
    client.release()
  }
}

// Helper function to execute transactions
export async function transaction(callback: (client: any) => Promise<any>) {
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    const result = await callback(client)
    await client.query('COMMIT')
    return result
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    client.release()
  }
}





