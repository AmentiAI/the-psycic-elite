# Database Setup Guide for A/B Testing and Referral Links

This guide will help you set up the PostgreSQL database integration for your A/B testing and referral link management system.

## 🚀 Features Implemented

### 1. Database Schema
- **Campaigns Table** - Store A/B test campaigns
- **Variants Table** - Store campaign variants with JSONB configuration
- **User Assignments Table** - Track user-to-variant assignments
- **Referral Links Table** - Manage affiliate referral links
- **Outbound Links Table** - Manage outbound links with tracking
- **Link Clicks Table** - Detailed click tracking
- **Conversions Table** - Conversion tracking with revenue

### 2. Database Service Layer
- **ABTestingDBService** - Database operations for A/B testing
- **ReferralLinkService** - Database operations for link management
- **Transaction Support** - ACID compliance for critical operations
- **Connection Pooling** - Efficient database connections

### 3. Admin UI
- **Campaign Management** - Create, edit, and manage A/B test campaigns
- **Link Management** - Manage referral and outbound links
- **Analytics Dashboard** - View performance metrics and statistics
- **Real-time Updates** - Live tracking of campaigns and links

## 🔧 Setup Instructions

### 1. Install Dependencies
```bash
npm install pg @types/pg tsx
```

### 2. Environment Variables
Create a `.env.local` file with your database connection:
```env
DBCONN=postgresql://neondb_owner:npg_Sl4GpUvDLg0C@ep-super-union-adv3x527-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

### 3. Initialize Database
Run the database initialization script:
```bash
npm run init-db
```

This will create all necessary tables, indexes, and constraints.

### 4. Verify Setup
Check that the database was initialized correctly by visiting:
- `/admin` - A/B testing dashboard
- `/admin/links` - Link management interface

## 📊 Database Schema

### Campaigns Table
```sql
CREATE TABLE campaigns (
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
);
```

### Variants Table
```sql
CREATE TABLE variants (
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
);
```

### Referral Links Table
```sql
CREATE TABLE referral_links (
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
);
```

### Outbound Links Table
```sql
CREATE TABLE outbound_links (
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
);
```

## 🎯 API Endpoints

### A/B Testing Endpoints
- `GET /api/campaigns` - Get all campaigns
- `POST /api/campaigns` - Create new campaign
- `GET /api/campaigns/[id]/variants` - Get campaign variants
- `POST /api/campaigns/[id]/variants` - Create new variant
- `GET /api/campaigns/[id]/metrics` - Get campaign metrics
- `POST /api/track` - Track events (impression, click, conversion)

### Referral Link Endpoints
- `GET /api/referral-links` - Get all referral links
- `POST /api/referral-links` - Create new referral link
- `GET /api/referral-links/[id]` - Get specific referral link
- `PUT /api/referral-links/[id]` - Update referral link
- `DELETE /api/referral-links/[id]` - Delete referral link
- `GET /api/referral-links/[id]/analytics` - Get link analytics

### Outbound Link Endpoints
- `GET /api/outbound-links` - Get all outbound links
- `POST /api/outbound-links` - Create new outbound link
- `GET /api/outbound-links/[id]` - Get specific outbound link
- `PUT /api/outbound-links/[id]` - Update outbound link
- `DELETE /api/outbound-links/[id]` - Delete outbound link

## 📈 Analytics and Tracking

### 1. Click Tracking
Every link click is tracked with:
- User ID (if available)
- IP address
- User agent
- Referrer
- UTM parameters
- Timestamp

### 2. Conversion Tracking
Conversions are tracked with:
- Link ID and type
- User ID (if available)
- Conversion type
- Revenue amount
- Custom metadata
- Timestamp

### 3. A/B Testing Metrics
- Impressions per variant
- Clicks per variant
- Conversions per variant
- Conversion rates
- Click-through rates
- Revenue attribution

## 🔒 Security Features

### 1. SQL Injection Prevention
- Parameterized queries
- Input validation
- Type checking

### 2. Connection Security
- SSL/TLS encryption
- Connection pooling
- Secure credential storage

### 3. Data Privacy
- User ID anonymization
- IP address hashing (optional)
- GDPR compliance ready

## 📱 Admin Interface

### 1. Campaign Management
- Create and edit campaigns
- Manage variants
- View real-time metrics
- Statistical analysis

### 2. Link Management
- Create referral and outbound links
- UTM parameter configuration
- Link performance tracking
- Bulk operations

### 3. Analytics Dashboard
- Performance metrics
- Conversion tracking
- Revenue attribution
- Historical data

## 🚨 Important Notes

### 1. Database Connection
- Ensure your PostgreSQL database is accessible
- Check SSL/TLS configuration
- Verify connection string format

### 2. Performance Optimization
- Indexes are created for optimal query performance
- Connection pooling prevents connection exhaustion
- JSONB columns for flexible configuration storage

### 3. Data Backup
- Regular database backups recommended
- Export functionality available in admin UI
- Transaction logging for data integrity

### 4. Scaling Considerations
- Connection pool size can be adjusted
- Database partitioning for large datasets
- Read replicas for analytics queries

## 🔧 Troubleshooting

### 1. Connection Issues
```bash
# Test database connection
npm run init-db
```

### 2. Permission Issues
Ensure your database user has:
- CREATE TABLE permissions
- INSERT/UPDATE/DELETE permissions
- SELECT permissions

### 3. SSL Issues
For local development, you may need to disable SSL:
```env
DBCONN=postgresql://user:pass@host:port/db?sslmode=disable
```

## 📞 Support

For issues with the database setup:
1. Check the database connection string
2. Verify PostgreSQL is running
3. Check firewall and network settings
4. Review the application logs

---

**Remember**: This system is designed for production use with proper security measures. Always test in a development environment first and ensure your database is properly secured.





