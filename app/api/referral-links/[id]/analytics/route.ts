import { NextRequest, NextResponse } from 'next/server'
import { referralLinkService } from '@/lib/referral-links'

// GET /api/referral-links/[id]/analytics - Get referral link analytics
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const url = new URL(request.url)
    const days = parseInt(url.searchParams.get('days') || '30')
    
    const analytics = await referralLinkService.getLinkAnalytics(
      parseInt(params.id), 
      'referral', 
      days
    )
    
    return NextResponse.json({ analytics })
  } catch (error) {
    console.error('Error fetching referral link analytics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}






