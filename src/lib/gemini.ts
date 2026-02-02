// Simple keyword-based popular items extraction

interface Review {
  text: string;
}

function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function extractPopularItems(
  reviews: Review[],
  restaurantName: string
): Promise<string[]> {
  if (reviews.length === 0) {
    return [];
  }

  // Common vegan menu items pattern
  const itemPattern = /\b(italian sub|korean ribs?|ribeye|mac and cheese|breakfast scramble|house[- ]made sausage|chocolate chip cookies?|beyond burger|impossible burger|seitan|tempeh|tofu scramble|breakfast sandwich|veggie burger|black bean burger|vegan cheese|cashew cheese|buffalo wings?|cauliflower wings?|chickpea salad|falafel|hummus wrap|banh mi|pho|pad thai|spring rolls?|summer rolls?|tacos?|burritos?|quesadillas?|nachos|pizza|calzone|lasagna|pasta|spaghetti|fettuccine|ravioli|gnocchi|risotto|curry|tikka masala|samosas?|naan|ramen|udon|sushi rolls?|poke bowl|bibimbap|kimchi|dumplings?|wontons?|bao buns?|fried rice|lo mein|pancakes?|waffles?|french toast|avocado toast|smoothie bowls?|acai bowls?|salads?|wraps?|sandwiches?|subs?)\b/gi;

  const mentions = new Map<string, number>();
  
  reviews.forEach(review => {
    const matches = review.text.match(itemPattern);
    if (matches) {
      matches.forEach(match => {
        const normalized = match.toLowerCase().trim();
        mentions.set(normalized, (mentions.get(normalized) || 0) + 1);
      });
    }
  });

  // Sort by frequency and get top 8
  return Array.from(mentions.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([item]) => titleCase(item));
}
