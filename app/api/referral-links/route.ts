import { NextRequest, NextResponse } from 'next/server'
import { referralLinkService } from '@/lib/referral-links'

// GET /api/referral-links - Get all referral links
export async function GET() {
  try {
    const links = await referralLinkService.getReferralLinks()
    return NextResponse.json({ links })
  } catch (error) {
    console.error('Error fetching referral links:', error)
    return NextResponse.json(
      { error: 'Failed to fetch referral links' },
      { status: 500 }
    )
  }
}

// POST /api/referral-links - Create new referral link
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const link = await referralLinkService.createReferralLink(body)
    return NextResponse.json({ link })
  } catch (error) {
    console.error('Error creating referral link:', error)
    return NextResponse.json(
      { error: 'Failed to create referral link' },
      { status: 500 }
    )
  }
}






