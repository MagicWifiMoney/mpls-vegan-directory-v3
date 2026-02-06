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
    slug: "best-vegan-restaurants-minneapolis-2026",
    title: "Best Vegan Restaurants in Minneapolis 2026: The Ultimate Guide",
    description: "Your complete guide to the 46 best vegan and plant-based restaurants in Minneapolis for 2026. From 100% vegan spots to vegan-friendly gems, discover where to eat.",
    publishedAt: "2026-02-06",
    updatedAt: "2026-02-06",
    author: "MPLS Vegan Team",
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
    author: "MPLS Vegan Team",
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
    author: "MPLS Vegan Team",
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
    author: "MPLS Vegan Team",
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
    author: "MPLS Vegan Team",
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
