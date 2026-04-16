import { NextRequest, NextResponse } from 'next/server'
import { updateSuggestionStatus, SuggestionStatus } from '@/lib/suggestions'

const ADMIN_SECRET = process.env.ADMIN_SECRET

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  // Guard with ADMIN_SECRET env var; accept any request if unset (dev mode)
  const authHeader = request.headers.get('Authorization')
  if (ADMIN_SECRET && authHeader !== `Bearer ${ADMIN_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const { status } = (await request.json()) as { status: SuggestionStatus }

  if (!['pending', 'approved', 'rejected'].includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const updated = updateSuggestionStatus(id, status)
  if (!updated) {
    return NextResponse.json({ error: 'Suggestion not found' }, { status: 404 })
  }

  return NextResponse.json({ ok: true })
}
