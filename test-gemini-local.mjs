// Test Gemini extraction locally with real API
const apiKey = '***REMOVED***';

const reviews = [
  { text: 'The Italian sub was amazing! Best vegan cheese I have ever had.' },
  { text: 'Love their ribeye and the Korean ribs are incredible.' },
  { text: 'Get the breakfast scramble and their house-made sausage!' },
  { text: 'Their chocolate chip cookies are to die for.' },
  { text: 'The Italian sub is my go-to order every time.' }
];

const reviewTexts = reviews.map(r => r.text).join('\n\n');
const prompt = `You are analyzing restaurant reviews for "Herbivorous Butcher", a vegan restaurant. Extract the most frequently mentioned and praised menu items/dishes from these reviews.

Return ONLY a JSON array of 6-10 specific menu items (dish names, not generic categories). Include items that appear multiple times or are specifically praised. Format: ["Italian Sub", "Mac & Cheese", "Chocolate Chip Cookie", ...]

Reviews:
${reviewTexts}

JSON array only:`;

console.log('Calling Gemini API...');
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
  console.error('API error:', response.status, await response.text());
  process.exit(1);
}

const data = await response.json();
console.log('Response:', JSON.stringify(data, null, 2));

const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
console.log('\nExtracted text:', text);

const jsonMatch = text.match(/\[[\s\S]*\]/);
if (jsonMatch) {
  const items = JSON.parse(jsonMatch[0]);
  console.log('\nParsed items:', items);
} else {
  console.log('No JSON array found in response');
}
