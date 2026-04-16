import { NextRequest, NextResponse } from 'next/server'
import { addSuggestion } from '@/lib/suggestions'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { restaurantName, address, whyVeganFriendly, submitterEmail } = body as Record<string, string>

    if (!restaurantName?.trim()) {
      return NextResponse.json({ error: 'Restaurant name is required' }, { status: 400 })
    }
    if (!submitterEmail?.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    const suggestion = addSuggestion({
      restaurantName: restaurantName.trim(),
      address: address?.trim() ?? '',
      whyVeganFriendly: whyVeganFriendly?.trim() ?? '',
      submitterEmail: submitterEmail.trim(),
    })

    return NextResponse.json({ suggestion }, { status: 201 })
  } catch (err) {
    console.error('[Suggestions] POST error:', err)
    return NextResponse.json({ error: 'Failed to save suggestion' }, { status: 500 })
  }
}
