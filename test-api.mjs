import { extractPopularItems } from './src/lib/gemini.ts';

const reviews = [
  { text: 'The Italian sub was amazing! Best vegan cheese I have ever had.', author_name: 'John', rating: 5, time: Date.now(), profile_photo_url: '' },
  { text: 'Love their ribeye and the Korean ribs are incredible.', author_name: 'Jane', rating: 5, time: Date.now(), profile_photo_url: '' },
];

const items = await extractPopularItems(reviews, 'Herbivorous Butcher');
console.log('Extracted items:', items);
