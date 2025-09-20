import { NextRequest, NextResponse } from 'next/server'
import { referralLinkService } from '@/lib/referral-links'

// GET /api/outbound-links/[id] - Get specific outbound link
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const link = await referralLinkService.getOutboundLink(parseInt(params.id))
    if (!link) {
      return NextResponse.json(
        { error: 'Outbound link not found' },
        { status: 404 }
      )
    }
    return NextResponse.json({ link })
  } catch (error) {
    console.error('Error fetching outbound link:', error)
    return NextResponse.json(
      { error: 'Failed to fetch outbound link' },
      { status: 500 }
    )
  }
}

// PUT /api/outbound-links/[id] - Update outbound link
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const link = await referralLinkService.updateOutboundLink(parseInt(params.id), body)
    if (!link) {
      return NextResponse.json(
        { error: 'Outbound link not found' },
        { status: 404 }
      )
    }
    return NextResponse.json({ link })
  } catch (error) {
    console.error('Error updating outbound link:', error)
    return NextResponse.json(
      { error: 'Failed to update outbound link' },
      { status: 500 }
    )
  }
}

// DELETE /api/outbound-links/[id] - Delete outbound link
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const success = await referralLinkService.deleteOutboundLink(parseInt(params.id))
    if (!success) {
      return NextResponse.json(
        { error: 'Outbound link not found' },
        { status: 404 }
      )
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting outbound link:', error)
    return NextResponse.json(
      { error: 'Failed to delete outbound link' },
      { status: 500 }
    )
  }
}






