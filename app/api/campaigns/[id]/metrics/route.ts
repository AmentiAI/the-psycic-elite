import { NextRequest, NextResponse } from 'next/server'
import { abTestingDBService } from '@/lib/ab-testing-db'

// GET /api/campaigns/[id]/metrics - Get campaign metrics
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const metrics = await abTestingDBService.getCampaignMetrics(params.id)
    return NextResponse.json({ metrics })
  } catch (error) {
    console.error('Error fetching metrics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch metrics' },
      { status: 500 }
    )
  }
}
