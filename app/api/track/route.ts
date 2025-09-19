import { NextRequest, NextResponse } from 'next/server'
import { abTestingDBService } from '@/lib/ab-testing-db'

// POST /api/track - Track events
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { event, variantId, revenue = 0 } = body

    switch (event) {
      case 'impression':
        await abTestingDBService.trackImpression(variantId)
        break
      case 'click':
        await abTestingDBService.trackClick(variantId)
        break
      case 'conversion':
        await abTestingDBService.trackConversion(variantId, revenue)
        break
      default:
        return NextResponse.json(
          { error: 'Invalid event type' },
          { status: 400 }
        )
    }

    // Update conversion rates after tracking
    await abTestingDBService.updateConversionRates(variantId)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking event:', error)
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    )
  }
}
