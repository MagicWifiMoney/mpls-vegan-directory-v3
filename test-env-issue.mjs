// Test if the issue is environment variable access in the extraction function

// Simulate the serverless environment
const reviews = [
  { text: 'The Italian sub was amazing! Best vegan cheese I have ever had.' },
  { text: 'Love their ribeye and the Korean ribs are incredible.' }
];

console.log('Reviews array:', reviews);
console.log('Reviews length:', reviews.length);
console.log('Restaurant name:', 'Herbivorous Butcher');

// Check if env var would be accessible
console.log('\nEnvironment check:');
console.log('API key exists:', !!process.env.GOOGLE_GENERATIVE_AI_API_KEY);
console.log('API key length:', process.env.GOOGLE_GENERATIVE_AI_API_KEY?.length || 0);

if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
  console.log('❌ NO API KEY - This is the issue!');
} else if (reviews.length === 0) {
  console.log('❌ NO REVIEWS - This is the issue!');
} else {
  console.log('✅ Should work - API key and reviews present');
}
