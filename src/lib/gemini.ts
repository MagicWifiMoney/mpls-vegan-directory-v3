// Gemini AI for review analysis

interface Review {
  text: string;
}

export async function extractPopularItems(
  reviews: Review[],
  restaurantName: string
): Promise<string[]> {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

  if (!apiKey) {
    console.log('[Gemini] API key not found');
    return [];
  }
  
  if (reviews.length === 0) {
    console.log('[Gemini] No reviews provided');
    return [];
  }

  console.log(`[Gemini] Analyzing ${reviews.length} reviews for ${restaurantName}`);

  try {
    // Combine all review texts
    const reviewTexts = reviews.map(r => r.text).join('\n\n');

    const prompt = `You are analyzing restaurant reviews for "${restaurantName}", a vegan restaurant. Extract the most frequently mentioned and praised menu items/dishes from these reviews.

Return ONLY a JSON array of 6-10 specific menu items (dish names, not generic categories). Include items that appear multiple times or are specifically praised. Format: ["Italian Sub", "Mac & Cheese", "Chocolate Chip Cookie", ...]

Reviews:
${reviewTexts}

JSON array only:`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 500,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error('[Gemini] API error:', response.status, await response.text());
      return [];
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
    
    console.log('[Gemini] Response:', text.substring(0, 200));
    
    // Extract JSON array from response (handle markdown code blocks)
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      console.warn('[Gemini] Failed to parse response:', text);
      return [];
    }

    const items = JSON.parse(jsonMatch[0]);
    console.log('[Gemini] Extracted items:', items);
    return Array.isArray(items) ? items.slice(0, 10) : [];
  } catch (error) {
    console.error('[Gemini] Error:', error);
    return [];
  }
}
