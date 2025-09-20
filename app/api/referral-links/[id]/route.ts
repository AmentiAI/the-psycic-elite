import { NextRequest, NextResponse } from 'next/server'
import { referralLinkService } from '@/lib/referral-links'

// GET /api/referral-links/[id] - Get specific referral link
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const link = await referralLinkService.getReferralLink(parseInt(params.id))
    if (!link) {
      return NextResponse.json(
        { error: 'Referral link not found' },
        { status: 404 }
      )
    }
    return NextResponse.json({ link })
  } catch (error) {
    console.error('Error fetching referral link:', error)
    return NextResponse.json(
      { error: 'Failed to fetch referral link' },
      { status: 500 }
    )
  }
}

// PUT /api/referral-links/[id] - Update referral link
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const link = await referralLinkService.updateReferralLink(parseInt(params.id), body)
    if (!link) {
      return NextResponse.json(
        { error: 'Referral link not found' },
        { status: 404 }
      )
    }
    return NextResponse.json({ link })
  } catch (error) {
    console.error('Error updating referral link:', error)
    return NextResponse.json(
      { error: 'Failed to update referral link' },
      { status: 500 }
    )
  }
}

// DELETE /api/referral-links/[id] - Delete referral link
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const success = await referralLinkService.deleteReferralLink(parseInt(params.id))
    if (!success) {
      return NextResponse.json(
        { error: 'Referral link not found' },
        { status: 404 }
      )
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting referral link:', error)
    return NextResponse.json(
      { error: 'Failed to delete referral link' },
      { status: 500 }
    )
  }
}






