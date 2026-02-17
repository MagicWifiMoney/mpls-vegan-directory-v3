export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  readingTime: string;
  tldr: string;
  faqs: FAQ[];
  relatedRestaurants: string[]; // slugs
  relatedPosts: string[]; // slugs
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "valentines-day-vegan-date-night-minneapolis-2026",
    title: "Vegan Valentine's Date Night in Minneapolis: 2026 Guide",
    description: "Valentine's Day is Saturday! Here are the most romantic vegan and vegan-friendly restaurants in Minneapolis for 2026, plus reservation tips and what to order.",
    publishedAt: "2026-02-11",
    updatedAt: "2026-02-11",
    author: "Mia & Jay",
    category: "Date Ideas",
    tags: ["valentines day", "date night", "romantic", "vegan", "minneapolis", "2026"],
    readingTime: "7 min read",
    tldr: "Valentine's Day is THIS SATURDAY (Feb 14)! Top picks: Tongue in Cheek (upscale tasting menu + killer cocktails), Reverie Cafe (100% vegan, no-tipping, casual-romantic), J. Selby's (comfort food champion), and Francis Burger Joint (fun vegan bar + amazing burgers). For a unique at-home date, grab meats and cheeses from Herbivorous Butcher + wine. Pro tip: Call restaurants TODAY—Saturday Valentine's books up fast!",
    faqs: [
      {
        question: "Which Minneapolis vegan restaurants are doing Valentine's Day specials in 2026?",
        answer: "Tongue in Cheek typically does a special tasting menu for Valentine's Day. Many restaurants run specials Feb 13-15, so call ahead to confirm availability and any prix fixe options."
      },
      {
        question: "Do I need reservations for Valentine's Day dinner in Minneapolis?",
        answer: "YES! Valentine's Day is one of the busiest restaurant nights of the year. Make reservations immediately—especially for popular spots like Tongue in Cheek, Reverie Cafe, and Masu. Many places are already booking up."
      },
      {
        question: "What's the most romantic vegan restaurant in Minneapolis for Valentine's Day?",
        answer: "Tongue in Cheek is the top choice for upscale romance—intimate atmosphere, exceptional cocktails, and a vegan tasting menu option. For 100% vegan vibes, Reverie Cafe offers excellent food in a casual-romantic setting with a no-tipping model."
      },
      {
        question: "What if I can't get a reservation for Valentine's Day?",
        answer: "Try booking for Friday Feb 13 or Sunday Feb 15 instead. Or go the romantic-at-home route: grab meats and cheeses from Herbivorous Butcher, pick up a bottle of wine, and cook together. Sometimes the best dates are the ones without the restaurant pressure."
      },
      {
        question: "Are there affordable vegan Valentine's Day options in Minneapolis?",
        answer: "J. Selby's offers indulgent comfort food without the fine dining price tag. Reverie Cafe is 100% vegan with reasonable prices and a no-tipping model. Francis Burger Joint has incredible vegan burgers and milkshakes for a fun, casual date."
      }
    ],
    relatedRestaurants: ["tongue-in-cheek", "reverie-cafe-bar", "j-selbys", "herbivorous-butcher", "francis-burger-joint"],
    relatedPosts: ["vegan-date-night-minneapolis", "best-vegan-restaurants-minneapolis-2026", "northeast-minneapolis-vegan-guide"],
    content: `
## Valentine's Day 2026: Where to Take Your Vegan Valentine in Minneapolis

Real talk: Valentine's Day is **this Saturday** (Feb 14). If you're reading this and haven't made a reservation yet, stop scrolling and do it NOW. I'll wait.

...

Okay, now that you've (hopefully) secured a spot somewhere, let's talk strategy. Minneapolis has some genuinely excellent options for vegan Valentine's Day dining, from upscale tasting menus to cozy comfort food spots where you can actually hear each other talk.

---

## 🌹 The "I Really Like You" Tier

These are the spots that say "I put thought into this." Dress nice. Make eye contact. Maybe even put your phone away.

### Tongue in Cheek — The Classic Move

**East St. Paul | $$$ | ⭐ 4.8**

If you read our [regular date night guide](/blog/vegan-date-night-minneapolis), you know [Tongue in Cheek](/restaurants/tongue-in-cheek) is already our top pick. For Valentine's? It's even better.

*"First, any review that is less than 5 stars for this establishment is just plain wrong."* — John Madison

**The Valentine's play:**
1. **Start with the Cross-Eyed Mary cocktail** — Legendary. A veggie-infused martini that'll make you forget about boring wine.
2. **Get the Vegasm** — Yes, that's what it's called. Yes, it's appropriate for the occasion.
3. **Share the Jerk Cauliflower** — "Hit the ideal balance of spice and flavor"
4. **Linger over dessert** — They want you to stay. Let yourself.

**The vibe:** Upscale but with quirky art on the walls. Intimate without being stuffy.

**Pricing:** ~$70-90/person with drinks. Worth every penny on Valentine's.

---

## 💚 The "Let's Just Have a Great Time" Tier

Not every Valentine's needs white tablecloths. These spots are perfect for couples who'd rather laugh than whisper.

### Reverie Cafe + Bar — The Crowd Pleaser

**South Minneapolis | $$ | 100% Vegan | ⭐ 4.7**

*"This is probably the only all vegan restaurant I could safely take an omnivore to and them not think it sucks."* — Andrew Lewandowski

[Reverie](/restaurants/reverie-cafe-bar) is 100% vegan, has excellent food, and operates on a no-tipping model. Translation: no awkward "who's paying" math at the end.

**Valentine's order:**
- **Mock Duck Korean BBQ Tacos** to share
- **Mac and Cheese with Shiitake Bacon** — comfort food, elevated
- **Beignets for dessert** — don't skip these

**The vibe:** Bright and artsy. More "fun date" than "fancy date."

**Why it works:** You can actually hear each other. The prices are reasonable. Nobody's performing romance—you're just enjoying a meal together.

---

### J. Selby's — Comfort Food Love Language

**St. Paul | $$ | 100% Vegan | ⭐ 4.7**

Some people express love through fancy dinners. Some people express it through the perfect plate of comfort food. [J. Selby's](/restaurants/j-selbys) is for the second group.

**The Valentine's order:**
- **Cauliflower Wings** with ranch — start here
- **Dirty Secret Burger** — their signature, messy in the best way
- **Animal Fries** — caramelized onions, special sauce, cheese
- **Carrot Cake** — share one slice. Classic romance.

*"Constantly floored with how far vegan food has come."* — Abdiwak Yohannes

**The vibe:** Casual, busy, delicious. This is the "we don't need to prove anything" date.

---

## 🏠 The "Skip the Crowds" Option

Real talk: Valentine's Day at restaurants can be... a lot. Crowded, rushed, overpriced. Sometimes the most romantic move is opting out entirely.

### The Herbivorous Butcher At-Home Experience

**Northeast Minneapolis | $$**

Here's the play:
1. Hit up [Herbivorous Butcher](/restaurants/herbivorous-butcher) during the day
2. Grab the **Korean BBQ Ribs**, some **aged cheddar**, **Italian deli meats**
3. Pick up a nice bottle of wine (or two)
4. Cook together at home

*"We had the pleasure of having our evening meal catered by Herbivorous Butcher. It was hands-down the best meal we've had all week."* — Liz Fathman

**Why it works:**
- No reservation stress
- No time limit
- Way cheaper than restaurant + drinks
- Cooking together = built-in activity
- Leftovers = breakfast in bed

**Pro tip:** Order the ribs. They're $18.99/12oz and will be the star of your dinner.

---

## 🥞 Valentine's Morning: Brunch Edition

Start your Valentine's Day right with breakfast or brunch. Nothing says "I care" like planning the whole day, not just dinner.

### Seward Cafe — Worker-Owned Vibes

**Seward | $ | ⭐ 4.6**

[Seward Cafe](/restaurants/seward-cafe) has been a Minneapolis institution since 1974. Worker-owned, community-focused, and their vegan biscuits and gravy are legendary.

**Valentine's brunch order:**
- **Vegan Biscuits and Gravy** — The stuff of legends
- **Tofu Scramble with Smoky Tempeh** — "Hands-down my favorite part"
- **Fluffy Pancakes with Maple Syrup**
- **Monster Mash drink** — Hot apple cider and miso caramel with coconut whip

*"This has always been a favorite place because they have vegan biscuits and gravy on the menu."* — Alane Klein

**Why it works:** Garden patio seating (if weather permits), massive portions, and prices that won't wreck your Valentine's budget before dinner.

---

### Hard Times Cafe — Punk Rock Breakfast

**Seward | $ | ⭐ 4.5**

If your Valentine appreciates anarchist posters and the best vegan comfort food in the city, [Hard Times](/restaurants/hard-times-cafe) is your spot.

**The order:**
- **Vegan Biscuits and Gravy** — "Mushroom gravy is good enough to take home"
- **Helter Skelter Scramble** — Loaded with veggies
- **Any baked goods** — Outstanding
- **Hash Browns** — Crispy perfection

**Note:** Cash only! But there's an ATM inside.

For more brunch ideas, check our complete [vegan brunch guide](/blog/vegan-brunch-minneapolis).

---

## 🍫 Sweet Treats: Vegan Dessert Spots

Valentine's Day demands chocolate. Here's where to get it.

### French Meadow Bakery — Chocolate Heaven

**Uptown | $$ | ⭐ 4.5**

[French Meadow](/restaurants/french-meadow) has been doing organic and vegan baking for decades. Their vegan desserts are the real deal.

**Must-try sweets:**
- **Vegan Chocolate Rose Cake** — "Such a treat!"
- **Dark Chocolate Sea Salt Cookie** — "Rich and flavorful without being overly sweet"
- **Vegan Cupcakes** — Seasonal flavors

**Pro tip:** Order ahead for Valentine's Day. Their popular items sell out.

---

### Reverie Cafe — Beignets for Your Bae

**South Minneapolis | $$ | ⭐ 4.7**

The [Reverie](/restaurants/reverie-cafe-bar) beignets deserve their own category. Light, fluffy, dusted with powdered sugar perfection.

**The move:** Get a full dinner, then share an order of beignets for dessert. Or just get the beignets. No judgment.

---

### The Herbivorous Butcher — Take-Home Cheesecake

**Northeast Minneapolis | $$ | ⭐ 4.8**

[Herbivorous Butcher](/restaurants/herbivorous-butcher) occasionally has vegan desserts and cheeses that make incredible Valentine's gifts or date-night dessert boards.

**What to look for:**
- Vegan aged cheddar for a cheese board
- Any seasonal desserts they're carrying
- Pair with chocolate and wine for a perfect ending

---

## 🎁 Vegan Valentine's Gift Ideas

Beyond dinner, here are thoughtful vegan gifts that actually show you pay attention.

### For the Home Chef

**Herbivorous Butcher Cookbook** — Available at their shop, full of recipes for making your own vegan meats and cheeses at home

**Subscription to Purple Carrot or Veestro** — Vegan meal kits delivered. Great for couples who like cooking together.

**Thrive Market Membership** — Online vegan grocery store with discounts. Practical AND romantic (kind of).

### For the Foodie

**Gift card to Tongue in Cheek or Reverie** — Let them pick their own special meal

**Herbivorous Butcher sampler pack** — Curate a selection of meats and cheeses

**Vegan chocolate from Peace Coffee or French Meadow** — Local, delicious, thoughtful

### For the Experience-Seeker

**"Vegan Food Tour of Minneapolis"** — Make your own! Hit Herbivorous Butcher → Francis Burger Joint → Hard Times for dessert. Bring a scavenger hunt list or just explore together.

**Cooking class together** — Some local spots offer vegan cooking workshops (check current listings)

### For the "I'm Being Practical" Partner

**Reusable produce bags + Wedge Co-op gift card** — For the sustainability-minded Valentine

**High-quality blender** — For smoothies, soups, and "I care about your morning routine" vibes

---

## 📅 Plan Your Perfect Vegan Valentine's Day

Here are three sample itineraries based on your budget and vibe:

### The Romantic All-Day Experience ($$$)

**Morning:**
- 9am: Brunch at [Seward Cafe](/restaurants/seward-cafe) — Vegan biscuits and gravy, Monster Mash drinks
- Walk around Lake of the Isles or Lake Harriet

**Afternoon:**
- 2pm: Stop by [Herbivorous Butcher](/restaurants/herbivorous-butcher) for a snack and to browse (avoid weekend crowds by going early)
- 4pm: Coffee and dessert at [French Meadow](/restaurants/french-meadow)

**Evening:**
- 7pm: Dinner reservation at [Tongue in Cheek](/restaurants/tongue-in-cheek) — Six-course vegan tasting menu with cocktails
- After: Walk along the river in East St. Paul

**Cost:** ~$180-220 for two

---

### The Casual Fun Day ($$)

**Morning:**
- 10am: Sleep in, make coffee at home
- 11am: Brunch at [Hard Times Cafe](/restaurants/hard-times-cafe) — Cash only, bring $40

**Afternoon:**
- 1pm: Explore Northeast Minneapolis — breweries, art galleries, vintage shops
- 3pm: Stop by [Herbivorous Butcher](/restaurants/herbivorous-butcher) for Korean BBQ Ribs and cheese to take home

**Evening:**
- 6pm: Dinner at [Francis Burger Joint](/restaurants/francis-burger-joint) — Juicy Lucy, fries, milkshakes
- 8pm: Cook the ribs from Herbivorous Butcher at home, open wine, watch a movie

**Cost:** ~$100-120 for two

---

### The Stay-Home Valentine's ($)

**Morning:**
- Make pancakes together (use Seward Cafe's recipe if you have it)
- Lazy morning vibes

**Afternoon:**
- Noon: Quick trip to [Herbivorous Butcher](/restaurants/herbivorous-butcher) — Grab Korean BBQ Ribs, pastrami, aged cheddar, Italian sausage
- Stop at a wine shop or liquor store

**Evening:**
- 5pm: Start cooking together — Grill the ribs, make a cheese board, roast veggies
- 7pm: Candlelit dinner at home
- Dessert: Vegan chocolate + wine

**Cost:** ~$50-70 for two (plus wine)

---

## ⚡ Last-Minute Tips

### Already Booked Up Everywhere?

Try these backup plans:
- **Book for Friday the 13th or Sunday the 15th** — Same romance, way easier reservations
- **Go early** — 5:30pm reservations are often available when 7:30pm is packed
- **Call, don't just check online** — Sometimes restaurants hold tables for phone reservations
- **Try the bar** — Many upscale spots have walk-in bar seating

### What to Wear

| Restaurant | Dress Code |
|------------|-----------|
| Tongue in Cheek | Nice but not formal |
| Reverie | Casual is fine |
| J. Selby's | Whatever you want |
| Francis | Casual cool |
| At home | ...use your imagination |

### Don't Forget

- **Make the reservation TONIGHT** — Seriously
- **Mention it's Valentine's Day** — Some places do special touches
- **Check hours** — Some spots have special Valentine's-only seatings
- **Tip well** — Restaurant workers are slammed this week

---

## The Bottom Line

Valentine's Day in Minneapolis doesn't have to mean suffering through a mediocre prix fixe at a restaurant that treats "vegan option" as an afterthought. We've got legitimately excellent choices—from upscale tasting menus at Tongue in Cheek to a cozy night in with Herbivorous Butcher ribs.

The key? **Book now.** Like, right now. Before you finish reading this sentence.

For more date night ideas beyond Valentine's, check our [complete vegan date night guide](/blog/vegan-date-night-minneapolis) or browse the [full Minneapolis vegan restaurant directory](/blog/best-vegan-restaurants-minneapolis-2026).

Happy Valentine's Day, Minneapolis. 💚🌱
    `
  },
  {
    slug: "best-vegan-restaurants-minneapolis-2026",
    title: "Best Vegan Restaurants in Minneapolis 2026: The Ultimate Guide",
    description: "Your complete guide to the best vegan and plant-based restaurants in Minneapolis for 2026. From 100% vegan spots to vegan-friendly gems, discover where to eat.",
    publishedAt: "2026-02-06",
    updatedAt: "2026-02-06",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan restaurants", "minneapolis", "plant-based", "dining guide"],
    readingTime: "12 min read",
    tldr: "Minneapolis has 46+ incredible vegan dining options in 2026. Top picks: The Herbivorous Butcher (America's first vegan butcher shop), Lulu EthioVegan (4.9 stars—highest rated), J. Selby's (comfort food champion), Reverie Cafe (best for omnivore skeptics), and Hard Times Cafe (budget-friendly punk vibes). For date night, try Tongue in Cheek. Best brunch spots: Modern Times and Seward Cafe. Whether you want Ethiopian injera, Korean BBQ ribs made from plants, or a classic Juicy Lucy, Minneapolis delivers.",
    faqs: [
      {
        question: "What is the best vegan restaurant in Minneapolis?",
        answer: "The Herbivorous Butcher is widely considered the best vegan restaurant in Minneapolis, offering America's first vegan butcher shop experience with house-made meats and cheeses. For fine dining, Tongue in Cheek offers an exceptional vegan tasting menu. Lulu EthioVegan has the highest Google rating at 4.9 stars."
      },
      {
        question: "How many vegan restaurants are in Minneapolis?",
        answer: "Minneapolis has over 46 vegan and vegan-friendly restaurants as of 2026, including 15+ that are 100% vegan. The city has one of the strongest vegan food scenes in the Midwest."
      },
      {
        question: "What are the best 100% vegan restaurants in Minneapolis?",
        answer: "The top 100% vegan restaurants in Minneapolis are: The Herbivorous Butcher (vegan meats/cheeses), J. Selby's (comfort food), Reverie Cafe + Bar (creative cuisine), Lulu EthioVegan (Ethiopian), Hard Times Cafe (punk diner), and Francis Burger Joint (burgers)."
      },
      {
        question: "Where can I find vegan Ethiopian food in Minneapolis?",
        answer: "Lulu EthioVegan is Minneapolis's only 100% vegan Ethiopian restaurant and has the highest rating (4.9 stars) of any restaurant in our directory. Bole Ethiopian Cuisine in Saint Paul also offers excellent vegan options with traditional injera and veggie platters."
      },
      {
        question: "Is Minneapolis a good city for vegans?",
        answer: "Yes! Minneapolis is one of the best cities for vegans in the Midwest. It has diverse options from fine dining to casual cafes, strong community support through co-ops like the Wedge, and innovative spots like The Herbivorous Butcher that have gained national recognition."
      }
    ],
    relatedRestaurants: ["herbivorous-butcher", "j-selbys", "lulu-ethiovegan", "reverie-cafe-bar", "hard-times-cafe", "tongue-in-cheek", "francis-burger-joint"],
    relatedPosts: ["vegan-brunch-minneapolis", "vegan-date-night-minneapolis", "northeast-minneapolis-vegan-guide", "ethiopian-vegan-food-minneapolis"],
    content: `
## The Ultimate Minneapolis Vegan Restaurant Guide for 2026

Let's cut the crap—finding good vegan food in Minneapolis used to feel like hunting for a needle in a haystack made entirely of bacon. But 2026? This city has absolutely *exploded* with plant-based options that'll make even your carnivore uncle shut up at Thanksgiving.

After spending an embarrassing amount of time (and money) eating my way through every vegan spot in the Twin Cities, I've compiled the definitive ranking. No corporate shilling, no sponsored posts—just honest opinions from someone who's been vegan long enough to remember when "vegan cheese" was basically orange-flavored disappointment.

## The 100% Vegan Hall of Fame

These restaurants get it. No compromises, no cross-contamination anxiety, no asking "wait, is the bread vegan?"

### The Herbivorous Butcher ⭐ 4.8 (1,500+ reviews)

**Northeast Minneapolis | $$**

Look, I'll just say it: [The Herbivorous Butcher](/restaurants/herbivorous-butcher) is the best vegan butcher shop in the country. Yes, the *country*. Siblings Aubry and Kale Walch have been doing the impossible since 2016—making vegan meats that actually fool meat-eaters.

*"One of the best Italian Cold Cut Sandwiches that I've ever had, with such friendly and helpful staff"* — Amber Schlater

**Must-order:**
- Korean BBQ Ribs ($18.99/12oz) — "Best-selling item, tender meaty texture, perfect sweet-savory balance"
- Italian Cold Cut Sandwich ($17.49) — As seen on Diners, Drive-ins and Dives
- Pastrami ($15.99/8oz) — "Top fan-favorite deeply seasoned with cracked pepper"

**Pro tip:** Go on a weekday morning. Weekend lines are *brutal*, and popular items sell out. If you're exploring the [Northeast Minneapolis vegan scene](/blog/northeast-minneapolis-vegan-guide), start here.

---

### J. Selby's ⭐ 4.7 (2,900+ reviews)

**St. Paul | $$**

The OG of Twin Cities vegan comfort food. [J. Selby's](/restaurants/j-selbys) is where you bring your skeptical friends to prove that vegan food can be *indulgent*.

*"I've been to J. Selby's twice now, and both times were fantastic. The food, service, and atmosphere were all top-notch."* — Mansi Suresh

**Must-order:**
- Cauliflower Wings — "The cauliflower wings with sweet chili sauce were awesome"
- Dirty Secret Burger — Signature item, messy in the best way
- Carrot Cake — "Rich and delicious"

**Insider tip:** They use Herbivorous Butcher products, so you're getting the best of both worlds. No parking lot though—street parking only. This spot also made our [vegan brunch guide](/blog/vegan-brunch-minneapolis).

---

### Reverie Cafe + Bar ⭐ 4.7 (1,100+ reviews)

**South Minneapolis | $$**

*"Best all vegan restaurant in MN. Mac and cheese? Bangs. Burger? Bangs. Cauliflower tacos? Bangs."* — Andrew Lewandowski

[Reverie Cafe + Bar](/restaurants/reverie-cafe-bar) is the spot where you take your omnivore friends and watch them slowly realize they don't need meat to be happy.

**Must-order:**
- Mock Duck Korean BBQ Tacos — "Outstanding texture and flavor"
- Mac and Cheese with Shiitake Bacon — "Mature and smokey"
- Beignets — "Simply excellent"

**Why it works:** The prices are actually reasonable, and unlike some vegan spots, you don't feel like you're paying a "vegan tax." Perfect for a [casual vegan date night](/blog/vegan-date-night-minneapolis).

---

### Lulu EthioVegan ⭐ 4.9 (305 reviews)

**Minneapolis | $$**

The highest-rated restaurant on this entire list. 4.9 stars. Let that sink in.

*"This restaurant is a must-visit for vegans and non-vegans! The food is incredible, the drinks are delicious, and the owner has an amazing memory."* — Ryn Marchese

For a deep dive into why [Lulu EthioVegan](/restaurants/lulu-ethiovegan) and other spots shine, check out our complete [Ethiopian vegan food guide](/blog/ethiopian-vegan-food-minneapolis).

**Must-order:**
- Awaze Tibs — "Unique and highly recommended"
- Sambusa — "Perfectly crispy"
- Veggie Sampler — "Cannot believe how much amazing food I got for $20"
- Vegan Baklava — "Rare to find a vegan baklava"

**The vibe:** Family-run, warm, personal. The owner Lulu will likely remember your name and order.

---

### Hard Times Cafe ⭐ 4.5 (500+ reviews)

**Seward | $**

Punk rock vibes, cash only, and some of the best vegan comfort food in the city at prices that won't destroy your wallet.

*"No other vegan place in Minneapolis even came close to Hard Times Cafe."* — Fawn Armagost

[Hard Times Cafe](/restaurants/hard-times-cafe) is a staple of the Minneapolis vegan scene and one of our top [brunch recommendations](/blog/vegan-brunch-minneapolis).

**Must-order:**
- Vegan Biscuits and Gravy — "So so good"
- Korean Bun — "Most unique and flavor filled"
- Tempeh Reuben — "Classic"
- Any baked goods — "Outstanding"

**Warning:** Cash only. There's an ATM inside, but come prepared.

---

## Best for Date Night

Planning to impress someone? These spots combine great food with atmosphere that doesn't scream "we're at a vegan restaurant." See our complete [vegan date night guide](/blog/vegan-date-night-minneapolis) for more options.

### Tongue in Cheek ⭐ 4.8 (500+ reviews)

**East St. Paul | $$$**

*"First, any review that is less than 5 stars for this establishment is just plain wrong."* — John Madison

[Tongue in Cheek](/restaurants/tongue-in-cheek) isn't just a vegan restaurant—it's one of the best restaurants in the Twin Cities, period. The vegan options are phenomenal, and the cocktails are dangerously good.

**Date night order:**
- Vegasm (yes, that's really what it's called)
- Pad Thai Salad — "My favorite dish"
- Jerk Cauliflower — "Ideal balance of spice and flavor"
- Cross-Eyed Mary cocktail — "Savory martini lovers, this is a must"

---

### Francis Burger Joint ⭐ 4.7 (300+ reviews)

**Northeast Minneapolis | $$**

*"These burgers are better than most meat burger joints I've been to."* — Jordan E-B

[Francis Burger Joint](/restaurants/francis-burger-joint) brings fun, casual vibes with legitimately incredible vegan burgers and a fully vegan bar. Part of the vibrant [Northeast Minneapolis vegan scene](/blog/northeast-minneapolis-vegan-guide).

**The move:**
- Juicy Lucy — "Haven't stopped thinking about it"
- Hunny Dijon Chicken Sandwich — "By far the most chicken-like substitute I've ever had"
- Chocolate Milkshake — A rare vegan find

---

## Best for Brunch

Because sometimes you need greasy vegan food at 11am on a Sunday. For the complete breakdown, read our [vegan brunch guide](/blog/vegan-brunch-minneapolis).

### Seward Cafe ⭐ 4.6 (600+ reviews)

**Seward | $**

A worker-owned cooperative serving the neighborhood since 1974. [Seward Cafe](/restaurants/seward-cafe) has extensive vegan options and massive portions.

*"Seward Cafe is simply the best! The food is great, and it's an excellent community space."* — Shannon Mahedy

**Brunch must-haves:**
- Vegan Breakfast Burrito — "INCREDIBLE"
- Fluffy Pancakes — "Standout"
- Vegan Biscuits and Gravy — "Always a favorite"
- Tofu Scramble — "Smoky tempeh was hands-down my favorite part"

---

### Modern Times Cafe ⭐ 4.7 (400+ reviews)

**Uptown | $**

*"This very well may be my favorite restaurant in Minneapolis!"* — Breanna Peltz

[Modern Times Cafe](/restaurants/modern-times) offers punk cafe vibes with progressive politics on the walls and incredible vegan brunch on the table.

**What to get:**
- Deadwood with Tempeh — "Literally salivating just thinking about it"
- Southside Hash — "Made vegan, super delicious"
- Tempeh Reuben — "Best and freshest Reuben I have ever had"

---

## Best for a Quick Bite

### Afro Deli ⭐ 4.5 (800+ reviews)

**Stadium Village + Skyway | $**

Fast, cheap, and the falafel slaps.

*"Their falafel sandwich was genuinely some of the best falafel I have ever had and their fries were undoubtedly the best fries I have ever had."* — Ajay Krishnan

[Afro Deli](/restaurants/afro-deli) combines African and Mediterranean flavors with excellent vegan options.

---

## Vegan-Friendly MVPs

These aren't 100% vegan, but they do vegan *well*.

### French Meadow ⭐ 4.5 (1,000+ reviews)

**Uptown | $$**

[French Meadow](/restaurants/french-meadow) has been doing organic and plant-based before it was cool. Great for groups with mixed dietary needs and a top pick in our [brunch roundup](/blog/vegan-brunch-minneapolis).

### Bole Ethiopian ⭐ 4.8 (200+ reviews)

**Maple Grove | $$**

The veggie combo at [Bole Ethiopian](/restaurants/bole-ethiopian) is "out of this world." Ethiopian food is naturally vegan-friendly, and Bole executes it perfectly. Learn more in our [Ethiopian vegan food guide](/blog/ethiopian-vegan-food-minneapolis).

---

## The Bottom Line

Minneapolis in 2026 is genuinely one of the best cities in the Midwest for vegan food. We've got everything from punk rock diners to upscale tasting menus, from [Ethiopian injera](/blog/ethiopian-vegan-food-minneapolis) to Korean BBQ ribs made entirely from plants.

My personal top 3?
1. **[Herbivorous Butcher](/restaurants/herbivorous-butcher)** — For changing the game entirely
2. **[Lulu EthioVegan](/restaurants/lulu-ethiovegan)** — For that 4.9 rating and pure heart
3. **[Hard Times Cafe](/restaurants/hard-times-cafe)** — For keeping it real and affordable

Now stop reading and go eat. 🌱
    `
  },
  {
    slug: "vegan-brunch-minneapolis",
    title: "Vegan Brunch Minneapolis: The Complete Guide to Weekend Feasting",
    description: "Every vegan brunch spot in Minneapolis worth visiting in 2026. From biscuits and gravy to tofu scrambles, here's where to get your weekend fix.",
    publishedAt: "2026-02-06",
    updatedAt: "2026-02-06",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan brunch", "minneapolis", "breakfast", "weekend"],
    readingTime: "10 min read",
    tldr: "Best vegan brunch in Minneapolis: J. Selby's for indulgent comfort food, Hard Times Cafe for punk vibes and the best biscuits & gravy (cash only!), Seward Cafe for worker-owned community vibes, Modern Times for greasy spoon hangover cures, and French Meadow when you want a full bar with your pancakes. Pro tip: arrive right at opening for Modern Times and Hard Times—they fill up fast.",
    faqs: [
      {
        question: "Where can I get vegan brunch in Minneapolis?",
        answer: "The best vegan brunch spots in Minneapolis are J. Selby's (St. Paul), Hard Times Cafe (Seward), Seward Cafe, Modern Times Cafe (Powderhorn), and French Meadow Bakery (Uptown). All offer extensive vegan menus with dishes like tofu scrambles, vegan biscuits and gravy, and pancakes."
      },
      {
        question: "What Minneapolis restaurant has the best vegan biscuits and gravy?",
        answer: "Hard Times Cafe and Seward Cafe are both famous for their vegan biscuits and gravy. Hard Times uses a rich mushroom gravy that locals say is 'good enough to take home.' Both are affordable, cash-friendly options."
      },
      {
        question: "Does J. Selby's serve vegan brunch?",
        answer: "Yes! J. Selby's is 100% vegan and serves brunch including a breakfast burger, cauliflower wings, Animal Fries, and a Crunchwrap. They also offer bottomless mimosas and feature products from The Herbivorous Butcher."
      },
      {
        question: "Are there any vegan brunch spots with outdoor seating?",
        answer: "Seward Cafe has a lovely garden patio perfect for summer brunch. French Meadow also offers outdoor seating and has the bonus of a free, shaded parking lot—a rarity in Minneapolis."
      },
      {
        question: "What time should I arrive for vegan brunch in Minneapolis?",
        answer: "For popular spots like Modern Times Cafe and Hard Times Cafe, arrive right when they open. These places fill up fast, especially on weekends. J. Selby's and Seward Cafe tend to have shorter waits but can still get busy by late morning."
      }
    ],
    relatedRestaurants: ["j-selbys", "hard-times-cafe", "seward-cafe", "modern-times", "french-meadow"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-date-night-minneapolis", "northeast-minneapolis-vegan-guide", "ethiopian-vegan-food-minneapolis"],
    content: `
## Your Complete Guide to Vegan Brunch in Minneapolis

Listen, I get it. It's Saturday morning, you're slightly hungover (or completely hungover, no judgment), and you need carbs, grease, and caffeine in that exact order. The problem? Half of Minneapolis' brunch spots think "vegan option" means a sad fruit cup and dry toast.

Not these places.

I've spent way too many weekend mornings scouting the perfect vegan brunch spots, and I'm sharing the results so you don't have to suffer through another disappointing dining experience while your non-vegan friends demolish their eggs benedict in front of you.

## The Heavy Hitters

### J. Selby's — The Comfort Food Champion

**St. Paul | $$ | ⭐ 4.7 (2,900+ reviews)**

*"The breakfast burger is my number one choice every time."* — K G

[J. Selby's](/restaurants/j-selbys) is what happens when someone actually understands that vegans want *brunch food*, not health food. This is greasy, indulgent, "I might need a nap after this" territory. It's a top pick in our [complete Minneapolis vegan restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026).

**The Order:**
- **Cauliflower Wings** — Start here. The ranch dipping sauce is so good people ask for extra to-go.
- **Breakfast Burger** — Their breakfast menu's crown jewel
- **Animal Fries** — Caramelized onions, special sauce, cheese. Yes.
- **Crunchwrap** — Taco Bell could never
- **Cake** — The carrot cake is "rich and delicious" according to literally everyone

*"Constantly floored with how far vegan food has come. That dang sandwich tasted like a heckin chicken fillet!"* — Abdiwak Yohannes

**Real talk:** They don't have a parking lot, so plan for street parking. Weekends can get busy, but it's worth the wait.

**Insider tip:** They use products from [Herbivorous Butcher](/restaurants/herbivorous-butcher), so the "bacon" actually tastes like bacon.

---

### Seward Cafe — The Neighborhood Institution

**Seward | $ | ⭐ 4.6 (600+ reviews)**

A worker-owned cooperative that's been feeding the neighborhood since 1974. [Seward Cafe](/restaurants/seward-cafe) has an eclectic vibe (think community bulletin boards and local art), and almost everything can be made vegan.

*"This has always been a favorite place because they have vegan biscuits and gravy on the menu."* — Alane Klein

**The Order:**
- **Vegan Biscuits and Gravy** — The reason this place is on the list. Period.
- **Tofu Scramble** — "The smoky tempeh in it was hands-down my favorite part—so flavorful and satisfying"
- **Fluffy Pancakes** — "Especially drizzled with maple syrup"
- **Vegan Breakfast Burrito** — "INCREDIBLE"
- **Monster Mash** (drink) — Hot apple cider and miso caramel topped with coconut whip. "Landing in my top 10 drinks of my life."

*"The quantity of food for the price is pretty much unmatched for vegan options."* — Alane Klein

**The vibe:** Counter service, garden patio seating in summer, and an actual community space. Not everyone's scene, but for the right person, it's perfect.

---

### Hard Times Cafe — The Punk Rock Classic

**Seward | $ | ⭐ 4.5 (500+ reviews)**

Cash only. Anarchist posters on the walls. Some of the best vegan biscuits and gravy in the city. This is Minneapolis.

*"Classic diner food and vibes but vegetarian and vegan-ified."* — Mariah Mckenzie

[Hard Times Cafe](/restaurants/hard-times-cafe) is a beloved institution and one of the [best vegan restaurants in Minneapolis](/blog/best-vegan-restaurants-minneapolis-2026).

**The Order:**
- **Vegan Biscuits and Gravy** — "A half order is plenty! The mushroom gravy is good enough to take home"
- **Helter Skelter** — Their signature scramble with all the veggies
- **Hash Browns** — Crispy, not oily
- **Any baked goods** — "Outstanding"
- **Tempeh Reuben** (if you're going savory) — "Fantastic"

*"It's been surprisingly hard for me to find good vegan food in Minneapolis, but Hard Times is a gem."* — Rachel M

**Heads up:** Cash only! There's an ATM, but save yourself the fee and come prepared. Also, expect some wait time—everything is made from scratch.

---

### Modern Times Cafe — The Uptown Favorite

**Powderhorn | $ | ⭐ 4.7 (400+ reviews)**

Progressive politics, killer tempeh, and the kind of greasy spoon vibes that make a hangover feel manageable.

*"Punk cafes 4 ever! Love all the vegan options while still fulfilling my greasy spoon cravings."* — Emily Mills

[Modern Times Cafe](/restaurants/modern-times) is perfect for when you need comfort food with a side of community.

**The Order:**
- **Deadwood with Tempeh** — "Literally salivating just thinking about it"
- **Tempeh Reuben** — "Best and freshest Reuben I have ever had! Every ingredient was so fresh"
- **Southside Hash** (veganized) — "Super delicious"
- **Breakfast Burrito** (veganized) — "Amazing"
- **House Donuts** — "They were amazing too!"

*"This very well may be my favorite restaurant in Minneapolis! Where is your tempeh from? How do you make it so good??"* — Breanna Peltz

**Pro tip:** Get there right when they open. This place fills up *fast*.

---

### French Meadow — The Crowd Pleaser

**Uptown | $$ | ⭐ 4.5 (1,000+ reviews)**

When you're brunching with a mixed group (vegans, vegetarians, and the uninitiated), [French Meadow](/restaurants/french-meadow) is your diplomatic choice. They've been doing organic and plant-based before it was trendy.

*"Great restaurant with a ton of options. They have many vegan and vegetarian items which makes it super easy to eat there as a vegan."* — Nick Koons

**The Order:**
- **Vegan Breakfast** — "Very good"
- **Veganized Breakfast Burrito** — They'll do it
- **Tempeh Reuben** — Solid
- **Dark Chocolate Sea Salt Cookie** — "Rich and flavorful without being overly sweet"
- **Vegan Chocolate Rose Cake** — "Such a treat!"
- **Oatmeal Latte** — "Tasty with just the right amount of flavoring"

**The vibe:** More upscale than the punk cafes on this list. Outdoor patio seating, full bar, and a to-go section for those in a hurry.

**Parking:** They have a free, shaded parking lot. This is actually a big deal.

---

## The Timing Strategy

Here's what I've learned after too many weekend mornings staring at wait lists:

| Restaurant | Best Time to Arrive | Expect to Wait? |
|------------|-------------------|-----------------|
| J. Selby's | Right at opening | Yes on weekends |
| Seward Cafe | Before 10am | Usually no |
| Hard Times | Midweek mornings | Cash only—prepare |
| Modern Times | Right at opening | Yes—place fills FAST |
| French Meadow | Early or late | Usually quick |

---

## The Real Talk Section

**Best vegan biscuits and gravy:** [Hard Times](/restaurants/hard-times-cafe) or [Seward](/restaurants/seward-cafe), honestly it's a toss-up and I refuse to choose

**Best for hangovers:** [Modern Times](/restaurants/modern-times). Something about those greasy spoon vibes and progressive politics just hits different when you're feeling rough

**Best for impressing someone:** [French Meadow](/restaurants/french-meadow) or [J. Selby's](/restaurants/j-selbys). More polished, still delicious. For actual date ideas, check our [vegan date night guide](/blog/vegan-date-night-minneapolis).

**Best value:** Hard Times. Cheap, filling, excellent. Cash only though.

**Best if you want to also day drink:** Seward Cafe's garden patio with a Monster Mash, or French Meadow's full bar

---

## What to Know Before You Go

1. **J. Selby's** — Street parking only, no lot
2. **Seward Cafe** — Counter service, you pick up your food when called
3. **Hard Times** — CASH ONLY (ATM inside)
4. **Modern Times** — Gets packed, arrive early
5. **French Meadow** — Has a parking lot (rare!)

---

## My Personal Sunday Rotation

Look, I'm not going to pretend I don't have favorites. My typical Sunday rotation goes like this:

- **Feeling bougie:** French Meadow patio with a mimosa
- **Need grease immediately:** Hard Times, biscuits and gravy, no questions
- **Taking out-of-towners:** J. Selby's—it shuts up the "vegan food is boring" crowd real quick
- **Just vibing:** Seward Cafe garden, Monster Mash, people watching

For more comprehensive options beyond brunch, browse our [complete Minneapolis vegan restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026) or plan a [Northeast Minneapolis vegan tour](/blog/northeast-minneapolis-vegan-guide).

Now go forth and brunch. 🥞🌱
    `
  },
  {
    slug: "vegan-date-night-minneapolis",
    title: "Vegan Date Night Minneapolis: Where to Take Someone You Actually Like",
    description: "Planning a vegan date night in Minneapolis? These romantic restaurants have the ambiance, the food, and the vibes to impress. No sad salads here.",
    publishedAt: "2026-02-06",
    updatedAt: "2026-02-06",
    author: "Mia & Jay",
    category: "Date Ideas",
    tags: ["date night", "romantic", "vegan", "minneapolis", "dinner"],
    readingTime: "8 min read",
    tldr: "Best vegan date night spots in Minneapolis: Tongue in Cheek (upscale tasting menu, best cocktails), Reverie Cafe + Bar (100% vegan, casual-but-impressive), Francis Burger Joint (fun burgers + fully vegan bar in NE), and Masu Sushi for fancy Japanese. For first dates, try Reverie (no-tipping = no awkward bill moment). For \"I really like you\" dates, book Tongue in Cheek.",
    faqs: [
      {
        question: "What is the best vegan restaurant for a date in Minneapolis?",
        answer: "Tongue in Cheek in East St. Paul is the top choice for vegan date night. It offers a six-course vegetarian tasting menu (fully vegan available), exceptional cocktails, and an intimate atmosphere. For a more casual date, Reverie Cafe + Bar or Francis Burger Joint are excellent choices."
      },
      {
        question: "Are there any upscale vegan restaurants in Minneapolis?",
        answer: "Yes! Tongue in Cheek offers fine dining with vegan tasting menus. Masu Sushi & Robata provides upscale Japanese with excellent vegetable options. For special occasions, these two restaurants offer the most sophisticated vegan dining experiences in the Twin Cities."
      },
      {
        question: "Where can I take a non-vegan on a date in Minneapolis?",
        answer: "Reverie Cafe + Bar is perfect for converting skeptics—everything is 100% vegan but doesn't taste like 'health food.' Tongue in Cheek also works well because the food is so exceptional that dietary preferences become irrelevant."
      },
      {
        question: "What vegan restaurants in Minneapolis have full bars?",
        answer: "Francis Burger Joint has a fully vegan bar program (no animal-derived ingredients in any drinks). Tongue in Cheek offers craft cocktails including the legendary Cross-Eyed Mary. Reverie Cafe + Bar has 20 craft beers on tap."
      },
      {
        question: "Is there good vegan sushi in Minneapolis?",
        answer: "Masu Sushi & Robata offers excellent vegan sushi options including vegetable rolls and robata-grilled vegetables. While not 100% vegan, their plant-based options are thoughtfully prepared and the upscale atmosphere makes it perfect for date night."
      }
    ],
    relatedRestaurants: ["tongue-in-cheek", "reverie-cafe-bar", "francis-burger-joint", "masu-sushi", "herbivorous-butcher"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-brunch-minneapolis", "northeast-minneapolis-vegan-guide", "ethiopian-vegan-food-minneapolis"],
    content: `
## The Ultimate Guide to Vegan Date Night in Minneapolis

So you've got a date. Congrats. And either you're vegan, they're vegan, or you both are (jackpot). The problem? Most "romantic restaurant" lists assume you're cool with a menu that's 90% meat with a token portobello mushroom entrée hiding at the bottom.

Not this list.

These are spots where the vegan options are *actually good*, the atmosphere doesn't scream "we're at a health food store," and you might actually get a second date.

---

## The Top Tier: Worth Getting Dressed Up For

### Tongue in Cheek

**East St. Paul | $$$ | ⭐ 4.8**

*"First, any review that is less than 5 stars for this establishment is just plain wrong."* — John Madison

Let me be clear: [Tongue in Cheek](/restaurants/tongue-in-cheek) is probably the best restaurant in the Twin Cities for a vegan date night. It's not 100% vegan, but the vegan options are so thoughtfully executed that you'll forget to be jealous of whatever your date is eating.

**The Vibe:** Upscale but not stuffy. Quirky art on the walls. The kind of place where you feel sophisticated without pretending to be someone you're not.

**The Move:**
1. Start with cocktails. The **Cross-Eyed Mary** is legendary — "essentially a bloody mary like martini, gin infused with vegetables. I have to stop myself from drinking more than two."
2. Get the **Teasers** (small plates). "The appetizers and small bites are where it's at: jerk cauliflower, mascarpone polenta, potato pave."
3. Main course: **Vegasm** (yes, it's really called that) or the **Pad Thai Salad** — "my favorite dish"
4. The **Jerk Cauliflower** — "hit the ideal balance of spice and flavor"

*"One of my fav restaurants in MN. Wonderful service and staff as well. Dining here can turn the worst of days around."* — Hollie Chase

**Pricing:** Expect ~$60-80/person with drinks. Worth it. This restaurant is also featured in our [best vegan restaurants guide](/blog/best-vegan-restaurants-minneapolis-2026).

---

### Reverie Cafe + Bar

**South Minneapolis | $$ | ⭐ 4.7**

*"This is probably the only all vegan restaurant I could safely take an omnivore to and them not think it sucks."* — Andrew Lewandowski

If your date is skeptical about vegan food, [Reverie](/restaurants/reverie-cafe-bar) is your secret weapon. Everything is 100% vegan, but it doesn't taste like it's *trying* to be healthy. It just tastes good.

**The Vibe:** Bright, artsy, casual but intentional. Not as fancy as Tongue in Cheek, but perfect for a second or third date when you want good food without the pressure.

**The Move:**
- **Mock Duck Korean BBQ Tacos** — "Outstanding. So much texture and the flavor of the mock duck was delicious"
- **Mac and Cheese with Shiitake Bacon** — "Mature and smokey"
- **Beignets** — Do not skip these
- **The Rev Burger** — If one of you wants comfort food

*"They pay their workers a living wage and are therefore a non-tipping establishment."* — Hallee Caron

**Bonus:** Counter service means no awkward "who's paying" moment. You both just order and split naturally.

---

### Francis Burger Joint

**Northeast Minneapolis | $$ | ⭐ 4.7**

*"These burgers are better than most meat burger joints I've been to."* — Jordan E-B

For when you want a date that's fun, casual, and involves the best vegan burgers in the city. [Francis Burger Joint](/restaurants/francis-burger-joint) is part of the vibrant [Northeast Minneapolis vegan scene](/blog/northeast-minneapolis-vegan-guide).

**The Vibe:** Cool, casual Northeast spot with murals, good music, and zero pretension. Perfect for a "let's just hang and see where this goes" vibe.

**The Move:**
- **Juicy Lucy** — The Minnesota classic, veganized perfectly. "Haven't stopped thinking about it since I had it a few days ago."
- **Hunny Dijon Chicken Sandwich** — "By far the most chicken-like substitute I've ever had"
- **Fries** — "MUCH better than other places"
- **Chocolate Milkshake** — To share. Obviously.
- **"Kind of a Big Dill" Cocktail** — "What all of the State Fair pickle drinks should aspire to be"

*"Cool vibe and unique spot. This is a no-tipping establishment."* — Archibald Chuzzlewit

**Why it works for dates:** The QR code ordering means no pressure, the food is shareable, and nothing says "I'm fun to be around" like knowing about a secret vegan Juicy Lucy spot.

---

## Special Occasion Tier

### Masu Sushi & Robata

**Northeast Minneapolis | $$$ | ⭐ 4.6**

Not 100% vegan, but the vegan sushi options at [Masu](/restaurants/masu-sushi) are *excellent*, and the atmosphere is unmistakably date night material.

**The Vibe:** Moody lighting, beautiful presentation, the kind of place where you feel like you're in a movie.

**What to order:**
- Vegetable rolls (they have several, all good)
- Edamame
- The robata vegetables (grilled over charcoal)
- Ask your server—they're usually great about steering you toward the best plant-based options

**Pro tip:** Sit at the bar if you can. More intimate than a table.

---

## The Casual-But-Still-Romantic Options

### Herbivorous Butcher

**Northeast Minneapolis | $$ | ⭐ 4.8**

*"We had the pleasure of having our evening meal catered by Herbivorous Butcher. It was hands down the best meal we've had all week."* — Liz Fathman

Wait, hear me out. It's a butcher shop, but [The Herbivorous Butcher](/restaurants/herbivorous-butcher) has seating and ready-to-eat sandwiches. For a casual daytime date, nothing says "I know cool stuff" like taking someone to America's first vegan butcher shop.

**The Move:**
- **Italian Cold Cut Sandwich** — "Amazing"
- **Hot Bacon Brat with Cheese** — Share this
- Split some meats and cheeses to take home

**Why it works:** It's different, memorable, and you'll have leftovers for a late-night snack if the date goes well. Check out our full [Northeast Minneapolis vegan guide](/blog/northeast-minneapolis-vegan-guide) for more spots in the area.

---

## The Dinner-to-Drinks Pipeline

Here's my recommended progression for a perfect date night:

**Option A: The Upscale Route**
1. Drinks at Tongue in Cheek → Dinner at Tongue in Cheek → Walk along the river

**Option B: The NE Minneapolis Tour**
1. Early dinner at [Francis Burger Joint](/restaurants/francis-burger-joint) → Drinks at a nearby NE brewery → Stop by [Herbivorous Butcher](/restaurants/herbivorous-butcher) if they're open

**Option C: The South Minneapolis Chill**
1. Dinner at [Reverie](/restaurants/reverie-cafe-bar) → Walk around Lake Harriet or Bde Maka Ska → Ice cream (if any vegan spots are open)

---

## Quick Reference: What Kind of Date Are We Talking?

| Situation | Go Here | Why |
|-----------|---------|-----|
| First date | [Reverie](/restaurants/reverie-cafe-bar) | Casual, no pressure, easy to split |
| Impressive second date | [Tongue in Cheek](/restaurants/tongue-in-cheek) | The food speaks for itself |
| Fun and casual | [Francis](/restaurants/francis-burger-joint) | Burgers + milkshakes = success |
| Special occasion | [Masu](/restaurants/masu-sushi) | Fancy vibes, great sushi |
| Weekend daytime date | [Herbivorous Butcher](/restaurants/herbivorous-butcher) | Unique, memorable, delicious |

---

## Pro Tips for Vegan Date Success

1. **Make a reservation if you can.** Tongue in Cheek especially.
2. **Check the menu beforehand.** You don't want your date watching you panic-scroll the menu.
3. **Order stuff to share.** Food sharing = intimacy points.
4. **Tip well.** (Except at Francis and Reverie—no tipping!) Shows you're a good person.
5. **Don't lecture about veganism.** Let the food speak for itself.

---

## The Honest Truth

If you're looking for fancy white tablecloth fine dining that's 100% vegan... Minneapolis isn't quite there yet. But the options we *do* have are genuinely excellent, and places like Tongue in Cheek and Reverie can hold their own against any restaurant in the city.

The best date isn't about the fanciest restaurant anyway. It's about good food, good conversation, and not having to explain to a waiter what "plant-based" means for the fifteenth time.

For more options, check out our [complete Minneapolis vegan restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026) or plan a [vegan brunch date](/blog/vegan-brunch-minneapolis).

Happy dating. 🌱💚
    `
  },
  {
    slug: "northeast-minneapolis-vegan-guide",
    title: "Northeast Minneapolis Vegan Guide: A Walking Tour of NE's Best Plant-Based Spots",
    description: "Explore Northeast Minneapolis' thriving vegan scene. From the Herbivorous Butcher to Francis Burger Joint, here's your guide to eating plant-based in NE.",
    publishedAt: "2026-02-06",
    updatedAt: "2026-02-06",
    author: "Mia & Jay",
    category: "Neighborhood Guide",
    tags: ["northeast", "walking tour", "vegan", "minneapolis", "neighborhood"],
    readingTime: "9 min read",
    tldr: "Northeast Minneapolis is the best neighborhood for vegan food in MPLS. Must-hit spots: The Herbivorous Butcher (America's first vegan butcher—start here!), Francis Burger Joint (incredible Juicy Lucy and fully vegan bar), and Masu Sushi for upscale veggie rolls. The whole tour is walkable, and you can hit breweries between stops. Best strategy: arrive at Herbivorous Butcher in the morning (weekend lines are brutal), lunch at Francis, brewery break, then Masu for dinner.",
    faqs: [
      {
        question: "What vegan restaurants are in Northeast Minneapolis?",
        answer: "Northeast Minneapolis has several excellent vegan options: The Herbivorous Butcher (America's first vegan butcher shop), Francis Burger Joint (100% vegan burgers and bar), Masu Sushi & Robata (upscale Japanese with vegan options), and Brasa Premium Rotisserie (exceptional vegetable sides)."
      },
      {
        question: "Is The Herbivorous Butcher worth visiting?",
        answer: "Absolutely! The Herbivorous Butcher is America's first vegan butcher shop and offers house-made vegan meats and cheeses that have fooled countless meat-eaters. The Korean BBQ Ribs and Italian Cold Cut sandwich are must-tries. Go on weekday mornings to avoid lines."
      },
      {
        question: "Can I walk between vegan restaurants in Northeast Minneapolis?",
        answer: "Yes! NE Minneapolis is very walkable. The Herbivorous Butcher, Francis Burger Joint, and Masu are all within reasonable walking distance of each other, making it perfect for a vegan food tour."
      },
      {
        question: "Are there vegan options at Northeast Minneapolis breweries?",
        answer: "Most NE breweries don't have their own food but allow outside food. Grab takeout from Herbivorous Butcher or Francis and bring it to Indeed Brewing, Bauhaus Brew Labs, or Dangerous Man Brewing for a perfect pairing."
      },
      {
        question: "What's the best time to visit Herbivorous Butcher?",
        answer: "Weekday mornings or early afternoons are best. Weekend lines can stretch out the door, and popular items like Korean BBQ Ribs and certain cheeses sell out. Call ahead if you need something specific."
      }
    ],
    relatedRestaurants: ["herbivorous-butcher", "francis-burger-joint", "masu-sushi", "brasa-premium-rotisserie"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-date-night-minneapolis", "vegan-brunch-minneapolis", "ethiopian-vegan-food-minneapolis"],
    content: `
## A Walking Tour of Northeast Minneapolis' Best Vegan Spots

Northeast Minneapolis is where Minneapolis gets weird in the best way. Old warehouses turned into breweries, artists' studios next to meat markets, and somehow—right in the middle of it all—the best vegan food scene in the city.

This is your complete guide to eating vegan in NE, organized as a walking tour for maximum efficiency (and maximum eating).

---

## Stop 1: The Herbivorous Butcher

**507 1st Ave NE | $$ | ⭐ 4.8 (1,500+ reviews)**

Start here. You have to.

[The Herbivorous Butcher](/restaurants/herbivorous-butcher) is America's first vegan butcher shop, and if you haven't been, you're missing out on one of the most innovative food concepts in the country. Siblings Aubry and Kale Walch opened this place in 2016, and they've been quietly changing minds about what vegan meat can be ever since.

*"Fake meat never tasted this good."* — Actual review

### The Products

**Meats (yes, we're calling them that):**
| Item | Price | The Deal |
|------|-------|----------|
| Korean BBQ Ribs | $18.99/12oz | Best-selling item. "Tender meaty texture, perfect sweet-savory balance" |
| Pastrami | $15.99/8oz | "Deeply seasoned with cracked pepper, coriander, and warm spices" |
| Italian Sausage | $16.99/13oz | 4 fully-cooked brat links, fennel and sun-dried tomatoes |
| Pepperoni | $13.00/8oz | "Perfect for pizza" |

**Cheeses:**
- Aged Cheddar ($14.99/8oz) — "Sharp, creamy, melts beautifully"
- Smoked Gouda — "Fantastic. One of the best non-dairy cheeses we have had"
- Havarti variations — Garlic pepper and dill

### The Ready-to-Eat Options

Don't sleep on the deli counter. These are some of the best sandwiches in the city.

*"One of the best Italian Cold Cut Sandwiches that I've ever had."* — Amber Schlater

- **Italian Cold Cut** ($17.49) — As seen on Diners, Drive-Ins and Dives. Pastrami, capicola, pepperoni, mozzarella on a hoagie.
- **Hot Bacon Brat with Cheese** — "Both loved it"
- **Ranchy Bacon Mac Hot Panini** — When it's the special, GET IT

### Pro Tips
- **Best time to go:** Weekday mornings or early afternoon. Weekend lines are "out the door"
- **Popular items sell out:** Call ahead if you need something specific
- **They ship nationwide:** Order online if you can't make it in person
- **Buy the cookbook:** Great gift, great recipes

*"I ordered so much stuff including a steak, pepperoni, jerky and deli meat and I was shocked to find out the total was only $48."* — Philip

This spot is also featured in our [best Minneapolis vegan restaurants guide](/blog/best-vegan-restaurants-minneapolis-2026) and makes a great [unique date idea](/blog/vegan-date-night-minneapolis).

---

## Walk: Herbivorous Butcher → Francis Burger Joint (0.8 mi, 15 min)

Head north on Central Ave through the heart of NE. Grab a coffee if you need it.

---

## Stop 2: Francis Burger Joint

**2318 Central Ave NE | $$ | ⭐ 4.7**

*"Delightful food options for a vegetarian feeling oppressed by America's meat-forward culture. Honestly some of the best burgers I've ever eaten."* — Davi Gray

[Francis](/restaurants/francis-burger-joint) is everything a vegan burger joint should be: the burgers are legitimately better than most meat spots, the vibe is fun, and the milkshakes actually taste like milkshakes.

### The Must-Orders

**The Juicy Lucy** — The Minnesota classic, veganized. Impossible patty stuffed with vegan cheese.
*"Haven't stopped thinking about it since I had it a few days ago."* — Actual review

**The Chicken Sandwich** — Multiple reviewers call this "the most chicken-like substitute I've ever had."
*"By far the most chicken-like substitute I've ever had and this isn't coming from someone who hasn't had chicken in 20 years—I had some last week."* — Kyle McCleary

**The Fries** — "MUCH better than other places"

**Chocolate Milkshake** — "I don't think I've ever had a vegan chocolate milkshake (let alone a good vegan chocolate milkshake) before coming here"

### The Vibe

Cool murals, good music, a crowd that's half art school kids and half neighborhood regulars. No-tipping establishment (it's built into prices), which makes ordering stress-free.

*"I go to Francis way more often than I reasonably should."* — Brandon Sullivan

Francis is perfect for a casual [vegan date night](/blog/vegan-date-night-minneapolis).

---

## Walk: Francis → Masu (0.6 mi, 12 min)

Head south back toward Hennepin Ave.

---

## Stop 3: Masu Sushi & Robata

**330 E Hennepin Ave | $$$**

Not 100% vegan, but [Masu](/restaurants/masu-sushi) has excellent vegan options and is the fanciest stop on this tour.

**What to get:**
- Vegetable rolls (several options)
- Robata-grilled vegetables
- Edamame
- Ask your server for recommendations

The charcoal robata grill adds a smoky depth that works beautifully with vegetables. The atmosphere is moody and intimate—this is where you end the day if you're on a date. See our [vegan date night guide](/blog/vegan-date-night-minneapolis) for more romantic options.

---

## The Neighborhood Vibe

NE Minneapolis is walkable, bikeable, and absolutely packed with breweries if you need a break between meals. Some highlights:

- **Indeed Brewing** — Great patio
- **Bauhaus Brew Labs** — The building alone is worth seeing
- **Dangerous Man Brewing** — Small, cash only, excellent

Most NE breweries don't have food, so grab takeout from [Herbivorous Butcher](/restaurants/herbivorous-butcher) or [Francis](/restaurants/francis-burger-joint) and bring it with you.

---

## Parking & Getting There

**By Car:**
- Street parking throughout NE (2-hour limits in some areas)
- Herbivorous Butcher has limited lot parking
- Francis has a small lot

**By Transit:**
- Green Line to E. Hennepin + University
- Multiple bus routes serve Central Ave

**By Bike:**
- Nice Ride stations throughout NE
- Bike lanes on most major streets

---

## The Full Day Itinerary

| Time | Stop | What to Get |
|------|------|-------------|
| 10am | [Herbivorous Butcher](/restaurants/herbivorous-butcher) | Italian Cold Cut, meats/cheeses to take home |
| 12pm | [Francis Burger Joint](/restaurants/francis-burger-joint) | Juicy Lucy, fries, milkshake |
| 3pm | Brewery break | Indeed or Bauhaus |
| 6pm | [Masu](/restaurants/masu-sushi) | Robata vegetables, veggie rolls, sake |

---

## Why NE is the Best Vegan Neighborhood in MPLS

Let's be real: most Minneapolis neighborhoods have maybe one or two vegan options. NE has:
- The literal best vegan butcher shop in America
- A burger joint that makes carnivores question their life choices
- Walkable streets full of character
- Breweries everywhere (most are vegan-friendly)
- A community that *gets it*

The artists and weirdos who made NE cool also made it accepting. Nobody bats an eye at vegan food here—it's just... food.

---

## Pro Tips for Your NE Vegan Day

1. **Start early at Herbivorous Butcher** — Popular items sell out
2. **Bring a cooler** — If you're buying meats/cheeses to take home
3. **Make a reservation at Masu** — Especially weekends
4. **Francis closes at 9pm** — Plan accordingly
5. **Wear comfortable shoes** — You're walking

---

This neighborhood is proof that vegan food doesn't have to exist in its own little bubble. It can be right there next to the breweries and art studios and dive bars, just being part of the neighborhood.

For the complete citywide perspective, check our [best Minneapolis vegan restaurants guide](/blog/best-vegan-restaurants-minneapolis-2026), or if you're craving something specific, try our [Ethiopian vegan food guide](/blog/ethiopian-vegan-food-minneapolis).

Now go explore. 🌱
    `
  },
  {
    slug: "ethiopian-vegan-food-minneapolis",
    title: "Ethiopian Vegan Food Minneapolis: A Complete Guide to Injera and Beyond",
    description: "Minneapolis has incredible Ethiopian food, and it's naturally vegan-friendly. Here's everything you need to know about the best Ethiopian vegan restaurants in MPLS.",
    publishedAt: "2026-02-06",
    updatedAt: "2026-02-06",
    author: "Mia & Jay",
    category: "Cuisine Guide",
    tags: ["ethiopian", "vegan", "minneapolis", "injera", "african cuisine"],
    readingTime: "8 min read",
    tldr: "Ethiopian food is a vegan paradise—centuries of plant-based fasting traditions mean extensive, well-developed vegan menus. Best spots: Lulu EthioVegan (4.9 stars, 100% vegan, highest-rated restaurant in our directory), Bole Ethiopian (Maple Grove, exceptional veggie sampler), and Afro Deli (quick lunch, amazing falafel). Order the veggie combo/sampler at any Ethiopian restaurant—it's always the best value and lets you try everything.",
    faqs: [
      {
        question: "Why is Ethiopian food good for vegans?",
        answer: "Ethiopian Orthodox Christians observe numerous fasting days (Wednesdays, Fridays, plus extended periods) where only plant-based foods are eaten. This means Ethiopian restaurants have extensive, well-developed vegan menus that aren't afterthoughts—they're traditional recipes perfected over generations."
      },
      {
        question: "What is the best vegan Ethiopian restaurant in Minneapolis?",
        answer: "Lulu EthioVegan is the best—it's 100% vegan and has the highest Google rating (4.9 stars) of any restaurant in our directory. The owner Lulu creates authentic Ethiopian dishes using only plant-based ingredients, including a rare vegan baklava."
      },
      {
        question: "What should I order at an Ethiopian restaurant as a vegan?",
        answer: "Order the veggie combo or veggie sampler—it's always the best value and includes 4-6 different dishes like misir wot (red lentil stew), gomen (collard greens), shiro (chickpea stew), and more. Everything comes on injera bread, which you use as your utensil."
      },
      {
        question: "What is injera and is it vegan?",
        answer: "Injera is a spongy, slightly sour flatbread made from teff flour. It's naturally vegan and often gluten-free (when made with 100% teff). It serves as both the plate and the utensil—you tear off pieces and use them to scoop up food."
      },
      {
        question: "How do you eat Ethiopian food?",
        answer: "Ethiopian food is eaten with your hands. Tear off a piece of injera, use it to scoop up some of the food, and fold it slightly before eating. Traditionally, you use your right hand. It's a communal experience—order a sampler and eat from the same platter."
      }
    ],
    relatedRestaurants: ["lulu-ethiovegan", "bole-ethiopian", "afro-deli"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-brunch-minneapolis", "vegan-date-night-minneapolis", "northeast-minneapolis-vegan-guide"],
    content: `
## A Complete Guide to Ethiopian Vegan Food in Minneapolis

Here's a secret that vegans who've lived in Minneapolis for a while already know: Ethiopian food is *incredible* for plant-based eating. It's not an afterthought or a modification—Ethiopian cuisine has been doing vegan feasts for centuries, long before it was trendy.

Why? Ethiopian Orthodox Christians observe numerous fasting days throughout the year where they eat only plant-based foods. This means Ethiopian restaurants have extensive, well-developed vegan menus that aren't just "the meat dish minus the meat." These are recipes perfected over generations.

And Minneapolis? We've got one of the largest Ethiopian communities in the country, which means some of the best Ethiopian food outside of Addis Ababa.

---

## Ethiopian Food 101 (For Beginners)

If you've never had Ethiopian food, here's what you need to know:

### Injera: The Foundation

Everything sits on injera—a spongy, slightly sour flatbread made from teff flour. It's:
- Naturally gluten-free (when made with 100% teff)
- Vegan
- Delicious
- Also your utensil—you tear off pieces and use them to scoop up food

### The Veggie Combo: Your Best Friend

Most Ethiopian restaurants offer a "veggie combo" or "veggie sampler." This is usually 4-6 different vegetable and legume dishes served together on a big platter of injera. It's:
- The best value
- The best way to try everything
- Perfect for sharing

### Common Vegan Ethiopian Dishes

| Dish | What It Is | Why You'll Love It |
|------|-----------|-------------------|
| **Misir Wot** | Spiced red lentil stew | Rich, warming, perfectly spiced |
| **Gomen** | Collard greens | Simple, earthy, comforting |
| **Shiro** | Chickpea flour stew | Creamy, satisfying, usually spicy |
| **Atakilt Wot** | Cabbage, carrots, potatoes | Mild, perfect for spice-sensitive folks |
| **Tikil Gomen** | Similar to atakilt | More turmeric-forward |
| **Fasolia** | Green beans and carrots | Light, fresh |
| **Yekik Alicha** | Split pea stew | Mild, comforting |
| **Azifa** | Green lentil salad | Cold, refreshing, great contrast |

---

## The Best Ethiopian Vegan Restaurants in Minneapolis

### Lulu EthioVegan ⭐ 4.9 (305 reviews)

**Minneapolis | $$ | 100% VEGAN**

This is it. The highest-rated restaurant on our entire [Minneapolis vegan directory](/blog/best-vegan-restaurants-minneapolis-2026). 4.9 stars. All vegan.

*"Minneapolis has many options for Ethiopian food, and Lulu is the best of them all."* — Matthew Racchini

[Lulu EthioVegan](/restaurants/lulu-ethiovegan) isn't just vegan Ethiopian food—it's one of the best vegan restaurants in the city, period. Owner Lulu and her family run the place with genuine warmth, and the food is consistently incredible.

**What to Order:**
- **Veggie Sampler** — "Cannot believe how much amazing food I got for $20"
- **Awaze Tibs** — "Unique and highly recommended, incredible flavor"
- **Sambusa** — "Perfectly crispy"
- **Vegan Baklava** — "Rare to find a vegan baklava"
- **Spice Blend** — They sell it to take home!

*"This was my first experience with Ethiopian food but it's definitely going to be my weekend treat. If you're looking for vegetarian food that speaks to your soul, fills your tummy, and makes you forget that you're normally a carnivore—this is the place to go."* — Mrs Woo

**The Vibe:** Family-run, warm, personal. Lulu will probably remember your name and your order.

**Insider Tip:** There's parking in the alley with a back door entrance—easier access.

---

### Bole Ethiopian ⭐ 4.8 (200+ reviews)

**Maple Grove | $$**

Not 100% vegan, but the vegetarian/vegan options at [Bole Ethiopian](/restaurants/bole-ethiopian) are outstanding. This is the spot if you're in the northwest suburbs.

*"Some of the best Ethiopian food in the Twin Cities. Everything is so flavorful."* — Andrew Zay

**What to Order:**
- **Tokkumaa** — "Mixed beans and vegetables, absolutely amazing"
- **Veggie Combo** — "10/10, out of this world"
- **Veggie Sambusa** — "Perfectly crispy"
- **Miser** — "The lentils here might have changed my mind with just how flavorful they were"
- **Potato and Carrot Alicha** — "Phenomenal"
- **Gingery Tea** — "Perfect"

*"We ordered the Tokkumaa to share and were absolutely amazed and shocked at the amount, presentation, and quality of the food."* — Blue

**The Vibe:** Warm decor, great music, feels like a special occasion. Perfect for a [vegan date night](/blog/vegan-date-night-minneapolis).

---

### Afro Deli ⭐ 4.5 (800+ reviews)

**Stadium Village + Downtown Skyway | $**

[Afro Deli](/restaurants/afro-deli) is Somali rather than Ethiopian, but it shares the East African flavor profiles and has excellent vegan options. It's also fast, cheap, and perfect for a quick lunch.

*"Their falafel sandwich was genuinely some of the best falafel I have ever had and their fries were undoubtedly the best fries I have ever had."* — Ajay Krishnan

**What to Order:**
- **Falafel Sandwich** — "Off the chain and their hot sauce was crazy fresh"
- **Veggie Sambusas** — "Bean heavy, but tasty"
- **Sweet Potato Fries** — "Best in the world"
- **Veggie Fantastic** — The combo plate

**The Vibe:** Fast casual, great for U of M students and downtown workers.

---

## How to Eat Ethiopian Food

If this is your first time, here's the protocol:

1. **Skip the utensils.** This is a hands-on experience. (But utensils are usually available if you really need them.)

2. **Tear, don't cut.** Rip off a piece of injera with your fingers.

3. **Scoop and fold.** Use the injera piece to pick up some of the food, wrapping it slightly.

4. **Use your right hand.** Traditional etiquette, though no one will judge you in Minneapolis.

5. **Share.** Ethiopian food is meant to be communal. Order a big sampler and eat from the same platter.

6. **Pace yourself.** The injera is filling. The dishes are rich. You'll eat more than you think.

---

## The Fasting Tradition Explained

Ethiopian Orthodox Christians observe fasting days on Wednesdays and Fridays year-round, plus longer fasting periods including the 55-day Great Lent. During fasting, no animal products are consumed.

This isn't like Western "vegan options"—it's a deeply integrated part of the cuisine. The vegan dishes at Ethiopian restaurants are just as complex, flavorful, and celebrated as the meat dishes. You're not getting the B-side menu.

---

## Comparison: Where Should You Go?

| Situation | Go Here |
|-----------|---------|
| First Ethiopian experience | [Lulu EthioVegan](/restaurants/lulu-ethiovegan) |
| In the suburbs | [Bole Ethiopian](/restaurants/bole-ethiopian) |
| Quick lunch downtown | [Afro Deli](/restaurants/afro-deli) |
| 100% vegan requirement | [Lulu EthioVegan](/restaurants/lulu-ethiovegan) |
| Date night | [Bole Ethiopian](/restaurants/bole-ethiopian) |
| Budget meal | [Afro Deli](/restaurants/afro-deli) |

---

## What to Expect Price-Wise

Ethiopian food is generally affordable:
- **Veggie combo for one:** $18-22
- **Sampler for 2-3 people:** $35-45
- **Sambusa appetizer:** $6-10
- **Drinks/dessert:** $3-6

You'll likely leave with leftovers.

---

## Tips for Ordering

1. **Ask about spice levels.** Some dishes are naturally mild (alicha = mild), some are spicy (wot = often spicy). Staff can guide you.

2. **Get the combo.** It's almost always the best value and best way to experience the cuisine.

3. **Save room for injera.** You'll eat more bread than you expect.

4. **Order extra injera if needed.** If you run out, you can get more.

5. **Try the drinks.** Ethiopian coffee ceremony is famous. The ginger tea is usually excellent.

---

## Final Thoughts

Ethiopian food is one of the best-kept secrets for vegans in Minneapolis. While everyone's arguing about which vegan burger is best, there's a whole cuisine that's been perfecting plant-based dishes for centuries.

[Lulu EthioVegan's](/restaurants/lulu-ethiovegan) 4.9-star rating isn't an accident. These aren't compromise dishes or modifications—they're the real deal, made by people who grew up eating this way.

If you haven't tried Ethiopian food yet, let this be your sign. If you have, you already know.

For more Minneapolis vegan options, check out our [complete restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026), explore the [Northeast Minneapolis vegan scene](/blog/northeast-minneapolis-vegan-guide), or find your next [brunch spot](/blog/vegan-brunch-minneapolis).

Now go eat. 🌱
    `
  },
  {
    slug: "vegan-meal-prep-services-minneapolis",
    title: "Vegan Meal Prep Services in Minneapolis: Your Complete 2026 Guide",
    description: "Skip the cooking without skipping good food. Here's every vegan meal prep service, meal kit, and ready-made option in the Twin Cities for 2026.",
    publishedAt: "2026-02-11",
    updatedAt: "2026-02-11",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["meal prep", "vegan", "minneapolis", "convenience", "delivery", "twin cities"],
    readingTime: "8 min read",
    tldr: "Best vegan meal prep in Minneapolis: Homegrown Foods for organic meal kits with vegan options, Heal MPLS for 100% plant-based prepared meals with budget-friendly container swap program, The Minnesota Table for chef-prepared delivery, and Nourish and Go for customizable macros. For grab-and-go, hit Whole Foods prepared foods section, Herbivorous Butcher for proteins to cook yourself, or check co-ops like Mississippi Market and Wedge for ready-to-eat vegan options.",
    faqs: [
      {
        question: "Are there any 100% vegan meal prep services in Minneapolis?",
        answer: "Yes! Heal MPLS is a fully plant-based meal prep service with a focus on whole foods. They offer a discounted price if you bring your own containers. Most other services (like Homegrown Foods and The Minnesota Table) offer vegan options but aren't exclusively vegan."
      },
      {
        question: "What's the most affordable vegan meal prep option in Minneapolis?",
        answer: "Heal MPLS offers budget-friendly pricing, especially with their container return program. For grocery-based meal prep, buying bulk from co-ops like Wedge or Mississippi Market and cooking in batches is the most economical approach. Herbivorous Butcher proteins can be pricey but make multiple meals."
      },
      {
        question: "Can I get vegan meal kits delivered in Minneapolis?",
        answer: "Yes! Homegrown Foods delivers organic meal kits to the five-state area with vegan options. National services like Purple Carrot (100% vegan) also deliver to Minneapolis. Most require subscription commitments."
      },
      {
        question: "Where can I buy ready-to-eat vegan meals in Minneapolis?",
        answer: "Whole Foods hot bar and prepared foods section has daily vegan options. Mississippi Market and Wedge co-ops stock local vegan prepared meals. For grab-and-go, J. Selby's sells take-home family meals, and Herbivorous Butcher offers ready-to-heat proteins and deli items."
      },
      {
        question: "Do Minneapolis co-ops offer vegan meal prep or prepared foods?",
        answer: "Absolutely! Mississippi Market, Wedge Community Co-op, and Eastside Food Cooperative all have delis with vegan hot bar items, salads, and grab-and-go meals. They also stock local vegan products from makers like Herbivorous Butcher. Co-op membership gets you discounts."
      }
    ],
    relatedRestaurants: ["herbivorous-butcher", "j-selbys", "reverie-cafe-bar"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-brunch-minneapolis", "northeast-minneapolis-vegan-guide"],
    content: `
## Why Vegan Meal Prep in Minneapolis?

Let's be honest: cooking every meal from scratch is exhausting. Between work, social obligations, and the general chaos of existence, sometimes you just need food to appear without having to think about it.

The good news? Minneapolis has a growing ecosystem of vegan-friendly meal prep services, meal kits, and ready-to-eat options. The less good news? Finding them requires some digging.

This guide covers every option I've found for getting vegan meals without doing all the work yourself.

---

## Full-Service Meal Prep Delivery

These services cook the meals for you and deliver them ready to heat and eat.

### Heal MPLS — 100% Plant-Based

**The only fully vegan meal prep service I've found in the Twin Cities.**

Heal MPLS focuses on whole foods, plant-based meals designed for busy people who still want to eat well. They're not doing fancy "Instagram food"—they're doing real, nourishing meals you'll actually look forward to eating.

**What makes them different:**
- **100% vegan, always** — No filtering through omnivore menus
- **Budget-conscious option** — Bring your own containers for discounted pricing
- **Whole foods focus** — No mystery ingredients or processed fillers
- **Local and small-batch** — You're supporting a local business, not a startup

**Pricing:** Varies by meal plan; container swap program reduces costs

**Best for:** Anyone committed to plant-based eating who wants consistent, reliable meals without cooking.

---

### The Minnesota Table

**Chef-prepared meals delivered to your doorstep.**

[The Minnesota Table](https://themntable.com/) is a Minneapolis-based meal delivery service with vegan options among their rotating menu. The food is chef-quality—these aren't sad frozen dinners.

**What to know:**
- Weekly rotating menu with vegan selections
- Meals arrive fresh, not frozen
- Delivery throughout Minneapolis and surrounding areas
- Perfect for people who want variety without planning

**Pricing:** ~$12-15 per meal depending on selections

**Best for:** Folks who want restaurant-quality meals at home without restaurant prices.

---

### Homegrown Foods — Organic Meal Kits

**Minneapolis-based organic meal kit service with vegan options.**

[Homegrown Foods](https://eatgoodathome.com/) is a local alternative to the big national meal kit services. They deliver organic meal kits with vegan recipes to the five-state area.

**The difference from Blue Apron/HelloFresh:**
- **Local and organic focus** — Ingredients sourced regionally when possible
- **Vegan meal options** — Not an afterthought like with some services
- **Delivers to rural areas** — If you're outside the metro, they still reach you
- **Family-owned** — Your money stays in Minnesota

**How it works:**
1. Choose your meals for the week (vegan options available)
2. Receive pre-portioned organic ingredients
3. Cook using their recipes (typically 30-45 minutes)
4. Eat like a person who has their life together

**Pricing:** ~$10-12 per serving depending on plan size

**Best for:** People who enjoy cooking but hate meal planning and grocery shopping.

---

### National Services That Deliver to Minneapolis

If you want 100% vegan meal kits, these national services ship to the Twin Cities:

**Purple Carrot** — Fully vegan meal kits
- ~$12 per serving
- Plant-based recipes designed by chefs
- Meals in 30-45 minutes

**Daily Harvest** — Frozen smoothies, bowls, and flatbreads
- ~$7-9 per item
- Build-your-own box subscription
- No cooking required for most items

**Mosaic Foods** — Frozen vegan meals
- ~$8-10 per meal
- Ready in minutes
- Good for grab-and-go lunches

---

## Grab-and-Go Prepared Foods

Sometimes you need food NOW, not delivered tomorrow. Here's where to find ready-to-eat vegan meals in Minneapolis.

### Whole Foods Market

**Multiple locations | Hot bar, salads, prepared meals**

Love it or hate it, Whole Foods has the most consistent selection of prepared vegan foods in the city. Their hot bar and salad bar always have vegan options clearly labeled.

**Vegan finds:**
- Hot bar items (varies daily)
- Pre-made salads and grain bowls
- Grab-and-go sandwiches and wraps
- Prepared soups and sides

**Pro tip:** Hit the hot bar near closing time for discounted items. Quality varies by location—the downtown and Edina stores tend to have the best selections.

---

### Mississippi Market Co-op

**St. Paul | Multiple locations**

This St. Paul co-op has an excellent deli with vegan hot bar items, salads, and grab-and-go meals. They also stock tons of local vegan products you won't find at chain stores.

**Why co-ops rule for vegans:**
- Delis prioritize local and plant-based options
- Staff actually know what's vegan (ask them!)
- Member discounts add up
- Supporting local food economy

**Best for:** St. Paul folks who want real food from a values-aligned grocery store.

---

### Wedge Community Co-op

**Uptown Minneapolis**

Minneapolis' answer to Mississippi Market. The Wedge has been serving the community since 1974 and their prepared foods section reflects decades of knowing what locals want.

**Find here:**
- Deli hot bar with daily vegan options
- Prepared salads and grain bowls
- Vegan baked goods
- Local vegan products throughout the store

**Member benefits:** Join the co-op for discounts on everything, including prepared foods.

---

### The Herbivorous Butcher

**Northeast Minneapolis | Vegan butcher shop**

Okay, this isn't "meal prep" in the traditional sense—but [Herbivorous Butcher](/restaurants/herbivorous-butcher) is the secret weapon for easy vegan meals at home.

**The hack:**
1. Buy their ready-to-cook proteins (Korean BBQ Ribs, Italian Deli Meats, aged cheeses)
2. Add rice, veggies, or bread
3. Have a restaurant-quality meal in 15 minutes

**Ready-to-eat options:**
- Deli sandwiches
- Cheese and meat platters
- Take-home holiday meals (Thanksgiving, Christmas, etc.)

**Best for:** People who want to cook a little but don't want to make everything from scratch.

---

### J. Selby's Take-Home Options

**St. Paul | 100% vegan restaurant**

[J. Selby's](/restaurants/j-selbys) isn't just for dining in. They sell family-sized portions and catering trays that work great for meal prep.

**Meal prep moves:**
- Family-sized mac and cheese
- Bulk cauliflower wings
- Party trays for the week

**Best for:** When you want J. Selby's comfort food but don't want to eat out every day.

---

## DIY Meal Prep: Vegan Staples in Minneapolis

If you want to prep your own meals, these are the best places to stock up:

### For Bulk Grains, Beans, and Dry Goods
- **Wedge Co-op** — Extensive bulk section
- **Mississippi Market** — Great bulk selection
- **United Noodles** — Asian market with bulk rice and specialty items

### For Fresh Produce
- **Mill City Farmers Market** — Seasonal, local produce (summer)
- **Midtown Global Market** — Year-round international options
- **Co-ops** — Best quality outside farmers markets

### For Vegan Proteins
- **Herbivorous Butcher** — Local vegan meats and cheeses
- **United Noodles** — Tofu, tempeh, seitan, mock meats
- **Whole Foods** — Widest selection of packaged vegan proteins

### For Batch Cooking Ingredients
- **Restaurant Depot** (with membership) — Bulk commercial-sized ingredients
- **Costco** — Vegan items have expanded significantly
- **Aldi** — Surprisingly good vegan staples at low prices

---

## Tips for Successful Vegan Meal Prep

**Start small:** Don't try to prep every meal for the week on day one. Start with lunches or dinners only.

**Batch your proteins:** Cook a big batch of tofu, tempeh, or Herbivorous Butcher products on Sunday. Use them throughout the week in different dishes.

**Embrace the grain bowl:** Base of grain + protein + veggies + sauce = infinite variations with minimal effort.

**Don't sleep on freezer meals:** Many meals freeze well. Make double batches and freeze half for lazy weeks.

**Mix services:** Use meal delivery for dinners, grab-and-go for lunches, and batch-cook breakfasts. No rule says you have to do it all one way.

---

## FAQ Recap

The best 100% vegan meal prep service in Minneapolis is **Heal MPLS**. For meal kits with vegan options, try **Homegrown Foods** (local) or **Purple Carrot** (national). For grab-and-go, **Whole Foods**, **Mississippi Market**, and **Wedge Co-op** have you covered.

If you prefer cooking but hate planning, **Herbivorous Butcher** proteins plus simple sides is the move.

Now stop reading and go prep some food. 🌱
    `
  },
  {
    slug: "vegan-comfort-food-minneapolis",
    title: "Best Vegan Comfort Food in Minneapolis: Mac & Cheese, Burgers, Pizza & More",
    description: "Craving indulgent vegan comfort food in Minneapolis? This guide covers the best spots for mac and cheese, burgers, fried food, pizza, and ice cream that'll satisfy any craving.",
    publishedAt: "2026-02-12",
    updatedAt: "2026-02-12",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["comfort food", "vegan", "minneapolis", "burgers", "pizza", "mac and cheese", "indulgent"],
    readingTime: "10 min read",
    tldr: "Best vegan comfort food in Minneapolis: J. Selby's (mac & cheese champion), Francis Burger Joint (best vegan burgers + Juicy Lucy), Pizza Lucé (extensive vegan pizza menu), Reverie Cafe (shiitake bacon mac), Herbivorous Butcher (comfort food building blocks), and Sebastian Joe's (vegan ice cream). For fried food, hit Hard Times or Modern Times. These aren't health food spots—they're indulgent, satisfying, and proof that vegan food can be deliciously unhealthy.",
    faqs: [
      {
        question: "Where can I get the best vegan mac and cheese in Minneapolis?",
        answer: "J. Selby's is the mac and cheese champion with their rich, creamy version available as a side or entree. Reverie Cafe's Mac and Cheese with Shiitake Bacon is also exceptional, adding a smoky, savory element. Both are 100% vegan restaurants."
      },
      {
        question: "What's the best vegan burger in Minneapolis?",
        answer: "Francis Burger Joint takes the crown with their vegan Juicy Lucy (Minnesota's iconic cheese-stuffed burger, veganized). Their Hunny Dijon Chicken Sandwich is also incredible. J. Selby's Dirty Secret Burger and Reverie's Rev Burger are close runners-up."
      },
      {
        question: "Where can I get vegan pizza in Minneapolis?",
        answer: "Pizza Lucé offers the most extensive vegan pizza menu with house-made vegan cheese and creative toppings. Parkway Pizza (100% vegan pizzeria) and Red Wagon Pizza also have excellent options. Most local pizza chains now offer vegan cheese."
      },
      {
        question: "Does Minneapolis have vegan ice cream shops?",
        answer: "Sebastian Joe's offers excellent vegan ice cream flavors rotating seasonally. French Meadow has vegan desserts and ice cream options. Glam Doll Donuts occasionally features vegan ice cream sandwiches. Many shops now carry vegan options—always worth asking!"
      },
      {
        question: "Where can I get vegan fried chicken in Minneapolis?",
        answer: "J. Selby's has incredible fried vegan chicken sandwiches. Francis Burger Joint's Hunny Dijon Chicken Sandwich is 'the most chicken-like substitute' according to reviewers. Hard Times Cafe offers breaded and fried options on their comfort food menu."
      }
    ],
    relatedRestaurants: ["j-selbys", "francis-burger-joint", "reverie-cafe-bar", "hard-times-cafe", "herbivorous-butcher", "pizza-luce", "french-meadow"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-brunch-minneapolis", "northeast-minneapolis-vegan-guide"],
    content: `
## Best Vegan Comfort Food in Minneapolis: A Guide to Indulgent Plant-Based Eating

Let's get one thing straight: comfort food isn't about kale salads or quinoa bowls. Comfort food is greasy, cheesy, fried, saucy, and completely unapologetic. It's what you crave after a long day, a breakup, or when the Minnesota winter makes you question all your life choices.

The good news? Minneapolis has absolutely nailed vegan comfort food. We're talking mac and cheese that'll make you forget dairy exists, burgers that carnivores order on purpose, and pizza loaded with actual melty cheese (yes, vegan).

This is your guide to eating your feelings, Minneapolis vegan style.

---

## 🧀 Mac & Cheese: The Ultimate Comfort Food

### J. Selby's — The Reigning Champion

**St. Paul | $$ | ⭐ 4.7**

*"The mac and cheese? Bangs."* — Andrew Lewandowski

[J. Selby's](/restaurants/j-selbys) doesn't mess around with their mac and cheese. It's rich, creamy, perfectly seasoned, and available as a side or full entree. The cheese sauce is so good you'll wonder why anyone bothers with dairy.

**Order it:**
- As a side with your burger
- As an entree when you need maximum comfort
- With added toppings like buffalo cauliflower or bacon bits

**Pro tip:** Get the Animal Fries too. Because if you're going for comfort food, commit to the bit.

---

### Reverie Cafe + Bar — The Elevated Version

**South Minneapolis | $$ | ⭐ 4.7**

*"Mac and cheese with shiitake bacon? Mature and smokey."* — Verified reviewer

[Reverie's](/restaurants/reverie-cafe-bar) mac and cheese takes the classic and adds shiitake bacon for a smoky, umami-rich twist. It's comfort food that still feels a little fancy—perfect when you want to feel like an adult while eating pasta and cheese.

**Why it works:** The shiitake bacon adds texture and depth without being gimmicky. This is thoughtful comfort food.

Also featured in our [complete Minneapolis vegan restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026).

---

## 🍔 Burgers: The Minneapolis Vegan Burger Revolution

### Francis Burger Joint — The Juicy Lucy Champions

**Northeast Minneapolis | $$ | ⭐ 4.7**

*"These burgers are better than most meat burger joints I've been to."* — Jordan E-B

If you're in Minnesota and haven't tried a Juicy Lucy, you're missing out on the state's most iconic burger—a cheese-stuffed patty that oozes when you bite into it. [Francis Burger Joint](/restaurants/francis-burger-joint) has perfected the vegan version.

**The Order:**
- **Juicy Lucy** — "Haven't stopped thinking about it since I had it a few days ago"
- **Hunny Dijon Chicken Sandwich** — "By far the most chicken-like substitute I've ever had"
- **Fries** — "MUCH better than other places"
- **Chocolate Milkshake** — Because you deserve it

*"Cool vibe and unique spot. This is a no-tipping establishment."* — Archibald Chuzzlewit

**The vibe:** Northeast Minneapolis cool. Murals, good music, zero pretension. Fully vegan bar program too. Check out more NE spots in our [Northeast Minneapolis vegan guide](/blog/northeast-minneapolis-vegan-guide).

---

### J. Selby's — The Dirty Secret

**St. Paul | $$ | ⭐ 4.7**

The **Dirty Secret Burger** at [J. Selby's](/restaurants/j-selbys) is exactly what the name suggests—messy, indulgent, and absolutely worth the napkin situation.

**What makes it work:** House-made patty, special sauce, all the toppings, zero guilt about eating something called "Dirty Secret."

**Breakfast Burger** fans, this spot also has you covered. Mac and cheese on a burger? Yes. Do it.

---

### Reverie Cafe + Bar — The Rev Burger

**South Minneapolis | $$ | ⭐ 4.7**

The **Rev Burger** at [Reverie](/restaurants/reverie-cafe-bar) is a solid, reliable, well-executed burger that'll satisfy without overwhelming. Sometimes you just want a good burger, and this is it.

**Best for:** When you want a burger but don't want to commit to full-on indulgence territory.

---

## 🍕 Pizza: Melty Cheese, Endless Toppings

### Pizza Lucé — The OG Vegan Pizza Spot

**Multiple Locations | $$ | ⭐ 4.6**

Pizza Lucé was serving vegan cheese before most pizza places even knew it existed. Now they have an entire vegan menu section with house-made vegan cheese that actually melts and stretches.

**The Vegan Menu:**
- Mediterranean vegan pizza
- Vegan sausage options
- Build-your-own with Follow Your Heart mozzarella
- Vegan garlic cheese bread (do not skip)

**Pro tip:** The vegan cheese costs extra, but it's worth every penny. This is not sad, dry vegan pizza—this is the real deal.

---

### Parkway Pizza — 100% Vegan Pizzeria

**South Minneapolis | $$ | ⭐ 4.8**

A dedicated vegan pizza shop? Yes, Minneapolis has one. Parkway Pizza proves that vegan pizza doesn't have to be a "substitute"—it can be the main event.

**What to order:**
- Any specialty pizza (they're all vegan)
- Cheesy breadsticks
- Wings (yes, vegan wings at a pizza place)

**The vibe:** Casual neighborhood spot where you don't have to ask if ingredients are vegan. Everything just is.

---

### Red Wagon Pizza — The Food Truck Favorite

**Roaming + Brick & Mortar | $$ | ⭐ 4.7**

Red Wagon started as a food truck and earned a cult following for their creative, high-quality vegan pizzas. Now they have a permanent location too.

**Best for:** Creative flavor combinations, food truck vibes, supporting local.

---

## 🍟 Fried Food: Because Sometimes You Need Grease

### J. Selby's — The Cauliflower Wing Masters

**St. Paul | $$ | ⭐ 4.7**

*"The cauliflower wings with sweet chili sauce were awesome."* — Mansi Suresh

[J. Selby's](/restaurants/j-selbys) cauliflower wings are legendary. Crispy, saucy, and completely addictive.

**Order:**
- **Cauliflower Wings** with ranch or sweet chili sauce
- **Animal Fries** — Cheese, special sauce, caramelized onions
- **Crunchwrap** — Fried, wrapped, perfect

**Best for:** When you want fried food that feels like a meal, not just a side.

---

### Hard Times Cafe — The Diner Classics

**Seward | $ | ⭐ 4.5**

*"Classic diner food and vibes but vegetarian and vegan-ified."* — Mariah Mckenzie

[Hard Times](/restaurants/hard-times-cafe) does old-school diner fried food—crispy hash browns, breaded and fried sandwiches, and baked goods that'll make you forget what gluten-free means.

**The Order:**
- **Hash Browns** — Perfectly crispy
- **Korean Bun** — Fried tofu, kimchi, all the fixings
- **Any fried sandwich** — They don't mess around

**Warning:** Cash only. ATM inside. Worth it.

Also check out [our vegan brunch guide](/blog/vegan-brunch-minneapolis) for more Hard Times recommendations.

---

### Modern Times Cafe — The Greasy Spoon Favorite

**Powderhorn | $ | ⭐ 4.7**

*"Punk cafes 4 ever! Love all the vegan options while still fulfilling my greasy spoon cravings."* — Emily Mills

[Modern Times](/restaurants/modern-times) delivers on the greasy spoon promise—fried, filling, and unapologetically indulgent.

**Best for:** Hangover food, weekend comfort, progressive politics with your fried potatoes.

---

## 🍦 Ice Cream & Frozen Treats

### Sebastian Joe's — The Ice Cream Institution

**Multiple Locations | $$ | ⭐ 4.8**

Sebastian Joe's has been a Minneapolis ice cream staple for decades, and their vegan flavors rotate seasonally. Creamy, rich, and made with real ingredients.

**What to expect:**
- Seasonal vegan flavors (always at least 2-3 available)
- Rich, creamy base (usually coconut or oat milk)
- Real, high-quality ingredients

**Pro tip:** Call ahead to check current vegan flavors. They change often.

---

### French Meadow Bakery — The Dessert Destination

**Uptown | $$ | ⭐ 4.5**

[French Meadow](/restaurants/french-meadow) has vegan ice cream, cakes, cookies, and desserts that feel special.

**The sweet stuff:**
- Vegan ice cream (seasonal flavors)
- Vegan Chocolate Rose Cake
- Dark Chocolate Sea Salt Cookies
- Seasonal vegan pies and pastries

**Best for:** When you want dessert that looks as good as it tastes. Featured in our [vegan brunch guide](/blog/vegan-brunch-minneapolis).

---

### Glam Doll Donuts — The Ice Cream Sandwich Wildcard

**Multiple Locations | $$ | ⭐ 4.8**

[Glam Doll](/restaurants/glam-doll-donuts) occasionally features vegan ice cream sandwiches—donuts stuffed with vegan ice cream. It's as extra as it sounds, and it's glorious.

**Check for:** Seasonal vegan ice cream sandwich specials. Instagram is your friend here.

---

## 🥓 Building Blocks: DIY Comfort Food at Home

### The Herbivorous Butcher — Your Secret Weapon

**Northeast Minneapolis | $$ | ⭐ 4.8**

*"We had the pleasure of having our evening meal catered by Herbivorous Butcher. It was hands down the best meal we've had all week."* — Liz Fathman

[Herbivorous Butcher](/restaurants/herbivorous-butcher) sells the building blocks for home-cooked comfort food:

**The Comfort Food Toolkit:**
- **Korean BBQ Ribs** — Smoke, char, fall-apart tender
- **Italian Sausage** — For pasta, pizza, subs
- **Bacon** — Real crunch, real smoke
- **Aged Cheddar** — For grilled cheese, mac and cheese, nachos
- **Pastrami** — Sandwiches, hash, Reubens

**The hack:** Buy the proteins and cheeses, add simple sides, have restaurant-quality comfort food at home in 15 minutes.

Featured prominently in our [best vegan restaurants guide](/blog/best-vegan-restaurants-minneapolis-2026).

---

## Quick Reference: What Comfort Food, Where?

| Craving | Go Here | Order This |
|---------|---------|-----------|
| **Mac & Cheese** | [J. Selby's](/restaurants/j-selbys) | Classic mac or loaded mac |
| **Burgers** | [Francis Burger Joint](/restaurants/francis-burger-joint) | Juicy Lucy |
| **Pizza** | Pizza Lucé | Vegan Mediterranean or build-your-own |
| **Fried Stuff** | [J. Selby's](/restaurants/j-selbys) | Cauliflower wings + Animal Fries |
| **Ice Cream** | Sebastian Joe's | Seasonal vegan flavors |
| **Donuts** | [Glam Doll](/restaurants/glam-doll-donuts) | Any vegan donut (all amazing) |
| **Diner Food** | [Hard Times](/restaurants/hard-times-cafe) | Hash browns + Korean Bun |
| **Take-Home** | [Herbivorous Butcher](/restaurants/herbivorous-butcher) | Korean BBQ Ribs + cheese |

---

## The Comfort Food Crawl: A One-Day Itinerary

**Lunch:** Start at [Francis Burger Joint](/restaurants/francis-burger-joint) for a Juicy Lucy and fries

**Afternoon Snack:** Hit [Glam Doll Donuts](/restaurants/glam-doll-donuts) for a vegan donut (or three)

**Dinner:** Head to [J. Selby's](/restaurants/j-selbys) for mac and cheese, cauliflower wings, and carrot cake

**Nightcap:** Stop by [Herbivorous Butcher](/restaurants/herbivorous-butcher) and stock up for tomorrow's comfort food cooking

**Total damage:** ~$60-80 for a full day of indulgence
**Regrets:** Zero

---

## Pro Tips for Maximum Comfort

1. **Order extra Animal Fries at J. Selby's** — You'll thank me later
2. **Don't skip dessert** — Comfort food without dessert is just regular food
3. **Cash only at Hard Times** — Come prepared or use their ATM
4. **Check Glam Doll's Instagram** — New vegan specials drop regularly
5. **Call ahead for vegan ice cream** — Sebastian Joe's flavors rotate

---

## The Bottom Line

Minneapolis vegan comfort food has come a long way from steamed vegetables and sad salads. We've got:

- Mac and cheese that converts skeptics
- Burgers that make carnivores jealous
- Pizza with actual melty cheese
- Fried food that satisfies every greasy craving
- Ice cream that doesn't taste like compromise

Whether you're a lifelong vegan, newly plant-based, or just trying to eat less meat, these spots prove that comfort food doesn't need animal products to be deeply, satisfyingly indulgent.

Now stop reading and go eat your feelings. 🌱🍔🍕

For more Minneapolis vegan dining, check out our [complete restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026), [Northeast Minneapolis tour](/blog/northeast-minneapolis-vegan-guide), or [vegan brunch recommendations](/blog/vegan-brunch-minneapolis).
    `
  },
  {
    slug: "vegan-bakeries-minneapolis",
    title: "Best Vegan Bakeries in Minneapolis: Cakes, Donuts, Pastries & More",
    description: "Your complete guide to vegan bakeries in Minneapolis. From custom cakes to gourmet donuts, these bakeries prove that vegan desserts are just as indulgent as traditional ones.",
    publishedAt: "2026-02-12",
    updatedAt: "2026-02-12",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan bakeries", "desserts", "minneapolis", "cakes", "donuts", "pastries"],
    readingTime: "8 min read",
    tldr: "Best vegan bakeries in Minneapolis: Vegan East Bakery (100% vegan, custom cakes), Glam Doll Donuts (extensive vegan donut lineup), Lutunji's Palate (nutritive desserts, legendary peach cobbler), Sift Gluten Free (vegan + gluten-free heaven), and French Meadow (organic pioneer). Whether you need a custom birthday cake, weekend donuts, or allergy-friendly treats, Minneapolis has you covered.",
    faqs: [
      {
        question: "Where can I get a vegan birthday cake in Minneapolis?",
        answer: "Vegan East Bakery specializes in custom vegan cakes with beautiful decorations. Lutunji's Palate also creates custom celebration cakes with nutritive ingredients. French Meadow Bakery offers vegan cakes and accepts special orders. All three create show-stopping cakes that prove vegan baking doesn't compromise on aesthetics or flavor."
      },
      {
        question: "What bakery has the best vegan donuts in Minneapolis?",
        answer: "Glam Doll Donuts is the most famous donut shop in Minneapolis with an extensive vegan donut lineup made with coconut milk and clearly marked. Their creative flavors like the Chart Topper (peanut butter sriracha) and Misfit Donut are legendary. Unlike most shops with one sad vegan option, Glam Doll takes vegan donuts seriously."
      },
      {
        question: "Are there any 100% vegan bakeries in Minneapolis?",
        answer: "Yes! Vegan East Bakery (Longfellow neighborhood) and Lutunji's Palate (Elliot Park) are both 100% vegan bakeries. Everything they make is plant-based, so you can order anything without asking questions. Many items are also gluten-free."
      },
      {
        question: "Where can I find gluten-free AND vegan baked goods in Minneapolis?",
        answer: "Sift Gluten Free offers extensive vegan options in a dedicated gluten-free facility (safe for celiacs). Vegan East Bakery also has many gluten-free items clearly labeled. French Meadow Bakery offers gluten-free and vegan options. These spots understand that gluten-free + vegan is a common combination."
      },
      {
        question: "What's the best vegan bakery for special occasions in Minneapolis?",
        answer: "Vegan East Bakery is the top choice for custom cakes and special orders—their decorations are Instagram-worthy and the flavors deliver. For unique, health-conscious options, try Lutunji's Palate with nutritive ingredients like turmeric and beets. French Meadow works well for more traditional celebrations."
      }
    ],
    relatedRestaurants: ["vegan-east-bakery", "glam-doll-donuts", "lutunjis-palate", "sift-gluten-free", "french-meadow"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-comfort-food-minneapolis", "vegan-brunch-minneapolis"],
    content: `
## Best Vegan Bakeries in Minneapolis: Your Complete Guide to Plant-Based Pastries

There's something deeply comforting about walking into a bakery—the smell of fresh bread, the sight of perfectly frosted cakes, the promise of a cinnamon roll so good it might change your day. For vegans, though, that experience has historically been… complicated.

"Is the bread vegan?" "Does this have eggs?" "Wait, is butter dairy?" The constant interrogation ruins the vibe.

Not anymore. Minneapolis has a thriving vegan bakery scene where you can just walk in, point at something beautiful, and know it's safe to eat. These aren't "vegan alternatives"—they're legitimately excellent bakeries that happen to be vegan (or vegan-friendly).

Here's your complete guide to vegan baked goods in Minneapolis.

---

## The 100% Vegan Bakeries

### Vegan East Bakery — The Custom Cake Champions

**Longfellow | $$ | ⭐ 4.7**

Owner Shelia Nelson started [Vegan East Bakery](/restaurants/vegan-east-bakery) as a hobby and turned it into one of Minneapolis' most beloved vegan bakeries. Everything is made from scratch daily, and the custom cake designs are genuinely show-stopping.

**Location:** 5501 34th Ave S, Minneapolis  
**Hours:** Tuesday-Saturday, 10am-3pm (closed Sunday-Monday)  
**Phone:** (651) 318-9740

**What to Order:**
- **Cinnamon Rolls** — The signature item. Fluffy, perfectly spiced, generously frosted.
- **Custom Cakes** — Beautifully decorated for birthdays, weddings, any celebration
- **Cupcakes** — Daily rotating flavors, always impressive
- **Gluten-Free Treats** — Extensive selection for dietary needs

*"Whether you are egg free, dairy free or vegan, we have you covered. Maybe you're just a fan of awesome cakes. We have that too."* — Vegan East

**Best for:** Special occasion cakes, weekend treat runs, gluten-free vegans, party desserts, impressive gifts

**Pro tip:** Limited hours mean popular items sell out. Call ahead for custom orders or arrive early on weekends.

Also featured in our [best vegan restaurants guide](/blog/best-vegan-restaurants-minneapolis-2026).

---

### Lutunji's Palate — The Nutritive Dessert Pioneer

**Elliot Park | $$ | ⭐ 4.6**

It all started with peach cobbler. Baker Lutunji Abram created a vegan version with a coconut oil crust so good that her pastor convinced her to sell it. Now [Lutunji's Palate](/restaurants/lutunjis-palate) is a Minneapolis staple for plant-based desserts with a health-conscious twist.

**Location:** 1400 Park Ave, Minneapolis  
**Website:** lutunjispalate.com

**What Makes It Different:**
Lutunji incorporates nutritive ingredients—turmeric, mineral-rich algae, organic beets, oranges—not just for color, but for actual health benefits. These are desserts that spark conversation.

**Must-Try Items:**
- **Vegan Peach Cobbler** — The legendary coconut oil crust original
- **Turmeric Cake** — Anti-inflammatory AND delicious
- **Beet-Orange Treats** — Natural color, unexpected flavor pairings
- **Custom Celebration Cakes** — Healthy enough to feel good about

**Best for:** Health-conscious vegans, unique gifts, allergy-friendly desserts, special occasions where you want something different

**The vibe:** Community-focused bakery where desserts have a purpose beyond taste. Warm, welcoming, thoughtful.

---

## The Vegan-Friendly Favorites

### Glam Doll Donuts — The Instagram-Famous Donut Shop

**Lyn-Lake + Northeast | $$ | ⭐ 4.8**

The most famous donut shop in Minneapolis, [Glam Doll Donuts](/restaurants/glam-doll-donuts) is known for wild flavor combinations and—crucially for vegans—an extensive vegan donut lineup.

**Locations:** 2605 Nicollet Ave (Lyn-Lake) + 2605 Nicollet Ave NE (also has a Northeast location)  
**Website:** glamdolldonuts.com

**Why It's Different:**
Most donut shops have one token vegan option. Glam Doll has an entire vegan menu made with coconut milk, cornstarch, coconut oil, and fried in soy-cottonseed oil. All vegan donuts are clearly marked.

**What to Order:**
- **Misfit Donut** — Fan-favorite signature creation
- **Chart Topper** — Peanut butter and sriracha (trust the process!)
- **Seasonal Vegan Specials** — Always creative, always delicious
- **Any Vegan Filled Donut** — Made with dairy-free chocolate and plant milks

*"The widest variety of vegan donuts in the city. Just because you're going vegan doesn't mean you'll miss out on the crazy flavors."* — Meet Minneapolis

**Best for:** Weekend treats, Instagram photos, donut obsessives, adventurous eaters, gifts

**Pro tip:** Weekend mornings see lines out the door, but they move fast. Follow on Instagram for new vegan flavor drops.

Also check out our [vegan comfort food guide](/blog/vegan-comfort-food-minneapolis) for more indulgent options.

---

### Sift Gluten Free — The Celiac-Safe Haven

**Longfellow | $$ | ⭐ 4.6**

Owner Molly Miller built a following at farmers markets before opening [Sift Gluten Free](/restaurants/sift-gluten-free), a dedicated gluten-free bakery with extensive vegan options.

**Location:** 4557 Bloomington Ave, Minneapolis  
**Phone:** (612) 455-7438  
**Website:** siftglutenfree.com

**What Makes It Special:**
This is a dedicated gluten-free facility (safe for celiacs) with clearly labeled vegan options throughout. The impressive part? The variety. Sift tackles everything—cinnamon rolls, donuts, cookies, cakes, cupcakes, brownies.

**Must-Order Items:**
- **Cinnamon Rolls** — Massive, gooey, gluten-free perfection
- **Double Chocolate Donuts** — Sell out early, arrive fast
- **Vegan AND Gluten-Free Cupcakes** — The holy grail combination
- **Seasonal Specials** — Always creative, always accommodating

*"Most gluten-free bakeries specialize in one or two things, but not this place. Here they attempt to create all types of gluten-free baked goods, things that those with dietary restrictions have only dreamed of eating in the past."* — Meet Minneapolis

**Best for:** Gluten-free vegans, celiacs, allergy-safe treats, weekend bakery runs

**The vibe:** Dedicated gluten-free bakery with serious skills. Wide variety, clearly labeled, safe facility.

---

### French Meadow Bakery — The Organic Pioneer

**Uptown | $$ | ⭐ 4.5**

[French Meadow](/restaurants/french-meadow) has been doing organic and plant-based baking since before it was trendy—they're the first certified organic bread bakery in the USA.

**Location:** 2610 Lyndale Ave S, Minneapolis  
**Website:** frenchmeadowcafe.com

**The Bakery Section:**
While French Meadow is also a full restaurant, their bakery counter is packed with vegan options:

- **Triple Chocolate Mousse Cake** — Rich, decadent, vegan
- **Vegan Chocolate Rose Cake** — "Such a treat!"
- **Dark Chocolate Sea Salt Cookies** — "Rich and flavorful without being overly sweet"
- **Seasonal Vegan Pies and Pastries**
- **Vegan Cupcakes**

**Why it works:** French Meadow has decades of experience with plant-based baking. They know what they're doing, and it shows.

**Best for:** Mixed groups (they have non-vegan options too), traditional celebrations, grab-and-go bakery items

**Bonus:** Full restaurant, outdoor patio, free parking lot (rare in Minneapolis!)

Featured in our [vegan brunch guide](/blog/vegan-brunch-minneapolis) and [best vegan restaurants](/blog/best-vegan-restaurants-minneapolis-2026).

---

### Nadia Cakes — The Cupcake War Winner

**Maple Grove | $$ | ⭐ 4.5**

Winner of Food Network's Cupcake Wars, Nadia Cakes is known for creative cupcake flavors—including a line of "Gluten Aware" cupcakes with vegan options.

**Famous for:** Unicorn Poop cupcakes (sounds weird, tastes magical)

**Vegan offerings:** Select cupcake flavors available vegan

**Best for:** When you want nationally-recognized cupcake excellence with vegan options

---

## Bakery Shopping Guide: What to Get Where

| Need | Go Here | Why |
|------|---------|-----|
| **Custom Birthday Cake** | [Vegan East](/restaurants/vegan-east-bakery) | Beautiful decoration + vegan expertise |
| **Weekend Donuts** | [Glam Doll](/restaurants/glam-doll-donuts) | Extensive vegan lineup, creative flavors |
| **Gluten-Free + Vegan** | [Sift](/restaurants/sift-gluten-free) | Dedicated facility, wide variety |
| **Cinnamon Rolls** | [Vegan East](/restaurants/vegan-east-bakery) or [Sift](/restaurants/sift-gluten-free) | Both legendary |
| **Health-Conscious Desserts** | [Lutunji's Palate](/restaurants/lutunjis-palate) | Nutritive ingredients, unique flavors |
| **Traditional Bakery Items** | [French Meadow](/restaurants/french-meadow) | Decades of experience, reliable quality |
| **Party Cupcakes** | [Nadia Cakes](/restaurants/nadia-cakes) or [Vegan East](/restaurants/vegan-east-bakery) | Crowd-pleasers with wow factor |

---

## Pro Tips for Vegan Bakery Success

### Ordering Custom Cakes
1. **Order 1-2 weeks in advance** for custom cakes
2. **Be specific about dietary needs** (vegan + gluten-free, nut allergies, etc.)
3. **Ask to see photos** of previous work
4. **Confirm pickup times** — limited bakery hours mean planning matters

### Weekend Bakery Runs
1. **Arrive early** — Popular items sell out (especially cinnamon rolls)
2. **Call ahead** to confirm what's available that day
3. **Check Instagram** for new flavor announcements (especially Glam Doll)
4. **Bring cash for smaller bakeries** (though most take cards now)

### Dietary Restrictions Beyond Vegan
- **Gluten-Free:** [Sift](/restaurants/sift-gluten-free) (dedicated facility) or [Vegan East](/restaurants/vegan-east-bakery) (many GF options)
- **Nut Allergies:** Always ask—cross-contamination varies by bakery
- **Soy-Free:** Harder to find, but [Lutunji's Palate](/restaurants/lutunjis-palate) often accommodates custom requests

---

## The Vegan Bakery Crawl: A Sweet Saturday

**10:00am:** Start at [Vegan East Bakery](/restaurants/vegan-east-bakery) right when they open for fresh cinnamon rolls  
**11:30am:** Hit [Glam Doll Donuts](/restaurants/glam-doll-donuts) for mid-morning donuts (yes, both)  
**1:00pm:** Stop by [French Meadow](/restaurants/french-meadow) for lunch + browse the bakery case  
**3:00pm:** End at [Sift Gluten Free](/restaurants/sift-gluten-free) before they close—grab treats for tomorrow

**Total damage:** ~$40-50 for a full day of pastries  
**Worth it?** Absolutely.

---

## FAQ Recap

**Best vegan custom cakes?** [Vegan East Bakery](/restaurants/vegan-east-bakery) for beautiful decoration + 100% vegan

**Best vegan donuts?** [Glam Doll Donuts](/restaurants/glam-doll-donuts) for variety and creativity

**Gluten-free + vegan?** [Sift Gluten Free](/restaurants/sift-gluten-free) (dedicated facility) or [Vegan East](/restaurants/vegan-east-bakery) (many options)

**100% vegan bakeries?** [Vegan East](/restaurants/vegan-east-bakery) and [Lutunji's Palate](/restaurants/lutunjis-palate)

**Best cinnamon rolls?** [Vegan East](/restaurants/vegan-east-bakery) or [Sift](/restaurants/sift-gluten-free)—both legendary

---

## The Bottom Line

Minneapolis vegan bakeries have come a long way. We're not talking about dry, crumbly "health food" desserts anymore. These are legitimate bakeries creating beautiful, delicious baked goods that happen to be vegan.

Whether you need a custom birthday cake, weekend donuts, or allergy-friendly treats, Minneapolis has you covered.

The best part? You can walk in, point at something beautiful, and know it's safe to eat. No interrogation required.

Now stop reading and go get a cinnamon roll. 🥐🌱

For more Minneapolis vegan dining, check out our [complete restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026), [comfort food spots](/blog/vegan-comfort-food-minneapolis), or [brunch recommendations](/blog/vegan-brunch-minneapolis).
    `
  },
  {
    slug: "best-vegan-ice-cream-twin-cities",
    title: "Best Vegan Ice Cream in the Twin Cities: 2026 Guide",
    description: "The definitive guide to vegan ice cream in Minneapolis and Saint Paul. From housemade scoops to grocery store pints, we ranked every option worth trying.",
    publishedAt: "2026-02-17",
    updatedAt: "2026-02-17",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan ice cream", "dairy-free", "twin cities", "minneapolis", "desserts", "2026"],
    readingTime: "9 min read",
    tldr: "Best vegan ice cream in the Twin Cities: Crepe & Spoon (housemade, inventive flavors like blueberry cardamom and coconut ash), grab pints from Coconut Bliss and So Delicious at Mississippi Market or Wedge Co-op. For soft serve, check seasonal pop-ups. French Meadow has excellent vegan baked goods to pair. The vegan ice cream scene has exploded—there's no reason to settle for sorbet anymore.",
    faqs: [
      {
        question: "Where can I get vegan ice cream in Minneapolis?",
        answer: "The best vegan ice cream in Minneapolis is at Crepe & Spoon in Northeast, which makes all their ice cream in-house. You can also find excellent dairy-free pints at co-ops like the Wedge and Mississippi Market, including brands like Coconut Bliss, So Delicious, and Oatly."
      },
      {
        question: "Does Crepe & Spoon have vegan ice cream?",
        answer: "Yes! Crepe & Spoon is 100% vegan and makes all their ice cream in-house. Their rotating flavors include blueberry cardamom, coconut ash, salted caramel, cookie dough, and seasonal varieties. All are dairy-free and incredibly creamy."
      },
      {
        question: "What are the best vegan ice cream brands available in Minneapolis stores?",
        answer: "Top vegan ice cream brands available at Minneapolis co-ops and grocery stores: Coconut Bliss (coconut milk-based, rich), So Delicious (variety of bases), Oatly (oat-based, great texture), NadaMoo! (coconut milk, wide flavor range), and Eclipse (for the most 'real ice cream' taste)."
      },
      {
        question: "Is there vegan soft serve in Minneapolis?",
        answer: "Vegan soft-serve options pop up seasonally at various spots. Crepe & Spoon occasionally offers it. Check local events and farmers markets during summer for rotating vegan soft-serve vendors."
      },
      {
        question: "Where can I get a vegan ice cream cake in the Twin Cities?",
        answer: "Vegan East Bakery can create custom vegan ice cream cakes. Crepe & Spoon offers ice cream that can be paired with their vegan crepes for an ice cream cake-like experience. For store-bought, So Delicious and Coconut Bliss both make dairy-free ice cream cake options available at local co-ops."
      }
    ],
    relatedRestaurants: ["crepe-and-spoon", "french-meadow", "vegan-east-bakery", "lutunjis-palate"],
    relatedPosts: ["vegan-bakeries-minneapolis", "vegan-date-night-minneapolis", "vegan-comfort-food-minneapolis", "best-vegan-restaurants-minneapolis-2026"],
    content: `
## The Best Vegan Ice Cream in the Twin Cities (2026)

Let me save you some time: the days of vegans staring sadly at a freezer case full of nothing but fruit sorbet are OVER. The Twin Cities' vegan ice cream scene has quietly gotten incredible, and most people—including a lot of vegans—don't even know it yet.

I've eaten an embarrassing amount of dairy-free ice cream over the past year to compile this guide. My waistline suffered. My taste buds thrived. You're welcome.

---

## 🏆 The Best Scoop Shops

### Crepe & Spoon — The Undisputed Champion

**Northeast Minneapolis | 100% Vegan | ⭐ 4.8**

This isn't even close. [Crepe & Spoon](/restaurants/crepe-and-spoon) makes all their ice cream **in-house, from scratch, every day.** And I mean *real* ice cream—rich, creamy, scoopable-from-the-freezer ice cream that happens to contain zero dairy.

**Flavors worth the trip:**
- **Blueberry Cardamom** — Sounds fancy, tastes like a warm hug from someone who really knows what they're doing
- **Coconut Ash** — Jet black, slightly sweet, Instagram gold
- **Salted Caramel** — The one that converts skeptics. "This is VEGAN?!" Yes. Yes it is.
- **Cookie Dough** — Chunks of actual cookie dough. Not crumbles. Chunks.
- **Seasonal rotations** — They change flavors regularly, which is both exciting and slightly maddening when your favorite disappears

**The move:** Get a scoop in one of their fresh-made crepes. Sweet crepe + ice cream = the best $12 you'll spend this week.

**Pro tip:** They're in [Northeast Minneapolis](/neighborhoods/northeast), so combine this with a visit to [Herbivorous Butcher](/restaurants/herbivorous-butcher) just blocks away. Savory lunch → sweet finish.

---

## 🛒 Best Grocery Store Pints

Not every ice cream craving requires putting on pants and leaving the house. Here's what to stock in your freezer.

### The Top Tier

| Brand | Base | Best Flavor | Where to Buy | Price Range |
|-------|------|-------------|-------------- |-------------|
| **Coconut Bliss** | Coconut milk | Salted Caramel & Chocolate | Wedge, Mississippi Market, Lunds | $6-8 |
| **Eclipse** | Oat/potato | Cookie Butter | Whole Foods, Lunds | $7-9 |
| **Oatly** | Oat milk | Strawberry | Most grocery stores | $5-7 |
| **NadaMoo!** | Coconut milk | Lotta Mint Chip | Whole Foods, co-ops | $6-8 |
| **So Delicious** | Various | Cashew Milk Snickerdoodle | Everywhere | $5-6 |

### The Honest Rankings

**For "tastes most like real ice cream":** Eclipse. Their proprietary blend somehow nails that dairy fat mouthfeel. The cookie butter flavor is genuinely dangerous.

**For richest/most indulgent:** Coconut Bliss. The coconut milk base makes everything incredibly creamy. Warning: you will eat the whole pint.

**For best value:** So Delicious. Available literally everywhere, consistently good, and the most affordable option. The cashew milk line is the best.

**For oat milk fans:** Oatly. Light, clean taste, great if you find coconut-based ice creams too heavy. The strawberry is simple and perfect.

**For adventurous flavors:** NadaMoo! They get creative with flavors like Birthday Cake Cookie Dough and Java Crunch. Not every swing connects, but when it does, it's a home run.

---

## 🍪 Best Vegan Ice Cream Pairings

Ice cream is good. Ice cream with friends is better. Here's where to build the ultimate vegan dessert experience.

### The Sweet Crawl (Perfect Date Night Add-On)

1. **Start at [Crepe & Spoon](/restaurants/crepe-and-spoon)** — Get a scoop in a crepe (the Nutella-style + banana is unreal)
2. **Walk to [Herbivorous Butcher](/restaurants/herbivorous-butcher)** — Grab a vegan cheese board for later
3. **End at [Vegan East Bakery](/restaurants/vegan-east-bakery)** — Pick up cinnamon rolls for tomorrow morning

Total cost: ~$35-40 per person. Total satisfaction: immeasurable.

### Pair with Vegan Baked Goods

| Ice Cream | Best Pairing | Where |
|-----------|-------------|-------|
| Crepe & Spoon Salted Caramel | Warm crepe | [Crepe & Spoon](/restaurants/crepe-and-spoon) |
| Any pint from the store | [Vegan East](/restaurants/vegan-east-bakery) cinnamon rolls | At home |
| Coconut Bliss Chocolate | [French Meadow](/restaurants/french-meadow) dark chocolate cookie | At home |

---

## 🌞 Seasonal Scoop Guide

### Summer (June-August)
- **Best time for:** Crepe & Spoon's seasonal flavors, outdoor scoops
- **Look for:** Pop-up vegan soft serve at farmers markets
- **Pro tip:** Go on a weeknight—lines are brutal on summer weekends

### Fall (September-November)
- **Best time for:** Pumpkin and spice flavors from store brands
- **Look for:** NadaMoo! and So Delicious seasonal releases
- **Pro tip:** Coconut Bliss sometimes does a pumpkin pie flavor that sells out fast

### Winter (December-February)
- **Best time for:** Peppermint flavors, hot fudge sundaes at home
- **Look for:** Eclipse holiday flavors
- **Pro tip:** Ice cream in winter is an underrated power move. No lines.

### Spring (March-May)
- **Best time for:** Fresh fruit flavors returning to Crepe & Spoon
- **Look for:** Oatly strawberry is peak spring vibes
- **Pro tip:** Stock up on pints during Whole Foods sales

---

## Where to Buy Vegan Ice Cream in the Twin Cities

Not all stores are created equal. Here's where the selection is best:

| Store | Selection | Notes |
|-------|-----------|-------|
| **Wedge Co-op** | ⭐⭐⭐⭐⭐ | Best selection in the city, staff knows vegan products |
| **Mississippi Market** | ⭐⭐⭐⭐⭐ | St. Paul's best, great co-op discounts |
| **Whole Foods** | ⭐⭐⭐⭐ | Wide selection, tends to be pricier |
| **Lunds & Byerlys** | ⭐⭐⭐ | Decent selection, improving |
| **Target** | ⭐⭐ | So Delicious and Oatly usually in stock |
| **Aldi** | ⭐⭐ | Surprisingly good house brand option |

---

## The Bottom Line

The Twin Cities has legitimately world-class vegan ice cream—you just have to know where to look. [Crepe & Spoon](/restaurants/crepe-and-spoon) is the crown jewel for scoops, and the grocery store pint game has never been stronger.

Stop settling for fruit sorbet. You deserve better. 🍦🌱

For more sweet spots, check our [vegan bakeries guide](/blog/vegan-bakeries-minneapolis) or the [full Minneapolis vegan restaurant directory](/blog/best-vegan-restaurants-minneapolis-2026).
    `
  },
  {
    slug: "best-vegan-pizza-minneapolis",
    title: "Best Vegan Pizza in Minneapolis: Every Slice Ranked",
    description: "We ate vegan pizza at every spot in Minneapolis so you don't have to guess. Here's exactly where to go for the best vegan pizza in 2026—from coal-fired to delivery.",
    publishedAt: "2026-02-17",
    updatedAt: "2026-02-17",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan pizza", "minneapolis", "dairy-free", "pizza", "plant-based", "2026"],
    readingTime: "8 min read",
    tldr: "Best vegan pizza in Minneapolis: Pizza Lucé (best overall—house-made vegan cheese that actually stretches, late-night delivery), Black Sheep Pizza (best coal-fired crust), Galactic Pizza (best delivery + eco-friendly), and Herbivorous Butcher pepperoni on homemade pies. Don't sleep on the Baked Potato Pizza at Pizza Lucé—it's a local legend.",
    faqs: [
      {
        question: "Which Minneapolis pizza places have vegan cheese?",
        answer: "Pizza Lucé, Black Sheep Pizza, and Galactic Pizza all offer vegan cheese on their pizzas. Pizza Lucé has the best house-made vegan cheese that actually melts and stretches. Black Sheep uses Daiya, and Galactic Pizza also uses Daiya to good effect."
      },
      {
        question: "What is the best vegan pizza in Minneapolis?",
        answer: "Pizza Lucé is widely considered the best vegan pizza in Minneapolis. Their house-made vegan cheese actually melts and stretches, and their Baked Potato Pizza with vegan sour cream is a local legend. For coal-fired crust, Black Sheep Pizza is excellent."
      },
      {
        question: "Can I get vegan pizza delivered in Minneapolis?",
        answer: "Yes! Pizza Lucé offers late-night delivery with vegan options across multiple locations. Galactic Pizza is famous for eco-friendly delivery by electric car. Both have dedicated vegan menu items that travel well."
      },
      {
        question: "Does Pizza Lucé have vegan options?",
        answer: "Yes! Pizza Lucé has extensive vegan options including house-made vegan cheese (their best feature), multiple vegan pizzas, vegan hoagies, pasta, and appetizers. They offer two types of vegan cheese—mozzarella and ricotta—and will veganize many menu items on request."
      },
      {
        question: "Where can I get gluten-free vegan pizza in Minneapolis?",
        answer: "Galactic Pizza offers both vegan cheese and gluten-free crust options. Pizza Lucé also has a gluten-free crust that can be paired with their vegan cheese. Black Sheep can accommodate some dietary needs—ask your server."
      }
    ],
    relatedRestaurants: ["pizza-luce", "galactic-pizza", "black-sheep-pizza", "herbivorous-butcher"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-comfort-food-minneapolis", "vegan-date-night-minneapolis", "northeast-minneapolis-vegan-guide"],
    content: `
## Best Vegan Pizza in Minneapolis: Every Slice, Ranked

Let's be honest: pizza is the thing vegans miss most. Not because it's hard to make vegan pizza—it isn't—but because *bad* vegan pizza is really, tragically bad. Plasticky cheese that doesn't melt. Sad vegetables on cardboard crust. We've all been there.

Good news: Minneapolis actually has several places that get vegan pizza right. I've eaten my way through all of them and ranked every slice so you can skip the disappointment and go straight to the good stuff.

---

## 🏆 The Rankings

### #1: Pizza Lucé — The Undisputed Champion

**Multiple Locations | $$ | ⭐ 4.6**

This isn't even a fair fight. [Pizza Lucé](/restaurants/pizza-luce) has been doing vegan pizza since before most restaurants knew what the word meant, and their house-made vegan cheese is in a completely different league from anything else in the city.

**Why they're #1:**
- **House-made vegan mozzarella** that actually *melts and stretches*. This is not Daiya. This is not Follow Your Heart. This is cheese they make in-house, and it's legitimately good.
- **Vegan ricotta** — yes, they have TWO vegan cheeses
- Multiple locations across the metro
- **Late-night delivery** — real pizza, real late, actually vegan

**The must-order pizzas:**

🥇 **Baked Potato Pizza** — The legend. Vegan cheese, potatoes, vegan sour cream, scallions. Sounds weird. Tastes incredible. This is the pizza that converted me from a "vegan pizza is okay I guess" person to a fanatic.

🥈 **Veggie Lucé** — Artichokes, sun-dried tomatoes, kalamata olives, roasted red peppers, pesto, vegan mozzarella. This is the "I'm ordering for the table and everyone needs to be impressed" pizza.

🥉 **Build Your Own** — Their vegetable toppings are high-quality (not from a can), so building your own with vegan mozz is always a solid move. Go heavy on the roasted garlic.

**Pro tips:**
- Ask for the vegan ranch dipping sauce. Life-changing with crust.
- The downtown location has the best late-night vibes
- Order online to skip the wait on Friday/Saturday nights

---

### #2: Black Sheep Pizza — Best Crust in the City

**North Loop + NE Minneapolis | $$ | ⭐ 4.5**

If Pizza Lucé wins on cheese, [Black Sheep](/restaurants/black-sheep-pizza) wins on crust. Their coal-fired oven produces this incredible char that you can't get anywhere else in Minneapolis.

**What makes them special:**
- **Coal-fired crust** — Blistered, slightly charred, chewy in the middle. This is crust with actual character.
- Vegan cheese available on any pizza
- Quality vegetable toppings that char beautifully in the oven
- Industrial-cool North Loop location with open kitchen

**Best vegan orders:**
- **Seasonal Vegetable Pizza** — Whatever's fresh, charred in the coal oven. Simple and perfect.
- **Build your own with vegan cheese** — Mushrooms + roasted garlic + cherry tomatoes + arugula (added after baking)
- **Margherita-style** with vegan mozz — Lets the crust be the star

**The vibe:** North Loop industrial-chic. Great for groups where not everyone is vegan—the regular pizzas are excellent too, so nobody feels like they're at a "vegan place."

---

### #3: Galactic Pizza — Best Delivery Experience

**Uptown / Lyn-Lake | $$ | ⭐ 4.4**

What [Galactic Pizza](/restaurants/galactic-pizza) lacks in artisan cred, they make up for in personality and genuine commitment to doing the right thing.

**What makes them unique:**
- **Delivery by electric car** — yes, really
- **Superhero-costumed drivers** — your pizza arrives with flair
- Organic wheat crust that's consistently solid
- Wind-powered restaurant with compostable packaging
- Daiya cheese that they've dialed in well

**Best vegan orders:**
- **Earth Pizza** — All the vegetables, vegan cheese, organic crust. Named perfectly.
- **Build your own** with their vegan cheese + any veggie combo
- **Gluten-free crust option** — Great for GF + vegan folks (a tough combo to find)

**Why they deserve respect:** They're not trying to be Pizza Lucé or Black Sheep. They're trying to be a solid, eco-friendly neighborhood pizzeria that takes vegan options seriously. And they succeed.

---

## 🏠 The DIY Option: Herbivorous Butcher Pepperoni

Here's a move that most people don't think of: buy pepperoni from [The Herbivorous Butcher](/restaurants/herbivorous-butcher) and put it on your own pizza at home.

**Why this works:**
- Their pepperoni is *spicy, charred-edge, pizza perfection* (real quote from their menu)
- Pair it with store-bought vegan mozzarella (Miyoko's is the best for melting)
- Use a cast iron skillet or pizza stone
- Total cost: ~$8-10 for a pizza that rivals anything in this guide

**The recipe:**
1. Store-bought pizza dough (Trader Joe's herb dough is great)
2. San Marzano tomato sauce
3. Miyoko's mozzarella, shredded
4. Herbivorous Butcher pepperoni, sliced thin
5. 500°F oven, cast iron or pizza stone, 10-12 minutes
6. Fresh basil on top. Chef's kiss.

---

## 📊 The Comparison Chart

| Factor | Pizza Lucé | Black Sheep | Galactic Pizza | DIY (HB Pepperoni) |
|--------|-----------|-------------|----------------|-------------------|
| **Cheese** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ (Miyoko's) |
| **Crust** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Delivery** | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | N/A |
| **Price** | $$ | $$ | $$ | $ |
| **Late Night** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **GF Option** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Vibe** | Loud, fun | Industrial cool | Quirky, eco | Your couch |

---

## 🍕 Pizza Night Playbook

### Friday Night with Friends
**Go to:** Pizza Lucé downtown → order 3-4 pizzas for the table → vegan ranch on the side → don't forget the Baked Potato Pizza

### Date Night Pizza
**Go to:** Black Sheep North Loop → sit at the bar → watch the coal oven → share a bottle of wine + seasonal vegetable pizza

### Lazy Sunday Delivery
**Order from:** Galactic Pizza → Earth Pizza + any build-your-own → feel good about the electric car delivery

### Impress-Your-Non-Vegan-Friends Pizza
**Make at home:** Herbivorous Butcher pepperoni + Miyoko's mozz on homemade dough → watch their minds explode

---

## The Bottom Line

You don't have to sacrifice pizza to be vegan in Minneapolis. [Pizza Lucé](/restaurants/pizza-luce) is the best overall (that cheese!), [Black Sheep](/restaurants/black-sheep-pizza) has the best crust, and [Galactic Pizza](/restaurants/galactic-pizza) delivers with style (and an electric car).

And when all else fails, [Herbivorous Butcher](/restaurants/herbivorous-butcher) pepperoni on a homemade pie might be the best vegan pizza of all.

Now stop reading and order a pizza. 🍕🌱

For more Minneapolis vegan dining, check out our [complete restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026), [comfort food roundup](/blog/vegan-comfort-food-minneapolis), or [date night recommendations](/blog/vegan-date-night-minneapolis).
    `
  },
  {
    slug: "best-vegan-mac-and-cheese-brands-ranked",
    title: "Best Vegan Mac and Cheese Brands Ranked: We Tried Them All",
    description: "We blind-tested every vegan mac and cheese brand we could find — boxed, frozen, and restaurant. Here are the definitive rankings for 2026.",
    publishedAt: "2026-02-17",
    updatedAt: "2026-02-17",
    author: "Mia & Jay",
    category: "Reviews",
    tags: ["vegan mac and cheese", "product reviews", "plant-based", "rankings", "grocery", "2026"],
    readingTime: "11 min read",
    tldr: "We tested 15+ vegan mac and cheese brands. Top picks: Goodles Cheddy Mac (best boxed overall), Annie's Vegan Shells (best value), Banza Vegan Mac (best high-protein), Daiya Deluxe (best frozen/microwave), and for restaurant mac, Reverie Cafe in Minneapolis is untouchable. Avoid: generic store brands and anything with coconut-heavy cheese sauces that taste like a luau.",
    faqs: [
      {
        question: "What is the best vegan mac and cheese brand?",
        answer: "Goodles Cheddy Mac is our top pick for boxed vegan mac and cheese in 2026. It has the most 'real cheese' taste with a creamy sauce that coats the noodles perfectly. For frozen/microwave, Daiya Deluxe Cheddar Style is the most convenient and consistent option."
      },
      {
        question: "Does Annie's make vegan mac and cheese?",
        answer: "Yes! Annie's Organic Vegan Shells & Creamy Sauce is one of the best budget options. It uses organic pasta with a creamy, slightly tangy sauce. Available at most grocery stores including Target, Whole Foods, and co-ops for around $3-4 per box."
      },
      {
        question: "What vegan mac and cheese tastes most like real mac and cheese?",
        answer: "Goodles Cheddy Mac and Annie's Vegan Shells are the closest to traditional mac and cheese flavor. For a from-scratch option, making mac with Miyoko's butter and nutritional yeast-based sauce beats any boxed version."
      },
      {
        question: "Is Kraft making vegan mac and cheese?",
        answer: "As of 2026, Kraft does not have a dedicated vegan mac and cheese line in most US markets. However, several excellent alternatives exist that match or exceed the Kraft experience, including Goodles and Annie's vegan options."
      },
      {
        question: "Where can I get the best vegan mac and cheese in Minneapolis?",
        answer: "Reverie Cafe + Bar has the best vegan mac and cheese in Minneapolis — their Mac and Cheese with Shiitake Bacon is legendary. J. Selby's also serves excellent vegan mac. For buying boxed brands, the Wedge Co-op and Mississippi Market have the best selection."
      }
    ],
    relatedRestaurants: ["reverie-cafe-bar", "j-selbys", "herbivorous-butcher"],
    relatedPosts: ["vegan-comfort-food-minneapolis", "best-vegan-restaurants-minneapolis-2026", "best-vegan-ice-cream-twin-cities", "best-vegan-pizza-minneapolis"],
    content: `
## Best Vegan Mac and Cheese Brands: The Definitive 2026 Rankings

Here's the thing about vegan mac and cheese: it ranges from "oh my god this is incredible" to "did someone melt a crayon into pasta?" There's almost no middle ground.

We bought every vegan mac and cheese brand we could get our hands on, cooked them all according to package directions (we're scientists, not animals), and ranked them from best to "please stop making this." We also threw in our favorite restaurant mac and cheese for good measure, because Minneapolis has at least one vegan mac that puts every boxed version to shame.

Let's do this.

---

## 🏆 The Final Rankings: Boxed Vegan Mac & Cheese

### #1: Goodles Cheddy Mac

**Overall Score: 9.2/10**

| Category | Rating |
|----------|--------|
| Cheese Flavor | ⭐⭐⭐⭐⭐ |
| Texture | ⭐⭐⭐⭐⭐ |
| Creaminess | ⭐⭐⭐⭐ |
| Value | ⭐⭐⭐ |
| Availability | ⭐⭐⭐⭐ |

**The verdict:** Goodles absolutely nailed it. The sauce is creamy, tangy, and actually tastes like cheese—not "cheese-flavored product." The noodles are made with hidden vegetables and protein, which is a nice bonus when you're eating your third box this week (no judgment).

**What sets it apart:** The sauce has this slight sharpness that mimics aged cheddar. Most vegan mac sauces either taste like nothing or taste aggressively of nutritional yeast. Goodles found the sweet spot.

**Where to buy:** Target, Whole Foods, Thrive Market, Amazon
**Price:** ~$4-5/box

---

### #2: Annie's Organic Vegan Shells & Creamy Sauce

**Overall Score: 8.8/10**

| Category | Rating |
|----------|--------|
| Cheese Flavor | ⭐⭐⭐⭐ |
| Texture | ⭐⭐⭐⭐⭐ |
| Creaminess | ⭐⭐⭐⭐ |
| Value | ⭐⭐⭐⭐⭐ |
| Availability | ⭐⭐⭐⭐⭐ |

**The verdict:** The best value in vegan mac and cheese. Annie's has been doing this longer than most brands, and it shows. Organic pasta, creamy sauce with a slightly tangy finish, and available literally everywhere.

**What sets it apart:** Consistency and price. Every box tastes the same (in a good way), and at $3-4 it's the most affordable option that doesn't taste like cardboard.

**Pro tip:** Add a tablespoon of Miyoko's butter and a splash of oat milk while cooking. Takes it from 8.8 to about 9.5.

**Where to buy:** Target, Walmart, every grocery store, Amazon
**Price:** ~$3-4/box

---

### #3: Banza Vegan Mac & Cheese

**Overall Score: 8.5/10**

| Category | Rating |
|----------|--------|
| Cheese Flavor | ⭐⭐⭐⭐ |
| Texture | ⭐⭐⭐⭐ |
| Creaminess | ⭐⭐⭐ |
| Value | ⭐⭐⭐ |
| Availability | ⭐⭐⭐⭐ |

**The verdict:** If you want high-protein, chickpea-based noodles with vegan cheese, Banza is your move. The pasta has more texture and a slightly nuttier flavor than traditional noodles, and the cheese sauce is solid.

**What sets it apart:** 25g of protein per box from the chickpea pasta. If you're a vegan who actually cares about macros, this is the one.

**Caveat:** The chickpea pasta releases starch differently, so the sauce can be a bit thicker. Add extra liquid.

**Where to buy:** Target, Whole Foods, most grocery stores
**Price:** ~$4-5/box

---

### #4: Modern Table Mac & Cheese

**Overall Score: 8.2/10**

| Category | Rating |
|----------|--------|
| Cheese Flavor | ⭐⭐⭐⭐ |
| Texture | ⭐⭐⭐ |
| Creaminess | ⭐⭐⭐⭐ |
| Value | ⭐⭐⭐ |
| Availability | ⭐⭐⭐ |

**The verdict:** Lentil-based noodles with a surprisingly good cheese sauce. Not quite as refined as Goodles or Annie's, but a strong option for anyone avoiding gluten.

**What sets it apart:** The lentil pasta gives it extra protein and fiber without the chickpea flavor of Banza.

**Where to buy:** Whole Foods, Target, co-ops
**Price:** ~$4-5/box

---

### #5: Daiya Deluxe Cheddar Style

**Overall Score: 7.9/10**

| Category | Rating |
|----------|--------|
| Cheese Flavor | ⭐⭐⭐ |
| Texture | ⭐⭐⭐⭐ |
| Creaminess | ⭐⭐⭐⭐⭐ |
| Value | ⭐⭐⭐⭐ |
| Availability | ⭐⭐⭐⭐⭐ |

**The verdict:** The best **frozen/microwaveable** option. Daiya Deluxe comes with a pre-made sauce (not powder), which makes it incredibly creamy with minimal effort. The cheese flavor is milder than the top picks but still satisfying.

**What sets it apart:** Easiest prep of any option. Boil noodles, stir in sauce, done. No butter, no milk substitute required.

**Where to buy:** Literally everywhere — Target, Walmart, every grocery store
**Price:** ~$4-5/box

---

## 📊 The Full Comparison

| Brand | Score | Protein | Best For | Price |
|-------|-------|---------|----------|-------|
| **Goodles** | 9.2 | 17g | Best overall taste | $4-5 |
| **Annie's** | 8.8 | 8g | Best value | $3-4 |
| **Banza** | 8.5 | 25g | Highest protein | $4-5 |
| **Modern Table** | 8.2 | 14g | Gluten-conscious | $4-5 |
| **Daiya Deluxe** | 7.9 | 7g | Easiest prep | $4-5 |

---

## 🍽️ Best Vegan Mac & Cheese at Minneapolis Restaurants

Sometimes you don't want to cook. We get it. Here's where to get the best vegan mac and cheese served to you on a plate, by a human, with a drink in your other hand.

### #1: Reverie Cafe + Bar — The GOAT

**South Minneapolis | $$ | 100% Vegan**

[Reverie's](/restaurants/reverie-cafe-bar) Mac and Cheese with Shiitake Bacon is the best vegan mac and cheese in Minneapolis. Period. Full stop. End of discussion.

*"Mac and cheese? Bangs. Burger? Bangs."* — Andrew Lewandowski

**What makes it special:** The shiitake bacon adds this smoky, umami depth that no boxed brand can touch. The cheese sauce is rich without being heavy. It's scratch-made with real ingredients, not reconstituted powder.

**The move:** Get it as a side with their Mock Duck Korean BBQ Tacos. You're welcome.

---

### #2: J. Selby's — Comfort Food King

**St. Paul | $$ | 100% Vegan**

[J. Selby's](/restaurants/j-selbys) does mac and cheese the way it should be done: loaded, creamy, and absolutely zero pretension.

**What makes it special:** It's classic comfort mac—no weird twists, no "elevated" anything. Just really good vegan mac and cheese that satisfies the craving perfectly.

---

## 🛠️ The DIY Move: Make Your Own

If you're feeling ambitious, here's the secret formula that beats every boxed brand:

### The 10-Minute Scratch Mac

**Ingredients:**
- 12oz pasta (your choice of shape)
- 1 cup raw cashews (soaked 2 hours or boiled 15 min)
- 1/4 cup nutritional yeast
- 2 tbsp Miyoko's butter
- 1 tbsp lemon juice
- 1 tsp smoked paprika
- 1 tsp garlic powder
- 1 tsp onion powder
- 1/2 tsp turmeric (for color)
- Salt + pepper to taste
- 3/4 cup oat milk

**Method:**
1. Cook pasta al dente
2. Blend everything else until silky smooth
3. Toss with pasta over medium heat until coated
4. Taste. Add more nooch until you're happy.

**The result:** Creamy, cheesy, slightly smoky mac that costs about $3 total and takes 15 minutes. Beats every boxed brand on this list.

**Level up:** Top with [Herbivorous Butcher](/restaurants/herbivorous-butcher) bacon bits and a drizzle of sriracha.

---

## Where to Buy Vegan Mac & Cheese in the Twin Cities

| Store | Best Selection | Notes |
|-------|---------------|-------|
| **Wedge Co-op** | ⭐⭐⭐⭐⭐ | Carries all top brands + local options |
| **Mississippi Market** | ⭐⭐⭐⭐⭐ | St. Paul's best selection |
| **Whole Foods** | ⭐⭐⭐⭐ | Good selection, higher prices |
| **Target** | ⭐⭐⭐⭐ | Annie's + Goodles always in stock |
| **Lunds & Byerlys** | ⭐⭐⭐ | Improving selection |

---

## The Bottom Line

Vegan mac and cheese in 2026 is genuinely good. Like, "your non-vegan roommate will steal this" good. **Goodles** wins overall, **Annie's** wins on value, and **Reverie Cafe** wins for restaurant mac in Minneapolis.

And if you really want to impress someone? Make the cashew scratch mac. It takes 15 minutes and costs $3. You'll never go back to boxed.

Now stop reading and go make some mac and cheese. 🧀🌱

For more Minneapolis vegan dining, check our [comfort food guide](/blog/vegan-comfort-food-minneapolis), [restaurant directory](/blog/best-vegan-restaurants-minneapolis-2026), or [ice cream rankings](/blog/best-vegan-ice-cream-twin-cities).
    `
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

export function getRelatedPosts(currentSlug: string): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  return currentPost.relatedPosts
    .map(slug => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== undefined);
}
