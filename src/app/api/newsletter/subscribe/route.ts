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

    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    // If Beehiiv credentials are not configured, store locally / placeholder response
    if (!apiKey || !publicationId) {
      console.log(`[Newsletter] New subscriber: ${email} (Beehiiv not configured)`);
      
      // In production without Beehiiv, you might want to store in a database
      // For now, just log and return success
      return NextResponse.json(
        { 
          message: 'Welcome to the family! Check your inbox for confirmation. 🌱',
          subscribed: true 
        },
        { status: 200 }
      );
    }

    // Beehiiv API integration
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'mplsvegan.com',
          utm_medium: 'website',
          utm_campaign: 'newsletter_signup',
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('[Newsletter] Beehiiv API error:', errorData);
      
      // Check if user is already subscribed
      if (response.status === 409 || errorData?.message?.includes('already')) {
        return NextResponse.json(
          { message: 'You\'re already on the list! 🌿' },
          { status: 200 }
        );
      }
      
      return NextResponse.json(
        { error: 'Unable to subscribe. Please try again later.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log(`[Newsletter] Successfully subscribed: ${email}`);

    return NextResponse.json(
      { 
        message: 'Welcome to the family! Check your inbox for confirmation. 🌱',
        subscribed: true,
        id: data.data?.id 
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
