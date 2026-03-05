import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Log subscriber — wire up a real ESP here when ready
    console.log(`[Newsletter] New subscriber: ${email}`);

    return NextResponse.json(
      {
        message: 'Welcome to the family! Check your inbox for confirmation. 🌱',
        subscribed: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Newsletter] Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
