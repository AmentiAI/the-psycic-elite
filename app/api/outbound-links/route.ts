import { NextRequest, NextResponse } from 'next/server'
import { referralLinkService } from '@/lib/referral-links'

// GET /api/outbound-links - Get all outbound links
export async function GET() {
  try {
    const links = await referralLinkService.getOutboundLinks()
    return NextResponse.json({ links })
  } catch (error) {
    console.error('Error fetching outbound links:', error)
    return NextResponse.json(
      { error: 'Failed to fetch outbound links' },
      { status: 500 }
    )
  }
}

// POST /api/outbound-links - Create new outbound link
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const link = await referralLinkService.createOutboundLink(body)
    return NextResponse.json({ link })
  } catch (error) {
    console.error('Error creating outbound link:', error)
    return NextResponse.json(
      { error: 'Failed to create outbound link' },
      { status: 500 }
    )
  }
}






