import { NextRequest, NextResponse } from 'next/server'
import { abTestingDBService } from '@/lib/ab-testing-db'

// GET /api/campaigns/[id]/variants - Get variants for a campaign
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const variants = await abTestingDBService.getVariants(params.id)
    return NextResponse.json({ variants })
  } catch (error) {
    console.error('Error fetching variants:', error)
    return NextResponse.json(
      { error: 'Failed to fetch variants' },
      { status: 500 }
    )
  }
}

// POST /api/campaigns/[id]/variants - Create new variant
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const variant = await abTestingDBService.createVariant({
      ...body,
      campaignId: params.id
    })
    return NextResponse.json({ variant })
  } catch (error) {
    console.error('Error creating variant:', error)
    return NextResponse.json(
      { error: 'Failed to create variant' },
      { status: 500 }
    )
  }
}
