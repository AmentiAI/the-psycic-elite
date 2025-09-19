import { NextRequest, NextResponse } from 'next/server'
import { abTestingDBService } from '@/lib/ab-testing-db'

// GET /api/campaigns - Get all campaigns
export async function GET() {
  try {
    const campaigns = await abTestingDBService.getCampaigns()
    return NextResponse.json({ campaigns })
  } catch (error) {
    console.error('Error fetching campaigns:', error)
    return NextResponse.json(
      { error: 'Failed to fetch campaigns' },
      { status: 500 }
    )
  }
}

// POST /api/campaigns - Create new campaign
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const campaign = await abTestingDBService.createCampaign(body)
    return NextResponse.json({ campaign })
  } catch (error) {
    console.error('Error creating campaign:', error)
    return NextResponse.json(
      { error: 'Failed to create campaign' },
      { status: 500 }
    )
  }
}
