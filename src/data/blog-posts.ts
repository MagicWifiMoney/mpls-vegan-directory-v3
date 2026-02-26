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
    slug: "vegan-restaurants-uptown-minneapolis",
    title: "Best Vegan Restaurants in Uptown & Lyn-Lake Minneapolis (2026 Guide)",
    description: "The best vegan and plant-based food in Minneapolis's most plant-forward neighborhoods — Uptown, Lyn-Lake, and Whittier. From Amazing Thailand's mock duck curry to Peninsula Malaysian's laksa, World Street Kitchen's Yum Yum bowl, and a 100% vegan bar in Powderhorn.",
    publishedAt: "2026-02-24",
    updatedAt: "2026-02-24",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan restaurants uptown minneapolis", "uptown minneapolis vegan", "vegan food uptown minneapolis", "lyn-lake vegan restaurants", "vegan restaurants lyn-lake", "best vegan uptown minneapolis"],
    readingTime: "9 min read",
    tldr: "Best vegan food in Uptown & Lyn-Lake Minneapolis: Amazing Thailand (Uptown, mock duck curry + papaya salad, the go-to vegan Thai), Peninsula Malaysian (Lyn-Lake, curry laksa that ruins all other soups), World Street Kitchen (Lyn-Lake, crispy tofu Yum Yum bowl), French Meadow Bakery (Lyn-Lake, vegan pastries + breakfast), Glam Doll Donuts (Lyn-Lake, rotating punk-rock vegan flavors), Bryant Lake Bowl (Lyn-Lake, plant-based theater dining), and Reverie Cafe + Bar (Powderhorn, fully vegan bar with craft beer and dark chocolate beignets).",
    faqs: [
      {
        question: "What are the best vegan restaurants in Uptown Minneapolis?",
        answer: "The top vegan spots in Uptown Minneapolis are: Amazing Thailand (3024 Hennepin Ave) for mock duck curry and pad thai, French Meadow Bakery (2610 Lyndale Ave S) for vegan pastries and breakfast, and World Street Kitchen (2743 Lyndale Ave S) for the Yum Yum bowl with crispy tofu. Lyn-Lake (adjacent to Uptown) adds Peninsula Malaysian Cuisine for curry laksa and Glam Doll Donuts for rotating vegan flavors."
      },
      {
        question: "Is Uptown Minneapolis good for vegans?",
        answer: "Yes — Uptown and the adjacent Lyn-Lake neighborhood are arguably the best areas in Minneapolis for vegan food. The corridor along Hennepin Ave and Nicollet Ave / Lyndale Ave S has the highest concentration of vegan-friendly and fully plant-based dining in the city, with multiple 100% vegan options and dozens of restaurants with strong vegan menus."
      },
      {
        question: "What is the best vegan Thai restaurant in Minneapolis?",
        answer: "Amazing Thailand on Hennepin Ave in Uptown (3024 Hennepin Ave S) is widely considered the best vegan Thai in Minneapolis. They have extensive vegan options including pad thai with tofu, coconut curries, papaya salad (specify no fish sauce), and an outstanding mock duck red curry. Most dishes can be made vegan on request."
      },
      {
        question: "Are there any 100% vegan restaurants in Uptown Minneapolis?",
        answer: "Reverie Cafe + Bar (2506 Minnehaha Ave, Powderhorn — just south of Lyn-Lake) is fully vegan with a complete restaurant and bar menu: 20+ craft beers on tap, cocktails, and a food menu with dark chocolate beignets, cashew cheesecake, and savory dishes. In Lyn-Lake proper, World Street Kitchen and Glam Doll Donuts have full vegan menus, though they're not exclusively vegan."
      },
      {
        question: "Where is the best vegan brunch in Uptown Minneapolis?",
        answer: "French Meadow Bakery & Café (2610 Lyndale Ave S, Lyn-Lake) is the neighborhood's top brunch pick for vegans — vegan-labeled pastries, organic grain bowls, smoothies, and coffee. Bryant Lake Bowl (810 W Lake St, Lyn-Lake) also serves a popular vegan-friendly brunch in their theater space. Both are walkable from the Uptown core."
      },
      {
        question: "What neighborhoods are near Uptown Minneapolis with vegan food?",
        answer: "Lyn-Lake (directly east of Uptown along Lake Street and Nicollet Ave) has Peninsula Malaysian, Glam Doll Donuts, French Meadow, and World Street Kitchen. Powderhorn (just south) has Reverie Cafe + Bar, the fully vegan bar and restaurant. Whittier (between Uptown and downtown) has additional plant-forward spots. All are walkable or a short bike ride from Uptown proper."
      }
    ],
    relatedRestaurants: ["amazing-thailand", "peninsula-malaysian-cuisine", "world-street-kitchen", "glam-doll-donuts", "french-meadow", "reverie-cafe-bar", "bryant-lake-bowl"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-restaurants-downtown-minneapolis", "northeast-minneapolis-vegan-guide", "vegan-bakeries-minneapolis", "vegan-brunch-minneapolis", "vegan-asian-restaurants-minneapolis"],
    content: `
## Uptown & Lyn-Lake: Minneapolis's Vegan Heartland

If you want to understand why Minneapolis has one of the best plant-based dining scenes in the Midwest, start in Uptown. The strip along Hennepin Avenue between Lake Street and 28th Street — and the parallel Nicollet and Lyndale corridors heading into Lyn-Lake — has the highest density of vegan-friendly restaurants in the city. Not just options. Not just "we can make that vegan." Actual destination-worthy cooking that happens to be plant-based.

This guide covers the best of it: from the mock duck that has been drawing vegans to Uptown for twenty years to a fully vegan bar in Powderhorn where the cashew cheesecake is genuinely better than most non-vegan alternatives.

---

## 🍛 1. Amazing Thailand — The Go-To Vegan Thai

**Uptown | 3024 Hennepin Ave S | $$**

There are plenty of Thai restaurants in Minneapolis. There's only one Amazing Thailand, and it has been the landmark for vegan Thai in this city for decades. The space is warm and slightly dim, the service is fast and friendly, and the mock duck curry is — without hyperbole — one of the best dishes you can order in the Twin Cities.

**What to order:**
- **Mock Duck Red Curry** — coconut milk, bamboo shoots, bell peppers, holy basil. The mock duck has a texture and flavor that holds up against actual duck in a way that most meat substitutes only dream of
- **Papaya Salad** — specify "no fish sauce, no dried shrimp" and you get a fiery, tangy, crunchy salad that's as good as any in the city
- **Pad See Ew with tofu** — wider rice noodles with Chinese broccoli and eggy-tasting sauce (they'll leave the egg out on request)
- **Massaman Curry with tofu** — milder, warming, potato-and-peanut-forward. A cold Minneapolis night's best friend

**What you should know:** Almost everything on the menu can be made vegan — tofu and mock duck are available across most protein dishes. Tell your server you're vegan up front and they'll flag everything cleanly.

**Also featured in:** [Best Vegan Asian Restaurants in Minneapolis](/blog/vegan-asian-restaurants-minneapolis)

---

## 🍜 2. Peninsula Malaysian Cuisine — Curry Laksa That Will Ruin All Other Soups

**Lyn-Lake | 2608 Nicollet Ave | $$**

Malaysian food is one of the most underrated vegan goldmines in any city. It pulls from Malay, Chinese, and Indian traditions — so one menu gives you coconut curries, rice noodles, wok-fired dishes, and flatbreads. At Peninsula, much of it is already vegetarian or easily vegan, and the kitchen handles the request without drama.

The dish you're ordering is the **Vegetable Curry Laksa** — a coconut curry broth loaded with rice noodles, tofu puffs, bean sprouts, and vegetables. It's rich, warming, and complex in a way that requires more than one bowl to fully understand. The mock duck rendang and the roti canai (flatbread) with lentil dipping sauce round out the best vegan order in the city at this price point.

**Pro tip:** Ask the server to confirm which curries are coconut-milk based and can omit shrimp paste. Several can.

**Also featured in:** [Best Vegan Asian Restaurants in Minneapolis](/blog/vegan-asian-restaurants-minneapolis)

---

## 🌍 3. World Street Kitchen — The Yum Yum Bowl

**Lyn-Lake | 2743 Lyndale Ave S | $$**

World Street Kitchen doesn't have a vegan menu. It has a menu where about half the dishes are vegan by default, a staff that knows exactly what can be made without dairy or egg, and a "Yum Yum Bowl" that has developed a legitimate cult following among the Minneapolis plant-based crowd.

**The Yum Yum Bowl:** Crispy fried tofu on rice or salad, pickled vegetables, cucumber, naan bread, two dipping sauces. The tofu is properly crispy — not the sad, soggy kind. The pickles cut the richness. The sauces (get the spicy one) tie it together. It's $12-14, it's filling, and it's one of the most satisfying lunches you can eat in this neighborhood.

**Also good:** Braised Greens, Roasted Cauliflower dishes, rice-based bowls with veggie protein. Seasonal menu items rotate — ask what's plant-based that week.

**Vibe:** Casual counter-service, popular for lunch and early dinner, fills up fast on weekends.

**Also featured in:** [Best Vegan Asian Restaurants in Minneapolis](/blog/vegan-asian-restaurants-minneapolis)

---

## 🥐 4. French Meadow Bakery & Café — Organic, Vegan-Labeled, and Actually Good

**Lyn-Lake | 2610 Lyndale Ave S | $$**

French Meadow is the neighborhood's all-day café — the place you go for breakfast before a long weekend, for a working lunch, or for a slow afternoon with a latte and a pastry. The bakery case is clearly labeled by dietary restriction, and the vegan options are extensive: muffins, scones, granola bars, and seasonal pastries that rotate with the month.

**Best vegan options:**
- Granola and coconut yogurt bowls (breakfast)
- Grain bowls with roasted vegetables and tahini dressing (lunch)
- Hummus plates with housemade bread
- Vegan pastries from the case (rotating — usually 4-6 options daily)
- Smoothies and organic drip coffee with oat milk

French Meadow is a better everyday café than a special-occasion restaurant — but the "organic vegan-labeled" promise means you can order without interrogating the menu. For Uptown/Lyn-Lake residents, this is often the default morning stop.

**Also featured in:** [Best Vegan Bakeries in Minneapolis](/blog/vegan-bakeries-minneapolis)

---

## 🍩 5. Glam Doll Donuts — Punk Rock Flavors

**Lyn-Lake | 2605 Nicollet Ave | $**

You know the Instagram photos. You've seen the line on Saturday mornings. Glam Doll Donuts is exactly what it looks like: a loud, irreverent donut shop with a rotating menu of creative flavors, a lot of them vegan or vegan-adaptable, and a following that shows up early because the best stuff sells out.

The vegan options rotate weekly and seasonally. Classics like **maple glazed**, **salted caramel**, and **lemon glaze** appear regularly. Seasonal drops — pumpkin spice in fall, strawberry lavender in spring, peppermint in December — are all frequently vegan.

**How to get the best selection:** Show up before 11am on weekends. After noon, the vegan-labeled options thin out fast.

**Pro tip:** They post daily vegan options to their Instagram story. Worth following if donuts are on your agenda.

**Also featured in:** [Best Vegan Bakeries & Desserts in Minneapolis](/blog/vegan-bakeries-minneapolis)

---

## 🎭 6. Bryant Lake Bowl — Theater Dining Done Right

**Lyn-Lake | 810 W Lake St | $$**

Bryant Lake Bowl is a Minneapolis original — a bowling alley, theater, and restaurant all in one space, open since 1993. The menu is seasonal and locally sourced, with consistently strong vegan options that rotate. The atmosphere is Lyn-Lake in the best way: a little weird, completely unpretentious, and deeply local.

**What to expect:** 4-6 clearly marked vegan dishes on the menu at any time. Grain bowls, soups, sandwiches, and salads that change seasonally. The kitchen is farm-to-table oriented, which means winter means warming stews and spring means bright grain salads.

**Best use case:** Pre-show dinner before a performance in the theater space, or a weekend brunch with the papers. The bowling lanes add a fun backdrop for group dinners.

**Note:** Always check the current menu — it rotates frequently and the vegan options shift. Their website lists current specials.

---

## 🍺 7. Reverie Cafe + Bar — The Fully Vegan Bar

**Powderhorn | 2506 Minnehaha Ave | $$**

Technically Powderhorn, not Uptown — but Reverie is a 10-minute walk or one-minute bike ride from the Lyn-Lake core, and it's different enough from everything else in this guide to earn the trip.

Reverie is a **fully vegan bar and restaurant**. Not vegan-friendly. Not "we have options." Fully vegan — every single item on the menu, from the dark chocolate beignets to the craft beer list to the cashew cheesecake, contains zero animal products.

**Why it's worth it:**
- 20+ craft beers on tap, rotating selection
- Full cocktail and mocktail program
- Dark chocolate beignets (the signature — get these)
- Cashew cheesecake that is legitimately better than most non-vegan alternatives
- Savory dishes: rotating plates, charcuterie-style vegan boards, seasonal mains

**Vibe:** Cozy, dark, candlelit. Booth seating. Neighborhood bar energy with better food than you'd expect. Good for dates, good for after a show, good for solo dining at the bar.

**Also featured in:** [Best Vegan Bakeries & Desserts in Minneapolis](/blog/vegan-bakeries-minneapolis), [Vegan Date Night Minneapolis](/blog/vegan-date-night-minneapolis)

---

## Neighborhood Map: Uptown → Lyn-Lake → Powderhorn

| Restaurant | Neighborhood | Best Vegan Pick | Price |
|---|---|---|---|
| Amazing Thailand | Uptown | Mock Duck Red Curry | $$ |
| Peninsula Malaysian | Lyn-Lake | Vegetable Curry Laksa | $$ |
| World Street Kitchen | Lyn-Lake | Yum Yum Bowl | $$ |
| French Meadow Bakery | Lyn-Lake | Grain Bowl + Pastry | $$ |
| Glam Doll Donuts | Lyn-Lake | Rotating Seasonal Flavor | $ |
| Bryant Lake Bowl | Lyn-Lake | Seasonal Vegan Plate | $$ |
| Reverie Cafe + Bar | Powderhorn | Dark Chocolate Beignets | $$ |

---

## How to Make a Day of It

**Morning:** French Meadow for coffee and a grain bowl → Glam Doll if it's before 11am for a donut
**Lunch:** World Street Kitchen Yum Yum Bowl or Peninsula Malaysian curry laksa
**Afternoon:** Walk Lake Street from Lyn-Lake west through Uptown, browse Magers & Quinn or Ragstock
**Dinner:** Amazing Thailand for mock duck curry or Bryant Lake Bowl for a pre-show meal
**After dinner:** Reverie Cafe + Bar for a beer, dark chocolate beignets, and whatever's on the rotation

This corridor covers about 1.5 miles of walkable Minneapolis — all of it deeply local, none of it chain restaurants, and more vegan food per square mile than almost anywhere else in the Midwest.

---

## What About Grocery and Takeout?

**Seward Community Co-op** (2823 E Franklin Ave, nearby Seward neighborhood) has one of the best vegan prepared food sections in the Twin Cities — hot bar, salad bar, and packaged grab-and-go items. Worth adding to a Lyn-Lake day if you're heading home with dinner.

**Whole Foods in Uptown** (222 Hennepin Ave S) has a solid prepared foods section, but the Co-op is better for vegan options and more interesting.

---

## Bottom Line

Uptown and Lyn-Lake are where Minneapolis vegans eat. The neighborhood has built its food identity around local sourcing, adventurous flavors, and genuinely welcoming kitchen attitudes toward plant-based diners. Whether you're visiting the Twin Cities or live ten blocks away and haven't explored the full stretch, these seven spots cover breakfast through late night — all within a short walk of each other.

For the full Minneapolis picture, see our [Best Vegan Restaurants in Minneapolis 2026](/blog/best-vegan-restaurants-minneapolis-2026) guide. For exploring other neighborhoods, check the [Northeast Minneapolis Vegan Guide](/blog/northeast-minneapolis-vegan-guide) and the new [Downtown Minneapolis Vegan Guide](/blog/vegan-restaurants-downtown-minneapolis).
`,
  },
  {
    slug: "vegan-restaurants-downtown-minneapolis",
    title: "Best Vegan Restaurants Near Downtown Minneapolis (2026 Guide)",
    description: "The best vegan and plant-based restaurants in and around downtown Minneapolis — from 100% vegan Ethiopian at Lulu EthioVegan to coal-fired pizza at Black Sheep, Crisp & Green on Nicollet Mall, and vegan ramen at Tori in the North Loop.",
    publishedAt: "2026-02-24",
    updatedAt: "2026-02-24",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan restaurants downtown minneapolis", "downtown minneapolis vegan", "vegan lunch minneapolis", "plant-based downtown minneapolis", "vegan food downtown"],
    readingTime: "8 min read",
    tldr: "Best vegan options near downtown Minneapolis: Lulu EthioVegan (Elliot Park, 100% vegan Ethiopian), Crisp & Green (Nicollet Mall, healthy bowls), Pizza Lucé (N 4th St, vegan-friendly pizza), Black Sheep Pizza (North Loop, coal-fired with vegan cheese), Tori Ramen (North Loop, excellent veggie ramen), and Hard Times Cafe (Cedar-Riverside, collectively-owned all-day diner).",
    faqs: [
      {
        question: "What are the best vegan restaurants in downtown Minneapolis?",
        answer: "The top vegan options in and near downtown Minneapolis are: Lulu EthioVegan (100% vegan Ethiopian in Elliot Park, walking distance from downtown), Crisp & Green (healthy bowls on Nicollet Mall), Pizza Lucé (downtown, 119 N 4th St), Black Sheep Pizza (North Loop, coal-fired with vegan cheese on any pizza), and Tori Ramen (North Loop, outstanding Veggie Ramen with mushroom broth)."
      },
      {
        question: "Is there a 100% vegan restaurant near downtown Minneapolis?",
        answer: "Yes — Lulu EthioVegan at 12 E Franklin Ave (Elliot Park) is fully vegan and one of the best restaurants in Minneapolis, period. Chef TG Feyisa serves Ethiopian cuisine with no animal products whatsoever — a rare find near the downtown core."
      },
      {
        question: "Where can I get vegan pizza in downtown Minneapolis?",
        answer: "Two great options near downtown: Pizza Lucé at 119 N 4th St (right downtown) has been making vegan pizza since 2000 — get the vegan cheese on any pie. Black Sheep Pizza in the North Loop (600 N Washington Ave) uses coal-fired ovens and vegan cheese is available on all their creative pies."
      },
      {
        question: "Where can I eat vegan in the North Loop Minneapolis?",
        answer: "The North Loop has solid vegan options: Tori Ramen (161 N 1st St) has excellent Veggie Ramen with rich mushroom broth, Black Sheep Pizza (600 N Washington Ave) does coal-fired pizza with vegan cheese, and Red Cow (208 N 1st Ave) does an Impossible Burger cooked with real care."
      },
      {
        question: "Can I find vegan food on Nicollet Mall in Minneapolis?",
        answer: "Yes — Crisp & Green at 801 Nicollet Mall is your best bet for healthy vegan food right on the mall. Build-your-own grain bowls, salads, and smoothies with vegan protein options. Quick, high-quality, and perfect for a downtown lunch break."
      },
      {
        question: "What is the closest vegan restaurant to the Minneapolis Convention Center?",
        answer: "Lulu EthioVegan (12 E Franklin Ave, Elliot Park) is about 5 minutes from the Convention Center and is fully vegan — the injera and berbere-spiced dishes are unlike anything else downtown. Crisp & Green on Nicollet Mall is also very close for a quick healthy lunch."
      }
    ],
    relatedRestaurants: ["lulu-ethiovegan", "crisp-and-green", "pizza-luce", "black-sheep-pizza", "tori-ramen", "hard-times-cafe", "afro-deli", "red-cow"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "northeast-minneapolis-vegan-guide", "ethiopian-vegan-food-minneapolis", "vegan-brunch-minneapolis", "late-night-vegan-food-minneapolis", "vegan-date-night-minneapolis"],
    content: `
## Vegan Eating Near Downtown Minneapolis: The Real Guide

Downtown Minneapolis is underrated as a vegan destination. Yes, it lacks the concentrated plant-based culture of Uptown or the eclectic dining of Northeast — but within a mile or two of the CBD you'll find a fully vegan Ethiopian restaurant that rivals anything in the city, coal-fired pizza in the North Loop, and a ramen shop that takes its veggie broth as seriously as the chicken version.

Here's where to eat if you're working downtown, staying at a hotel near the Convention Center, or exploring the North Loop on a weekend.

---

## 🌿 Lulu EthioVegan — 100% Vegan Ethiopian

**Elliot Park | 12 E Franklin Ave | $$**

Start here. If you're downtown and can make only one restaurant trip, Lulu EthioVegan is the one. Chef TG Feyisa has created a fully vegan Ethiopian restaurant that doesn't compromise on anything — flavor, depth, generosity of spirit, or portions.

Ethiopian food is naturally built for vegans — injera (spongy sourdough flatbread) as the base, layered with slow-cooked lentils, split peas, collard greens, and berbere-spiced vegetables. At Lulu, every single dish is plant-based. No substitutions needed.

**What to order:**
- **Yemisir Wot** — Red lentils slow-cooked in berbere sauce. The spice is bold, complex, and balanced.
- **Tikel Gomen** — Cabbage, carrots, and potatoes with turmeric and ginger. Simple and deeply satisfying.
- **Gomen** — Collard greens with garlic and onion. Better than you think greens can taste.
- **Azifa** — Cold lentil salad with mustard and jalapeño. Order it alongside.
- **Sambusa** — Lentil-filled fried pastry. The starter you'll wish you'd ordered two of.
- **Full Combination Plate** — The move for first-timers. Get everything on one plate and eat communally off the injera.

**The vibe:** Warm, neighborhood restaurant energy. Small, intimate, welcoming. Chef TG is often in the dining room. About 10 minutes on foot from the Convention Center, or a quick Lyft from anywhere downtown.

---

## 🥗 Crisp & Green — Healthy Fast-Casual on Nicollet Mall

**Downtown | 801 Nicollet Mall | $$**

The most convenient option if you're working downtown and need a lunch that won't destroy your afternoon. Crisp & Green does clean, high-quality bowls, salads, and smoothies — build-your-own with your choice of greens, grains, vegetables, and protein.

**Vegan-friendly picks:**
- **Grain Bowl** — Pick a base (quinoa, brown rice, or mixed greens), load it with roasted vegetables, add tofu or chickpea protein, and choose a house dressing. Crisp and fresh.
- **Smoothies** — Made to order, many dairy-free with plant milk options.
- **Any salad** — Skip the chicken, load up on chickpeas and avocado.

**The call:** Great for weekday lunches. Right on the mall, easy parking on evenings and weekends. Not a special-occasion spot — it's your reliable downtown quick fix that actually tastes good and won't make you crash at 2pm.

---

## 🍕 Pizza Lucé — Downtown Vegan Pizza Since 2000

**Downtown | 119 N 4th St | $$**

Pizza Lucé has been feeding vegans in Minneapolis since before being vegan was cool. The downtown location (there are several across the metro) is a proper sit-down restaurant with a full bar, rotating specials, and a staff that's been handling vegan orders with zero eyerolling for two decades.

**The vegan setup:**
- Vegan cheese available on any pizza — it melts well and they put enough of it on
- Many appetizers and salads are naturally vegan or easily modified
- The crust is excellent — thin, slightly charred, substantial

**Order:**
- **Veg Out pizza** — Roasted red peppers, mushrooms, onions, artichoke hearts, olives. Add vegan cheese.
- **Create your own** — The menu is honest about what's vegan. Build exactly what you want.
- **Side salad** — The house dressing is dairy-free. Ask your server to confirm current ingredients.

**Good for:** Pre-game dinner before a show at Target Center or a Timberwolves game. The downtown location handles game-day crowds without drama.

---

## 🔥 Black Sheep Pizza — Coal-Fired in the North Loop

**North Loop | 600 N Washington Ave | $$**

The North Loop version of Black Sheep is worth the 10-minute walk (or quick bike ride) from downtown proper. Coal-fired ovens at 900+ degrees produce a crust with charred bubbles and a slightly smoky flavor that you genuinely cannot replicate in a conventional oven. Vegan cheese is available on every pizza.

**What to order:**
- **Coal-fired Margherita with vegan cheese** — Let the crust speak. Simplest is best here.
- **Rotating seasonal vegetable pizza** — Whatever's on special with vegetables is usually outstanding.
- **Build your own** — Great vegetable topping selection. Roasted garlic, shishito peppers, caramelized onions.

**The space:** Industrial-chic, exposed brick, open kitchen, warehouse-district energy. Excellent for groups — the large format pizzas feed four without drama. Also a solid [vegan date night Minneapolis](/blog/vegan-date-night-minneapolis) option.

---

## 🍜 Tori Ramen & Yakitori — Veggie Ramen That Earns It

**North Loop | 161 N 1st St | $$**

Don't let the name throw you — Tori Ramen's Veggie Ramen is legitimately excellent. The mushroom broth is built with the same care as their chicken versions — rich, deep, complex. Chewy noodles. Roasted vegetables. Tofu. This isn't an afterthought vegan option; it's a great bowl of ramen.

**Order:**
- **Veggie Ramen** — The one you're here for. Rich mushroom broth, noodles cooked correctly, generous toppings.
- **Charred Shiitake Yakitori** — Wood-fired shiitake mushrooms on skewers with finishing salt. One of the best single bites in the North Loop.
- **Pickled Vegetables** — Great alongside or between bites of ramen.

**Timing:** Cozy spot that fills up. Bar seating for solo diners. Also appears in the [late night vegan food Minneapolis](/blog/late-night-vegan-food-minneapolis) guide — they stay open late on weekends.

---

## ☕ Hard Times Cafe — All-Day Diner Near Cedar-Riverside

**Cedar-Riverside | 1821 Riverside Ave | $**

Technically Cedar-Riverside rather than downtown, but close enough (about 1.5 miles) and different enough that it deserves a separate mention. Hard Times Cafe has been collectively-owned since 1992, serves food all day from early morning through late night, and has always had strong vegan options. Cash-only, BYOB vibes, hand-painted walls.

**Vegan picks:**
- **Hash browns** — Crispy, made to order, the best in the Twin Cities
- **Biscuits & Gravy (vegan version)** — Ask for the vegan mushroom gravy. It's the right call.
- **Breakfast burritos** — Scrambled tofu, peppers, onions, salsa. Filling and cheap.
- **Burgers** — Veggie patty options available, always have been

**The deal:** Breakfast-to-dinner, $8-12 average meal, cash only (ATM on site), open until 1am Thursday-Saturday. A very different experience from North Loop upscale — but some days you want a booth, a cheap cup of coffee, and a big plate of hash browns.

---

## 🌍 Afro Deli — East African & Mediterranean Near Cedar-Riverside

**Cedar-Riverside | 1939 5th St S | $**

Afro Deli sits at the edge of Cedar-Riverside's East African community and serves falafel, shawarma, and East African dishes. Their vegan options are solid and well-priced. Multiple Minneapolis locations, but the Cedar-Riverside original has the neighborhood atmosphere.

**Vegan options:**
- **Falafel plate** — Fried falafel on a bed of rice with roasted vegetables, tahini, and salad. A solid $10 meal.
- **Vegetarian shawarma wrap** — Roasted vegetables and falafel in flatbread with garlic sauce (confirm it's dairy-free)
- **Sambusa** — Lentil-filled fried pastry, vegan, excellent

**Good for:** A budget-friendly, satisfying lunch near campus or the Convention Center.

---

## 📍 Map: Downtown Vegan Spots at a Glance

| Restaurant | Neighborhood | Best Vegan Pick | Price |
|---|---|---|---|
| Lulu EthioVegan | Elliot Park | Full combination plate | $$ |
| Crisp & Green | Downtown (Nicollet Mall) | Build-your-own grain bowl | $$ |
| Pizza Lucé | Downtown | Veg Out pizza w/ vegan cheese | $$ |
| Black Sheep Pizza | North Loop | Coal-fired margherita | $$ |
| Tori Ramen | North Loop | Veggie Ramen | $$ |
| Hard Times Cafe | Cedar-Riverside | Hash browns + biscuits & gravy | $ |
| Afro Deli | Cedar-Riverside | Falafel plate | $ |

---

## Tips for Vegan Dining Downtown

**1. Lulu EthioVegan is the gem most people miss.** It's not on Nicollet Mall or in the North Loop — it's in Elliot Park, one neighborhood away. Worth the extra 5 minutes. Fully vegan, genuinely outstanding food.

**2. The North Loop cluster (Black Sheep + Tori Ramen) makes a great evening out.** Walk between them, drinks at a bar in between. The neighborhood has more life than downtown proper after 6pm.

**3. Crisp & Green is your weekday lunch move.** Fast, healthy, genuinely good. Not Instagram-worthy, but your future self thanks you.

**4. Hard Times for late night.** If you're out past midnight, it's Hard Times or nothing — and Hard Times is actually good. Cash only.

**5. Ask about vegan cheese at any pizza spot.** Both Pizza Lucé and Black Sheep have it, and both actually use decent vegan cheese. Just ask.

---

*Looking for more? Browse the [complete Minneapolis vegan restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026) or explore [Northeast Minneapolis vegan spots](/blog/northeast-minneapolis-vegan-guide) — a great neighborhood for a longer vegan food crawl.*
`
  },
  {
    slug: "vegan-asian-restaurants-minneapolis",
    title: "Best Vegan Asian Restaurants in Minneapolis (Thai, Ramen, Sushi & More)",
    description: "The best vegan Asian food in Minneapolis — Thai curries at Amazing Thailand, Tori Ramen's mushroom broth, Masu's sushi & robata, Peninsula's curry laksa, and more.",
    publishedAt: "2026-02-24",
    updatedAt: "2026-02-24",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan asian food", "vegan thai", "vegan ramen", "vegan sushi", "minneapolis"],
    readingTime: "9 min read",
    tldr: "Best vegan Asian food in Minneapolis: Amazing Thailand (Uptown) for Thai curries and mock duck, Tori Ramen (North Loop) for the best vegan mushroom broth ramen, Masu Sushi (NE) for upscale Japanese and robata-grilled vegetables, Peninsula Malaysian (Lyn-Lake) for curry laksa that will ruin all other soups, and World Street Kitchen (Lyn-Lake) for the crispy tofu Yum Yum bowl. Heading to St. Paul? Ngon Vietnamese Bistro is a must.",
    faqs: [
      {
        question: "Where can I get vegan Thai food in Minneapolis?",
        answer: "Amazing Thailand on Hennepin Ave in Uptown is the go-to for vegan Thai in Minneapolis. They have extensive vegan options including papaya salad, tofu pad thai, coconut curries, and mock duck. Most Thai dishes can be made vegan on request — just ask."
      },
      {
        question: "Where can I get vegan ramen in Minneapolis?",
        answer: "Tori Ramen & Yakitori in the North Loop has an excellent Veggie Ramen with rich mushroom broth, chewy noodles, roasted vegetables, and tofu. It's one of the best bowls in the city, vegan or not."
      },
      {
        question: "Is there vegan sushi in Minneapolis?",
        answer: "Yes — Masu Sushi & Robata in Northeast Minneapolis has a solid vegan menu including avocado caterpillar rolls, vegetable rainbow rolls, and amazing robata-grilled vegetables like shishito peppers and asparagus. It's upscale but worth it for a special occasion."
      },
      {
        question: "What is the best vegan Asian restaurant in Minneapolis?",
        answer: "It depends what you're craving. For Thai, Amazing Thailand. For ramen, Tori Ramen. For Japanese/sushi, Masu Sushi. For Malaysian (and the best soup in the city), Peninsula Malaysian Cuisine. For fast-casual global bowls, World Street Kitchen."
      },
      {
        question: "Is Amazing Thailand vegan-friendly?",
        answer: "Yes — Amazing Thailand has extensive vegan options. Most curries, stir-fries, and soups can be made with tofu or vegetables. The papaya salad, mock duck dishes, and coconut curries are especially popular with vegans. Just ask your server to confirm no fish sauce."
      },
      {
        question: "Where can I get vegan Malaysian food in Minneapolis?",
        answer: "Peninsula Malaysian Cuisine on Nicollet Ave in Lyn-Lake is the spot. Their vegetable curry laksa (coconut curry soup with rice noodles, tofu puffs, and vegetables) is outstanding. The mock duck rendang and roti canai are also excellent vegan options."
      }
    ],
    relatedRestaurants: ["amazing-thailand", "tori-ramen", "masu-sushi", "peninsula-malaysian", "world-street-kitchen", "ngon-vietnamese"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-restaurants-uptown-minneapolis", "vegan-date-night-minneapolis", "northeast-minneapolis-vegan-guide", "late-night-vegan-food-minneapolis", "vegan-restaurants-st-paul"],
    content: `
## The Best Vegan Asian Food in Minneapolis

Minneapolis has a surprisingly deep bench of vegan-friendly Asian restaurants — and I don't mean "they have edamame and steamed rice." I mean restaurants where you're making real decisions about what to order because everything sounds incredible.

Thai? One of the best in the state is in Uptown and it happens to have mock duck that will make you forget you're vegan. Ramen? There's a North Loop spot whose mushroom broth could go up against any tonkotsu. Sushi? An NE Minneapolis restaurant does robata-grilled vegetables over a wood fire that are honestly better than most meat dishes.

Here's where to go for every kind of vegan Asian craving in Minneapolis.

---

## 🇹🇭 Thai: Amazing Thailand

**Uptown | 3024 Hennepin Ave | $$**

Amazing Thailand has been a Twin Cities institution for decades, and for good reason — it's consistently excellent, and the vegan options are genuinely impressive. Not an afterthought. Not a single sad tofu dish tucked at the bottom of the menu. We're talking full Thai menu, made vegan.

**The Order:**
- **Papaya Salad (vegan)** — Crisp green papaya, carrots, tomatoes, spicy chili, and fried tofu. Ask for no fish sauce and no shrimp paste. When it's right, it's perfect.
- **Mock Duck Curry** — This is the signature move. The mock duck preparations at Amazing Thailand rival any meat version in texture and absorb the curry sauce beautifully.
- **Coconut Soup (Tom Kha with tofu)** — Rich, aromatic, warming.
- **Pad Thai with tofu** — Classic. Get the extra lime.
- **Basil Stir-Fry** — Bold garlic-basil sauce, works great with tofu or vegetables.

**The tip:** When ordering, explicitly ask for no fish sauce and no shrimp paste. Most dishes come with these by default in Thai cooking, but Amazing Thailand's kitchen is used to the request and handles it without drama.

---

## 🍜 Ramen: Tori Ramen & Yakitori

**North Loop | 161 N 1st St | $$**

The North Loop's best kept vegan secret. Tori Ramen is primarily known as a chicken ramen spot, but their Veggie Ramen is legitimately great — not great "for a vegan option," just great. Period.

**The Order:**
- **Veggie Ramen** — The anchor. Rich mushroom broth that's been developed with the same care as their chicken versions. Chewy, perfectly cooked noodles. Roasted vegetables. Tofu. The broth alone is worth the trip.
- **Charred Shiitake Yakitori Skewers** — Get these. Wood-fired shiitakes are one of the simplest and most satisfying things you can eat, and Tori does them correctly.
- **Edamame** — Simple starter, well-seasoned.
- **Pickled Vegetables** — A great palate cleanser between bites.

**When to go:** The cozy space gets packed on cold Minneapolis evenings (which is most evenings, let's be real). Solo diners can snag bar seats without a wait. Great option from the [late night vegan food Minneapolis](/blog/late-night-vegan-food-minneapolis) post too — they stay open late.

---

## 🍣 Sushi & Robata: Masu Sushi & Robata

**Northeast Minneapolis | 330 E Hennepin Ave | $$$**

Masu is what happens when you take Japanese cuisine seriously and also understand that vegetables deserve the same treatment as proteins. The robata (open-fire) grill transforms vegetables in a way that regular cooking simply can't replicate.

**The Order:**
- **Avocado Caterpillar Roll** — The visual showpiece. Cucumber, avocado, sesame, with avocado fanned across the top. It's as good as it looks.
- **Vegetable Rainbow Roll** — Six colors, six flavors. Order it.
- **Robata Shishito Peppers** — Blistered over live fire, finishing salt, citrus. Simple perfection.
- **Robata Asparagus & Mushrooms** — The wood smoke makes these taste like they were made for the grill.
- **Seaweed Salad** — Great starter, properly seasoned with sesame.
- **Edamame** — Charred version when available.

**Vibe:** Upscale, great for date night (it's in our [vegan date night Minneapolis](/blog/vegan-date-night-minneapolis) guide), and the sake menu is extensive. Worth the splurge for a special occasion. Also in our [Northeast Minneapolis vegan guide](/blog/northeast-minneapolis-vegan-guide).

---

## 🇲🇾 Malaysian: Peninsula Malaysian Cuisine

**Lyn-Lake | 2608 Nicollet Ave | $$**

Malaysian cuisine is one of the most vegan-friendly in the world, and almost no one in Minneapolis knows it. Peninsula is here to fix that.

Malaysian food draws from Malay, Chinese, and Indian traditions — which means you get coconut curries, rice noodles, wok-fired dishes, and flatbreads all on the same menu. Most can be made vegan. Many already are.

**The Order:**
- **Vegetable Curry Laksa** — This is the one. Coconut curry soup with rice noodles, tofu puffs, and vegetables. The broth is rich, warming, and complex in a way that takes hours to build. It will ruin all other soups. Consider yourself warned.
- **Roti Canai** — Flaky, slightly crispy flatbread served with curry dipping sauce. Order it as a starter and fight your dining companions for the last piece.
- **Mock Duck Rendang** — Bold, layered, and deeply savory. Rendang is one of Malaysia's national dishes and this version is exceptional.
- **Vegetable Sambal** — Spicy, tangy, complex. Malaysian sambal is a different beast than Thai or Chinese chili sauces.
- **Teh Tarik (Malaysian Pulled Tea)** — Frothy, sweet, slightly spiced. The perfect finish.

---

## 🌍 Global/Asian: World Street Kitchen

**Lyn-Lake | 2743 Lyndale Ave S | $$**

WSK isn't strictly Asian — it's global street food — but the Yum Yum Bowl with crispy tofu is basically a Thai rice bowl and it's one of the best fast-casual vegan meals in the city.

**The Order:**
- **Yum Yum Bowl with Crispy Tofu** — Thai-inspired flavors, jasmine rice or greens base, crispy tofu that actually stays crispy, bold sauce. This is the move.
- **Falafel Plates** — Mediterranean-inspired, substantial, and great value.
- **Rotating Specials** — WSK changes things up often. Check the menu on arrival because something seasonal is usually excellent.

**When to go:** Fast-casual format means quick service, great for lunch or an easy weeknight dinner. Multiple metro locations. Their Lyndale Ave flagship is the original.

---

## 🇻🇳 Vietnamese: Ngon Vietnamese Bistro (St. Paul)

**St. Paul | 799 University Ave W | $$**

Technically St. Paul, but close enough to mention — Ngon is one of the best Vietnamese restaurants in the Twin Cities, and it has serious vegan options that go well beyond spring rolls.

**The Order:**
- **Tofu Pho** — Rich vegetable broth that puts most phở shops to shame. Thick rice noodles, tofu, fresh herbs, bean sprouts. The works.
- **Lemongrass Tofu Clay Pot** — This is the hidden gem on the menu. Warming, deeply savory, and not something you see everywhere.
- **Marinated Tofu Bánh Mì** — Crusty baguette, pickled daikon and carrots, jalapeño, cilantro, and savory marinated tofu. A great lunch.
- **Crispy Spring Rolls** — Excellent starter, rice paper, lots of herbs.

Check out our [St. Paul vegan restaurant guide](/blog/vegan-restaurants-st-paul) for more across the river.

---

## 🗺️ Quick Reference

| Restaurant | Cuisine | Neighborhood | Best Dish | Price |
|-----------|---------|-------------|-----------|-------|
| Amazing Thailand | Thai | Uptown | Mock Duck Curry | $$ |
| Tori Ramen | Japanese/Ramen | North Loop | Veggie Ramen | $$ |
| Masu Sushi & Robata | Japanese/Sushi | NE Minneapolis | Robata Vegetables | $$$ |
| Peninsula Malaysian | Malaysian | Lyn-Lake | Curry Laksa | $$ |
| World Street Kitchen | Global/Asian | Lyn-Lake | Yum Yum Bowl | $$ |
| Ngon Vietnamese | Vietnamese | St. Paul | Tofu Pho | $$ |

---

## Tips for Ordering Vegan at Asian Restaurants in Minneapolis

**Thai restaurants:** Fish sauce and shrimp paste are common hidden ingredients. Always ask for "no fish sauce, no shrimp paste" when ordering. Most Thai restaurants in Minneapolis are very used to this request.

**Japanese:** Miso soup sometimes contains fish stock (dashi). Edamame, tofu dishes, vegetable sushi, and many robata options are typically safe. Ask about the soup base.

**Vietnamese:** Pho broth is traditionally beef or chicken-based — order specifically "vegetable pho" or "tofu pho" and confirm the broth is vegetable-based. Spring rolls are usually vegan. Fish sauce comes up in sauces.

**Malaysian/Southeast Asian:** Fish sauce and shrimp paste appear here too. Ask about the curry and soup bases. Many Malaysian restaurants have dedicated vegetarian menus with vegan-friendly options clearly marked.

**Chinese:** Oyster sauce is a common hidden ingredient in stir-fries. Ask for dishes "without oyster sauce" or check if the restaurant has a vegetarian menu.

When in doubt, ask. Most of these restaurants serve a lot of vegetarian and vegan diners and the staff knows the menu cold.
`,
  },
  {
    slug: "vegan-bakeries-minneapolis",
    title: "Best Vegan Bakeries & Desserts in Minneapolis (2026 Guide) 🍩",
    description: "From 100% vegan custom cakes to punk-rock donuts, housemade ice cream, and dark chocolate beignets — Minneapolis has a surprisingly great vegan dessert scene. Here's where to find the best vegan bakeries and sweet treats in the Twin Cities.",
    publishedAt: "2026-02-23",
    updatedAt: "2026-02-23",
    author: "Mia & Jay",
    category: "guides",
    tags: ["vegan bakery minneapolis", "vegan desserts minneapolis", "vegan donuts minneapolis", "vegan ice cream minneapolis", "vegan sweets", "minneapolis", "vegan guide"],
    readingTime: "6 min read",
    tldr: "Best vegan bakeries in Minneapolis: Vegan East Bakery (Longfellow, 100% vegan, legendary cinnamon rolls + custom cakes), Glam Doll Donuts (Lyn-Lake, punk-rock rotating flavors), Crepe & Spoon (NE, vegan ice cream + sweet crepes), Reverie Cafe (Powderhorn, dark chocolate beignets + cashew cheesecake), French Meadow Bakery (Lyn-Lake, vegan pastries + breakfast).",
    faqs: [
      {
        question: "What is the best vegan bakery in Minneapolis?",
        answer: "Vegan East Bakery in the Longfellow neighborhood is Minneapolis's premier 100% vegan bakery. They specialize in custom cakes, cupcakes, cookies, and their legendary cinnamon rolls. Everything is made from scratch daily, with many gluten-free options available. Hours are Tuesday–Saturday, 10am–3pm — plan ahead and consider calling ahead for custom orders."
      },
      {
        question: "Where can I get vegan donuts in Minneapolis?",
        answer: "Glam Doll Donuts on Nicollet Avenue (Lyn-Lake neighborhood) is the go-to spot for vegan donuts in Minneapolis. This punk-rock donut shop offers a rotating menu of creative, Instagram-worthy flavors — many of which are vegan or can be made vegan. Seasonal flavors like maple pecan and salted caramel rotate regularly. Arrive early on weekends as popular flavors sell out by noon."
      },
      {
        question: "Where can I get vegan ice cream in Minneapolis?",
        answer: "Crepe & Spoon in Northeast Minneapolis makes outstanding housemade vegan ice cream in inventive flavors like blueberry cardamom, coconut ash, and salted caramel — all dairy-free and rich without compromise. Reverie Cafe + Bar in Powderhorn also serves creative vegan desserts including cashew cheesecake. Both are fully vegan restaurants."
      },
      {
        question: "Is there a fully vegan bakery in Minneapolis?",
        answer: "Yes — Vegan East Bakery (5501 34th Ave S, Longfellow) is Minneapolis's only 100% vegan dedicated bakery. Crepe & Spoon (2723 Johnson St NE, Northeast) is also 100% vegan and specializes in sweet crepes and housemade ice cream. Both are excellent options if you need a fully vegan dessert destination."
      },
      {
        question: "Where can I order a vegan birthday cake in Minneapolis?",
        answer: "Vegan East Bakery in Minneapolis's Longfellow neighborhood specializes in custom vegan cakes for birthdays, weddings, and special occasions. Their designs are showstopping and the flavors are outstanding. Pre-orders are required for custom cakes — reach out at least 1–2 weeks in advance via their website at veganeast.com. Many flavors are also available gluten-free."
      },
      {
        question: "Are there vegan dessert options at non-vegan Minneapolis restaurants?",
        answer: "Yes — several non-vegan Minneapolis restaurants offer notable vegan dessert options. French Meadow Bakery & Café (Lyn-Lake and St. Paul) has a bakery case with vegan muffins, pastries, and organic breads. Reverie Cafe + Bar is fully vegan and serves dark chocolate beignets and cashew cheesecake. Glam Doll Donuts is vegan-friendly with rotating all-vegan flavors available daily."
      }
    ],
    relatedRestaurants: ["vegan-east-bakery", "glam-doll-donuts", "crepe-and-spoon", "reverie-cafe-bar", "french-meadow"],
    relatedPosts: ["vegan-brunch-minneapolis", "best-vegan-restaurants-minneapolis-2026", "vegan-comfort-food-minneapolis", "best-vegan-ice-cream-twin-cities", "vegan-food-minneapolis"],
    content: `# Best Vegan Bakeries & Desserts in Minneapolis (2026 Guide)

Minneapolis has a legitimately impressive vegan dessert scene — and most people don't know it. Between a dedicated 100% vegan bakery turning out custom cakes and legendary cinnamon rolls, a punk-rock donut shop with rotating creative flavors, a Northeast creperie with housemade dairy-free ice cream, and a Powderhorn bar serving dark chocolate beignets, the city punches well above its weight for vegan sweets.

Whether you're looking for a **vegan birthday cake**, a late-afternoon donut run, or a proper dessert stop after dinner, this guide covers the best vegan bakeries and sweet spots in the Twin Cities.

---

## 🎂 1. Vegan East Bakery — The Real Deal (Longfellow)

**[Vegan East Bakery](/restaurants/vegan-east-bakery)** is Minneapolis's only dedicated 100% vegan bakery, and it's exceptional.

Owner Shelia Nelson turned a passionate hobby into a full-time operation, and the result is a bakery that proves vegan baking doesn't require compromise. Everything is made from scratch daily — and the detail that goes into both flavor and decoration is genuinely impressive.

**The must-orders:**
- **Cinnamon rolls** — The signature. Fluffy, perfectly spiced, generously frosted. Locals swear by them.
- **Custom cakes** — Showstopper-level designs for birthdays, weddings, and celebrations. Pre-orders required 1–2 weeks out.
- **Cupcakes** — Daily rotating flavors; always worth trying whatever's fresh.
- **Cookies** — Crisp edges, chewy centers, dairy-free and delicious.

Many items are also **gluten-free**, making Vegan East a rare safe haven for people managing multiple dietary restrictions.

**Practical details:** 5501 34th Ave S, Longfellow neighborhood. Hours: Tuesday–Saturday, 10am–3pm. Limited hours — plan ahead. Custom cake orders: veganeast.com.

> **Best for:** Special occasion cakes, weekly treat runs, gifting, anyone who wants to quietly blow people's minds at a party.

---

## 🍩 2. Glam Doll Donuts — Punk Rock Donuts (Lyn-Lake)

**[Glam Doll Donuts](/restaurants/glam-doll-donuts)** at 2605 Nicollet Ave has been a Minneapolis institution since it opened — a bold, rock-and-roll donut shop that takes creativity seriously.

The rotating menu of flavors leans heavily vegan (and they clearly label which are vegan each day). Think inventive combinations like **maple pecan**, **salted caramel**, **birthday cake**, and rotating seasonal specials that align with whatever ingredients are peak right now.

These aren't small, timid donuts. They're fluffy, generously topped, and photographable enough to make your Instagram followers briefly jealous before you eat them.

**Tips:**
- **Arrive early on weekends** — popular flavors sell out by noon, sometimes earlier.
- Ask what's vegan that day — staff are helpful and knowledgeable.
- Pair with locally roasted coffee for the full experience.
- **Gift boxes** are available and make excellent presents.

**Location:** 2605 Nicollet Ave, Lyn-Lake. Near [Reverie Cafe + Bar](/restaurants/reverie-cafe-bar) and [French Meadow Bakery](/restaurants/french-meadow) — a natural dessert-focused afternoon in the neighborhood.

> **Best for:** Creative donut flavors, weekend morning runs, gifts, Instagram content.

---

## 🍦 3. Crepe & Spoon — Housemade Vegan Ice Cream (Northeast)

**[Crepe & Spoon](/restaurants/crepe-and-spoon)** in Northeast Minneapolis is fully vegan and does two things exceptionally well: sweet crepes and housemade ice cream.

The ice cream flavors are inventive and made in-house without a drop of dairy — **blueberry cardamom**, **coconut ash**, **salted caramel**, and rotating seasonal options. They're rich, creamy, and distinctive in a way that mass-produced vegan ice creams rarely achieve.

The sweet crepes are the perfect vessel: a golden, paper-thin wrap around Nutella-style chocolate spread with bananas, or fruit-forward options that work beautifully with a scoop of ice cream on the side.

**Why it stands out:**
- 100% vegan — zero cross-contamination concerns
- Housemade ice cream (not store-bought) in genuinely creative flavors
- Cozy, intimate atmosphere — a natural date-night dessert stop
- Located in Northeast near other great restaurants — easy to pair with dinner

**Location:** 2723 Johnson St NE, Northeast Minneapolis. Near [The Herbivorous Butcher](/restaurants/herbivorous-butcher).

> **Best for:** Date nights, unique ice cream flavors, sweet crepe cravings, Northeast neighborhood dessert stops.

---

## 🍰 4. Reverie Cafe + Bar — Elevated Vegan Desserts (Powderhorn)

**[Reverie Cafe + Bar](/restaurants/reverie-cafe-bar)** is a fully vegan bar and restaurant in Powderhorn — but the dessert menu deserves its own spotlight.

The **dark chocolate beignets** are the star: crispy outside, pillowy inside, dusted with powdered sugar and served warm. The **cashew cheesecake** is the kind of dessert that makes non-vegans do a double-take — rich, smooth, and convincingly cheesecake-like.

This is the spot when you want a proper dessert *experience* — sit down, get a craft cocktail or mocktail, and end a meal well.

**The dessert highlights:**
- Dark chocolate beignets — the must-order
- Cashew cheesecake — rotating flavors
- Seasonal specials that change with the kitchen's mood

**Also note:** Reverie has a full bar with 20 craft beers on tap, cocktails, and mocktails — so it works as both a dinner destination and a dessert stop.

**Location:** 1517 E 35th St, Powderhorn Park neighborhood. Near Glam Doll Donuts and French Meadow in the Lyn-Lake corridor.

> **Best for:** Date nights, post-dinner dessert stops, elevated vegan sweets with a craft cocktail.

---

## 🥐 5. French Meadow Bakery & Café — Vegan-Friendly Classics (Lyn-Lake)

**[French Meadow Bakery & Café](/restaurants/french-meadow)** has been a Minneapolis institution since 1985, built around organic, locally sourced ingredients long before it was fashionable.

The bakery case features **vegan muffins**, **pastries**, and their famous organic breads. It's not a dedicated vegan bakery — but for people who want reliably good vegan baked goods in a full-service café setting, French Meadow is the most accessible option on this list.

**The vegan bakery picks:**
- Vegan muffins (rotating flavors, available daily)
- Organic sourdough and whole-grain breads
- Seasonal pastries (ask what's vegan — the staff knows)

The Lyn-Lake location also has a full breakfast and brunch menu with strong vegan options. It's a great spot if you want breakfast alongside your baked goods.

**Location:** 2610 Lyndale Ave S, Lyn-Lake. Also: 1662 Grand Ave, St. Paul.

> **Best for:** Morning pastries with breakfast, organic bread shopping, vegan-friendly brunch alongside baked goods.

---

## Quick Hits: More Vegan-Friendly Sweets in Minneapolis

**J. Selby's (St. Paul):** Fully vegan, serving thick Frostbite shakes and cookie dough sundaes. Excellent dessert menu alongside their full food menu. See the [full J. Selby's guide](/restaurants/j-selbys).

**Herbivorous Butcher (North Loop):** The specialty vegan deli occasionally stocks sweet items and seasonal gift boxes. Check their current offerings online.

**Wedge Co-op & Seward Co-op:** Both carry excellent locally-made vegan chocolate, cookies, and specialty dessert items — great for stocking your home dessert stash.

---

## Planning Your Minneapolis Vegan Dessert Run

**The Lyn-Lake Sweet Loop:** Hit Glam Doll Donuts (2605 Nicollet) → walk two blocks to French Meadow Bakery → end with a cocktail and beignets at Reverie (1517 E 35th). Covers donuts, pastries, and elevated desserts in one neighborhood.

**The Northeast Vegan Trail:** Lunch at [The Herbivorous Butcher](/restaurants/herbivorous-butcher) → dessert at Crepe & Spoon (2723 Johnson St NE). Fully vegan, two of the best spots in the city, walkable if you're motivated.

**For Special Occasions:** Vegan East Bakery is the move for any event that needs a custom cake. Order 1–2 weeks ahead, pick up Tuesday–Saturday.

---

Ready to explore more of Minneapolis's vegan scene? Check the [full Minneapolis vegan restaurant directory](/restaurants) or browse our [neighborhood guides](/neighborhoods) to find plant-based spots near you.`
  },
  {
    slug: "vegan-fathers-day-minneapolis-2026",
    title: "Vegan Father's Day in Minneapolis 2026: Brunch, Dinner & Gift Ideas 🌿",
    description: "Father's Day 2026 is June 15 — here's how to celebrate with the vegan dad (or vegan-curious dad) in Minneapolis. Best brunch spots, dinner picks, grilling ideas, and gifts from the Herbivorous Butcher.",
    publishedAt: "2026-02-23",
    updatedAt: "2026-02-23",
    author: "Mia & Jay",
    category: "guides",
    tags: ["fathers day", "fathers day brunch minneapolis", "vegan fathers day", "vegan brunch", "vegan gifts", "minneapolis", "fathers day 2026"],
    readingTime: "7 min read",
    tldr: "Best vegan Father's Day in Minneapolis: Francis Burger Joint (NE Mpls) is the ultimate pick for the sports/burger dad — 100% vegan bar & grill with real beer. Hard Times Cafe (Seward) for the casual comfort-food dad. J. Selby's (St. Paul) for the dad who deserves a proper brunch. Herbivorous Butcher for vegan grill gifts. Reserve by early June — Father's Day is June 15, 2026.",
    faqs: [
      {
        question: "Where is the best vegan Father's Day brunch in Minneapolis?",
        answer: "The top picks for vegan Father's Day brunch in Minneapolis are: J. Selby's in St. Paul (full vegan menu, upscale atmosphere, great for a celebratory meal), Hard Times Cafe in Seward (legendary vegan biscuits & gravy, casual punk diner vibes, cash only), and Reverie Cafe (Lyn-Lake, excellent pastries and coffee). Book early — Father's Day is one of the busiest brunch days of the year."
      },
      {
        question: "Is there a vegan bar and grill in Minneapolis for Father's Day?",
        answer: "Yes — Francis Burger Joint in Northeast Minneapolis is 100% vegan and functions as a full bar & grill. It's the perfect spot for the sports-loving vegan dad: craft beers, vegan burgers, bar food, and TVs. No reservations needed, walk-in friendly."
      },
      {
        question: "Where can I buy vegan Father's Day gifts in Minneapolis?",
        answer: "The Herbivorous Butcher (North Loop) is the go-to for vegan Father's Day gifts in Minneapolis. They sell artisanal vegan meats, cheeses, and gift boxes — perfect for the dad who loves grilling. Gift cards are available online. Glam Doll Donuts also does gift boxes of vegan donuts if Dad has a sweet tooth."
      },
      {
        question: "What vegan restaurants are good for a Father's Day dinner in Minneapolis?",
        answer: "For Father's Day dinner in Minneapolis: Common Roots Cafe (Uptown, seasonal menu, outdoor seating), Francis Burger Joint (NE Minneapolis, full bar, very casual), and Tongue in Cheek in St. Paul (plant-forward, excellent cocktail program). French Meadow Bakery in Uptown is great for a full sit-down dinner with a wide vegan menu and full bar."
      },
      {
        question: "When is Father's Day 2026?",
        answer: "Father's Day 2026 falls on Sunday, June 15. Minneapolis restaurants will fill up fast — especially for brunch. Reservations at places like J. Selby's and French Meadow should be made by late May or early June."
      },
      {
        question: "What's the best vegan grill food for Father's Day in Minneapolis?",
        answer: "The Herbivorous Butcher in Minneapolis's North Loop sells artisanal vegan sausages, ribs, and burger patties that are perfect for grilling. Their products are available in-store and ship nationwide. For a restaurant grilling experience, Francis Burger Joint in NE Minneapolis has the best vegan smash burgers in the city."
      }
    ],
    relatedRestaurants: ["j-selbys", "hard-times-cafe", "francis-burger-joint", "common-roots-cafe", "reverie-cafe-bar", "herbivorous-butcher", "french-meadow"],
    relatedPosts: ["vegan-mothers-day-brunch-minneapolis-2026", "vegan-brunch-minneapolis", "best-vegan-restaurants-minneapolis-2026", "vegan-date-night-minneapolis", "vegan-comfort-food-minneapolis"],
    content: `# Vegan Father's Day in Minneapolis 2026: Brunch, Dinner & Gifts

Father's Day 2026 is **Sunday, June 15** — and whether you're celebrating a dad who's fully vegan, cooking for a mixed family, or just trying to find somewhere good that works for everyone, Minneapolis delivers.

The city has a legitimately great vegan restaurant scene: everything from a 100% vegan sports bar to an upscale brunch destination in St. Paul to a butcher shop full of artisanal vegan grilling meats. This guide covers it all.

---

## 🍺 For the Sports & Burger Dad — Francis Burger Joint

**[Francis Burger Joint](/restaurants/francis-burger-joint)** in Northeast Minneapolis is the best Father's Day pick if Dad wants a burger and a cold beer — and happens to be vegan (or is willing to try).

It's **100% vegan** and runs like a sports bar: big-screen TVs, craft beers on tap, a full cocktail menu, and burgers that actually satisfy. This is the rare vegan spot that doesn't require any convincing. Non-vegan dads visiting have been known to quietly admit the smash burger is better than expected.

**Why it works for Father's Day:**
- Walk-in friendly — no reservations required
- Full bar (craft beer, cocktails, mocktails)
- Vegan smash burgers, wings, loaded fries, nachos
- Northeast Minneapolis neighborhood vibe (parking available)
- Open afternoons and evenings — great for a relaxed Father's Day lunch or dinner

**Address:** 1119 Washington Ave NE, Minneapolis

---

## 🥞 For the Comfort Food Dad — Hard Times Cafe

**[Hard Times Cafe](/restaurants/hard-times-cafe)** in Seward has been feeding Minneapolis's vegan community since 1989. It's not fancy — it's better than fancy. Cash-only, punk-diner energy, and the **best vegan biscuits and gravy in the city**.

For the dad who grew up on Saturday morning diner breakfasts and doesn't want something pretentious, Hard Times is the move. Everything on the menu is vegan. The portions are generous. The coffee is strong.

**Father's Day picks:**
- Biscuits & gravy (the signature — don't skip it)
- Seitan scramble with hash browns
- Pancakes with maple syrup
- Their rotating specials (always worth checking the board)

**Pro tip:** Arrive right at opening. Hard Times fills up fast on weekends and doesn't take reservations.

**Address:** 1821 Riverside Ave, Minneapolis | **Cash only**

---

## 🥂 For the Fancy Brunch Dad — J. Selby's

For the dad who deserves a proper celebration, **[J. Selby's](/restaurants/j-selbys)** in St. Paul's Cathedral Hill neighborhood is the premier vegan brunch spot in the Twin Cities.

Fully vegan, full service, full menu — and genuinely excellent food. The kind of place where you make a reservation, dress slightly better than usual, and linger over coffee. It's a 15-minute drive from downtown Minneapolis and absolutely worth it.

**Father's Day brunch highlights:**
- Avocado toast with housemade sourdough
- Seasonal specials (often feature local produce)
- Brunch cocktails and mocktails
- Excellent coffee program
- Spacious, relaxed atmosphere

**⚠️ Reserve early.** Father's Day is one of the busiest brunch days of the year. Book through their website by **early June** to guarantee a spot.

**Address:** 169 Western Ave N, St. Paul

---

## ☕ For the Coffee-Loving Dad — Reverie Cafe + Bar

**[Reverie Cafe + Bar](/restaurants/reverie-cafe-bar)** in Lyn-Lake is the spot if Dad's Father's Day vibe is more "excellent espresso and a pastry in a beautiful space" than "big brunch spread."

Reverie isn't exclusively vegan but has a strong plant-based menu. The pastries are exceptional. The coffee is serious. The space is warm and genuinely lovely — good for an unhurried morning with the family.

**Best for:** The dad who's an early riser, into specialty coffee, or prefers a lighter morning before a bigger meal later in the day.

**Address:** 2506 Hennepin Ave, Minneapolis

---

## 🌿 For the Health-Conscious Dad — Common Roots Cafe

**[Common Roots Cafe](/restaurants/common-roots-cafe)** in Uptown is Minneapolis's go-to for farm-to-table eating with a strong vegan menu. The menu changes with the season. Local sourcing is prioritized. And in June, the outdoor seating is genuinely great.

For the dad who eats well and cares where his food comes from, Common Roots is the right call.

**Why it works:**
- Seasonal, locally sourced menu
- Excellent vegan options clearly marked
- Outdoor patio (perfect for mid-June weather)
- Family-friendly, relaxed pace

**Address:** 2558 Lyndale Ave S, Minneapolis

---

## 🎁 Vegan Father's Day Gifts

### Herbivorous Butcher Gift Box
**[Herbivorous Butcher](/restaurants/herbivorous-butcher)** in the North Loop is the best source for vegan Father's Day gifts in Minneapolis. They make artisanal vegan meats and cheeses — sausages, ribs, burger patties, pepperoni, smoked gouda — all from scratch.

For the vegan dad who loves to grill, a Herbivorous Butcher gift box is a home run. Products are available in-store and ship nationwide. Gift cards available online.

**Best gift picks:**
- **Grill Pack** — sausages, burger patties, ribs for the ultimate vegan summer cookout
- **Cheese Board Box** — assorted vegan cheeses for snacking
- **Gift Card** — lets Dad choose his own adventure

**Address:** 507 1st Ave N, Minneapolis (North Loop)

### Glam Doll Donuts Gift Box
**[Glam Doll Donuts](/restaurants/glam-doll-donuts)** offers rotating vegan donut flavors in a gift box — perfect for the dad with a sweet tooth. They're one of the most creative donut shops in the country and a Minneapolis institution.

---

## 🔥 Father's Day Backyard Grill Guide

Not every Father's Day needs to be a restaurant meal. If Dad's a home cook, June 15 is a great excuse for a vegan backyard cookout.

**Shopping list:**
| Item | Source |
|------|--------|
| Vegan sausages & burger patties | Herbivorous Butcher (North Loop) |
| Vegan cheese for burgers | Herbivorous Butcher |
| Produce & corn | Minneapolis Farmers Market (opens 6am) |
| Vegan buns | Seward Co-op or Whole Foods |
| Vegan beer | Most Twin Cities liquor stores — Surly, Fulton, Summit are vegan |

**Tip:** Nearly all craft beer is vegan — unlike some commercial beers, craft breweries typically don't use isinglass (fish bladder) for fining. Surly Brewing and Fulton Beer are both Minnesota-made and vegan-friendly.

---

## Father's Day Weekend in Minneapolis

If you want to make it a full weekend:

**Saturday evening (June 14):**
Visit Reverie or French Meadow for a laid-back dinner. Walk the Stone Arch Bridge or Minnehaha Falls after.

**Sunday brunch (June 15 — Father's Day):**
Reserve J. Selby's in advance, or walk into Hard Times Cafe early. Bring flowers from the Minneapolis Farmers Market.

**Sunday afternoon:**
Head to Minnehaha Park for a walk along the creek. The falls are at their best in June from snowmelt. Fully accessible, free parking.

**Sunday evening:**
Francis Burger Joint for a cold beer and a burger and maybe a game on TV. No reservations. Walk right in.

---

Looking for more Minneapolis vegan dining ideas? Check our [complete vegan restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026), [best vegan brunch spots](/blog/vegan-brunch-minneapolis), or our [vegan date night guide](/blog/vegan-date-night-minneapolis) for evening options.
`
  },
  {
    slug: "late-night-vegan-food-minneapolis",
    title: "Late Night Vegan Food Minneapolis: Where to Eat After 10pm 🌙",
    description: "Hungry after midnight in Minneapolis? Find the best late night vegan-friendly restaurants — from Pizza Karma's 3am fire-roasted pies to Francis Burger Joint's fully vegan bar. Real options, real hours.",
    publishedAt: "2026-02-23",
    updatedAt: "2026-02-23",
    author: "Mia & Jay",
    category: "guides",
    tags: ["late night", "late night dining minneapolis", "late night eats minneapolis", "vegan minneapolis", "after midnight", "pizza", "burgers", "ramen"],
    readingTime: "5 min read",
    tldr: "Best late night vegan dining in Minneapolis: Pizza Karma (Dinkytown, open until 3am Thu–Sat, dairy-free cheese, student prices — the #1 pick), Pizza Lucé (Downtown, late-night delivery, legendary vegan cheese), Francis Burger Joint (NE Minneapolis, 100% vegan bar + burgers, late night). Most fully vegan restaurants close by 10pm, so your options are real but limited — this guide covers all of them.",
    faqs: [
      {
        question: "Where can I get vegan food late at night in Minneapolis?",
        answer: "Pizza Karma in Dinkytown is the best vegan-friendly late night option in Minneapolis — open until 3am on Thursday, Friday, and Saturday. They have dairy-free cheese, fire-roasted pizza, and student-friendly prices. Pizza Lucé (Downtown) offers late-night delivery with vegan options. Francis Burger Joint in Northeast Minneapolis is 100% vegan with a full vegan bar and late-night hours."
      },
      {
        question: "Is Pizza Karma vegan-friendly?",
        answer: "Yes. Pizza Karma in Dinkytown offers dairy-free cheese that actually melts and stretches, vegan toppings clearly marked on the menu, and South Asian-inspired flavor profiles that go beyond the standard vegan pizza. They're open until 3am Thursday through Saturday, making them Minneapolis's best late-night vegan-friendly pizza option."
      },
      {
        question: "Does Pizza Lucé have vegan options?",
        answer: "Yes — Pizza Lucé has been a vegan-friendly institution in the Twin Cities for decades. Their house-made vegan cheese melts well, and popular options include the Veggie Lucé (artichokes, tomatoes, olives) and the Baked Potato Pizza with vegan sour cream. They offer late-night delivery, making them a go-to after concerts and nights out."
      },
      {
        question: "What is the latest a vegan restaurant in Minneapolis is open?",
        answer: "Pizza Karma in Dinkytown is open until 3:00 AM on Thursday, Friday, and Saturday — making it the latest vegan-friendly dining option in Minneapolis. Most fully vegan restaurants (J. Selby's, Reverie, Seward Cafe) close between 8–10pm. Francis Burger Joint and Pizza Lucé have later hours than average for plant-based dining."
      },
      {
        question: "Is there late night vegan delivery in Minneapolis?",
        answer: "Yes. Pizza Karma (Dinkytown) offers late-night delivery via DoorDash and Uber Eats on Thursday through Saturday until 3am. Pizza Lucé delivers late to Downtown, Uptown, and surrounding neighborhoods. Both are reliably vegan-friendly with dairy-free cheese options."
      },
      {
        question: "Can I get vegan ramen in Minneapolis late at night?",
        answer: "Tori Ramen & Yakitori in the North Loop serves a Veggie Ramen with rich mushroom broth, chewy noodles, roasted vegetables, and tofu — and they stay open later than most ramen spots. Call ahead to confirm current hours, as late-night availability can vary by season."
      }
    ],
    relatedRestaurants: ["pizza-karma", "pizza-luce", "francis-burger-joint", "tori-ramen"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-pizza-minneapolis", "best-vegan-pizza-minneapolis", "vegan-date-night-minneapolis", "northeast-minneapolis-vegan-guide", "vegan-bars-minneapolis"],
    content: `# Late Night Vegan Food Minneapolis: Where to Eat After 10pm 🌙

Minneapolis has a genuinely great vegan restaurant scene — but most of it closes by 9 or 10pm. If you're coming back from a concert at First Avenue, wrapping up a long shift, or just hungry at midnight, your options shrink fast. This is the reality of late night vegan dining here: real, but limited.

Here's where to go.

---

## 🍕 Pizza Karma — Dinkytown (Open Until 3am Thu–Sat)

**Address:** 409 14th Ave SE, Minneapolis
**Hours:** Mon–Wed 11am–11pm | **Thu–Sat 11am–3:00 AM** | Sun 11am–11pm
**Price:** $ | Vegan-Friendly | Dairy-Free Cheese

If you're hungry after midnight in Minneapolis, **Pizza Karma is the answer**. It's the only vegan-friendly spot in the city that's open until 3am — and it's legitimately good.

The fire-roasted crust has real char. The dairy-free cheese actually melts and stretches (rarer than it sounds). The flavor profiles pull from South Asian heritage — tikka-inspired sauces, aromatic spice blends, and bold toppings that make standard pizza feel boring by comparison. Prices are student-budget friendly: fire-roasted artisan pizza at fast-food prices.

**What to order:**
- Any pie with dairy-free cheese — the melt is the real thing
- Build-your-own with South Asian-inspired toppings
- The Dinkytown Karma Bowl — customizable, filling, vegan-friendly
- Late-night delivery special (Thu–Sat after midnight)

The Dinkytown location is a U of M institution — buzzy, casual, perfect for groups rolling in from a night out. Late-night delivery via DoorDash/Uber Eats makes it even more accessible.

**→ [View Pizza Karma on MPLSVegan](/restaurants/pizza-karma)**

---

## 🍕 Pizza Lucé — Downtown (Late Night Delivery)

**Address:** 119 N 4th St, Minneapolis (+ multiple locations)
**Price:** $$ | Vegan-Friendly | Full Bar

Pizza Lucé has been a Twin Cities institution for decades — and they've been doing vegan pizza right since before it was a trend. The house-made vegan cheese **melts and stretches**. The late-night delivery coverage is extensive.

**What to order:**
- **Veggie Lucé** — artichokes, tomatoes, olives, vegan cheese
- **Baked Potato Pizza** — vegan sour cream, a local legend
- Vegan hoagies and pasta (dinner menu)

Multiple locations mean better late-night delivery coverage across the city. Downtown, Uptown, Seward — check the website for the location nearest to you. The full bar means your pizza arrives with a drink menu if you're eating in.

**→ [View Pizza Lucé on MPLSVegan](/restaurants/pizza-luce)**

---

## 🍔 Francis Burger Joint — Northeast Minneapolis (Late Night + Full Vegan Bar)

**Address:** 2422 Central Ave NE, Minneapolis
**Price:** $$ | **100% Vegan** | Full Vegan Bar | Late Night

Francis is the late-night option for when you want something more substantial than pizza — and you want everything to be fully, authentically vegan. **The entire bar program is vegan**: no crushed beetle dyes in cocktails, no fish bladder-filtered wines, no animal-derived additives in any drink.

The burgers are the draw: a taco-seasoned Impossible burger, a garlicky black bean burger, and a Juicy Lucy stuffed with vegan cheese. The Northeast space is industrial-chic, laid-back, and exactly the right energy for a late-night hangout.

There's also a Longfellow location if NE isn't convenient.

**→ [View Francis Burger Joint on MPLSVegan](/restaurants/francis-burger-joint)**

---

## 🍜 Tori Ramen & Yakitori — North Loop (Late Night Ramen)

**Address:** 161 N 1st St, Minneapolis
**Price:** $$ | Vegan-Friendly | Late Night

Tori Ramen serves one of the better vegan ramen bowls in Minneapolis — a rich mushroom broth, perfectly chewy noodles, roasted vegetables, and tofu. The charred shiitake mushroom yakitori skewers are excellent. It's the late-night option for a warming bowl after a North Loop night out.

Call ahead to confirm current late-night hours, as availability can shift seasonally.

**→ [View Tori Ramen on MPLSVegan](/restaurants/tori-ramen)**

---

## The Reality: Minneapolis Vegan Dining at Night

Let's be honest about the landscape. The fully vegan restaurants in Minneapolis — [J. Selby's](/restaurants/j-selbys), [Reverie](/restaurants/reverie-cafe-bar), [Seward Cafe](/restaurants/seward-cafe), [Hard Times Cafe](/restaurants/hard-times-cafe) — are phenomenal, but they're not late-night spots. Most close between 8 and 10pm.

What you're working with after 10pm:

| Restaurant | Neighborhood | Latest Hours | Vegan Status |
|-----------|--------------|-------------|--------------|
| [Pizza Karma](/restaurants/pizza-karma) | Dinkytown | **3am (Thu–Sat)** | Vegan-Friendly |
| [Pizza Lucé](/restaurants/pizza-luce) | Downtown | Late night delivery | Vegan-Friendly |
| [Francis Burger Joint](/restaurants/francis-burger-joint) | Northeast | Late night | 100% Vegan |
| [Tori Ramen](/restaurants/tori-ramen) | North Loop | Late night | Vegan-Friendly |

---

## Tips for Late Night Vegan Eating in Minneapolis

**1. Pizza Karma is your default.** Nothing else in the city hits 3am with legitimate vegan options. Bookmark it.

**2. Check delivery apps.** Pizza Karma and Pizza Lucé both appear on DoorDash and Uber Eats after midnight on weekends.

**3. Francis for the full experience.** If you want a full meal — burger, craft cocktail, the whole thing — Francis is worth the trip to Northeast. Everything is vegan, no asterisks.

**4. Call ahead for ramen.** Tori Ramen's late-night availability varies. Don't assume; call first.

**5. Plan for brunch instead.** If late-night vegan options feel limiting, Minneapolis absolutely delivers on [weekend vegan brunch](/blog/vegan-brunch-minneapolis) — the scene is excellent and fully plant-based spots hold nothing back.

---

## Late Night Vegan Pizza in Minneapolis: A Note

Both Pizza Karma and Pizza Lucé have made late-night vegan pizza a real, reliable option in Minneapolis. The difference:

- **Pizza Karma** → fire-roasted, South Asian-inspired flavors, open until 3am, Dinkytown
- **Pizza Lucé** → Twin Cities institution, multiple locations, extensive delivery coverage, full bar

Neither requires you to awkwardly ask "can you make this vegan?" — both have genuine dairy-free cheese and vegan menus built in.

→ [Full vegan pizza guide: Best Vegan Pizza Minneapolis](/blog/best-vegan-pizza-minneapolis)

---

## Related Guides

- [Best Vegan Restaurants Minneapolis 2026](/blog/best-vegan-restaurants-minneapolis-2026)
- [Vegan Date Night Minneapolis](/blog/vegan-date-night-minneapolis)
- [Northeast Minneapolis Vegan Guide](/blog/northeast-minneapolis-vegan-guide)
- [Best Vegan Pizza Minneapolis](/blog/best-vegan-pizza-minneapolis)
`,
  },
  {
    slug: "vegan-mothers-day-brunch-minneapolis-2026",
    title: "Best Vegan Mother's Day Brunch in Minneapolis 2026 | Plant-Based May Dining",
    description: "Celebrate Mom plant-based style! Find the best vegan Mother's Day brunch spots in Minneapolis 2026 — from J. Selby's indulgent brunch to Reverie's gorgeous ambiance. Mother's Day is May 11.",
    publishedAt: "2026-02-23",
    updatedAt: "2026-02-23",
    author: "Mia & Jay",
    category: "seasonal",
    tags: ["mother's day", "mother's day brunch", "vegan minneapolis", "brunch", "2026", "spring", "may"],
    readingTime: "6 min read",
    tldr: "Best vegan Mother's Day brunch in Minneapolis 2026: J. Selby's (fully vegan, indulgent brunch — reserve 3-4 weeks ahead), Reverie Cafe (beautiful ambiance, 100% vegan), Crepe & Spoon (elegant vegan crepes, perfect for a special occasion), French Meadow (plant-based options, great for mixed vegan/non-vegan families). Mother's Day is May 11, 2026. Popular spots fill up fast — reserve by mid-April.",
    faqs: [
      {
        question: "What Minneapolis restaurants are fully vegan for Mother's Day brunch?",
        answer: "J. Selby's (St. Paul) is fully vegan and serves an outstanding indulgent brunch — perfect for a special Mother's Day celebration. Reverie Cafe (South Minneapolis) is 100% vegan with beautiful ambiance, ideal for making Mom feel special. Crepe & Spoon (Uptown) is 100% vegan with elegant savory and sweet crepes. The Herbivorous Butcher is great for a Mother's Day gift or at-home celebration."
      },
      {
        question: "When is Mother's Day 2026?",
        answer: "Mother's Day 2026 falls on Sunday, May 11. Popular brunch spots — especially fully vegan restaurants — fill up 3-4 weeks in advance. Make reservations by mid-April to secure your preferred time slot. Reverie and J. Selby's are particularly popular for special occasions."
      },
      {
        question: "What are the best vegan-friendly restaurants for Mother's Day in Minneapolis?",
        answer: "For mixed vegan/non-vegan families, French Meadow Bakery & Cafe has strong plant-based options in an elegant setting and accommodates all dietary preferences. Common Roots Cafe is great for a neighborhood brunch with seasonal, locally sourced ingredients. Wedge Table offers farm-to-table dining with plenty of vegan options for a more upscale Mother's Day dinner."
      },
      {
        question: "Where can I get a vegan Mother's Day gift in Minneapolis?",
        answer: "The Herbivorous Butcher (North Loop) creates beautiful Mother's Day gift sets — vegan charcuterie, specialty meats, and artisan items. Wedge Co-op and Seward Co-op carry vegan chocolates, specialty foods, and locally made gift items. Glam Doll Donuts (Whittier) sells beautiful vegan donuts that make a fun and delicious Mother's Day treat."
      },
      {
        question: "Do Minneapolis vegan restaurants take reservations for Mother's Day?",
        answer: "Yes — and you should make them as early as possible for Mother's Day. J. Selby's, Reverie, French Meadow, and Crepe & Spoon all take reservations. Hard Times Cafe is walk-in only. Popular vegan spots fill up significantly on Mother's Day weekend, so aim to book 3-4 weeks ahead (by mid-April for May 11)."
      }
    ],
    relatedRestaurants: ["j-selbys", "reverie-cafe-bar", "crepe-and-spoon", "french-meadow", "herbivorous-butcher", "glam-doll-donuts"],
    relatedPosts: ["vegan-brunch-minneapolis", "vegan-easter-brunch-minneapolis-2026", "vegan-fathers-day-minneapolis-2026", "best-vegan-restaurants-minneapolis-2026", "vegan-food-minneapolis"],
    content: `# Best Vegan Mother's Day Brunch in Minneapolis 2026

Mother's Day 2026 is Sunday, May 11 — and Minneapolis has a genuinely outstanding vegan restaurant scene to celebrate the occasion in style. Whether Mom is fully plant-based, vegan-curious, or you're navigating a mixed dietary group, this guide covers the best options for a memorable vegan Mother's Day brunch in the Twin Cities.

Planning ahead? Read our [best vegan brunch guide](/blog/vegan-brunch-minneapolis) or [top vegan restaurants in Minneapolis](/blog/best-vegan-restaurants-minneapolis-2026) for the full picture.

---

## 🌸 Reserve Early — Mother's Day Is Busy

Mother's Day is one of the busiest restaurant days of the year. Fully vegan restaurants with a reputation for special occasions fill up particularly fast. **Reserve by mid-April** to guarantee your first-choice spot for May 11.

---

## Best Fully Vegan Brunch Spots for Mother's Day

### 1. [J. Selby's](/restaurants/j-selbys) — St. Paul (Cathedral Hill)
**Address:** 169 Western Ave N, St. Paul
**The pick for:** The vegan mom who deserves an indulgent, special-occasion brunch

J. Selby's is the Twin Cities' most beloved fully vegan brunch restaurant — and Mother's Day is exactly the kind of occasion it was made for. Expect comfort-food brunch at its finest: vegan chicken and waffles, loaded tofu scramble with seasonal vegetables, housemade pastries, incredible vegan French toast, and a rotating menu that always impresses.

The atmosphere is warm and welcoming, the service is excellent, and everything on the menu is 100% plant-based — so Mom never has to navigate "can you make this vegan?" conversations.

**Reservations:** Essential for Mother's Day — book 3-4 weeks ahead
**Price range:** $$ | 100% vegan
**Hours:** Brunch/lunch service — check Instagram for Mother's Day hours

---

### 2. [Reverie Cafe + Bar](/restaurants/reverie-cafe-bar) — South Minneapolis (Powderhorn)
**Address:** 1517 E 35th St, Minneapolis
**The pick for:** Beautiful ambiance + 100% vegan menu

Reverie is one of Minneapolis's most atmospheric restaurants — exposed brick, natural light, and a beautifully curated space that makes any occasion feel special. The fact that it's 100% vegan is almost a bonus.

The menu leans creative and seasonal: expect inventive savory dishes, house-baked pastries, excellent coffee drinks, and a cocktail/mocktail menu that's perfect for a Mother's Day celebration. Reverie is one of those rare spots where the food *and* the vibe both deliver on a special day.

**Reservations:** Highly recommended for Mother's Day weekend
**Price range:** $$ | 100% vegan
**Neighborhood:** Powderhorn / South Minneapolis

---

### 3. [Crepe & Spoon](/restaurants/crepe-and-spoon) — Uptown
**Address:** 3244 Hennepin Ave S, Minneapolis
**The pick for:** Elegant brunch, fully vegan, special-occasion feel

Crepe & Spoon is Minneapolis's fully vegan crêperie — and its elegant, café-bistro atmosphere makes it a natural choice for Mother's Day. Both savory and sweet crêpes are on the menu: think roasted vegetable savory options and fruit-forward sweet crêpes for a quintessential brunch spread.

The intimate, European-café vibe works beautifully for a Mother's Day celebration — especially if Mom enjoys a leisurely, unhurried brunch experience.

**Price range:** $$ | 100% vegan
**Location:** Uptown, near Bde Maka Ska

---

## Great Vegan-Friendly Options (Mixed Groups Welcome)

### 4. [French Meadow Bakery & Cafe](/restaurants/french-meadow) — Whittier/Lyndale
**Address:** 2610 Lyndale Ave S, Minneapolis
**The pick for:** Mixed vegan/non-vegan families, elegant setting

French Meadow has been a Minneapolis institution since 1985 — organic, locally sourced, and genuinely committed to plant-based cooking. The vegan and gluten-free options are plentiful and excellent, making it ideal when the Mother's Day group includes non-vegans.

The space is spacious and comfortable, service is polished, and the brunch menu covers everything from hearty scrambles to lighter options and baked goods. A reliable, crowd-pleasing choice.

**Price range:** $$ | Vegan-Friendly
**Hours:** Brunch daily — popular on weekends, reservations recommended

---

### 5. [Wedge Table](/restaurants/wedge-table) — Lyndale
**The pick for:** Farm-to-table Mother's Day dinner

If you're celebrating Mother's Day with a dinner rather than brunch, Wedge Table is the Twin Cities' premier farm-to-table dining experience with genuine commitment to plant-based options. The seasonal menu highlights local farmers and producers, and vegan dishes are thoughtfully prepared rather than an afterthought.

**Price range:** $$$ | Vegan-Friendly
**Note:** More dinner-appropriate; check seasonal brunch availability

---

### 6. [Common Roots Cafe](/restaurants/common-roots-cafe) — Uptown
**The pick for:** Neighborhood brunch, sustainable and local

A neighborhood gem that's been doing sustainable, locally sourced brunch for years. Common Roots has solid vegan options and a relaxed, welcoming atmosphere that's perfect for a casual Mother's Day brunch without the reservation pressure of bigger spots.

**Price range:** $ | Vegan-Friendly

---

## 🎁 Mother's Day Vegan Gift Ideas in Minneapolis

**[The Herbivorous Butcher](/restaurants/herbivorous-butcher)** — America's first vegan butcher shop creates beautiful Mother's Day gift sets: housemade seitan, vegan charcuterie boards, and specialty items. Order online or visit the North Loop shop. Perfect for the vegan mom who loves to cook.

**Glam Doll Donuts** (2605 Nicollet Ave) — Beautiful, creative vegan donuts that make a delightful and Instagram-worthy Mother's Day treat. The rotating seasonal flavors often include spring-inspired options.

**Wedge Co-op / Seward Co-op** — Both carry vegan chocolates, locally made gift items, specialty foods, and everything you need to build a beautiful vegan brunch at home.

---

## Making Mother's Day Brunch at Home

If you'd rather celebrate at home (or supplement restaurant reservations with a home element), here's a simple vegan Mother's Day brunch spread:

**The Menu:**
- **Savory:** Tofu scramble with spring asparagus and mushrooms
- **Sweet:** Vegan French toast with strawberry-rhubarb compote (rhubarb peaks in May)
- **Bread:** Herbivorous Butcher seitan sausages or vegan bacon
- **Drinks:** Mimosas (most sparkling wines are vegan — check Barnivore.com), fresh-squeezed OJ, oat milk lattes
- **Dessert:** Glam Doll Donuts picked up the morning of

**Spring ingredient to highlight:** Rhubarb and asparagus both peak in May — both are naturally vegan and make beautiful seasonal additions to a Mother's Day brunch spread.

---

## When to Make Reservations

| Restaurant | Reservation Type | Book By |
|-----------|-----------------|---------|
| J. Selby's | OpenTable / direct | Mid-April |
| Reverie Cafe | Direct / Resy | Mid-April |
| Crepe & Spoon | Direct | Late April |
| French Meadow | OpenTable | Late April |
| Hard Times Cafe | Walk-in only | — |

---

*Happy Mother's Day from Minneapolis's plant-based community! Looking for more seasonal vegan guides? Check our [vegan Easter brunch guide](/blog/vegan-easter-brunch-minneapolis-2026) and [best Minneapolis vegan restaurants](/blog/best-vegan-restaurants-minneapolis-2026).*`,
  },
  {
    slug: "vegan-easter-brunch-minneapolis-2026",
    title: "Best Vegan Easter Brunch in Minneapolis 2026 | Plant-Based Easter Dining",
    description: "Find the best vegan Easter brunch spots in Minneapolis for 2026. From J. Selby's indulgent brunch to Herbivorous Butcher Easter specials — celebrate plant-based on April 20.",
    publishedAt: "2026-02-23",
    updatedAt: "2026-02-23",
    author: "Mia & Jay",
    category: "seasonal",
    tags: ["easter", "easter brunch", "vegan minneapolis", "brunch", "2026", "spring"],
    readingTime: "6 min read",
    tldr: "Best vegan Easter brunch in Minneapolis 2026: J. Selby's (fully vegan, indulgent brunch — reserve 2-3 weeks ahead), Herbivorous Butcher (Easter deli items + gift baskets, order online), Reverie Cafe (seasonal spring lattes and pastries), French Meadow (elegant plant-based options for family gatherings). Easter is April 20, 2026. Hard Times Cafe is the affordable walk-in option if everywhere else is booked.",
    faqs: [
      {
        question: "What Minneapolis restaurants are fully vegan for Easter brunch?",
        answer: "J. Selby's in St. Paul is fully vegan and serves an outstanding indulgent Easter brunch. The Herbivorous Butcher (North Loop) is 100% vegan with Easter-themed deli items and holiday gift sets. Crepe & Spoon (Uptown) is 100% vegan. For vegan-friendly Easter brunch with plant-based options, Reverie Cafe and French Meadow are excellent choices."
      },
      {
        question: "Do Minneapolis vegan restaurants do Easter specials in 2026?",
        answer: "The Herbivorous Butcher typically offers Easter-themed products, seitan roasts, and gift baskets. J. Selby's often runs seasonal brunch specials. Reverie Cafe does seasonal spring drinks and pastries. Most spots announce Easter specials on Instagram 1-2 weeks before April 20 — follow them for updates."
      },
      {
        question: "When is Easter 2026?",
        answer: "Easter Sunday 2026 falls on April 20. Popular brunch spots fill up 2-3 weeks in advance, so make reservations by early April. Hard Times Cafe doesn't take reservations — walk-in only."
      },
      {
        question: "Where can I buy vegan Easter candy or a gift basket in Minneapolis?",
        answer: "The Herbivorous Butcher puts together holiday gift sets for Easter — seitan, vegan charcuterie, and specialty items. Wedge Co-op and Seward Co-op carry vegan chocolate Easter candy (Enjoy Life, Hu Chocolate, Justin's dark chocolate). For online orders, Lagusta's Luscious vegan chocolates ship nationally."
      },
      {
        question: "What's a good vegan Easter brunch menu to make at home?",
        answer: "A great vegan Easter brunch: tofu scramble with spring asparagus and leeks, Herbivorous Butcher seitan 'ham' with maple glaze, roasted spring vegetables (asparagus is peak season in April), vegan French toast with strawberry compote, and OJ mimosas. Most Champagne and Prosecco is vegan — check Barnivore.com to confirm."
      }
    ],
    relatedRestaurants: ["j-selbys", "herbivorous-butcher", "reverie-cafe-bar", "french-meadow", "hard-times-cafe"],
    relatedPosts: ["vegan-brunch-minneapolis", "best-vegan-restaurants-minneapolis-2026", "vegan-mothers-day-brunch-minneapolis-2026", "vegan-st-patricks-day-minneapolis-2026", "vegan-food-minneapolis"],
    content: `# Best Vegan Easter Brunch in Minneapolis 2026

Easter Sunday 2026 falls on April 20 — and Minneapolis has one of the best vegan restaurant scenes in the Midwest to celebrate with. Whether you want a fully vegan spot, a restaurant with strong plant-based options, or ideas for hosting a plant-based Easter brunch at home, this guide covers it all.

New to Minneapolis vegan dining? Explore our [complete vegan restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026) or [best vegan brunch spots](/blog/vegan-brunch-minneapolis) for the full picture.

---

## 🐰 Best Fully Vegan Easter Brunch in Minneapolis

### 1. [J. Selby's](/restaurants/j-selbys) — St. Paul (Cathedral Hill)
**Address:** 169 Western Ave N, St. Paul
**Why it's perfect for Easter:** Minneapolis/St. Paul's most beloved fully vegan brunch restaurant. Easter at J. Selby's means indulgent, comfort-food brunch: vegan chicken and waffles, loaded tofu scramble, housemade pastries, incredible vegan French toast. It's the kind of brunch that makes the holiday feel like a genuine celebration.
**Reservations:** Essential for Easter weekend — book 2-3 weeks in advance
**Hours:** Check Instagram for Easter Sunday hours
**Price range:** $$ | 100% vegan

### 2. [The Herbivorous Butcher](/restaurants/herbivorous-butcher) — North Loop
**Address:** 507 1st Ave NE, Minneapolis
**Why it's perfect for Easter:** America's first 100% vegan butcher shop does Easter right. Expect Easter-themed deli items, gift baskets, seitan roasts, and housemade plant-based charcuterie perfect for a spring spread. Their maple-glazed seitan roast is the centerpiece for a vegan Easter dinner at home.
**Pro tip:** Order Easter items online 1-2 weeks ahead — holiday products sell out fast
**Price range:** $$ | 100% vegan

### 3. Crepe & Spoon — Uptown
**Why it's perfect for Easter dessert:** 100% vegan, specializing in decadent housemade ice cream and sweet crepes. Not a full brunch spot, but an outstanding Easter dessert destination. Rotating seasonal flavors for spring — blueberry cardamom and coconut ash are fan favorites.
**Price range:** $$ | 100% vegan

---

## 🌸 Best Vegan-Friendly Easter Brunch (Strong Plant-Based Options)

### 4. [Reverie Cafe + Bar](/restaurants/reverie-cafe-bar) — North Loop
**Address:** 904 N 3rd St, Minneapolis
**Why it's perfect for Easter:** Zero-waste cafe with gorgeous seasonal specials — expect spring-themed lattes, floral drinks, vegan pastries, and a relaxed atmosphere perfect for Easter morning. Smaller and more intimate than a full brunch restaurant.
**Order:** Seasonal oat milk latte, vegan croissants, avocado toast
**Price range:** $$ | Extensive vegan options

For more brunch ideas, see our complete [vegan brunch guide for Minneapolis](/blog/vegan-brunch-minneapolis).

### 5. [French Meadow Bakery & Cafe](/restaurants/french-meadow) — Lyndale
**Address:** 2610 Lyndale Ave S, Minneapolis
**Why it's perfect for Easter:** One of Minneapolis's original organic restaurants, French Meadow has been serving vegan-friendly brunch since before it was cool. Elegant enough for a family Easter gathering, with a strong plant-based menu. Great for groups where not everyone is vegan.
**Order:** Vegan French toast, avocado toast, housemade granola bowls, organic coffee
**Reservations:** Recommended for Easter weekend
**Price range:** $$ | Many vegan options

### 6. [Hard Times Cafe](/restaurants/hard-times-cafe) — Stadium Village
**Address:** 1821 Riverside Ave, Minneapolis
**Why it's perfect for Easter backup:** No reservations, open all day, completely affordable. Worker-owned cooperative with a big vegan menu. If all the popular spots are booked, Hard Times is always there. Expect zero Easter fanfare and excellent vegan food.
**Price range:** $ | Many vegan options

---

## 🌷 Vegan Easter Brunch at Home: Minneapolis Guide

Hosting Easter brunch at home? Minneapolis has outstanding resources for a fully plant-based spring spread.

### Where to Shop in Minneapolis for Vegan Easter
- **The Herbivorous Butcher** (North Loop) — Holiday seitan roasts, vegan charcuterie, gift sets. Order online to guarantee availability.
- **Wedge Co-op** (Lyndale) — Best selection of vegan specialty items, local organic spring produce, vegan chocolate Easter candy
- **Seward Co-op** (Franklin Ave + St. Paul) — Bulk section, local produce, vegan Easter candy
- **Mississippi Market** (St. Paul) — Great for produce, specialty items, vegan deli

### Spring Easter Vegan Menu
**Main course:**
- Herbivorous Butcher seitan roast with maple glaze (serves 6)
- Roasted spring vegetables: asparagus, radishes, snap peas (peak season in April)

**Brunch staples:**
- Tofu scramble with spring asparagus, leeks, and herbs
- Vegan French toast with strawberry-rhubarb compote

**Sides:**
- Fruit salad with fresh strawberries (in season by Easter)
- Mimosas — most Champagne and Prosecco is vegan, check Barnivore.com to confirm

**Dessert:**
- Crepe & Spoon pints (delivery or pickup) — blueberry cardamom or salted caramel
- Vegan chocolate Easter candy from local co-ops

### Vegan Easter Candy in Minneapolis
- **Wedge Co-op / Seward Co-op**: Carry Enjoy Life, Hu Chocolate, and Justin's dark chocolate eggs
- **Target**: Growing vegan Easter candy selection each year
- **Online**: Lagusta's Luscious vegan chocolates are exceptional and ship nationally

---

## 📍 Easter Activities in Minneapolis 2026

**Easter Sunday 2026:** April 20

Minneapolis Easter activities:
- **Minnehaha Park** — Classic Easter morning walk; the falls are especially beautiful in spring
- **Minneapolis Sculpture Garden** — Free, outdoor, perfect for a post-brunch stroll
- **Midtown Global Market** — Check for Easter market events in April
- **Local brewery Easter pop-ups** — Many Minneapolis breweries do Easter Sunday brunch events; check event listings in early April

---

## 🥂 Vegan Easter Brunch Planning Tips

**Book early.** J. Selby's and French Meadow are popular on Easter Sunday — reservations open 2-3 weeks before April 20. Hard Times Cafe is always walk-in.

**Check Instagram for specials.** The Herbivorous Butcher, Reverie Cafe, and J. Selby's typically announce Easter specials and seasonal items 1-2 weeks ahead. Worth following all three.

**Consider a two-stop Easter.** Brunch at J. Selby's or French Meadow → dessert at Crepe & Spoon. That's a perfect Minneapolis vegan Easter day.

**Order Herbivorous Butcher early.** Holiday products sell out — Easter gift sets and seitan roasts typically go up in late March. Online orders are easiest.

---

## More Minneapolis Vegan Guides

- 🍳 [Best Vegan Brunch in Minneapolis](/blog/vegan-brunch-minneapolis) — Full brunch guide with 10+ spots
- 🥗 [Best Vegan Restaurants Minneapolis 2026](/blog/best-vegan-restaurants-minneapolis-2026) — The complete directory
- 🍀 [Vegan St. Patrick's Day Minneapolis 2026](/blog/vegan-st-patricks-day-minneapolis-2026) — March vegan guide + parade tips
- 🌿 [Vegan Food Minneapolis: The Complete Guide](/blog/vegan-food-minneapolis) — By category: comfort food, Ethiopian, pizza & more
`,
  },
  {
    slug: "vegan-st-patricks-day-minneapolis-2026",
    title: "Best Vegan St. Patrick's Day Restaurants & Events in Minneapolis 2026",
    description: "Celebrate St. Patrick's Day in Minneapolis with the best vegan-friendly Irish-inspired spots, green food deals, and plant-based ways to go green this March 17.",
    publishedAt: "2026-02-23",
    updatedAt: "2026-02-23",
    author: "Mia & Jay",
    category: "seasonal",
    tags: ["st patricks day", "vegan minneapolis", "minneapolis events", "green food", "2026"],
    readingTime: "6 min read",
    tldr: "St. Patrick's Day in Minneapolis is a big deal — and vegans don't have to compromise. Top picks: Herbivorous Butcher (vegan corned beef!), Hard Times Cafe (cheap, punk rock, worker-owned), Reverie Cafe (zero-waste brunch before the parade), Pizza Luce (best vegan pizza + drink specials). The Minneapolis St. Patrick's Day Parade is March 15 on Nicollet Mall at noon. Most green beer is vegan — check Barnivore.com to be sure. For staying in: make colcannon (naturally vegan), jackfruit corned beef, Irish soda bread, and Guinness (vegan since 2018).",
    faqs: [
      {
        question: "Is green beer vegan?",
        answer: "Most green beer is technically vegan — it's just lager with green food coloring. But some beers use animal-derived fining agents like isinglass. Check Barnivore.com for specific brands. Guinness has been vegan since 2018."
      },
      {
        question: "Where can I get vegan corned beef in Minneapolis?",
        answer: "The Herbivorous Butcher in the North Loop makes plant-based corned beef and other deli meats. It's the closest thing to a traditional Irish-American St. Patrick's Day plate you'll find — fully vegan."
      },
      {
        question: "When is the Minneapolis St. Patrick's Day Parade 2026?",
        answer: "The Minneapolis St. Patrick's Day Parade runs Sunday, March 15, 2026 on Nicollet Mall from 5th Street to 12th Street, starting at noon. It's the weekend before St. Patrick's Day (March 17)."
      },
      {
        question: "What vegan Irish food can I make at home?",
        answer: "Classic vegan Irish spread: colcannon (mashed potatoes with kale/cabbage — naturally vegan with plant butter), Irish soda bread (sub plant milk + apple cider vinegar for buttermilk), jackfruit slow-cooked with pickling spices as corned beef, and Guinness (vegan since 2018)."
      }
    ],
    relatedRestaurants: ["herbivorous-butcher", "hard-times-cafe", "reverie-cafe-bar", "pizza-luce"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-brunch-minneapolis", "vegan-easter-brunch-minneapolis-2026", "vegan-food-minneapolis", "vegan-comfort-food-minneapolis"],
    content: `# Best Vegan St. Patrick's Day in Minneapolis 2026

St. Patrick's Day in Minneapolis is a big deal — the Twin Cities has a strong Irish heritage, a packed parade, and bars that go green wall-to-wall by noon. The good news for vegans: you don't have to compromise. Minneapolis's thriving plant-based scene means there are plenty of ways to celebrate March 17 without touching a thing that had a heartbeat.

Here's your guide to vegan-friendly St. Patrick's Day dining, events, and green food in Minneapolis for 2026. New to the Minneapolis vegan scene? Check our [complete vegan restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026) for the full picture.

---

## 🍀 The Minneapolis St. Patrick's Day Parade

**When:** Sunday, March 15, 2026 (parade runs the weekend before St. Patrick's Day)
**Route:** Nicollet Mall from 5th Street to 12th Street, starting at noon
**Vegan-friendly:** Yes — street food vendors line the route; look for Herbivorous Butcher pop-ups and local vegan vendors

The Minneapolis St. Patrick's Day Parade is one of the largest in the Upper Midwest, drawing 50,000+ spectators. If you're going, eat before you go or scout the vendor lineup — options improve every year as plant-based street food expands.

---

## 🥗 Best Vegan-Friendly Spots for St. Patrick's Day Eats

### 1. [The Herbivorous Butcher](/restaurants/herbivorous-butcher) — North Loop
**Address:** 507 1st Ave NE, Minneapolis
**Why it's perfect:** Fully vegan deli/butcher serving housemade plant-based meats and cheeses. Their corned "beef" and cabbage situation is the closest thing to a traditional Irish-American St. Patrick's Day plate you'll find in Minneapolis — without any animals.
**Expect:** Long lines on parade day. Order online for pickup if possible.
**Price range:** $$ | Fully vegan

### 2. [Hard Times Cafe](/restaurants/hard-times-cafe) — Stadium Village / Dinkytown
**Address:** 1821 Riverside Ave, Minneapolis
**Why it's perfect:** Worker-owned cooperative with a huge vegan-friendly menu and punk rock energy that fits the holiday. Affordable, filling, and the kind of place that doesn't make veganism a performance.
**Order:** The vegan breakfast burrito, veggie hash
**Price range:** $ | Many vegan options

### 3. [Reverie Cafe + Bar](/restaurants/reverie-cafe-bar) — North Loop
**Address:** 904 N 3rd St, Minneapolis
**Why it's perfect:** Zero-waste cafe with extensive plant-based options. Their seasonal specials often include green-themed drinks in March. Perfect for brunch before the parade. See our full [vegan brunch guide](/blog/vegan-brunch-minneapolis) for more pre-parade breakfast options.
**Order:** Seasonal lattes, vegan pastries
**Price range:** $$ | Many vegan options

### 4. W.A. Frost — Cathedral Hill, St. Paul
*(Worth the 10-minute drive)*
**Address:** 374 Selby Ave, St. Paul
**Why it's perfect:** Upscale restaurant with a beautiful Victorian bar setting — perfect for a St. Patrick's Day dinner that feels special. Strong plant-based menu options; call ahead to ask about seasonal vegan specials.
**Price range:** $$$ | Vegan-accommodating

### 5. [Pizza Luce](/restaurants/pizza-luce) — Multiple Minneapolis Locations
**Why it's perfect:** Minneapolis institution with the best vegan pizza in town. On St. Patrick's Day they go all out with drink specials — and their vegan cheese and meat options are genuinely excellent. Read more in our [best vegan pizza Minneapolis guide](/blog/best-vegan-pizza-minneapolis).
**Locations:** Seward, Downtown, Stadium Village, Uptown
**Order:** Vegan Athena pizza, vegan Ranch and Roll
**Price range:** $$ | Extensive vegan options

---

## 🍺 Green Drinks Done Vegan

Most green beer is technically vegan (lager + food coloring). But if you want to be thorough:

- **Surly Brewing** (Brooklyn Park): Many of their beers are vegan-friendly. Check Barnivore.com for specifics.
- **Indeed Brewing** (NE Minneapolis): Great taproom vibe for St. Patrick's Day. Most IPAs and lagers are vegan.
- **Modist Brewing** (North Loop): Small-batch, most beers vegan. Check with staff.

**Non-alcoholic green options:**
- Matcha lattes (naturally green, celebratory)
- Mint-infused sparkling water with lime
- Spirulina smoothies at local juice bars

---

## 🎯 St. Patrick's Day Vegan Meal Ideas at Home

Can't make it out? Here's how to do a vegan St. Patrick's Day spread at home:

### Traditional Irish-Inspired Vegan Plate
- **Vegan corned beef substitute:** Herbivorous Butcher sells it — or use jackfruit slow-cooked with pickling spices
- **Colcannon:** Classic Irish mashed potatoes with kale or cabbage (naturally vegan with plant butter)
- **Irish soda bread:** Most recipes are vegan with simple substitutions (plant milk + apple cider vinegar for buttermilk)
- **Guinness:** Technically vegan since 2018 (they switched from isinglass filtration)

### Green Food for a Party Table
- Guacamole and chips
- Edamame
- Cucumber and hummus bites
- Spinach dip (vegan version with cashew cream)
- Pistachio pudding parfaits (use coconut milk)

---

## 📍 Minneapolis St. Patrick's Day Events 2026

**The IOAA (Irish Organization of America) Parade**
- Date: March 15, 2026 | Nicollet Mall | Starts noon
- Free to watch, family-friendly

**Bar Crawls**
Many Minneapolis bars organize St. Patrick's Day bar crawls starting the weekend before. Check:
- The Exchange Bar & Grill — Nicollet Mall
- Kieran's Irish Pub — Downtown Minneapolis (classic Irish pub)
- Molly Quinn's — Long Lake (worth the drive for the vibe)

*Note: Most bar crawl tickets are sold on Eventbrite in early March.*

---

## 🌱 Why Minneapolis Is Great for Vegan St. Patrick's Day

Minneapolis consistently ranks as one of the most vegan-friendly cities in America — and March is a great time to be here. The winter is winding down, the parade energy is high, and the city's restaurant scene is creative enough to make plant-based Irish food genuinely fun.

The Herbivorous Butcher alone makes Minneapolis a destination for vegan St. Patrick's Day — no other city in the country has a fully vegan butcher shop doing Irish-American comfort food like that.

---

## Quick Links
- **Herbivorous Butcher:** [herbivorebutcher.com](https://herbivorebutcher.com)
- **Minneapolis St. Patrick's Day Parade:** search "Minneapolis St Patrick's Day Parade 2026" for updated route
- **Barnivore (is my beer vegan?):** [barnivore.com](https://barnivore.com)

---

## More Minneapolis Vegan Guides

- 🥗 [Best Vegan Restaurants in Minneapolis 2026](/blog/best-vegan-restaurants-minneapolis-2026) — Full city guide with 50+ spots
- 🍳 [Best Vegan Brunch in Minneapolis](/blog/vegan-brunch-minneapolis) — Top spots for weekend brunch
- 🍕 [Best Vegan Pizza in Minneapolis](/blog/best-vegan-pizza-minneapolis) — Pizza Luce, Black Sheep & more
- 🌿 [Vegan Food Minneapolis: The Complete Guide](/blog/vegan-food-minneapolis) — By category: comfort food, Ethiopian, international & more
- 💚 [Vegan Comfort Food Minneapolis](/blog/vegan-comfort-food-minneapolis) — Hearty, satisfying plant-based eats
- **More Minneapolis vegan restaurants:** [mplsvegan.com](https://mplsvegan.com)

---

*Published February 23, 2026 | Updated annually*`
  },
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
    relatedPosts: ["vegan-date-night-minneapolis", "best-vegan-restaurants-minneapolis-2026", "northeast-minneapolis-vegan-guide", "vegan-restaurants-st-paul"],
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
    relatedRestaurants: ["herbivorous-butcher", "j-selbys", "lulu-ethiovegan", "reverie-cafe-bar", "hard-times-cafe", "tongue-in-cheek", "francis-burger-joint", "pizza-karma"],
    relatedPosts: ["vegan-food-minneapolis", "vegan-brunch-minneapolis", "vegan-date-night-minneapolis", "northeast-minneapolis-vegan-guide", "ethiopian-vegan-food-minneapolis", "vegan-restaurants-st-paul", "vegan-st-patricks-day-minneapolis-2026", "vegetarian-restaurants-minneapolis"],
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
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-date-night-minneapolis", "vegan-mothers-day-brunch-minneapolis-2026", "vegan-easter-brunch-minneapolis-2026", "vegan-st-patricks-day-minneapolis-2026", "vegan-bakeries-minneapolis", "northeast-minneapolis-vegan-guide", "ethiopian-vegan-food-minneapolis"],
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
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-restaurants-uptown-minneapolis", "vegan-brunch-minneapolis", "northeast-minneapolis-vegan-guide", "ethiopian-vegan-food-minneapolis", "vegan-bars-minneapolis"],
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
    relatedPosts: ["north-loop-vegan-guide", "vegan-food-minneapolis", "best-vegan-restaurants-minneapolis-2026", "vegan-date-night-minneapolis", "vegan-bars-minneapolis"],
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
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-brunch-minneapolis", "northeast-minneapolis-vegan-guide", "vegan-food-minneapolis", "vegan-comfort-food-minneapolis"],
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
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-brunch-minneapolis", "vegan-bakeries-minneapolis", "northeast-minneapolis-vegan-guide", "vegan-pizza-minneapolis", "best-vegan-pizza-minneapolis", "best-vegan-mac-and-cheese-brands-ranked", "best-vegan-ice-cream-twin-cities"],
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
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-restaurants-uptown-minneapolis", "vegan-comfort-food-minneapolis", "vegan-brunch-minneapolis"],
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
    title: "Best Vegan Pizza Near Me in Minneapolis (2026) — 9 Spots Ranked",
    description: "Looking for vegan pizza near you in Minneapolis? We ranked 9 dairy-free, plant-based pizza spots — Pizza Lucé, Black Sheep, Galactic Pizza & more. Updated 2026.",
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
        answer: "Yes! Pizza Lucé offers late-night delivery with vegan options across multiple locations. They have dedicated vegan menu items that travel well, including their house-made vegan cheese pizzas. Pizza Karma in Dinkytown is also open until 3am on weekends."
      },
      {
        question: "Does Pizza Lucé have vegan options?",
        answer: "Yes! Pizza Lucé has extensive vegan options including house-made vegan cheese (their best feature), multiple vegan pizzas, vegan hoagies, pasta, and appetizers. They offer two types of vegan cheese—mozzarella and ricotta—and will veganize many menu items on request."
      },
      {
        question: "Where can I get gluten-free vegan pizza in Minneapolis?",
        answer: "Pizza Lucé has a gluten-free crust that pairs with their house-made vegan cheese and is the most reliable option in the city. Black Sheep can accommodate some gluten-free needs as well. Ask your server about current options."
      }
    ],
    relatedRestaurants: ["pizza-luce", "black-sheep-pizza", "herbivorous-butcher", "pizza-karma"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-comfort-food-minneapolis", "vegan-date-night-minneapolis", "northeast-minneapolis-vegan-guide", "vegan-pizza-minneapolis"],
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

### #3: Pizza Karma — Best Budget and Late-Night Pick

**Dinkytown | $ | ⭐ 4.3**

[Pizza Karma](/restaurants/pizza-karma) earns the third spot for doing something no other place on this list does: fire-roasted pizza with South Asian flavor influences, open until 3am on weekends, at student-friendly prices.

**What makes them unique:**
- **Dairy-free cheese** clearly labeled on the menu
- Fire-roasted crust with notes of chili, cumin, and garam masala
- Open until 3am Thursday through Saturday
- Most pies under $15
- Vegan toppings called out across the board

**Best vegan orders:**
- Any pizza with dairy-free cheese (the fire-roast brings out great flavor on plant-based versions)
- Veggie-heavy pies where the South Asian spice profiles shine

**Who should go here:** Anyone near the University of Minnesota, night owls, and fans of adventurous pizza flavor profiles that you won't find anywhere else in the city.

*Note: Galactic Pizza, a longtime Lyn-Lake institution beloved for eco-friendly delivery by electric car, permanently closed in March 2024 after 20 years in business.*

---

### Bonus: Pizza Karma — Best Late-Night Option (Dinkytown)

**409 14th Ave SE, Dinkytown | $ | ⭐ 4.3**

[Pizza Karma](/restaurants/pizza-karma) is a Dinkytown institution that doesn't fit neatly into any category — it's fire-roasted pizza with South Asian influences, and it's one of the most vegan-friendly pizza places in the city.

**Why they're worth knowing:**
- **Dairy-free cheese** clearly labeled on the menu — no guessing required
- **Vegan toppings** called out across the board
- Fire-roasted crust with Indian-inspired flavor profiles (chili, cumin, garam masala notes)
- **Open until 3am Thursday–Saturday** — the only late-night vegan pizza in the University area
- Student prices: most pizzas under $15

**Best vegan orders:**
- Any pizza with dairy-free cheese substitution (they nail the fire-roast on plant-based versions)
- Veggie-heavy pies where the South Asian spices shine most

**Who should go here:** University of Minnesota students, anyone in Dinkytown past midnight, fans of adventurous flavor profiles. This is not a place for a quiet date night — it's for a group of friends at 1am who want something cheap, delicious, and genuinely fun.

Not in the top 3 for daytime artisan pizza, but it holds a unique position in the Minneapolis vegan pizza scene that no other place fills.

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

| Factor | Pizza Lucé | Black Sheep | Pizza Karma | DIY (HB Pepperoni) |
|--------|-----------|-------------|-------------|-------------------|
| **Cheese** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ (Miyoko's) |
| **Crust** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Delivery** | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | N/A |
| **Price** | $$ | $$ | $ | $ |
| **Late Night** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **GF Option** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Vibe** | Loud, fun | Industrial cool | Late-night casual | Your couch |

---

## 🍕 Pizza Night Playbook

### Friday Night with Friends
**Go to:** Pizza Lucé downtown → order 3-4 pizzas for the table → vegan ranch on the side → don't forget the Baked Potato Pizza

### Date Night Pizza
**Go to:** Black Sheep North Loop → sit at the bar → watch the coal oven → share a bottle of wine + seasonal vegetable pizza

### Lazy Sunday Delivery
**Order from:** Pizza Lucé → Baked Potato Pizza + any build-your-own with house-made vegan cheese → fastest vegan pizza delivery in the city

### Impress-Your-Non-Vegan-Friends Pizza
**Make at home:** Herbivorous Butcher pepperoni + Miyoko's mozz on homemade dough → watch their minds explode

---

## The Bottom Line

You don't have to sacrifice pizza to be vegan in Minneapolis. [Pizza Lucé](/restaurants/pizza-luce) is the best overall (that cheese!), [Black Sheep](/restaurants/black-sheep-pizza) has the best crust, and [Pizza Karma](/restaurants/pizza-karma) is the move when you're out late in Dinkytown and need something good and cheap.

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
  },
  {
    slug: "vegan-pizza-minneapolis",
    title: "Best Vegan Pizza in Minneapolis: The Ultimate 2026 Guide",
    description: "The definitive guide to vegan pizza in Minneapolis. Pizza Lucé, Parkway Pizza, Black Sheep, Red Rabbit, Wrecktangle — reviewed and ranked so you can order with confidence.",
    publishedAt: "2026-02-19",
    updatedAt: "2026-02-19",
    author: "MPLS Vegan Team",
    category: "Restaurant Guides",
    tags: ["vegan pizza", "pizza", "minneapolis", "restaurant guide", "2026"],
    readingTime: "9 min read",
    tldr: "Top 5 vegan pizza spots in Minneapolis: Pizza Lucé (multiple locations, housemade rinotta cheese — best overall), Parkway Pizza (full dedicated vegan menu with Herbivorous Butcher meats), Black Sheep Coal Fired Pizza (North Loop, coal-fired crust), Red Rabbit (North Loop + St. Paul, upscale), and Wrecktangle Pizza (Malcolm Yards, Detroit-style). Violife and Follow Your Heart are the most common vegan cheese brands. Nearly every spot now has a dedicated vegan option beyond just veggie toppings.",
    faqs: [
      {
        question: "Which Minneapolis pizza places have the best vegan options?",
        answer: "Pizza Lucé is the gold standard — multiple locations, housemade rinotta cheese, and almost any pizza can be made vegan. Parkway Pizza has a fully dedicated vegan menu with Herbivorous Butcher meats. Black Sheep Coal Fired Pizza is excellent for coal-fired crust lovers. For Detroit-style, Wrecktangle at Malcolm Yards is the top pick."
      },
      {
        question: "What vegan cheese do Minneapolis pizza places use?",
        answer: "The most common brands are Violife (used at Pizza Lucé), Follow Your Heart (used at Parkway Pizza), and Daiya. Some spots like Pizza Lucé also make their own housemade nut-based cheese (rinotta) which is unique to them. Always ask which brand they use if you have a preference."
      },
      {
        question: "Is Pizza Lucé good for vegans?",
        answer: "Yes — Pizza Lucé is considered the best vegan pizza in Minneapolis by most locals. They have housemade rinotta cheese (a nut-based ricotta alternative that's uniquely theirs), Violife vegan mozzarella, and almost any vegetarian pizza can be made vegan. Plus late-night delivery until 2:30am on weekends."
      },
      {
        question: "Does Parkway Pizza have vegan options?",
        answer: "Parkway Pizza has one of the best dedicated vegan menus in Minneapolis. They partnered with The Herbivorous Butcher to offer vegan chicken, vegan capicola, and vegan pepperoni as toppings. They use Follow Your Heart cheese and have vegan options beyond pizza including cheese toast and artichoke dip."
      },
      {
        question: "Where can I get Detroit-style vegan pizza in Minneapolis?",
        answer: "Wrecktangle Pizza at Malcolm Yards Market is your best bet for Detroit-style vegan pizza in Minneapolis. They have dedicated vegan cheese options and the thick, crispy-edged rectangular slices that define Detroit-style."
      }
    ],
    relatedRestaurants: ["pizza-luce", "parkway-pizza", "black-sheep-coal-fired-pizza", "pizza-karma"],
    relatedPosts: ["vegan-brunch-minneapolis", "vegan-date-night-minneapolis", "best-vegan-restaurants-minneapolis-2026", "best-vegan-pizza-minneapolis", "vegan-comfort-food-minneapolis"],
    content: `
# Best Vegan Pizza in Minneapolis: The Ultimate 2026 Guide

**Looking for the best vegan pizza in Minneapolis?** Whether you're a lifelong vegan, dairy-free by necessity, or just trying to eat more plant-based, Minneapolis has you covered. From Detroit-style squares to coal-fired Neapolitan pies, the Twin Cities vegan pizza scene is *thriving* — and honestly, some of these spots make pizza so good that your non-vegan friends won't even notice the difference.

We've eaten our way across every neighborhood to bring you the definitive guide to vegan pizza in Minneapolis. Here's everything you need to know.

---

## 🏆 Quick Top 5: Best Vegan Pizza in Minneapolis

In a rush? Here are our top picks at a glance:

1. **Pizza Lucé** — Multiple Locations (Best overall vegan pizza selection)
2. **Parkway Pizza** — Multiple Locations (Best vegan meat toppings, featuring The Herbivorous Butcher)
3. **Black Sheep Coal Fired Pizza** — North Loop (Best coal-fired vegan pizza)
4. **Red Rabbit** — North Loop & St. Paul (Best upscale vegan pizza)
5. **Wrecktangle Pizza** — Malcolm Yards (Best Detroit-style vegan pizza)

Now let's dig into the details.

---

## Full Restaurant Reviews

### 1. Pizza Lucé ⭐ Editor's Pick

**Locations:** Downtown Minneapolis, Uptown, Northeast, St. Paul, Hopkins, Duluth
**Neighborhood:** Multiple across the Twin Cities
**Price Range:** $
**Website:** [pizzaluce.com](https://pizzaluce.com)

Pizza Lucé isn't just a Minneapolis institution — it's the gold standard for vegan pizza in the Twin Cities, and it has been for years. What sets them apart is their **housemade rinotta cheese**, a nut-based ricotta alternative with a spicy kick that you genuinely can't find anywhere else. They also use **Violife vegan mozzarella** as their standard vegan cheese option.

**What makes it special:**
- Housemade rinotta (nut-based) cheese — uniquely theirs and absolutely addictive
- Violife vegan mozzarella available on any pizza
- Nearly any vegetarian pizza on the menu can be made vegan (except the Garlic Mashed Potato Pizza)
- Seasonal specials always include vegan or vegan-upon-request options
- Late-night delivery until 2:30 AM on weekends (yes, really)

**Signature Vegan Pizzas:**
- **Fire Breathing Dragon** — A fan favorite with serious heat, made vegan with rinotta
- **Veggie Pizza with Asparagus** — Simple but perfect; if you haven't tried asparagus on pizza, start here
- **Vegan Garlic Cheese Bread** — Not technically a pizza, but you'd be foolish not to order it

**Ordering Tips:**
- Available on DoorDash, Uber Eats, and their own delivery service (free delivery!)
- Late-night delivery is a game-changer — they're open until 2:30 AM Fri/Sat at most locations
- The Downtown location tends to be busiest; Uptown and NE are slightly more relaxed
- Ask about seasonal specials — the Butternut Squash Pizza in fall is legendary

**Pro tip:** Tell your server you want the rinotta cheese. It's the move.

---

### 2. Parkway Pizza 🌱 Best Vegan Menu

**Locations:** Longfellow, Northeast, Columbia Heights, Bloomington (4 locations)
**Neighborhood:** Multiple across Minneapolis
**Price Range:** $
**Website:** [parkwaypizzamn.com](http://www.parkwaypizzamn.com)

If you want a pizza place that *truly* gets vegans, Parkway Pizza is it. They partnered with Minneapolis's own **The Herbivorous Butcher** to create a dedicated vegan menu that goes way beyond just swapping cheese. We're talking vegan chicken, vegan capicola ham, vegan pepperoni — the works. They use **Follow Your Heart cheese** across all locations.

**What makes it special:**
- Full dedicated vegan menu (not just modifications)
- Partnership with The Herbivorous Butcher for vegan meats
- Follow Your Heart vegan cheese
- Vegan options beyond pizza: cheese toast, artichoke dip, hoagies, and pasta

**Signature Vegan Pizzas:**
- **The Vegavore** — The crowd favorite, loaded with veggies and vegan cheese
- **The Artichicken** — Oil & garlic sauce, vegan chicken, tomato, artichokes, spinach, and vegan cheese
- **Vegan Artichoke Dip Pizza** — Trust us on this one

**Ordering Tips:**
- All 4 locations have the full vegan menu
- Great for families — the vegan and non-vegan menus are equally robust
- Delivery available through their website and third-party apps
- The vegan cheese toast appetizer is a must-order

**Sizes & Pricing:**
- 10" (feeds 1) starting around $17
- 12" (feeds 2) starting around $21
- 14" (feeds 3) starting around $26
- 16" (feeds 4) starting around $29

**Note:** Herbivorous Butcher meats contain gluten, so if you're gluten-free AND vegan, stick with veggie toppings.

---

### 3. Black Sheep Coal Fired Pizza 🔥

**Location:** 600 Washington Ave N, Minneapolis
**Neighborhood:** North Loop / Warehouse District
**Price Range:** $–$$
**Website:** [blacksheeppizza.com](https://www.blacksheeppizza.com)

Black Sheep brings something different to the Minneapolis vegan pizza game: **coal-fired ovens**. The intense, even heat creates a crust with a perfect char and crisp that wood-fired ovens can't quite replicate. They offer **vegan mozzarella** as a topping option (add $3-4.75 depending on size) on their build-your-own pizzas.

**What makes it special:**
- Coal-fired oven produces exceptional crust with beautiful leopard-spotting
- Build-your-own format means total customization
- Upscale casual atmosphere in the trendy North Loop
- Great beer and cocktail list

**How to Order Vegan:**
- Start with any base pizza and sub vegan mozzarella
- Load up on their premium veggie toppings: oyster mushrooms, artichokes, roasted red peppers, arugula, Kalamata olives
- The marinara base with veggies (no cheese) is also excellent

**Ordering Tips:**
- Walk-ins welcome but it gets busy on weekends — expect a wait Friday/Saturday after 6 PM
- Outdoor patio seating available in warmer months
- Located right near Target Field — great pre/post-game spot
- Delivery available through third-party apps

---

### 4. Red Rabbit 🐇

**Locations:** 201 N Washington Ave, Minneapolis (North Loop) & St. Paul
**Neighborhood:** North Loop / Warehouse District
**Price Range:** $–$$
**Website:** [redrabbitmn.com](https://redrabbitmn.com)

Red Rabbit brings an upscale Italian twist to vegan pizza. This isn't your late-night delivery spot — it's where you go when you want a proper sit-down dinner with a killer vegan pizza and a well-crafted mocktail. The wood-fired pizzas here have a refined, artisan quality.

**What makes it special:**
- Upscale Italian atmosphere — great for date night
- Dedicated vegan pizza option on the menu
- Wood-fired oven produces excellent crust
- Strong cocktail and mocktail program

**Ordering Tips:**
- Reservations recommended, especially Friday/Saturday
- The St. Paul location is equally great and often less crowded
- Perfect for mixed groups (vegans and non-vegans alike)
- Available on delivery apps

---

### 5. Wrecktangle Pizza 🟥 Best Detroit-Style

**Location:** Malcolm Yards Market, 501 30th Ave SE, Minneapolis
**Neighborhood:** Prospect Park / Southeast Minneapolis
**Price Range:** $–$$
**Website:** [wrecktanglepizza.com](https://wrecktanglepizza.com)

If you've never had Detroit-style pizza, imagine a thick, rectangular pizza baked in a steel pan with crispy, caramelized cheese edges (called "frico") and sauce ladled on top in racing stripes. Now imagine it vegan. Wrecktangle is the only spot in Minneapolis doing Detroit-style vegan pizza, and they do it *really* well.

**What makes it special:**
- Only Detroit-style vegan pizza in Minneapolis
- Thick, pillowy crust with crispy edges
- Located in Malcolm Yards food hall — great for groups with varied tastes

**Signature Vegan Pizzas:**
- **Phony 'Roni** — Vegan pepperoni with pickled jalapeños, whipped Cry Baby Craig's honey, and red sauce. The name alone is worth ordering it.

**Ordering Tips:**
- The North Loop location is permanently closed — Malcolm Yards is the current spot
- Malcolm Yards is a food hall, so no reservations needed
- Great option for groups since everyone can order from different vendors

---

### 6. Pizzeria Lola 🍕

**Location:** 5557 Xerxes Ave S, Minneapolis
**Neighborhood:** Southwest Minneapolis (Linden Hills area)
**Price Range:** $$
**Website:** [pizzerialola.com](https://www.pizzerialola.com)

From James Beard Award-winning chef Ann Kim (also behind Young Joni), Pizzeria Lola is one of the most acclaimed pizzerias in the entire Midwest. Featured on Netflix's *Chef's Table: Pizza* and Food Network's *Diners, Drive-Ins and Dives*, this is destination-worthy pizza. They offer vegan-friendly options and are happy to accommodate plant-based diets.

**What makes it special:**
- James Beard Award-winning pedigree
- Wood-fired oven produces stunning, blistered crusts
- Creative, globally-inspired flavor combinations

**How to Order Vegan:**
- Ask for modifications to veggie pizzas — they're accommodating
- Build your own with their one-topping pizza base
- Focus on the vegetable-forward options

---

### 7. Element Wood Fire Pizza 🪵

**Location:** 96 Broadway St NE, Minneapolis
**Neighborhood:** Northeast Minneapolis (Arts District)
**Price Range:** $
**Website:** [elementpizza.com](https://www.elementpizza.com)

Tucked in the heart of NE Minneapolis's Arts District, Element brings Neapolitan-style wood-fired pizza to the neighborhood. The wood-fired oven hits 800+ degrees, producing those beautifully blistered, slightly charred crusts that Neapolitan pizza is known for.

**How to Order Vegan:**
- Request no cheese or ask about vegan cheese availability
- Load up on their fresh vegetable toppings
- The dough itself is vegan (just flour, water, salt, yeast)

---

### 8. Broadway Pizza 🎭

**Locations:** Multiple across the Twin Cities and suburbs
**Neighborhood:** Various
**Price Range:** $–$
**Website:** [broadwaypizza.com](https://www.broadwaypizza.com)

Broadway Pizza is the affordable, no-frills option on this list. They offer **plant-based cheese and sausage** options across their locations, making it an accessible choice for a casual vegan pizza night without breaking the bank.

**What makes it special:**
- Most affordable vegan pizza option in the Twin Cities
- Multiple locations for convenience
- Plant-based cheese and Beyond Sausage available

---

## 🗺️ Vegan Pizza by Neighborhood

### Uptown / South Minneapolis
- **Pizza Lucé Uptown** — 3200 Lyndale Ave S
- **Parkway Pizza Longfellow** — 4527 E Lake St
- **Pizzeria Lola** — 5557 Xerxes Ave S (Linden Hills)

### Northeast Minneapolis
- **Pizza Lucé NE** — 210 E Hennepin Ave
- **Element Wood Fire Pizza** — 96 Broadway St NE
- **Parkway Pizza NE** — 1909 Central Ave NE

### Downtown / North Loop / Warehouse District
- **Black Sheep Coal Fired Pizza** — 600 Washington Ave N
- **Red Rabbit** — 201 N Washington Ave
- **Pizza Lucé Downtown** — 119 N 4th St

### Southeast / Prospect Park
- **Wrecktangle Pizza** — Malcolm Yards Market, 501 30th Ave SE

### Dinkytown / University of Minnesota
- **Pizza Karma** — 409 14th Ave SE · Fire-roasted, Indian-inspired, dairy-free cheese · Open until 3am Thu–Sat · Student budget-friendly

### St. Paul
- **Pizza Lucé St. Paul** — 1183 Selby Ave
- **Red Rabbit St. Paul** — Grand Ave location

---

## 🧀 Vegan Cheese & Toppings Guide

### What Vegan Cheese Do Minneapolis Restaurants Use?

| Restaurant | Vegan Cheese Brand | Notes |
|---|---|---|
| Pizza Lucé | Violife + housemade rinotta | Rinotta is nut-based with a spicy kick |
| Parkway Pizza | Follow Your Heart | Reliable melt, mild flavor |
| Black Sheep | Vegan mozzarella (brand varies) | Available as add-on topping |
| Broadway Pizza | Plant-based (brand varies) | Budget option |

### Best Vegan Meat Toppings in Minneapolis

Thanks to **The Herbivorous Butcher** — a nationally famous vegan butcher shop based right here in NE Minneapolis — the vegan meat topping game in this city is unmatched:

- **Parkway Pizza** — The Herbivorous Butcher's vegan chicken, capicola ham, Italian sausage, and pepperoni
- **Wrecktangle Pizza** — Vegan pepperoni (the "Phony 'Roni")
- **Pizza Lucé** — Vegan mock chicken (Buffalo-style)
- **Broadway Pizza** — Beyond Sausage

---

## 📋 Practical Info: Delivery & Late Night

| Restaurant | Own Delivery | DoorDash | Uber Eats | Late Night |
|---|---|---|---|---|
| Pizza Lucé | ✅ Free delivery | ✅ | ✅ | Until 2:30 AM Fri/Sat |
| Pizza Karma | ❌ | ✅ | ✅ | **Until 3 AM Thu–Sat** |
| Parkway Pizza | ✅ | ✅ | ✅ | Standard hours |
| Black Sheep | ❌ | ✅ | ✅ | Standard hours |
| Red Rabbit | ❌ | ✅ | ✅ | Standard hours |
| Wrecktangle | ❌ | Varies | Varies | Standard hours |
| Broadway Pizza | ✅ | ✅ | ✅ | Standard hours |

---

## 🎯 Our Final Verdict

Minneapolis is one of the best cities in the Midwest for vegan pizza, full stop. The combination of Pizza Lucé's legendary late-night delivery, Parkway Pizza's Herbivorous Butcher partnership, and the variety of styles from coal-fired to Detroit-style means you'll never run out of delicious options.

**If we had to pick just one:** Pizza Lucé for its unbeatable combination of quality, variety, accessibility, and late-night hours. That housemade rinotta cheese alone is worth the trip.

**For adventurous eaters:** Wrecktangle's Phony 'Roni at Malcolm Yards is a must-try.

**For the best vegan meat toppings:** Parkway Pizza with Herbivorous Butcher toppings is unmatched.

Happy eating, Minneapolis! 🍕🌱

---

*Last updated: February 2026.*

*Looking for more vegan dining in Minneapolis? Check out our guides to [vegan brunch](/blog/vegan-brunch-minneapolis), [vegan date night](/blog/vegan-date-night-minneapolis), and the [full MPLS Vegan restaurant directory](/).*
`
  }
  ,
  {
    slug: "j-selbys-review-saint-paul-vegan",
    title: "J. Selby's Review: Still the Best Vegan Comfort Food in Saint Paul",
    description: "A first-person review of J. Selby's in Saint Paul — nachos, crunch wrap supreme, buffalo chicken wrap, Caesar salad, and the legendary cookies and cream shake. 10 out of 10.",
    publishedAt: "2026-02-20",
    updatedAt: "2026-02-20",
    author: "Tia",
    category: "Restaurant Reviews",
    tags: ["j selbys", "saint paul", "vegan comfort food", "restaurant review", "vegan shakes", "cathedral hill"],
    featuredImage: "/images/reviews/j-selbys/shake-sign.jpg",
    readingTime: "4 min read",
    tldr: "J. Selby's in Saint Paul is still the vegan comfort food king. The nachos, crunch wrap supreme, buffalo chicken wrap, and Caesar salad were all phenomenal. The cookies and cream shake is a must. Staff is friendly, thoughtful, and great with recommendations. 10/10 — will be back to eat through the rest of the menu.",
    faqs: [
      {
        question: "Is J. Selby's fully vegan?",
        answer: "Yes! J. Selby's is a 100% plant-based restaurant in Saint Paul's Cathedral Hill neighborhood. Everything on the menu is vegan."
      },
      {
        question: "What should I order at J. Selby's?",
        answer: "The crunch wrap supreme and buffalo chicken wrap are both incredible. The nachos with pico de gallo are perfect for sharing, and you absolutely need to try one of their shakes — the cookies and cream is legendary."
      },
      {
        question: "Where is J. Selby's located?",
        answer: "J. Selby's is located at 169 Victoria St N, Saint Paul, MN 55104, in the Cathedral Hill neighborhood."
      }
    ],
    relatedRestaurants: ["j-selbys"],
    relatedPosts: ["valentines-day-vegan-date-night-minneapolis-2026"],
    content: `It had been *years* since I last ate at J. Selby's — we moved out of state and life just got in the way. But when my husband and I finally made it back, it was like no time had passed at all. Just as good as the first time.

![Nachos with pico de gallo at J. Selby's](/images/reviews/j-selbys/nachos-pico.jpg)

We went a little overboard with the order (no regrets): nachos with pico de gallo, the crunch wrap supreme, the buffalo chicken wrap, and a Caesar side salad. Every single thing was phenomenal. If you're someone who thinks vegan food can't hit like that, J. Selby's will change your mind real quick.

![Crunch wrap supreme with fries](/images/reviews/j-selbys/crunch-wrap-fries.jpg)

The crunch wrap was crispy, loaded, and honestly better than the fast food version it's inspired by. The buffalo chicken wrap had the perfect amount of heat, and the Caesar salad was fresh with a creamy dressing and big crunchy croutons.

![Caesar salad and buffalo chicken wrap](/images/reviews/j-selbys/salad-buffalo-wrap.jpg)

The staff was friendly, helpful, and genuinely great at giving recommendations — which matters when the menu has this many solid options.

The little moment that stuck with me? We ordered a cookies and cream shake to share, and they asked if we'd like it split into two separate cups. It's a tiny thing, but those small touches go a long way in my book.

![Cookies and cream shake with J. Selby's sign](/images/reviews/j-selbys/shake-sign.jpg)

**10 out of 10 experience.** I loved the food here and I will absolutely be back to work my way through the rest of the menu.

## What We Ordered

| Item | Verdict |
|------|---------|
| Nachos with Pico de Gallo | Huge portion, perfect for sharing. Loaded and flavorful. |
| Crunch Wrap Supreme | Crispy, satisfying, better than the original. |
| Buffalo Chicken Wrap | Great heat, packed with flavor. |
| Caesar Side Salad | Fresh greens, creamy dressing, big croutons. Delicious. |
| Cookies and Cream Shake | Thick, rich, and absolutely worth it. |

## The Details

- **Restaurant:** J. Selby's
- **Location:** 169 Victoria St N, Saint Paul, MN 55104
- **Vibe:** Casual, bright, welcoming
- **Price Range:** $$ (affordable for the quality and portions)
- **Vegan Status:** 100% plant-based
- **Our Rating:** 10/10

*Reviewed by Tia — a real visit, real opinions, real photos.*`
  },
  {
    slug: "vegetarian-restaurants-minneapolis",
    title: "Vegetarian Restaurants Minneapolis: 20+ Best Spots in 2026",
    description: "The best vegetarian restaurants in Minneapolis MN — from fully vegetarian cafes to vegan-friendly hotspots. Updated for 2026 with neighborhood guides and must-order dishes.",
    publishedAt: "2026-02-22",
    updatedAt: "2026-02-22",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegetarian restaurants", "minneapolis", "plant-based", "guide", "2026"],
    readingTime: "12 min read",
    tldr: "Best vegetarian restaurants in Minneapolis: Hard Times Cafe (punk-rock diner, cash only, all-day breakfast), Seward Cafe (worker-owned co-op with legendary biscuits & gravy), Modern Times Cafe (Powderhorn's greasy-spoon vibes), Foxy Falafel (crispy falafel wraps in St. Anthony Park), The Herbivorous Butcher (America's first vegan butcher shop), and Reverie Cafe + Bar (best for omnivore skeptics). Minneapolis is one of the best cities in the Midwest for vegetarian dining.",
    faqs: [
      {
        question: "What are the best vegetarian restaurants in Minneapolis?",
        answer: "The top vegetarian restaurants in Minneapolis include Hard Times Cafe (Seward), Seward Cafe (Seward), Modern Times Cafe (Powderhorn), Foxy Falafel (St. Anthony Park), The Herbivorous Butcher (Northeast), and Reverie Cafe + Bar (Powderhorn). Many more vegan restaurants serve 100% plant-based menus, making them perfect for vegetarians."
      },
      {
        question: "Are there any fully vegetarian restaurants in Minneapolis?",
        answer: "Yes! Minneapolis has several fully vegetarian or vegan restaurants, including Hard Times Cafe, Seward Cafe, Modern Times Cafe, Foxy Falafel, The Herbivorous Butcher, Lulu EthioVegan, J. Selby's, and Reverie Cafe + Bar. Many more restaurants offer extensive vegetarian menus."
      },
      {
        question: "Where can I find vegetarian food in Minneapolis near me?",
        answer: "Vegetarian restaurants are spread across Minneapolis neighborhoods. In Seward/Cedar-Riverside: Hard Times Cafe and Seward Cafe. In Powderhorn: Modern Times Cafe and Reverie. In Northeast: The Herbivorous Butcher. In Uptown/Lyn-Lake: French Meadow Bakery. In North Loop: Black Sheep Pizza. Use our neighborhood filter to find spots near you."
      },
      {
        question: "Is Minneapolis a good city for vegetarians?",
        answer: "Yes — Minneapolis consistently ranks among the best cities in the Midwest for vegetarian dining. The city has a thriving plant-based food scene with fully vegetarian restaurants in nearly every neighborhood, strong community support for plant-based eating, and an increasing number of restaurants adding dedicated vegetarian menus."
      },
      {
        question: "What vegetarian-friendly restaurants are open late in Minneapolis?",
        answer: "Hard Times Cafe has late hours and is cash-only. Reverie Cafe + Bar serves a full plant-based menu alongside craft beer and cocktails, making it a great late-night option. Seward Cafe also has extended weekend hours. Many restaurants in the Uptown and Northeast neighborhoods stay open late."
      },
      {
        question: "Can vegetarians eat at vegan restaurants in Minneapolis?",
        answer: "Absolutely — vegan restaurants are vegetarian-friendly by definition. 100% vegan spots like J. Selby's, The Herbivorous Butcher, Lulu EthioVegan, and Reverie Cafe + Bar are perfect for vegetarians who may also enjoy eggs and dairy, since vegan menus contain no animal products at all."
      }
    ],
    relatedRestaurants: ["hard-times-cafe", "seward-cafe", "modern-times", "foxy-falafel", "herbivorous-butcher", "reverie-cafe-bar", "j-selbys", "french-meadow", "pizza-karma"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-brunch-minneapolis", "northeast-minneapolis-vegan-guide", "vegan-bakeries-minneapolis", "vegan-restaurants-st-paul"],
    content: `
## The Best Vegetarian Restaurants in Minneapolis, MN (2026)

Minneapolis is one of the Midwest's best cities for vegetarian dining — and it's not even close.

With a dense cluster of fully vegetarian and vegan restaurants spread across every neighborhood, plus dozens of vegan-friendly spots that take plant-based eating seriously, Minneapolis punches way above its weight. Whether you're a lifelong vegetarian, trying to eat less meat, or just dragged here by a vegan friend, you're going to eat well.

Here's the definitive guide to the best vegetarian restaurants in Minneapolis for 2026 — covering everything from punk-rock diners to upscale vegan comfort food.

---

## Fully Vegetarian Restaurants in Minneapolis

These spots serve no meat whatsoever — safe havens for vegetarians who don't want to parse ingredient lists.

### Hard Times Cafe — Punk Rock Diner Vibes

**Cedar-Riverside | $ | Cash Only | ⭐ 4.5**

Since 1992, [Hard Times Cafe](/restaurants/hard-times-cafe) has been the beating heart of Minneapolis' alternative dining scene. The hand-painted bright green facade, anarchist posters, and cash-only policy are part of the charm. The food? Genuinely great.

Everything on the menu is vegetarian, with most dishes easily made vegan.

**Must-order:**
- **Vegan Biscuits & Gravy** — The mushroom gravy is rich, thick, and "good enough to take home"
- **Helter Skelter** — Hash browns and tofu scramble, a classic
- **Big Fat Pancake** — Served all day, because every hour is breakfast hour
- **Tempeh Reuben** — "Fantastic" and filling
- **Baked goods** — Outstanding, rotating daily

*"Classic diner food and vibes but vegetarian and vegan-ified."* — Mariah Mckenzie

**The deal:** Bring cash. There's an ATM inside but skip the fee. Everything is made from scratch, so there may be a wait — it's worth it.

---

### Seward Cafe — Worker-Owned Community Staple

**Seward | $ | ⭐ 4.6 (600+ reviews)**

A worker-owned cooperative since 1974, [Seward Cafe](/restaurants/seward-cafe) is Minneapolis' most beloved neighborhood institution. The menu is almost entirely vegetarian, with extensive vegan options marked clearly.

**Must-order:**
- **Vegan Biscuits & Gravy** — The reason Seward Cafe has a cult following
- **Tofu Scramble** — With smoky tempeh that is "hands-down the favorite part"
- **Fluffy Pancakes** — With blueberries, chocolate chips, tahini, or jam
- **Monster Mash** (drink) — Hot apple cider, miso caramel, coconut whip
- **Vegan Breakfast Burrito** — "INCREDIBLE" (their caps, not ours)

*"This has always been a favorite place because they have vegan biscuits and gravy on the menu."* — Alane Klein

They have a lovely garden patio for summer dining and emphasize local, organic ingredients throughout. Worker-owned means the people making your food have a stake in doing it right.

---

### Modern Times Cafe — Greasy Spoon with Progressive Politics

**Powderhorn | $ | ⭐ 4.7 (400+ reviews)**

Punk cafes forever. [Modern Times Cafe](/restaurants/modern-times) has the greasy-spoon aesthetic locked down — but the food is vegetarian, the politics are on the walls, and the tempeh bacon actually slaps.

Perfect for the hungover weekend brunch, the weekday lunch, or any time you need a veggie burger and a strong coffee.

**Must-order:**
- **Tempeh Bacon BLT** — The real reason people come back
- **Veggie Burger** — "Better than I expected and I expected a lot"
- **Morning scramble** — Comfort food done right
- **Any soup** — Rotating daily, always good

*"Punk cafes 4 ever! Love all the vegan options while still fulfilling my greasy spoon cravings."* — Emily Mills

---

### Foxy Falafel — Crispy, Fresh, Fast

**St. Anthony Park | $ | ⭐ 4.6**

[Foxy Falafel](/restaurants/foxy-falafel) is everything a falafel joint should be: crispy on the outside, fluffy inside, wrapped in fresh pita with sauces that make you want to order a second. The menu is fully vegetarian, with vegan options clearly labeled.

**Must-order:**
- **Classic Falafel Wrap** — The standard-setter. Crispy falafel, tahini, pickled veg, herbs
- **Falafel Bowl** — For when you want the same thing but in a bowl
- **Sweet Potato Falafel** — The twist that works
- **Hummus Plate** — Fresh, house-made, with warm pita

The St. Anthony Park location has a neighborhood-coffee-shop feel: local art, community events, and regulars who know the staff by name.

---

## 100% Vegan Restaurants (Perfect for Vegetarians Too)

These spots serve zero animal products — which means zero cross-contamination concerns and menus that are 100% vegetarian-safe by default.

### The Herbivorous Butcher — America's First Vegan Butcher Shop

**Northeast Minneapolis | $$ | ⭐ 4.6**

[The Herbivorous Butcher](/restaurants/herbivorous-butcher) is a Minneapolis landmark. Opened in 2016 by siblings Aubry and Kale Walch, it was the first vegan butcher shop in the United States. It's also just... really good.

The deli counter has house-made plant meats and cheeses that rival (and sometimes beat) their animal-based counterparts.

**Must-order:**
- **Korean BBQ Ribs** — Smoky, tender, and genuinely convincing
- **Italian Sausage** — Snaps when you bite it like a real sausage
- **Aged Cheddar** — Sharp, crumbly, the real deal
- **Italian Sub** — House-made salami and provolone, Northeast's favorite lunch
- **Grab-and-go sandwiches** — Perfect weekday lunch

Weekend mornings see lines out the door. Worth it.

---

### Reverie Cafe + Bar — The One That Converts Omnivores

**Powderhorn | $$ | ⭐ 4.7**

If you're taking a skeptical meat-eater to a vegetarian restaurant, take them to [Reverie Cafe + Bar](/restaurants/reverie-cafe-bar). They will leave a changed person.

The scratch kitchen serves creative, plant-based food with real flavor: lemongrass tofu tacos, Korean BBQ mock-duck tacos, Cuban sandwiches with pulled jackfruit, and the legendary Rev Burger (tempeh, tomato jam, smoked onions, kimchi aioli). 20 craft beers on tap, mural-lined walls, and a vibe that feels like a real bar — because it is.

**Must-order:**
- **Rev Burger** — Tempeh patty, tomato jam, smoked onions, kimchi aioli. Unbeatable.
- **Lemongrass Tofu Tacos** — Fresh, punchy, addictive
- **Dark Chocolate Beignets** — "Vegan desserts can be transcendent"
- **Any beer** — 20 rotating taps of craft selections

For more top picks, see our [best vegan restaurants Minneapolis guide](/blog/best-vegan-restaurants-minneapolis-2026).

---

### J. Selby's — Comfort Food Champion

**St. Paul | $$ | ⭐ 4.7 (2,900+ reviews)**

Technically in St. Paul but absolutely worth the 10-minute drive. [J. Selby's](/restaurants/j-selbys) is 100% vegan and serves the kind of food that makes people forget they're eating plants.

**Must-order:**
- **Crunchwrap** — Taco Bell could never
- **Cauliflower Wings** — The ranch dipping sauce alone is worth coming for
- **Rev Burger** — Smoky, stacked, perfect
- **Breakfast Burrito** — Available at brunch

They use [Herbivorous Butcher](/restaurants/herbivorous-butcher) products, meaning the "meat" comes from the best vegan butcher in the country. Our [full J. Selby's review](/blog/j-selbys-review-saint-paul-vegan) has everything you need to know.

---

### Lulu EthioVegan — Highest-Rated in Minneapolis

**Phillips | $ | ⭐ 4.9 (400+ reviews)**

[Lulu EthioVegan](/restaurants/lulu-ethiovegan) is the highest-rated vegan restaurant in Minneapolis — and once you taste the injera, you'll understand why. Traditional Ethiopian food is naturally vegetarian-friendly, and Lulu's takes it to another level with complex spice blends and abundant fermented flavors.

**Must-order:**
- **Beyainatu** — Mixed vegetable plate, the sampler
- **Tikel Gomen** — Sautéed cabbage with carrots and potatoes
- **Red Lentil Stew** — Spiced, rich, warming
- **Injera** — The spongy sourdough flatbread that makes everything better

---

## Vegetarian-Friendly Restaurants with Exceptional Options

These aren't exclusively vegetarian, but they take plant-based eating seriously enough to earn a spot on this list.

### French Meadow Bakery & Café — Organic Pioneer Since 1985

**Uptown + Grand Avenue St. Paul | $$ | ⭐ 4.5**

[French Meadow Bakery](/restaurants/french-meadow) has been doing organic, locally-sourced food since before it was trendy. The vegetarian and vegan options are extensive and consistently excellent.

**The best vegetarian picks:**
- **Tempeh Reuben** — A classic
- **Tofu Scramble** — For breakfast or brunch
- **Blackened Tempeh Tacos** — A lunch favorite
- **Vegan baked goods** — Muffins, pastries, and their famous organic breads

**Bonus:** Two locations (Uptown and Grand Avenue in St. Paul) and outdoor seating with a free parking lot. Rare in Minneapolis.

---

## Vegetarian by Neighborhood

**Seward/Cedar-Riverside:**
- [Hard Times Cafe](/restaurants/hard-times-cafe) — Cash only, all-day breakfast
- [Seward Cafe](/restaurants/seward-cafe) — Worker-owned, garden patio

**Powderhorn:**
- [Modern Times Cafe](/restaurants/modern-times) — Greasy spoon vibes
- [Reverie Cafe + Bar](/restaurants/reverie-cafe-bar) — Best for date night

**Northeast Minneapolis:**
- [The Herbivorous Butcher](/restaurants/herbivorous-butcher) — Vegan butcher + deli

**Uptown/Lyn-Lake:**
- [French Meadow Bakery](/restaurants/french-meadow) — Organic pioneer

**St. Anthony Park:**
- [Foxy Falafel](/restaurants/foxy-falafel) — Fresh falafel wraps

**Phillips:**
- [Lulu EthioVegan](/restaurants/lulu-ethiovegan) — Highest-rated in the city

**St. Paul (worth the drive):**
- [J. Selby's](/restaurants/j-selbys) — Comfort food champion

---

## Tips for Vegetarians in Minneapolis

**1. Most "vegan" restaurants are vegetarian-safe.** If a restaurant is 100% vegan, it's by definition 100% vegetarian. Cross-contamination isn't a concern, and you can order anything on the menu.

**2. "Vegan-friendly" means look before you order.** These restaurants have vegetarian options but may also serve meat. Check the menu or ask your server about preparation.

**3. The best neighborhoods for vegetarian dining are Seward and Powderhorn.** Both have high concentrations of fully vegetarian and vegan spots within walking distance of each other.

**4. Minneapolis' vegan bakery scene is underrated.** If you haven't been to [French Meadow](/restaurants/french-meadow), fix that. Our [vegan bakeries guide](/blog/vegan-bakeries-minneapolis) covers the full scene.

**5. Brunch is especially strong.** Hard Times, Seward, and Modern Times form an all-day breakfast triangle that rivals cities twice Minneapolis' size. See our full [vegan brunch guide](/blog/vegan-brunch-minneapolis) for more.

---

## The Bottom Line

Minneapolis doesn't get enough credit for its vegetarian dining scene. The city has multiple fully vegetarian and vegan restaurants in nearly every neighborhood, with food that doesn't apologize for what it is — it just tastes great.

Whether you're a committed vegetarian, flexitarian, or just curious, Minneapolis has you covered. Start with Hard Times for the biscuits and gravy. End with Reverie for a beer and the Rev Burger. Everything in between is negotiable.

Browse the [full restaurant directory](/restaurants) to filter by neighborhood, cuisine, and dietary preference — or check our [complete vegan guide](/blog/best-vegan-restaurants-minneapolis-2026) for the ranked list of every spot worth visiting in 2026.
`
  },
  {
    slug: "vegan-restaurants-st-paul",
    title: "Vegan Restaurants in St. Paul MN: The Complete 2026 Guide",
    description: "The best vegan and plant-based restaurants in St. Paul, Minnesota. From J. Selby's comfort food to Grand Avenue's global flavors — your complete guide to eating vegan in Saint Paul. Updated 2026.",
    publishedAt: "2026-02-22",
    updatedAt: "2026-02-22",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan restaurants", "st paul", "saint paul", "plant-based", "guide", "2026"],
    readingTime: "10 min read",
    tldr: "Best vegan restaurants in St. Paul: J. Selby's (Cathedral Hill, 100% vegan comfort food — the essential stop), Eureka Compass (Hamline-Midway, 100% vegan), Foxy Falafel (St. Anthony Park, vegetarian), Everest on Grand (Grand Ave, incredible Nepali/Indian vegan options), Ngon Vietnamese Bistro (Frogtown, stellar vegan pho). St. Paul is smaller than Minneapolis but punches hard for plant-based dining, especially along Grand Avenue and in the East Side neighborhoods.",
    faqs: [
      {
        question: "What are the best vegan restaurants in St. Paul, MN?",
        answer: "The top vegan restaurants in St. Paul include J. Selby's (100% vegan comfort food on Victoria St), Eureka Compass (100% vegan in Hamline-Midway), Foxy Falafel (vegetarian falafel wraps in St. Anthony Park), Everest on Grand (extensive vegan Nepali/Indian menu on Grand Ave), and Ngon Vietnamese Bistro (vegan-friendly pho and Vietnamese dishes in Frogtown). St. Paul has a smaller but growing vegan restaurant scene compared to Minneapolis."
      },
      {
        question: "Is J. Selby's in St. Paul still open?",
        answer: "Yes, J. Selby's is open at 169 Victoria St N, Saint Paul MN 55104 (Cathedral Hill neighborhood). It remains one of the few 100% vegan restaurants in the Twin Cities and is widely considered the best vegan comfort food spot in St. Paul. Menu highlights include vegan mac and cheese, the Selby Stack burger, and rotating daily specials."
      },
      {
        question: "Are there vegan restaurants on Grand Avenue in St. Paul?",
        answer: "Yes — Grand Avenue in St. Paul has several restaurants with excellent vegan options. Everest on Grand (Nepali/Indian) has an extensive vegetarian and vegan menu. Cafe Latte offers vegan-friendly soups, salads, and baked goods. Shish Mediterranean has falafel, hummus, and plant-based Mediterranean dishes. None are 100% vegan, but all three take plant-based dining seriously."
      },
      {
        question: "How does St. Paul's vegan dining scene compare to Minneapolis?",
        answer: "Minneapolis has a larger and denser vegan dining scene overall, but St. Paul holds its own with some excellent options. St. Paul's strengths are its ethnic diversity — particularly strong Vietnamese (Frogtown), Ethiopian (Como), Nepali/Indian (Grand Ave), and Mediterranean (Grand Ave) restaurants with extensive vegan menus. For 100% vegan comfort food, J. Selby's is the clear Twin Cities champion."
      },
      {
        question: "What neighborhoods in St. Paul are best for vegan dining?",
        answer: "Grand Avenue / Summit-University is the most walkable neighborhood for vegan dining in St. Paul — Everest on Grand, Shish Mediterranean, Khyber Pass Cafe, and Cafe Latte are all within a few blocks of each other. Frogtown has strong Vietnamese options (Ngon, iPho by Saigon). Cathedral Hill is worth the trip for J. Selby's. St. Anthony Park has Foxy Falafel."
      },
      {
        question: "Is there Ethiopian vegan food in St. Paul?",
        answer: "Yes — Bole Ethiopian Cuisine in the Como neighborhood is the top option for Ethiopian vegan food in St. Paul. Ethiopian cuisine is naturally vegan-friendly with many dishes (injera, lentil stews, vegetable combinations) that are inherently plant-based. Ask for the vegetarian combination for the best vegan selection."
      }
    ],
    relatedRestaurants: ["j-selbys", "eureka-compass", "foxy-falafel", "everest-on-grand", "ngon-vietnamese", "bole-ethiopian", "cafe-latte", "khyber-pass-cafe"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegetarian-restaurants-minneapolis", "j-selbys-review-saint-paul-vegan", "vegan-date-night-minneapolis", "vegan-food-minneapolis", "vegan-st-patricks-day-minneapolis-2026"],
    content: `
## Vegan Restaurants in St. Paul, MN — 2026 Guide

St. Paul doesn't get as much attention as Minneapolis for plant-based dining, but it should. The city has a genuinely excellent spread of vegan and vegan-friendly restaurants — from one of the Twin Cities' best 100% vegan comfort food spots to a Grand Avenue corridor packed with plant-forward global cuisine. If you know where to look, you'll eat very well.

This guide covers every vegan and plant-based restaurant worth knowing in Saint Paul, organized by neighborhood.

---

## The 100% Vegan Spots

### J. Selby's — Cathedral Hill
**169 Victoria St N, Saint Paul MN 55104**

J. Selby's is the anchor of vegan dining in St. Paul — a fully vegan, all-comfort-food restaurant that would hold its own against anything in Minneapolis. The menu is unapologetically indulgent: the Selby Stack is a proper smash burger with special sauce that makes you forget you're eating plants, the mac and cheese is rich and cheesy in a way that defies explanation, and the weekend brunch menu is one of the better vegan brunch options in the Twin Cities.

Cathedral Hill is a beautiful neighborhood for a meal — walkable, historic, and close to the Grand Ave restaurant corridor. Go for dinner on a weekday when it's a little calmer, or embrace the weekend brunch crowd.

→ [View J. Selby's on the directory](/restaurants/j-selbys)

### Eureka Compass — Hamline-Midway
Eureka Compass is 100% vegan and occupies a less-obvious corner of St. Paul's dining map, but it's worth finding. The menu rotates with creative plant-based dishes that lean toward global flavors — less burger-and-fries, more intentional cooking. It's the right spot if you're craving something a little lighter and more inventive than J. Selby's comfort food.

→ [View Eureka Compass on the directory](/restaurants/eureka-compass)

---

## Grand Avenue: The Best Vegan-Friendly Corridor in St. Paul

Grand Avenue is St. Paul's most famous dining street, and for plant-based eaters, it delivers — especially for global cuisine. None of these are 100% vegan, but all have substantial vegan menus and staff who understand dietary restrictions.

### Everest on Grand — Summit-University
**No vegan dining guide to St. Paul is complete without Everest.** The Nepali and Indian menu has dozens of naturally vegan dishes — dal bhat, vegetable curries, aloo gobi, saag — prepared with the kind of care that comes from a culinary tradition that's been cooking plant-based food for centuries. The lunch thali (combination platter) is exceptional value. This is one of the best restaurants in St. Paul regardless of dietary preference.

→ [View Everest on Grand](/restaurants/everest-on-grand)

### Shish Mediterranean — Summit-University
Shish is a Grand Avenue standby with a menu built around Mediterranean staples that happen to be naturally vegan-friendly: falafel, hummus, tabbouleh, stuffed grape leaves. The falafel is freshly made and properly crispy. Ask for the vegan mezze platter if you can't decide — it's one of the best deals on the street.

→ [View Shish Mediterranean](/restaurants/shish-mediterranean)

### Khyber Pass Cafe — Summit-University
Afghan cuisine gets overlooked, and that's a shame — it's one of the most naturally vegan-friendly food traditions you'll encounter. Khyber Pass has been on Grand Ave for years with a menu of herb-forward salads, lentil dishes, and vegetable-centered mains that are miles away from generic "vegan options." The aushak (leek dumplings) can be made vegan on request.

→ [View Khyber Pass Cafe](/restaurants/khyber-pass-cafe)

### Cafe Latte — Summit-University
A St. Paul institution since 1985. Cafe Latte is cafeteria-style, bustle-filled, and reliably good for plant-based eating — soups, grain bowls, vegetable dishes, and a bakery case that always has vegan options tucked in next to the legendary layer cakes. Not a vegan restaurant, but a beloved neighborhood anchor that accommodates well.

→ [View Cafe Latte](/restaurants/cafe-latte)

---

## Frogtown & East St. Paul: Vietnamese Vegan Central

Frogtown is one of the most culinarily underrated neighborhoods in the Twin Cities. The Vietnamese restaurant density here rivals anything in the metro, and several spots have excellent vegan options.

### Ngon Vietnamese Bistro — Frogtown
Ngon means "delicious" in Vietnamese, and it delivers. The pho broth can be made with vegetable stock, and the menu has dedicated vegetarian options clearly marked. The spring rolls (gỏi cuốn) are a perfect starter. It's a step up from a typical pho shop — slightly more considered plating, better drink menu — without losing the warmth of a neighborhood Vietnamese restaurant.

→ [View Ngon Vietnamese Bistro](/restaurants/ngon-vietnamese)

### iPho by Saigon — Frogtown
For classic pho in a more traditional setting, iPho by Saigon hits the mark. The vegetable pho is a proper bowl — aromatic broth, rice noodles, fresh herb plate, bean sprouts, lime. Simple, satisfying, and affordable. The Frogtown location means you're eating in the heart of St. Paul's Vietnamese community, which is always the right move for Vietnamese food.

→ [View iPho by Saigon](/restaurants/ipho-saigon)

---

## Neighborhood Gems

### Foxy Falafel — St. Anthony Park
The name tells you everything. Foxy Falafel is a vegetarian falafel shop near the intersection of St. Paul and St. Anthony Park (the neighborhood straddling the Minneapolis-St. Paul border near the U of M). The falafel is freshly fried, the wraps are loaded, and the menu is simple in the right way. Excellent lunch spot.

→ [View Foxy Falafel](/restaurants/foxy-falafel)

### Bole Ethiopian Cuisine — Como
Ethiopian food is one of the most vegan-friendly cuisines in the world — the traditional fasting diet (tsom) is entirely plant-based, and injera with vegetable stews is a core part of Ethiopian cooking. Bole brings that tradition to Como with a warm, family-run atmosphere. Order the vegetarian combination and let the injera do the rest.

→ [View Bole Ethiopian Cuisine](/restaurants/bole-ethiopian)

### Tongue in Cheek — Payne-Phalen
Tongue in Cheek is the most upscale entry on this list — a cocktail bar with a creative small-plates menu in the Payne-Phalen neighborhood. Vegan options rotate with the seasonal menu. It's the right choice for a date night when you want something more elevated, with some of the best cocktails in St. Paul alongside vegan-friendly food.

→ [View Tongue in Cheek](/restaurants/tongue-in-cheek)

---

## Navigating St. Paul Neighborhoods

St. Paul's geography is more sprawling than Minneapolis, but here's how to think about it for vegan dining:

**Grand Avenue / Summit-University:** The main restaurant corridor. Walk-friendly, with Everest, Shish, Khyber Pass, and Cafe Latte all within a few blocks of each other. J. Selby's is a 10-minute walk east.

**Cathedral Hill:** J. Selby's anchors this neighborhood. Quiet and residential — great for a focused dinner destination.

**Frogtown:** Best for Vietnamese food. Ngon and iPho by Saigon are both here. The neighborhood has a strong Southeast Asian food culture that rewards exploration.

**Hamline-Midway:** Eureka Compass is here. Less obvious but worth the trip for 100% vegan dining.

**St. Anthony Park:** Foxy Falafel. A tucked-away neighborhood between Minneapolis and St. Paul, near the U of M Saint Paul campus.

**Como:** Bole Ethiopian. Near Como Park and the conservatory — pair with a walk.

---

## Tips for Vegan Dining in St. Paul

**1. Grand Avenue is your anchor.** For a vegan-friendly dining day in St. Paul, start on Grand Ave. You can walk between Everest, Shish, Khyber Pass, and Cafe Latte in 15 minutes.

**2. J. Selby's is non-negotiable if you haven't been.** It's one of the best vegan restaurants in the Twin Cities, full stop. The Cathedral Hill location is worth the drive from anywhere in the metro.

**3. Vietnamese restaurants are your best vegan-friendly bet.** Frogtown's Vietnamese spots have naturally vegan-friendly menus — just specify vegetable broth for pho.

**4. Ethnic cuisine is where St. Paul shines.** Ethiopian (Bole), Nepali/Indian (Everest), Afghan (Khyber Pass), and Vietnamese (Ngon, iPho) are all categories where St. Paul competes with or beats Minneapolis.

**5. Cross the river for Minneapolis options.** St. Paul and Minneapolis are 15 minutes apart. If you're eating in St. Paul, Minneapolis' larger vegan scene is always accessible — see our [Minneapolis vegan guide](/blog/best-vegan-restaurants-minneapolis-2026) for the full picture.

---

Browse the [full restaurant directory](/restaurants) to filter by neighborhood, cuisine, and dietary status — or check out our [vegetarian guide to Minneapolis](/blog/vegetarian-restaurants-minneapolis) if you're heading to the west side of the river.
`
  },
  {
    slug: "vegan-food-minneapolis",
    title: "Vegan Food Minneapolis: The Complete 2026 Guide",
    description: "The definitive guide to vegan food in Minneapolis MN. From Seward to NE to Uptown, discover the best plant-based restaurants, food types, and neighborhoods for vegan eating.",
    publishedAt: "2026-02-22",
    updatedAt: "2026-02-22",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan food", "minneapolis", "plant-based", "guide"],
    readingTime: "11 min read",
    tldr: "Minneapolis has one of the best vegan food scenes in the Midwest. The Herbivorous Butcher and J. Selby's are must-visits. Seward neighborhood is the vegan epicenter. For comfort food, Reverie and Francis Burger Joint. For international, Lulu Ethiovegan and Foxy Falafel. Your best bet for a full vegan day: start at The Herbivorous Butcher, lunch in Seward, dinner in Uptown or NE.",
    faqs: [
      {
        question: "Is Minneapolis good for vegan food?",
        answer: "Yes — Minneapolis has one of the strongest vegan food scenes in the Midwest. The city is home to The Herbivorous Butcher (the nation's first vegan butcher shop), J. Selby's (fully vegan, one of the best in the country), Lulu Ethiovegan, Francis Burger Joint, and dozens of vegan-friendly restaurants across every neighborhood. Seward, Uptown, and Northeast Minneapolis are the hotspots."
      },
      {
        question: "What are the best vegan restaurants in Minneapolis?",
        answer: "The best fully vegan restaurants in Minneapolis include The Herbivorous Butcher (Northeast, famous for vegan meats and cheeses), J. Selby's (Cathedral Hill, comfort food), Lulu Ethiovegan (South Minneapolis, Ethiopian), Vegan East (Northeast), and Seward Cafe (Seward, worker-owned cooperative). Reverie Cafe + Bar and Hard Times Cafe also have outstanding vegan menus."
      },
      {
        question: "What neighborhoods have the best vegan food in Minneapolis?",
        answer: "Seward is considered Minneapolis' most vegan-friendly neighborhood — it has Seward Cafe, Seward Co-op, and several vegan-friendly spots all walkable from each other. Northeast Minneapolis has The Herbivorous Butcher and Vegan East. Uptown has French Meadow and Glam Doll Donuts. South Minneapolis and Powderhorn have Lulu Ethiovegan, Modern Times Cafe, and Hard Times Cafe."
      },
      {
        question: "What is The Herbivorous Butcher?",
        answer: "The Herbivorous Butcher is a 100% vegan butcher shop in Northeast Minneapolis, founded by siblings Kale and Aubry Walch. It's widely considered one of the country's best vegan shops, known for handcrafted vegan meats, cheeses, and pantry items. They sell products including vegan pepperoni, chicken cutlets, smoked gouda, and seasonal specials. The shop is a James Beard Award semifinalist and a must-visit for any vegan traveling to Minneapolis."
      },
      {
        question: "Where can I get vegan comfort food in Minneapolis?",
        answer: "Minneapolis excels at vegan comfort food. Top picks: J. Selby's for burgers, wings, and Animal Fries; Francis Burger Joint for smash burgers; Reverie Cafe + Bar for weekend brunch and loaded sandwiches; Hard Times Cafe for biscuits and gravy; Modern Times Cafe for hangover-cure breakfasts; and The Herbivorous Butcher for gourmet sandwiches using their house-made meats. See our full [vegan comfort food guide](/blog/vegan-comfort-food-minneapolis) for more."
      },
      {
        question: "Are there vegan-friendly options at non-vegan Minneapolis restaurants?",
        answer: "Absolutely. Minneapolis has a very vegan-accommodating dining culture. Crisp & Green offers vegan bowls and salads at multiple locations. Pizza Luce (legendary local chain) has excellent vegan cheese and toppings. Amazing Thailand is vegan-friendly with clearly marked dishes. Foxy Falafel in NE is mostly vegan. And virtually every neighborhood has vegan options at Indian, Ethiopian, and Thai restaurants."
      }
    ],
    relatedRestaurants: [
      "herbivorous-butcher",
      "j-selbys",
      "lulu-ethiovegan",
      "reverie-cafe-bar",
      "francis-burger-joint",
      "seward-cafe",
      "hard-times-cafe",
      "foxy-falafel",
      "vegan-east-bakery",
      "glam-doll-donuts"
    ],
    relatedPosts: [
      "best-vegan-restaurants-minneapolis-2026",
      "vegan-brunch-minneapolis",
      "vegan-comfort-food-minneapolis",
      "vegan-bakeries-minneapolis",
      "northeast-minneapolis-vegan-guide",
      "vegetarian-restaurants-minneapolis",
      "vegan-restaurants-st-paul",
      "vegan-st-patricks-day-minneapolis-2026",
      "vegan-easter-brunch-minneapolis-2026",
      "vegan-meal-prep-services-minneapolis"
    ],
    content: `
## Your Complete Guide to Vegan Food in Minneapolis

Minneapolis doesn't get enough credit for this, so I'll say it plainly: **this city has one of the best vegan food scenes in the Midwest**. Full stop.

We're talking the nation's first vegan butcher shop. Multiple 100% vegan restaurants that could compete with anything in New York or LA. A Seward neighborhood so plant-based that you can eat for three days without touching the same spot twice. Ethiopian spots, vegan smash burgers, gourmet doughnuts, injera platters, Korean-inspired bowls — all vegan or vegan-friendly, all within a few miles of each other.

This is the guide. Everything you need to know about vegan food in Minneapolis MN, organized by category, neighborhood, and how hungry you are.

---

## Start Here: The Icons

### The Herbivorous Butcher — Northeast Minneapolis

**⭐ 4.7 | $$ | Northeast | 100% Vegan**

[The Herbivorous Butcher](/restaurants/herbivorous-butcher) is the reason food writers put Minneapolis on their vegan radar. Founded by siblings Kale and Aubry Walch, it's a **fully vegan butcher shop** — the first of its kind in the US — selling handcrafted vegan meats, cheeses, and pantry goods that genuinely taste like the real thing.

The smoked gouda, the Italian sausage, the pepperoni, the chicken cutlets — these are not grocery store substitutes. They're the kind of products you buy, take home, and then immediately text three people about.

*"My non-vegan dad asked me to order him more of the smoked gouda. We've never been closer."*

Come for a sandwich at the shop, leave with a bag of provisions. The shop is also a James Beard Award semifinalist — just in case you needed official validation.

**Best for:** First-timers to Minneapolis vegan food, gift shopping, stocking your fridge

---

### J. Selby's — Cathedral Hill, St. Paul

**⭐ 4.7 | $$ | Cathedral Hill | 100% Vegan**

Yes, technically it's in St. Paul — but J. Selby's is essential to the Minneapolis vegan food conversation and only 15 minutes away. It's the kind of fully vegan comfort food restaurant where non-vegans bring their vegan friends thinking they're doing them a favor, then end up ordering the most food at the table.

Cauliflower wings, smash burgers, Animal Fries, a Crunchwrap that puts Taco Bell to permanent shame. A full bar with bottomless mimosas on weekends. The Herbivorous Butcher products featured throughout the menu.

See our full [J. Selby's review](/blog/j-selbys-review-saint-paul-vegan) and the [vegan restaurants St. Paul guide](/blog/vegan-restaurants-st-paul) for more.

**Best for:** Weekend brunch, group dinners, convincing skeptics that vegan food slaps

---

## Vegan Food by Category

### Comfort Food & Burgers

Minneapolis does vegan comfort food exceptionally well. A few standouts:

**[Reverie Cafe + Bar](/restaurants/reverie-cafe-bar)** (Multiple locations) — Reverie's weekend menu goes hard: loaded sandwiches, bowls, brunch plates. The menu rotates seasonally and everything is or can be made vegan. One of the most consistent spots in the city.

**[Francis Burger Joint](/restaurants/francis-burger-joint)** — Fully vegan smash burgers in a no-frills setting. The double smash with special sauce is legitimately one of the best burgers (vegan or otherwise) in Minneapolis. They know what they're doing.

**[Hard Times Cafe](/restaurants/hard-times-cafe)** (Seward) — Cash only, punk rock vibes, legendary vegan biscuits and gravy with mushroom gravy that people drive across the city for. Open late. Always a character or two at the counter.

**[Modern Times Cafe](/restaurants/modern-times)** (Powderhorn) — The hangover brunch cure. Greasy, generous portions, relaxed atmosphere, all-vegan menu. Tofu scrambles, hash browns, and coffee. Exactly what Saturday mornings are for.

→ Full guide: [Vegan Comfort Food Minneapolis](/blog/vegan-comfort-food-minneapolis)

---

### Ethiopian Food

Minneapolis has an exceptional Ethiopian food scene, and Ethiopian cuisine is one of the most naturally vegan-friendly cuisines on the planet — especially during the fasting periods when observant Ethiopian Christians eat fully vegan meals.

**[Lulu Ethiovegan](/restaurants/lulu-ethiovegan)** (South Minneapolis) — Fully vegan Ethiopian. Everything on the menu: the veggie combos, the lentil dishes, the gomen, the mushroom tibs, the injera. This is the rare restaurant that's fully vegan AND fully Ethiopian, not a compromise version of either.

**[Bole Ethiopian](/restaurants/bole-ethiopian)** (South Minneapolis) — Not fully vegan, but a large vegan-friendly menu with clearly marked options. The veggie combo is enormous and the injera is excellent.

→ Full guide: [Ethiopian Vegan Food Minneapolis](/blog/ethiopian-vegan-food-minneapolis)

---

### International Vegan Food

The international food scene in Minneapolis skews heavily vegan-friendly:

**[Foxy Falafel](/restaurants/foxy-falafel)** (NE Minneapolis) — Mediterranean-Middle Eastern with most dishes naturally vegan. The falafel wrap is the obvious order but the mezze plates are where it gets interesting.

**[Seed Cafe](/restaurants/seed-cafe)** — Fully plant-based Asian-inspired dishes. A quieter gem in a city full of loud standouts.

**[Shish Mediterranean](/restaurants/shish-mediterranean)** (St. Paul) — Mostly vegetarian with strong vegan options. The hummus, falafel, and stuffed grape leaves are highlights.

**[Namaste Cafe](/restaurants/namaste-cafe)** — South Asian flavors with a vegan-friendly menu throughout.

---

### Bakeries & Sweets

Minneapolis bakeries are increasingly all-vegan or vegan-friendly:

**[Glam Doll Donuts](/restaurants/glam-doll-donuts)** (Uptown) — 100% vegan doughnuts in surreal flavors. The Femme Fatale (lavender glaze), the Rebel Rebel (chocolate orange), the rotating specials — these are not health food and that's the point.

**[French Meadow Bakery](/restaurants/french-meadow)** (Uptown) — One of Minneapolis' oldest organic bakeries with a full vegan menu. Breads, pastries, a full breakfast/lunch/dinner menu. One of the few spots where you can get vegan eggs benedict done properly.

→ Full guide: [Vegan Bakeries Minneapolis](/blog/vegan-bakeries-minneapolis)

---

### Pizza

Minneapolis has a genuinely excellent vegan pizza scene:

**[Pizza Luce](/restaurants/pizza-luce)** (Multiple locations) — The local institution. Vegan cheese and toppings that hold up under scrutiny. The Athena (spinach, artichoke, roasted garlic) is a crowd-pleaser.

**[Pizza Karma](/restaurants/pizza-karma)** (Dinkytown) — Late night vegan-friendly pizza until 3am on weekends. Dairy-free cheese that actually melts. A lifesaver at 1am.

→ Full guides: [Vegan Pizza Minneapolis](/blog/vegan-pizza-minneapolis) | [Best Vegan Pizza Minneapolis](/blog/best-vegan-pizza-minneapolis)

---

### Brunch

Minneapolis brunch is extremely vegan-accommodating:

**[Seward Cafe](/restaurants/seward-cafe)** — Worker-owned cooperative, garden patio, tofu scrambles, biscuits and gravy, affordable prices. The quintessential Minneapolis vegan brunch.

**[Hard Times Cafe](/restaurants/hard-times-cafe)** — Late-opening, cash-only punk cafe with legendary vegan biscuits.

**[French Meadow Bakery](/restaurants/french-meadow)** — Full vegan brunch with a bar. Outdoor seating and a rare free parking lot in Uptown.

→ Full guide: [Vegan Brunch Minneapolis](/blog/vegan-brunch-minneapolis)

---

## Best Neighborhoods for Vegan Food in Minneapolis

### Seward — The Vegan Epicenter

Seward is the most organically vegan-friendly neighborhood in the city. You've got Seward Cafe (worker-owned, full vegan menu), Seward Co-op (incredible prepared foods and hot bar), Hard Times Cafe (nearby in Powderhorn), and Modern Times Cafe just south. It's also where Lulu Ethiovegan sets up shop for their weekend pop-ups.

If you only have one afternoon to eat vegan in Minneapolis, start in Seward.

### Northeast Minneapolis — Creative and Cool

Northeast has The Herbivorous Butcher (the mothership), Vegan East (fully vegan, rotating specials), Foxy Falafel, and a general neighborhood culture of independent, food-forward spots. It's a solid half-day of eating.

→ Full guide: [Northeast Minneapolis Vegan Guide](/blog/northeast-minneapolis-vegan-guide)

### Uptown — The Classics

French Meadow, Glam Doll Donuts, Crisp & Green, and a cluster of vegan-friendly spots along Hennepin and Lake. Uptown has more options per block than anywhere else in the city, though it leans more "vegan-friendly" than "fully vegan."

### Powderhorn & South Minneapolis

Modern Times, Hard Times, Lulu Ethiovegan — this stretch of South Minneapolis is where old-school Minneapolis vegan culture lives. Less trendy than NE or Uptown, more community-rooted.

---

## The Minneapolis Vegan Food Day Itinerary

Want to do a proper Minneapolis vegan food tour? Here's how to spend a day:

**Morning:** Start at **[The Herbivorous Butcher](/restaurants/herbivorous-butcher)** — coffee, a breakfast sandwich, and browse the shop. Pick up provisions for home.

**Lunch:** Head to **Seward** for lunch at **[Seward Cafe](/restaurants/seward-cafe)** — a tofu scramble if you're still in breakfast mode, or a loaded sandwich if you're ready for lunch.

**Afternoon snack:** **[Glam Doll Donuts](/restaurants/glam-doll-donuts)** in Uptown. You know why.

**Dinner:** **[Lulu Ethiovegan](/restaurants/lulu-ethiovegan)** for a full injera spread — the veggie combo feeds two people and costs about $22.

**Late night:** **[Pizza Karma](/restaurants/pizza-karma)** in Dinkytown if you're still moving. Dairy-free cheese, open until 3am Thursday–Saturday. Go.

---

## Quick Reference: Fully Vegan Restaurants in Minneapolis

| Restaurant | Neighborhood | Specialty |
|------------|-------------|-----------|
| The Herbivorous Butcher | Northeast | Vegan meats & cheeses |
| Francis Burger Joint | — | Smash burgers |
| Lulu Ethiovegan | South | Ethiopian |
| Vegan East | Northeast | Rotating specials |
| Seward Cafe | Seward | Worker-owned brunch |
| Modern Times Cafe | Powderhorn | Greasy spoon |
| Glam Doll Donuts | Uptown | Artisan doughnuts |
| J. Selby's | St. Paul (near) | Comfort food |

---

Browse the [full restaurant directory](/restaurants) to filter by neighborhood, dietary category, and cuisine type. Or jump to one of our specialized guides:

- [Best Vegan Restaurants Minneapolis 2026](/blog/best-vegan-restaurants-minneapolis-2026)
- [Vegan Brunch Minneapolis](/blog/vegan-brunch-minneapolis)
- [Vegan Comfort Food Minneapolis](/blog/vegan-comfort-food-minneapolis)
- [Vegan Bakeries Minneapolis](/blog/vegan-bakeries-minneapolis)
- [Ethiopian Vegan Food Minneapolis](/blog/ethiopian-vegan-food-minneapolis)
- [Northeast Minneapolis Vegan Guide](/blog/northeast-minneapolis-vegan-guide)
- [Vegan Restaurants St. Paul](/blog/vegan-restaurants-st-paul)
`

  },
  {
    slug: "vegan-coffee-shops-minneapolis",
    title: "Best Vegan Coffee Shops in Minneapolis: Oat Milk, Plant-Based Lattes & More",
    description: "The best vegan-friendly coffee shops in Minneapolis — from 100% plant-based cafes to oat milk lattes and fair trade brews. Find your perfect spot in the Twin Cities.",
    publishedAt: "2026-02-24",
    updatedAt: "2026-02-24",
    author: "Mia & Jay",
    category: "guides",
    tags: ["vegan coffee shops minneapolis", "oat milk coffee minneapolis", "plant-based cafe minneapolis", "vegan friendly coffee", "minneapolis coffee", "vegan cafe", "2026"],
    readingTime: "7 min read",
    tldr: "Best vegan coffee in Minneapolis: Seed Plant-Based Cafe (100% vegan, incredible smoothies + health bowls on West Lake St), Reverie Cafe + Bar (100% vegan, stunning seasonal oat milk lattes in Powderhorn), Common Roots (sustainability-focused, strong vegan menu in Lyn-Lake), Modern Times Cafe (pay-what-you-can community vibes + fair trade coffee), Seward Cafe (worker-owned institution with fair trade brews). For coffee + vegan donuts: Glam Doll on Nicollet Ave is unbeatable.",
    faqs: [
      {
        question: "Are there any 100% vegan coffee shops in Minneapolis?",
        answer: "Yes — Seed Plant-Based Cafe (3252 W Lake St, West Lake neighborhood) and Reverie Cafe + Bar (1517 E 35th St, Powderhorn) are both 100% vegan and serve excellent coffee and espresso drinks with plant milks. Both make seasonal lattes and are fully committed to plant-based menus."
      },
      {
        question: "Which Minneapolis coffee shops have oat milk?",
        answer: "Most independent coffee shops in Minneapolis now offer oat milk as a standard option. Seed Plant-Based Cafe, Reverie Cafe, Common Roots Cafe, Modern Times Cafe, Seward Cafe, and May Day Cafe all use plant milks. For the best oat milk lattes, Reverie Cafe does seasonal, visually stunning drinks worth the trip."
      },
      {
        question: "What is the best vegan-friendly coffee shop in Minneapolis?",
        answer: "For a 100% vegan experience, Seed Plant-Based Cafe and Reverie Cafe + Bar are the top picks. For a neighborhood community feel with strong vegan options, Seward Cafe (worker-owned, fair trade) and Modern Times Cafe (progressive, pay-what-you-can model) stand out. Common Roots Cafe in Lyn-Lake is excellent for a sunny corner shop with a strong plant-based menu."
      },
      {
        question: "Where can I get vegan pastries with my coffee in Minneapolis?",
        answer: "French Meadow Bakery & Cafe (Lyn-Lake) has an impressive vegan pastry case alongside excellent coffee. Reverie Cafe serves vegan croissants and seasonal pastries. Glam Doll Donuts (Nicollet Ave) is the pick for creative vegan donuts paired with locally roasted coffee. Seward Cafe makes vegan baked goods daily."
      },
      {
        question: "Are there vegan coffee shops in Minneapolis open late?",
        answer: "Most Minneapolis independent cafes close by 8-9pm. For late-night plant-based options, Hard Times Cafe (Stadium Village) serves fair trade coffee alongside a full vegan menu and stays open late. Modern Times Cafe has flexible hours. For late-night food and coffee vibes, Pizza Karma in Dinkytown is open until 3am on weekends."
      },
      {
        question: "Which Minneapolis coffee shops are good for remote work?",
        answer: "Modern Times Cafe (WiFi, community tables, laid-back vibe), Common Roots Cafe (sunny corner location, solid WiFi, good acoustics), and Seed Plant-Based Cafe (West Lake Street, health-focused, calming atmosphere) are the best for working remotely with plant-based coffee and food options."
      }
    ],
    relatedRestaurants: ["seed-cafe", "reverie-cafe-bar", "common-roots-cafe", "modern-times", "seward-cafe", "may-day-cafe", "glam-doll-donuts", "french-meadow"],
    relatedPosts: ["vegan-bakeries-minneapolis", "vegan-brunch-minneapolis", "best-vegan-restaurants-minneapolis-2026", "vegan-food-minneapolis", "northeast-minneapolis-vegan-guide"],
    content: `# Best Vegan Coffee Shops in Minneapolis (2026 Guide)

Minneapolis has a surprisingly strong plant-based cafe scene — and coffee drinkers who want to skip the dairy have more options than ever. From 100% vegan spots serving oat milk seasonal lattes to worker-owned institutions pouring fair trade coffee alongside vegan biscuits and gravy, the Twin Cities has it covered.

Here's where to find the best vegan and vegan-friendly coffee shops in Minneapolis in 2026.

---

## ☕ 100% Vegan Coffee & Cafes

### 1. [Seed Plant-Based Cafe](/restaurants/seed-cafe) — West Lake Street

**Address:** 3252 W Lake St, Minneapolis | **Price:** $$  
**Best for:** Health-focused coffee drinkers, post-workout fuel, smoothies

[Seed Plant-Based Cafe](/restaurants/seed-cafe) is the product of two yoga instructors who spotted the perfect corner spot while scouting studio space. The result: a fully plant-based cafe on West Lake Street where the menu is built around the freshest, most nutrient-dense ingredients available.

Coffee here comes with your choice of plant milks — oat, almond, soy, coconut — and the baristas know what they're doing. Pair it with a health bowl, their legendary kale salad, or a house-made smoothie for a complete plant-based coffee shop experience.

**What to order:**
- Any latte with oat milk
- Kale salad (seriously, it might convert you)
- Smoothies and fresh-pressed juices
- Grain bowls with house-made dressings

**The vibe:** Clean, calm, wellness-focused. Great for a mid-morning work session or post-yoga refuel.

---

### 2. [Reverie Cafe + Bar](/restaurants/reverie-cafe-bar) — Powderhorn

**Address:** 1517 E 35th St, Minneapolis | **Price:** $$  
**Best for:** Seasonal lattes, brunch + coffee, date mornings

[Reverie Cafe + Bar](/restaurants/reverie-cafe-bar) is the most visually stunning cafe on this list. The muraled walls, natural light, and rotating seasonal drink menu make it a destination as much as a coffee shop.

Everything at Reverie is 100% plant-based. Their seasonal oat milk lattes are thoughtfully crafted — expect combinations like lavender honey (vegan honey), turmeric rose, or whatever the season calls for. The baristas here treat coffee as craft.

**What to order:**
- Seasonal oat milk latte (always ask what's current)
- Vegan croissants and pastries
- Dark chocolate beignets (dessert territory but impossible to resist)
- Avocado toast

**The vibe:** Beautiful neighborhood cafe energy, artsy, community-centered. Ideal for a slow Saturday morning.

---

## 🌿 Best Vegan-Friendly Independent Cafes

### 3. [Common Roots Cafe](/restaurants/common-roots-cafe) — Lyn-Lake

**Address:** 2558 Lyndale Ave S, Minneapolis | **Price:** $$  
**Best for:** Remote work, sustainability-focused dining, weekend brunch coffee runs

Common Roots is the sustainability standard in Minneapolis coffee shops. Everything here is locally sourced, organic where possible, and zero-waste focused. Their ever-changing menu has substantial vegan options at every meal.

The sunny corner location on Lyndale is perfect for a 2-hour work session — good WiFi, great acoustics, and the kind of light that makes Minneapolis winters slightly more tolerable.

**What to order:**
- Organic drip coffee or espresso with oat milk
- Buddha bowl (grain base, roasted vegetables, tahini)
- Seasonal vegan pancakes on weekends
- Tofu scramble for breakfast

**The vibe:** Sustainable, neighborhood, genuinely good food alongside the coffee.

---

### 4. [Modern Times Cafe](/restaurants/modern-times) — Powderhorn

**Address:** 3200 Chicago Ave S, Minneapolis | **Price:** $  
**Best for:** Community vibes, fair trade coffee, affordable plant-based eats

Modern Times is one of Minneapolis's most beloved progressive cafes — described by regulars as "for punks and their parents," which captures the vibe perfectly. In January 2026, the cafe shifted to a pay-what-you-can model in solidarity with immigration advocacy efforts.

Fair trade coffee is a cornerstone here. Oat milk is available. Most menu items can be made vegan with a simple swap.

**What to order:**
- Fair trade drip coffee or espresso
- Veggie breakfast burrito (ask for no eggs/dairy)
- Vegan pancakes
- Organic seasonal bowls

**The vibe:** Community gathering spot. Political, welcoming, laid-back. WiFi for working.

---

### 5. [Seward Cafe](/restaurants/seward-cafe) — Seward

**Address:** 2129 E Franklin Ave, Minneapolis | **Price:** $  
**Best for:** Worker-owned, fair trade coffee, vegan brunch classics

Seward Cafe has been serving the neighborhood since 1974 and has earned its reputation as a Minneapolis institution. This worker-owned cooperative emphasizes local, organic ingredients and fair trade coffee — values they've held long before they were trendy.

The cafe is primarily a brunch destination, but the coffee is excellent and the vegan menu is substantial. Their biscuits and gravy are famous. Pair your coffee with the tofu scramble or vegan pancakes for the full Seward experience. See our [complete vegan brunch guide](/blog/vegan-brunch-minneapolis) for more options.

**What to order:**
- Fair trade coffee with oat or soy milk
- Vegan biscuits and gravy
- Tofu scramble
- Vegan pancakes with blueberries or tahini

**The vibe:** Worker-owned, community-board-covered walls, garden patio in summer.

---

### 6. [May Day Cafe](/restaurants/may-day-cafe) — Powderhorn

**Address:** 3440 Bloomington Ave, Minneapolis | **Price:** $  
**Best for:** Neighborhood feel, cash-only old-school charm, excellent vegan breakfast

May Day is a Powderhorn neighborhood cafe with a progressive spirit that shows up in both the politics and the menu. Fair trade coffee, local sourcing, and a full vegan breakfast menu make it a natural stop for plant-based coffee drinkers.

The space is cozy, colorful, and covered in local art. Cash only — so come prepared.

**What to order:**
- Fair trade coffee (bring cash)
- Tofu scramble or tempeh hash
- Vegan pancakes
- Seasonal soups

**The vibe:** Old-school neighborhood cafe. Community bulletin boards. Genuine Powderhorn character.

---

## 🍩 Coffee + Vegan Sweets

### 7. [Glam Doll Donuts](/restaurants/glam-doll-donuts) — Lyn-Lake

**Address:** 2605 Nicollet Ave, Minneapolis | **Price:** $  
**Best for:** Vegan donuts + coffee combo, Instagram-worthy treats

Glam Doll is primarily a punk-rock donut shop, but the coffee pairing is the move. Locally roasted coffee + a rotating selection of creative vegan donuts is one of Minneapolis's best casual morning experiences.

The donuts rotate constantly — maple bacon (coconut bacon), salted caramel, seasonal specials. Many are vegan daily. Check their Instagram before you go for the current lineup. Read more in our [vegan bakeries Minneapolis guide](/blog/vegan-bakeries-minneapolis).

**What to order:**
- Whatever vegan donut is rotating today
- Locally roasted drip coffee
- Oat milk latte if you want to upgrade

**The vibe:** Punk rock, bold decor, fast service. More dessert shop than cafe but worth it.

---

### 8. [French Meadow Bakery & Cafe](/restaurants/french-meadow) — Lyn-Lake

**Address:** 2610 Lyndale Ave S, Minneapolis | **Price:** $$  
**Best for:** Organic coffee, vegan pastry case, sit-down cafe experience

French Meadow has been Minneapolis's organic food standard since 1985. The bakery case always includes vegan options — muffins, pastries, organic breads — alongside excellent coffee. It's more of a full cafe experience than a quick stop, and one of the best spots on this list for a proper sit-down coffee with food.

**What to order:**
- Organic drip coffee or espresso
- Vegan pastry from the bakery case
- Tempeh Reuben if you're staying for lunch
- Vegan muffins for grab-and-go

**The vibe:** Organic pioneer energy. Relaxed, neighborhood, good for lingering.

---

## 📍 Quick Reference: Minneapolis Vegan Coffee Shops

| Cafe | Neighborhood | Vegan Status | Best For |
|------|-------------|-------------|---------|
| Seed Plant-Based Cafe | West Lake | 100% Vegan | Health bowls + smoothies |
| Reverie Cafe + Bar | Powderhorn | 100% Vegan | Seasonal lattes + brunch |
| Common Roots | Lyn-Lake | Vegan-Friendly | Remote work |
| Modern Times | Powderhorn | Vegetarian | Fair trade + community |
| Seward Cafe | Seward | Vegetarian | Worker-owned + brunch |
| May Day Cafe | Powderhorn | Vegan-Friendly | Neighborhood charm |
| Glam Doll Donuts | Lyn-Lake | Vegan-Friendly | Coffee + vegan donuts |
| French Meadow | Lyn-Lake | Vegan-Friendly | Organic + pastries |

---

## Tips for Vegan Coffee Drinkers in Minneapolis

**Ask about oat milk.** Most Minneapolis independent cafes stock oat milk as standard, but some charge extra ($0.50-1.00). Reverie, Seed, and Common Roots include it at no charge.

**Fair trade is the norm here.** Minneapolis's independent cafe scene prioritizes fair trade coffee — Seward Cafe, Modern Times, Common Roots, and May Day Cafe are all committed fair trade buyers. If that matters to you, you're in good hands.

**Instagram-check Glam Doll before going.** Their vegan donut selection varies day to day. Following them on Instagram lets you see what's available before making the trip.

**Powderhorn is the vegan cafe neighborhood.** Reverie, Modern Times, and May Day Cafe are all within 2 miles of each other in Powderhorn. If you're doing a coffee shop tour, start there.

---

## More Minneapolis Vegan Guides

- 🥐 [Best Vegan Bakeries Minneapolis](/blog/vegan-bakeries-minneapolis) — Full guide to vegan sweets and pastries
- 🍳 [Best Vegan Brunch Minneapolis](/blog/vegan-brunch-minneapolis) — Brunch spots with full plant-based menus
- 🌿 [Best Vegan Restaurants Minneapolis 2026](/blog/best-vegan-restaurants-minneapolis-2026) — The complete directory
- 🏙️ [Northeast Minneapolis Vegan Guide](/blog/northeast-minneapolis-vegan-guide) — NE-specific neighborhood guide
`
  },
  {
    slug: "vegan-bars-minneapolis",
    title: "Best Vegan Bars & Happy Hour Spots in Minneapolis (2026 Guide) 🍺",
    description: "The best vegan-friendly bars and happy hour spots in Minneapolis — from 100% vegan cocktail bars to craft breweries with plant-based snacks. Where to drink in Minneapolis without compromising.",
    publishedAt: "2026-02-24",
    updatedAt: "2026-02-24",
    author: "Mia & Jay",
    category: "guides",
    tags: ["vegan bars minneapolis", "vegan happy hour minneapolis", "vegan drinks minneapolis", "vegan friendly bars", "reverie cafe bar", "francis burger joint", "craft beer minneapolis"],
    readingTime: "6 min read",
    tldr: "Best vegan bars in Minneapolis: Reverie Cafe + Bar (Powderhorn, 100% vegan bar — dark chocolate beignets, craft beer, cocktails — the #1 pick), Francis Burger Joint (North Loop, 100% vegan sports bar with smash burgers and cold beers), Seward Cafe (cooperative institution with vegan food + beer), Common Roots Cafe (Whittier, natural wines + plant-forward bar bites). Minneapolis craft breweries (Indeed, Dangerous Man, Surly) all rotate vegan-friendly food trucks.",
    faqs: [
      {
        question: "Are there vegan bars in Minneapolis?",
        answer: "Yes — Minneapolis has two fully vegan bars: Reverie Cafe + Bar in Powderhorn (100% vegan menu, craft cocktails, 20+ beers, dark chocolate beignets and cashew cheesecake) and Francis Burger Joint in the North Loop (100% vegan, smash burgers, wings, full bar, sports on TV). Both serve beer, wine, and cocktails alongside entirely plant-based food menus."
      },
      {
        question: "What is the best vegan bar in Minneapolis?",
        answer: "Reverie Cafe + Bar at 2506 Minnehaha Ave in Powderhorn is Minneapolis's best vegan bar. It's 100% vegan, with a rotating cocktail menu, 20+ craft beers on tap, and a food menu that includes dark chocolate beignets, cashew cheesecake, and small plates. The atmosphere is intimate and welcoming — part neighborhood bar, part plant-based restaurant."
      },
      {
        question: "Is beer vegan?",
        answer: "Most beer is vegan, but not all. Traditional lagers, ales, IPAs, stouts, and sours are typically vegan — they're made from water, grain, hops, and yeast. Some beers use animal-derived fining agents like isinglass (fish bladder), gelatin, or casein during the brewing process. Craft beers from Minnesota breweries like Indeed, Surly, and Dangerous Man are generally vegan-friendly. When in doubt, check Barnivore.com for vegan beer verification."
      },
      {
        question: "Where can I get vegan happy hour in Minneapolis?",
        answer: "Reverie Cafe + Bar (Powderhorn) offers happy hour specials on drinks and food — call ahead to confirm current times. Francis Burger Joint (North Loop) runs happy hour drink deals with their full 100% vegan food menu available all day. Seward Cafe has rotating specials. Minneapolis craft breweries like Indeed Brewing and Dangerous Man Brewing also run happy hour deals, with food trucks (often vegan-friendly) on site."
      },
      {
        question: "Can I drink at a regular bar as a vegan?",
        answer: "Absolutely. Most spirits (vodka, gin, rum, tequila, whiskey) are vegan. Most beers are vegan, though some use isinglass for clarification — craft beers are generally safer. Wine is trickier — some wines use egg whites or gelatin for fining, but vegan wines are increasingly available. Watch for honey-based cocktails or drinks with cream, eggs, or milk. Ask your bartender, or check Barnivore.com before your night out."
      },
      {
        question: "Do Minneapolis craft breweries have vegan food?",
        answer: "Most major Minneapolis craft breweries rotate food trucks, and many of those trucks have strong vegan options. Indeed Brewing (NE Minneapolis) and Dangerous Man Brewing (NE Minneapolis) regularly host vegan-friendly trucks. Surly Brewing has a full kitchen with clearly marked vegan options. Call ahead or check the brewery's social media for the day's food truck lineup."
      }
    ],
    relatedRestaurants: ["reverie-cafe-bar", "francis-burger-joint", "seward-cafe", "common-roots-cafe"],
    relatedPosts: ["north-loop-vegan-guide", "late-night-vegan-food-minneapolis", "vegan-date-night-minneapolis", "northeast-minneapolis-vegan-guide", "best-vegan-restaurants-minneapolis-2026"],
    content: `# Best Vegan Bars & Happy Hour Spots in Minneapolis (2026 Guide) 🍺

Minneapolis has a genuinely thriving vegan restaurant scene — but what about after dinner? Whether you're looking for a full vegan bar where you don't have to decode the menu, a craft brewery with plant-based snacks, or just want to know which cocktails are actually vegan, this guide covers it all.

Good news: Minneapolis is one of the most vegan-friendly bar cities in the Midwest. Two fully vegan bars, a cooperative cafe with rotating taps, and a craft brewery scene that pairs well with vegan food trucks.

---

## 🏆 The 100% Vegan Bars: No Compromises

### 1. Reverie Cafe + Bar — Powderhorn
**2506 Minnehaha Ave, Minneapolis · 100% Vegan · Powderhorn Park Neighborhood**

Reverie is the crown jewel of Minneapolis's vegan bar scene. Everything on the menu — every drink, every dish — is entirely plant-based. You never have to ask "is this vegan?" because the answer is always yes.

**What to order:**
- **Dark chocolate beignets** — warm, pillowy, dusted with powdered sugar. The reason people come back.
- **Cashew cheesecake** — creamy, tangy, genuinely dessert-worthy
- **Rotating cocktail menu** — creative seasonal drinks (no honey, no cream, no egg white — or a vegan substitute if the recipe calls for it)
- **20+ craft beers** — always rotating, heavy on Minnesota craft

**The vibe:** Intimate neighborhood bar. Low lighting, wood tables, community feel. Popular with the Powderhorn art community and long-time Minneapolis vegans. Not pretentious — just genuinely good.

**Hours:** Check current hours — typically afternoon through late evening, closed Tuesdays. Happy hour specials available (call ahead to confirm times).

**Why it's #1:** There's no other bar in Minneapolis where every single thing on the menu is vegan. For anyone tired of asking, substituting, or wondering — Reverie is the destination.

---

### 2. Francis Burger Joint — North Loop
**102 N 1st St, Minneapolis · 100% Vegan · North Loop**

Francis is what happens when a sports bar decides to go fully vegan — and pulls it off completely. TVs on the walls, cold beer flowing, smash burgers on the table, and zero animal products anywhere.

**What to order:**
- **Smash burger** — plant-based beef, smashed crispy, with all the classic toppings
- **Vegan wings** — crispy, sauced, genuinely satisfying
- **Beer and cocktails** — full bar with an all-vegan drinks menu
- **Loaded fries** — for the table

**The vibe:** Lively, casual, North Loop crowd. Great for groups, sports nights, after-work drinks. More energetic than Reverie — less date-night, more fun night out.

**Why it works:** Francis proves that "vegan bar" doesn't have to mean quiet and precious. This is a full bar that happens to have no animal products. The food is the draw, the drinks seal the deal.

---

## 🌿 Vegan-Forward Bars & Cafes

### 3. Seward Cafe — Seward
**2129 E Franklin Ave, Minneapolis · Worker-Owned Cooperative · Seward Neighborhood**

Seward Cafe is a Minneapolis institution — cooperatively owned since 1974, with a menu that's heavily vegan and prominently labeled. It's more cafe than bar, but they serve beer, wine, and kombucha alongside some of the best plant-based breakfasts and lunches in the city.

**What makes it special:** This is the OG vegan-friendly spot in Minneapolis. The co-op ownership model means the staff genuinely cares about the food and the community. Regulars have been coming here for decades.

**Best for:** Morning or afternoon drinks with a meal. Not a late-night bar, but an essential part of the Minneapolis vegan scene.

---

### 4. Common Roots Cafe — Whittier
**2558 Lyndale Ave S, Minneapolis · Organic + Plant-Forward · Whittier**

Common Roots focuses on local, organic food and natural wines. Their bar program centers on craft cocktails made with clean ingredients, natural wines (many vegan-certified), and local craft beers.

**What to order:** Natural wines by the glass, seasonal cocktails, small plates with strong vegan options.

**The vibe:** Bright, airy, Lyndale Ave energy. More upscale than Seward Cafe, less intense than Reverie. Good for a glass of wine and a light bite.

---

## 🍺 Minneapolis Craft Breweries: Vegan-Friendly Taps + Food Trucks

Minnesota has one of the best craft brewery scenes in the country — and most of the taprooms are vegan-friendly (or can be with the right food truck rotation).

### Indeed Brewing Company — Northeast Minneapolis
**711 15th Ave NE** · Rotating food trucks, many vegan-friendly · Lively taproom

One of Minneapolis's most popular taprooms. Indeed regularly hosts food trucks, and the rotating lineup often includes vegan-friendly options. Their beer lineup — Midnight Ryder Black Ale, Day Tripper Pale Ale, Fluxus series — is all vegan-friendly. Check their Instagram for that day's food truck before you go.

### Dangerous Man Brewing — Northeast Minneapolis
**1300 2nd St NE** · Cash-preferred · Small, intimate NE gem

Dangerous Man is NE Minneapolis's beloved neighborhood taproom. Small, low-key, excellent beer. No kitchen of their own, but food trucks rotate regularly. All Dangerous Man beers are vegan (verified on Barnivore). Great for an unpretentious evening in NE.

### Surly Brewing — Prospect Park (Near U of M)
**520 Malcolm Ave SE** · Full restaurant kitchen · Verified vegan options

Surly has a full restaurant kitchen with a menu that includes clearly marked vegan options — salads, plant-based proteins, loaded fries. The brewpub setting means great beer + actual food, not just trucks. Bigger and louder than the others, but reliable for a group that has mixed dietary needs.

---

## 🍸 How to Order Vegan at Any Minneapolis Bar

You don't have to limit yourself to the fully vegan spots. Here's how to navigate any bar's drink menu as a vegan:

### Spirits: Almost Always Vegan
- **Vodka, gin, rum, tequila/mezcal, whiskey, bourbon:** Virtually all are vegan. The distillation process uses no animal products.
- **Watch for:** Honey-based liqueurs (mead, certain whiskeys marketed as "honey"), cream-based liqueurs (Baileys), or egg-based spirits.

### Beer: Usually Vegan, Check Craft Beers
- Traditional lagers, ales, IPAs, stouts, porters, and sours: typically vegan.
- Some British ales and certain craft beers use **isinglass** (fish bladder) as a fining agent — this is less common in American craft brewing.
- **Minnesota craft beers are generally safe.** When in doubt, check [Barnivore.com](https://www.barnivore.com) — the definitive vegan beer database.

### Wine: Check for Vegan Certification
- Many wines use **egg whites, gelatin, or casein** for fining (clarifying) the wine.
- Natural wines and wines marked "unfined/unfiltered" are usually vegan.
- Barnivore.com also covers wines.
- At bars: ask if they have vegan wine options — more bartenders know than you'd think.

### Cocktails: Watch for These
- ❌ **Honey syrup** — common in whiskey cocktails and bees-knees riffs
- ❌ **Egg white** — used in sours (Whiskey Sour, Clover Club, Pisco Sour) for froth
- ❌ **Cream** — White Russians, Irish Coffees, Grasshoppers
- ❌ **Worcestershire** — many Bloody Marys contain anchovy-based Worcestershire
- ✅ **Aquafaba** — chickpea water used as vegan egg white substitute (ask if available)
- ✅ **Agave nectar** — common vegan alternative to honey

---

## Quick Comparison

| Bar/Spot | Fully Vegan? | Neighborhood | Best For |
|----------|-------------|--------------|----------|
| **Reverie Cafe + Bar** | ✅ 100% | Powderhorn | Date night, intimate bar |
| **Francis Burger Joint** | ✅ 100% | North Loop | Sports nights, groups |
| **Seward Cafe** | Mostly vegan | Seward | Daytime + early evening |
| **Common Roots Cafe** | Plant-forward | Whittier | Natural wine + light bites |
| **Indeed Brewing** | Beer only + food trucks | NE Minneapolis | Taproom vibes, groups |
| **Dangerous Man Brewing** | Beer only + food trucks | NE Minneapolis | Low-key NE evenings |
| **Surly Brewing** | Verified vegan options | Prospect Park | Full meal + great beer |

---

## The Short Answer

**For a fully vegan bar experience:** Reverie Cafe + Bar or Francis Burger Joint. Zero compromises, zero questions asked.

**For craft brewery vibes:** Indeed or Dangerous Man in Northeast, with a check of that day's food truck.

**For wine and small plates:** Common Roots Cafe on Lyndale.

**For a Minneapolis institution:** Seward Cafe — the original.

Minneapolis is one of the best cities in the Midwest for vegan nightlife. You're not limited to sparkling water and a side salad anymore.
`
  },
  {
    slug: "north-loop-vegan-guide",
    title: "North Loop Vegan Guide: Best Plant-Based Restaurants in Minneapolis's Coolest Neighborhood",
    description: "Your complete guide to vegan dining in Minneapolis's North Loop — from 100% vegan smash burgers to coal-fired pizza and authentic ramen. Everything plant-based in the Warehouse District.",
    publishedAt: "2026-02-24",
    updatedAt: "2026-02-24",
    author: "Mia & Jay",
    category: "Neighborhood Guide",
    tags: ["north loop vegan", "vegan restaurants north loop minneapolis", "warehouse district vegan", "north loop minneapolis food", "vegan minneapolis neighborhoods"],
    readingTime: "7 min read",
    tldr: "North Loop's best vegan spots: Francis Burger Joint (#1 — 100% vegan smash burgers, loaded fries, and a full bar — the anchor of plant-based dining in the Warehouse District), Tori Ramen (North Loop ramen bar with a stellar veggie broth ramen), and Black Sheep Coal-Fire Pizza (coal-fired crusts + Daiya vegan cheese available). The neighborhood is walkable, close to Target Field, and has excellent vegan cocktail options at Francis and the surrounding craft cocktail scene.",
    faqs: [
      {
        question: "Are there vegan restaurants in North Loop Minneapolis?",
        answer: "Yes — North Loop has some of Minneapolis's best vegan dining. The standout is Francis Burger Joint at 215 N 1st St, a 100% vegan bar and restaurant with smash burgers, loaded fries, Nashville-style 'chicken' tenders, and a full bar with beer, wine, and cocktails. Tori Ramen on Washington Ave has an excellent veggie ramen made with mushroom broth, and Black Sheep Coal-Fire Pizza has vegan cheese options for their wood-fired pies."
      },
      {
        question: "What is the best vegan restaurant in North Loop Minneapolis?",
        answer: "Francis Burger Joint (215 N 1st St, North Loop) is the best vegan restaurant in the area — and one of the best in Minneapolis. It's 100% vegan with a casual sports bar vibe: smash burgers, Nashville-style tenders, loaded fries, and a full tap list. Nothing on the menu contains animal products, so you can order freely without interrogating the kitchen. Open daily for lunch and dinner."
      },
      {
        question: "Is North Loop Minneapolis walkable for vegan dining?",
        answer: "Very walkable. Francis Burger Joint, Tori Ramen, and Black Sheep Pizza are all within a 10-minute walk of each other in the North Loop/Warehouse District area. The neighborhood is flat, well-lit, and dense with restaurants — easy to hop between spots. It's also walking distance from Target Field, the Mississippi River Parkway, and the Guthrie Theater."
      },
      {
        question: "Is North Loop or Northeast Minneapolis better for vegans?",
        answer: "Both neighborhoods are great, but they offer different experiences. Northeast Minneapolis (NE) has the Herbivorous Butcher — America's first vegan butcher shop — making it a destination for serious plant-based food lovers. North Loop is more bar-forward, with Francis Burger Joint as the anchor and a stronger nightlife scene. For a food tour, do NE during the day (Herbivorous Butcher + Masu) and North Loop in the evening (Francis + cocktails)."
      },
      {
        question: "Can I get vegan pizza in North Loop Minneapolis?",
        answer: "Yes — Black Sheep Coal-Fire Pizza in North Loop offers vegan cheese (Daiya) on their coal-fired pies. Build your own with vegan cheese + vegetable toppings. The coal-fired crust is naturally vegan and has a great char. Note: call ahead to confirm vegan cheese availability, as it can sell out on busy weekends."
      },
      {
        question: "What is there to do in North Loop Minneapolis besides eat?",
        answer: "North Loop (aka the Warehouse District) is Minneapolis's most design-forward neighborhood. Visit the Guthrie Theater for world-class productions, walk the Stone Arch Bridge over the Mississippi River, explore independent shops and galleries along Washington Ave, or catch a Minnesota Twins game at Target Field (just a few blocks away). The neighborhood has excellent cocktail bars, coffee shops, and boutiques — easy to make a full day of it."
      }
    ],
    relatedRestaurants: ["francis-burger-joint", "tori-ramen", "black-sheep-pizza"],
    relatedPosts: ["northeast-minneapolis-vegan-guide", "vegan-restaurants-downtown-minneapolis", "vegan-bars-minneapolis", "late-night-vegan-food-minneapolis", "best-vegan-restaurants-minneapolis-2026"],
    content: `# North Loop Vegan Guide: Best Plant-Based Restaurants in Minneapolis's Coolest Neighborhood

The North Loop — Minneapolis's Warehouse District — is the city's most stylish neighborhood. Converted industrial buildings, independent boutiques, James Beard-nominated restaurants, and some of the best cocktail bars in the Midwest. And if you're eating plant-based? You have options.

This guide covers every vegan-friendly spot in the North Loop, from the 100% vegan bar that's become a neighborhood institution to the ramen counter and coal-fired pizza spot that accommodate plant-based diners better than most.

---

## 🏆 The Anchor: 100% Vegan in the North Loop

### 1. Francis Burger Joint — The North Loop's Vegan Flagship
**215 N 1st St, Minneapolis · 100% Vegan · Sports Bar Vibes · ⭐ 4.7**

If you eat plant-based in Minneapolis, you already know Francis. If you don't — pay attention.

Francis Burger Joint is a **100% vegan bar and restaurant** in the heart of the North Loop. Every single item on the menu — burgers, fries, tenders, wings, sauces, drinks — is entirely plant-based. No asterisks, no "ask your server," no hidden dairy. Just order what looks good.

**The Menu Highlights:**

| Item | The Breakdown |
|------|--------------|
| **Francis Smash Burger** | Double smashed patties, special sauce, pickles, onion — the flagship. Crispy edges, juicy center. |
| **Juicy Lucy** | Cheese-stuffed smash patty. The Minneapolis classic, done vegan. Order it. |
| **Nashville Tender Basket** | Crispy plant-based tenders, hot sauce, pickles, comeback sauce. Aggressively good. |
| **Loaded Fries** | Crispy fries, vegan cheese sauce, jalapeños, green onions, sour cream. A full meal. |
| **Buffalo Wings** | Cauliflower or plant-based — sauced and served with vegan ranch. Satisfying bar food. |

**The Bar:** Francis runs a full bar — local craft beer, wine, cocktails, mocktails. Happy hour runs weekdays; check their social for current specials.

**The Vibe:** Sports on TV. Loud. Fun. Totally unpretentious. You'll be sitting next to a table of meat-eaters who have no idea — or don't care — that everything is vegan. That's the goal.

> 💡 **Pro tip:** Francis gets busy on Friday and Saturday nights. Arrive by 6:30 PM or expect a wait. They don't take reservations.

---

## 🍜 The Ramen Counter: Veggie Done Right

### 2. Tori Ramen — Authentic Japanese, Vegan-Friendly
**Washington Ave N, North Loop · Japanese Ramen · $$**

Tori Ramen is the North Loop's ramen counter — warm, efficient, and genuinely good at accommodating plant-based diners. Their **Veggie Ramen** is the move: a rich mushroom-based broth (built from kombu, dried shiitake, and mirepoix), ramen noodles, roasted king trumpet mushrooms, menma (bamboo shoots), nori, soft-boiled egg (sub tofu), and green onion.

**What to Order:**
- **Veggie Ramen** — Ask for the tofu egg substitute (they do it). The mushroom broth is layered and umami-forward — not an afterthought.
- **Add-ons:** Extra king trumpet mushrooms, extra nori, extra menma — all vegan
- **Gyoza:** Verify vegan status — the pork version is not, but ask about vegetable gyoza availability

**The Vibe:** Counter seating, open kitchen, fast-casual energy. Perfect for a solo lunch or a quick dinner before a show at the Guthrie.

> 💡 **Tip:** Go weekday lunch for the shortest wait. Weekend evenings fill up fast.

---

## 🍕 The Pizza Stop: Coal-Fired Vegan Crust

### 3. Black Sheep Coal-Fire Pizza — The Vegan Pie
**600 Washington Ave N, North Loop · Coal-Fired Pizza · $$**

Black Sheep is the North Loop's coal-fired pizza institution. Their 900-degree coal ovens produce a crust that's blistered, leopard-spotted, and naturally vegan — no eggs, no dairy in the dough. Add vegan cheese (Daiya, available by request) and load up on plant-based toppings.

**Vegan-Friendly Build:**
- **Crust:** All crusts are vegan (just flour, water, yeast, salt)
- **Sauce:** Tomato sauce is vegan — confirm oil-based white sauces
- **Vegan Cheese:** Ask for Daiya ($3 upcharge) — call ahead on weekends to confirm availability
- **Toppings to stack:** Roasted garlic, hot honey (note: contains honey, skip if strict), mushrooms, roasted peppers, olives, caramelized onions, arugula

**Best Order:** Tomato sauce + Daiya + mushroom + roasted garlic + arugula. Finished in 90 seconds under coal heat.

**The Vibe:** Dark, lively, great for date night. Strong wine list and craft cocktails. Louder than you'd expect — reserve in advance on weekends.

---

## 🌮 More North Loop Vegan Options

### Spoon & Stable — For the Fancy Night
**211 N 1st St · Upscale American · $$$-$$$$**

James Beard-nominated chef Gavin Kaysen's flagship. Not vegan-focused, but their vegetable sides and salads are extraordinary — roasted beet preparations, wood-roasted carrots, grain salads. Tell them you're vegan; the kitchen accommodates. Great for a special occasion.

> Best move: Call ahead, explain you're vegan, and ask what's possible that evening. They've surprised guests with full vegan tasting menus with advance notice.

### Target Field / Warehouse District Food Halls
For quick grab-and-go near Target Field, look for pop-ups and food hall vendors. Quality varies — Francis Burger Joint is always the safe play if you want guaranteed vegan.

---

## 🗺️ North Loop Vegan Itinerary: Make a Day of It

| Time | What to Do |
|------|-----------|
| **10:00 AM** | Coffee at one of the North Loop's indie coffee shops (black coffee is always vegan) |
| **12:00 PM** | Lunch at Tori Ramen — Veggie Ramen + gyoza |
| **2:00 PM** | Explore Washington Ave boutiques, galleries, and design shops |
| **4:00 PM** | Walk to the Stone Arch Bridge overlook — stunning Mississippi River views |
| **5:30 PM** | Happy hour at Francis Burger Joint — drinks + loaded fries |
| **7:00 PM** | Dinner at Francis or grab a coal-fired pie at Black Sheep |
| **9:00 PM** | Cocktails at a North Loop bar — most spirits are vegan, most cocktail bars can make plant-based drinks |

---

## 🏠 The Neighborhood: What to Know

**North Loop at a Glance:**
- **Also called:** The Warehouse District
- **Character:** Design-forward, creative, urban — converted industrial warehouses turned into restaurants, boutiques, and studios
- **Parking:** Street parking (meters until 10 PM) + ramps on 1st Ave N and near Target Field
- **Transit:** Metro Green Line + multiple bus routes; walkable from downtown
- **Walkability:** Excellent — flat, well-lit, dense with destinations
- **Best for:** Couples, friend groups, post-work dinners, pre-show dining (Guthrie Theater is close), game day eating (Target Field)

**The Vegan Landscape:** North Loop is anchored by Francis Burger Joint — Minneapolis's most popular vegan restaurant and one of the best in the Midwest. Beyond Francis, several restaurants accommodate vegans well. The neighborhood skews upscale, so expect "plant-forward" menus rather than dedicated vegan concepts (except Francis).

---

## How North Loop Compares to Other Minneapolis Vegan Neighborhoods

| Neighborhood | Top Vegan Spot | Vibe | Best For |
|-------------|---------------|------|---------|
| **North Loop** | Francis Burger Joint | Bar & nightlife | Evenings, date night, sports |
| **Northeast** | Herbivorous Butcher | Artsy & foodie | Daytime food tours |
| **Uptown** | Amazing Thailand / Reverie | Eclectic, neighborhood | Brunch, casual dinner |
| **Downtown** | Lulu EthioVegan | Fast-casual, diverse | Weekday lunch |
| **Lyn-Lake** | Peninsula Malaysian / French Meadow | Cafe, international | Weekend brunch, dinner |

---

## The Bottom Line

North Loop is the best neighborhood in Minneapolis for vegan *nightlife* — and Francis Burger Joint is the reason. It's the rare 100% vegan bar where non-vegans don't notice (or don't care), which makes it perfect for mixed groups. Add Tori Ramen for weekday lunch and Black Sheep for pizza night, and you have a neighborhood that works for plant-based dining throughout the week.

If you're making a vegan food tour of Minneapolis, hit Northeast in the afternoon (Herbivorous Butcher + Masu) and end your night in the North Loop (Francis + cocktails). That's the play.

**The North Loop vegan hit list:**
1. ✅ Francis Burger Joint — 100% vegan, any night of the week
2. ✅ Tori Ramen — Veggie Ramen, weekday lunch
3. ✅ Black Sheep Pizza — vegan cheese on coal-fired crust, call ahead

See our full [Minneapolis Vegan Restaurant Guide](/blog/best-vegan-restaurants-minneapolis-2026) for the city-wide top picks.
`
  },
  {
    slug: "vegan-food-trucks-twin-cities-2026",
    title: "Best Vegan Food Trucks in the Twin Cities (2026 Season Guide)",
    description: "Your complete guide to vegan and vegan-friendly food trucks in Minneapolis and Saint Paul - from spring pop-ups to summer festivals.",
    publishedAt: "2026-02-25",
    updatedAt: "2026-02-25",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan food trucks twin cities", "vegan food trucks minneapolis", "vegan food trucks st paul", "twin cities food trucks vegan", "minneapolis vegan food trucks 2026", "vegan street food minneapolis"],
    readingTime: "7 min read",
    tldr: "Twin Cities vegan food trucks are most active spring through fall. The Herbivorous Butcher appears at markets and festivals - follow their Instagram. For any truck, ask what's plant-based - Indian, Ethiopian, falafel, and taco trucks often have strong vegan options. Best spots to find them: Mill City Farmers Market, brewery taprooms in NE Minneapolis, and neighborhood summer festivals. Track schedules on Instagram and Roaming Hunger.",
    faqs: [
      {
        question: "Are there vegan food trucks in Minneapolis?",
        answer: "Yes - the Twin Cities has an active food truck scene with several vegan and vegan-friendly options, especially during spring and summer. The Herbivorous Butcher (based in NE Minneapolis) appears at events and markets. Beyond dedicated vegan trucks, many Indian, Ethiopian, falafel, and taco trucks have solid plant-based menus. Check Instagram and Roaming Hunger for current schedules."
      },
      {
        question: "How do I find vegan food trucks in the Twin Cities?",
        answer: "Instagram is the best tool - follow individual trucks and search hashtags like #MplsFoodTrucks and #VeganMpls. The Roaming Hunger app also aggregates Twin Cities food truck locations and schedules. Farmers markets (Mill City, Minneapolis Farmers Market, Fulton) regularly feature food vendors with vegan options."
      },
      {
        question: "When is food truck season in Minneapolis?",
        answer: "Peak food truck season in Minneapolis runs April through October, with the busiest months being June, July, and August. Some trucks operate year-round at indoor markets and pop-ups, but the outdoor festival and farmers market circuit is strictly spring through fall."
      },
      {
        question: "What Minneapolis events have vegan food trucks?",
        answer: "Mill City Farmers Market, Fulton Farmers Market, and Minneapolis Farmers Market all host food vendors with vegan options. Summer neighborhood street fairs (Powderhorn May Day, Art-A-Whirl in NE Minneapolis), brewery taproom pop-ups in the North Loop and Northeast, and various outdoor festivals throughout summer are all reliable spots to find food trucks."
      }
    ],
    relatedRestaurants: [],
    relatedPosts: ["vegan-brunch-minneapolis", "vegan-bars-minneapolis", "vegan-restaurants-uptown-minneapolis", "best-vegan-restaurants-minneapolis-2026", "ethiopian-vegan-food-minneapolis", "northeast-minneapolis-vegan-guide"],
    content: `
## Why Food Trucks Are Having a Moment in the Twin Cities

Minneapolis has always had a strong food truck culture - partly because of the density of outdoor events (farmers markets, neighborhood street fairs, brewery pop-ups, summer festivals), and partly because the city's independent food scene rewards scrappy, mobile operators who can show up where the crowds are.

For vegans, food trucks are particularly interesting. Many plant-based chefs have launched via the mobile format - lower startup costs, direct customer feedback, and the flexibility to test menus before committing to a permanent space. As a result, some of the most creative vegan food in the metro shows up on wheels - or at a farmers market booth.

The 2026 season runs roughly April through October. Here's how to navigate it and make sure you actually find the good stuff.

---

## Top Vegan and Vegan-Friendly Food Trucks to Know

### The Herbivorous Butcher (Events and Markets)

The Herbivorous Butcher is the most recognized vegan brand in the Twin Cities. While primarily known for their Northeast Minneapolis shop - where they sell house-made vegan meats, cheeses, and sandwiches - they appear at events, festivals, and markets throughout spring and summer.

If you haven't been to their shop, the sandwiches are the move: built on their own vegan deli slices with house-made sauces. At pop-ups and events, they typically run a focused menu of signature items. Worth seeking out when they're near you.

**Where to find them:** Follow [@HerbivorousButcher](https://www.instagram.com/herbivorousbutcher/) on Instagram for event announcements and market appearances. Their NE Minneapolis shop is also open year-round if you don't want to wait for a pop-up.

---

### Indian and South Asian Trucks

Indian food trucks are arguably the most reliable bet for vegans in any city - and the Twin Cities is no exception. Dal, chana masala, aloo gobi, samosas, and rice dishes are frequently all-vegan by default. Look for trucks at downtown lunch spots, farmers markets, and summer festivals. The spice-forward cooking and naturally plant-based base of many dishes makes Indian trucks a consistent win.

---

### Ethiopian Trucks and Vendors

Ethiopian food is one of the best vegan cuisines on the planet - injera flatbread with red lentils, split peas, roasted vegetables, and greens is a complete meal that happens to be entirely plant-based. Several Ethiopian vendors operate in Twin Cities market and festival circuits. For a deeper dive into Ethiopian vegan food in the metro, see our [Ethiopian vegan food Minneapolis guide](/blog/ethiopian-vegan-food-minneapolis).

---

### Falafel and Mediterranean

Falafel wraps, hummus plates, tabbouleh, and roasted vegetable bowls are nearly always vegan. Several falafel trucks operate in the Twin Cities - ask about the pita wrap options and what's cooked without dairy.

---

### Taco Trucks

Many of the Twin Cities' taco trucks have excellent plant-based options: black bean, potato, grilled vegetable, and roasted mushroom fillings are common. Ask what's cooked without lard (some beans are cooked with it, some aren't), and you'll find that several options are naturally vegan.

---

## How to Track Vegan Food Trucks in Minneapolis

The food truck schedule changes weekly - sometimes daily. Here's how to stay on top of it:

### Instagram Is Your Best Tool

Instagram is the primary communication channel for Twin Cities food trucks. Almost every truck with a regular presence posts their weekly schedule on stories and in their feed.

Tips for tracking on Instagram:
- Follow trucks you like and turn on post notifications
- Search hashtags like **#TwinCitiesFoodTrucks**, **#MplsFoodTrucks**, and **#VeganMpls**
- Check the Instagram pages for event venues - farmers markets, breweries, and parks often tag which trucks are appearing that week

### Roaming Hunger

[Roaming Hunger](https://roaminghunger.com/) is a food truck tracking platform with Twin Cities coverage. You can search by date and location to see which trucks are scheduled nearby. Coverage is strongest for downtown Minneapolis and popular event sites.

### The Twin Cities Food Truck Community

Several Facebook groups and local food blogs track the Twin Cities food truck scene. A quick search for "Twin Cities food trucks" will surface the most active communities - these are good for learning about new operators before they have a big Instagram following.

---

## Best Events and Spots to Catch Vegan Food Trucks

### Farmers Markets

Farmers markets are the most reliable spots to find trucks with vegan options. The Mill City Farmers Market, Minneapolis Farmers Market, and Fulton Farmers Market all feature food vendors alongside produce - and typically include a mix of ethnic food trucks and plant-based prepared food vendors. See our [Twin Cities farmers markets vegan guide](/blog/vegan-farmers-markets-twin-cities-2026) for a full breakdown.

### Brewery Taprooms (Northeast Minneapolis and North Loop)

Many Twin Cities breweries host food trucks on weekends - Thursday through Saturday is common. Northeast Minneapolis breweries and North Loop taprooms frequently feature rotating truck pop-ups. If you're already planning a vegan bar night (check our [vegan bars Minneapolis guide](/blog/vegan-bars-minneapolis) for the best spots), a food truck out front is a common bonus in warmer months.

### Neighborhood Street Fairs and Festivals

Minneapolis's summer neighborhood events - Powderhorn May Day Festival, Art-A-Whirl in Northeast, neighborhood block parties throughout the summer - regularly feature food trucks. These are good hunting grounds for plant-based vendors and smaller operations that don't have a permanent downtown spot.

### Downtown Minneapolis Lunch Spots

During the work week, Nicollet Mall and the surrounding blocks see regular food truck lunch rotations in warmer months. Check for trucks near Government Center and along the Nicollet Mall corridor on weekdays.

---

## Tips for Navigating the Food Truck Scene as a Vegan

**Ask about shared equipment.** Many food trucks cook meat and plant-based items on the same grill or griddle. If cross-contamination matters to you, ask upfront - most operators will tell you plainly.

**Go early at events.** Popular items sell out. If a truck has a signature vegan dish that's been getting attention, assume it could be gone by 1pm at a busy market or festival.

**Build a truck following list.** Create a dedicated Instagram list of Twin Cities food trucks you want to track. Checking it on Thursdays or Fridays is a good way to plan your weekend eating around who's nearby.

**Tip well.** Food truck operating costs are high and margins are tight. The best vegan trucks survive because their communities support them consistently.

---

## The Bigger Picture: Vegan Food in the Twin Cities

The food truck scene is one slice of a thriving plant-based food ecosystem in Minneapolis and Saint Paul. For sit-down options, see our [vegan brunch Minneapolis guide](/blog/vegan-brunch-minneapolis) for the best weekend spots - or head straight to the [best vegan restaurants guide](/blog/best-vegan-restaurants-minneapolis-2026) for the full city rundown.

The 2026 season is shaping up to be a strong one for outdoor dining in the Twin Cities. Follow the trucks, hit the markets, and eat something good on a picnic blanket. That's what spring in Minneapolis is for.

---

*Food truck schedules change frequently. Always confirm on Instagram or the truck's website before making a special trip.*
`
  },
  {
    slug: "vegan-farmers-markets-twin-cities-2026",
    title: "Vegan Finds at Twin Cities Farmers Markets (2026 Season Guide)",
    description: "From fresh produce to vegan baked goods and plant-based prepared foods - the best Twin Cities farmers markets for vegans in 2026.",
    publishedAt: "2026-02-25",
    updatedAt: "2026-02-25",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan farmers market twin cities", "vegan farmers market minneapolis", "twin cities farmers markets 2026", "vegan food farmers market minneapolis", "minneapolis farmers market vegan", "st paul farmers market vegan"],
    readingTime: "8 min read",
    tldr: "Best Twin Cities farmers markets for vegans: Mill City Farmers Market (top pick - curated vendors, riverside location, excellent prepared foods), St. Paul Farmers Market (largest selection, multiple locations), Minneapolis Farmers Market (open year-round, great for produce), Fulton Farmers Market (neighborhood feel, strong baked goods). Look for vegan baked goods, fresh produce, tofu/tempeh vendors, and prepared food booths. Season runs May-October for most markets - check individual websites for 2026 dates.",
    faqs: [
      {
        question: "What farmers markets are in Minneapolis?",
        answer: "Major Minneapolis farmers markets include: the Minneapolis Farmers Market (312 E Lyndale Ave N, open year-round), Mill City Farmers Market (at Mill City Museum, seasonal May-October), Fulton Farmers Market (SW Minneapolis neighborhood market, seasonal), and Kingfield Farmers Market. St. Paul has its own large market system with multiple locations."
      },
      {
        question: "What can vegans find at Twin Cities farmers markets?",
        answer: "Twin Cities farmers markets typically have: fresh produce (the core of any plant-based diet), vegan baked goods from local bakeries, plant-based prepared foods (falafel, grain bowls, Ethiopian, Indian), tofu and tempeh from local producers, mushroom vendors, nut butters, preserves, and seasonal items like spring greens, asparagus, and strawberries. Ask vendors directly - most are happy to answer vegan questions."
      },
      {
        question: "Is the Minneapolis Farmers Market open year-round?",
        answer: "Yes - the main Minneapolis Farmers Market location (312 E Lyndale Ave N) operates year-round, with outdoor markets running spring through fall and a reduced indoor market continuing through winter. Hours and vendor selection are most robust from May through October."
      },
      {
        question: "When does the Mill City Farmers Market open for 2026?",
        answer: "Mill City Farmers Market typically runs from May through October on Saturday mornings. Check millcityfarmersmarket.org for confirmed 2026 opening date and hours."
      },
      {
        question: "What is the best farmers market in the Twin Cities?",
        answer: "Mill City Farmers Market is widely considered the most curated and food-focused market in the Twin Cities - excellent for prepared foods and local specialty vendors. The St. Paul Farmers Market is the largest for raw produce and variety. The Minneapolis Farmers Market is the most accessible year-round. Which is 'best' depends on what you're looking for."
      }
    ],
    relatedRestaurants: [],
    relatedPosts: ["vegan-brunch-minneapolis", "vegan-coffee-shops-minneapolis", "best-vegan-restaurants-minneapolis-2026", "vegan-food-trucks-twin-cities-2026", "vegan-bakeries-minneapolis", "northeast-minneapolis-vegan-guide"],
    content: `
## Why Farmers Markets Are a Vegan's Best Friend

For plant-based eaters, farmers markets are one of the best ways to connect with your food - seasonally, locally, and in a way that a grocery store run just doesn't replicate. You're talking directly to the person who grew the produce, baked the sourdough, or pressed the tofu. You can ask questions, discover new vendors, and find ingredients you genuinely can't get at a supermarket.

In the Twin Cities, the farmers market scene is strong. Several markets operate across Minneapolis and Saint Paul from spring through fall, each with its own character and vendor mix. Here's what to know about each one - and what to look for as a vegan.

---

## The Markets

### Mill City Farmers Market - Top Pick for Prepared Foods

**Minneapolis - Mill City Museum, 704 S 2nd St | Season: May - October, Saturdays**

If you're going to one Twin Cities farmers market for the full experience, Mill City is the one. Located at the Mill City Museum on the Mississippi River - adjacent to the Stone Arch Bridge - it's a beautifully situated, curated market with a strong emphasis on prepared foods and local specialty vendors alongside traditional produce.

The prepared food vendors at Mill City consistently include excellent vegan options: grain bowls, falafel, fresh-pressed juices, and plant-based baked goods rotate through the season. The market is smaller and more curated than some of the larger city markets, which means a higher hit rate on interesting finds.

**What to look for as a vegan:**
- Prepared food booths with grain bowls and vegetable-forward dishes
- Vegan baked goods from local bakeries (ask vendors directly - many label clearly)
- Fresh produce from regional farms
- Specialty items like local mushrooms, artisan pickles, and ferments

**Pro tip:** Come hungry and plan to eat a full meal from the prepared food vendors. Mill City's food vendor selection is among the best in the market circuit.

**Check millcityfarmersmarket.org for confirmed 2026 dates and vendor lists.**

---

### Minneapolis Farmers Market - Year-Round and Accessible

**North Loop / Near Downtown - 312 E Lyndale Ave N | Open year-round**

The Minneapolis Farmers Market is one of the few in the region that operates year-round - outdoor markets in warmer months and a reduced indoor format through winter. The main location near the North Loop and the satellite Lyndale Avenue market are both worth knowing.

This market is more traditional than Mill City - heavy on produce, plants, and staple items. For vegans, the produce selection is the main draw: seasonal vegetables and fruit from regional farms, often at better prices than grocery stores for volume.

The prepared food and specialty vendor mix is solid but not as curated as Mill City. You'll find a range of ethnic food vendors, baked goods, and prepared items mixed in with the produce stalls.

**What to look for as a vegan:**
- Seasonal produce (spring: asparagus, greens, rhubarb; summer: tomatoes, corn, berries; fall: squash, apples)
- Plant starts for home growing in spring
- Ethnic food vendors with vegan options - ask what's plant-based
- Local honey, preserves, and nut butters

**Check mpls.gov/farmers-market for 2026 hours and seasonal schedule.**

---

### St. Paul Farmers Market - Best for Volume and Variety

**Multiple locations - Lowertown main market + satellite locations | Season: April - November**

The St. Paul Farmers Market is the largest producers-only market in the region - meaning every vendor is required to grow or make what they sell. That producer-only rule means a consistently high quality and authenticity across the stalls.

The Lowertown main market (at 5th and Wall St in downtown St. Paul) is the flagship, running Saturday and Sunday mornings from April through November. Additional satellite locations operate throughout the metro.

For produce shoppers, this is the gold standard. The variety and volume are unmatched in the Twin Cities market system. You'll find vendors who specialize in heirloom tomatoes, unusual squash varieties, and greens you won't find anywhere else.

**What to look for as a vegan:**
- Bulk produce in season - this is the best market for loading up on summer tomatoes or fall squash
- Tofu and tempeh - local producers occasionally appear at the market, worth seeking out
- Vegan baked goods from local bakeries and producers
- Specialty mushroom vendors (morels in spring, chanterelles in summer)

**Check stpaulfarmersmarket.com for confirmed 2026 dates, hours, and locations.**

---

### Fulton Farmers Market - Neighborhood Feel, Strong Baked Goods

**Southwest Minneapolis - Fulton neighborhood | Season: June - October, Sundays**

The Fulton Farmers Market is a neighborhood-scale market with a loyal local following. It's smaller than the major city markets, which makes it easier to navigate and gives it a more intimate community vibe.

The baked goods vendors at Fulton are a consistent highlight - local bakeries bring vegan-friendly bread, pastry, and seasonal items. It's a good market for slow weekend mornings: coffee, pastries, fresh produce, and a relaxed pace.

**What to look for as a vegan:**
- Vegan baked goods - ask vendors at each bakery booth what's plant-based
- Fresh produce from local farms
- Honey, preserves, and specialty food items
- Prepared snack items for eating at the market

**Check the Fulton neighborhood association website or their social media for 2026 dates.**

---

### Kingfield Farmers Market - Neighborhood Discovery

**Southwest Minneapolis - Kingfield neighborhood | Season: May - October, Sundays**

Kingfield runs a compact, community-oriented market in SW Minneapolis. Like Fulton, it's a neighborhood-scale operation - smaller vendor selection but very walkable and local in feel. Worth checking if you're in the area; a good source for produce and baked goods with less traffic than the larger markets.

---

## What to Look For: A Vegan's Market Shopping Guide

### Fresh Produce - The Foundation

The reason to go to a farmers market over a grocery store is the produce. In-season, locally grown vegetables and fruit at farmers markets are almost always fresher, more flavorful, and often competitively priced compared to grocery stores.

Spring priority list: asparagus, spring greens (arugula, spinach, mixed greens), rhubarb, early strawberries, herbs, pea shoots.

### Vegan Baked Goods

Most Twin Cities farmers markets include at least a few bakery vendors. Not all bakeries offer vegan items - but many do, and more are adding vegan options each season. Ask directly: "Do you have anything vegan?" is a completely normal farmers market question, and most vendors know their ingredients well.

Look for: sourdough bread (often vegan), fruit-based pastries, cookies, granola, and seasonal items. If you want more dedicated vegan bakery options in Minneapolis, see our [vegan bakeries Minneapolis guide](/blog/vegan-bakeries-minneapolis).

### Plant-Based Prepared Foods

The prepared food vendors at farmers markets are increasingly vegan-friendly. Look for:
- Grain and rice bowl vendors
- Falafel and Mediterranean food
- Indian food vendors (dal, chana masala, samosas)
- Ethiopian food vendors (injera with lentils and vegetables)
- Fresh juice and smoothie bars

### Specialty Items

Farmers markets are the best place in the metro to find local tofu, tempeh, mushrooms, unusual produce varieties, artisan nut butters, fermented foods, and other plant-based specialty items. Take your time browsing - the interesting vendors aren't always at the front.

---

## Making the Most of Market Season

**Go in the morning.** The best vendors sell out. Peak selection is typically in the first hour or two of the market.

**Bring cash and reusable bags.** Most vendors accept cards now, but cash is still faster and preferred. A few produce vendors are cash-only.

**Talk to vendors.** Ask what's been growing well, what's coming into season, and how they'd cook something. Farmers and food producers at markets almost always enjoy talking about their work.

**Pair with coffee and brunch.** Market mornings are better with a good coffee stop. See our [vegan coffee shops Minneapolis guide](/blog/vegan-coffee-shops-minneapolis) for the best nearby options, and our [vegan brunch Minneapolis guide](/blog/vegan-brunch-minneapolis) if you want to turn market Saturday into a full morning out.

---

## Season Overview for 2026

Most Twin Cities farmers markets run from spring through fall - roughly May through October, with the Minneapolis Farmers Market open year-round. Here's the seasonal produce timeline to plan around:

- **April - May (early season):** Spring greens, asparagus, rhubarb, pea shoots, herbs, plant starts
- **June - July (peak spring/early summer):** Strawberries, peas, lettuce, early tomatoes, fresh herbs
- **August (peak summer):** Tomatoes, corn, peppers, cucumbers, berries, beans, summer squash
- **September - October (fall):** Winter squash, apples, root vegetables, late tomatoes, pumpkins

**For confirmed 2026 dates:** check mpls.gov for Minneapolis markets, stpaulfarmersmarket.com for St. Paul, and millcityfarmersmarket.org for Mill City.

---

*Market hours and vendor selection vary week to week. Check individual market websites and social media for current vendor lists before visiting.*
`
  },
  {
    slug: "vegan-grocery-stores-minneapolis",
    title: "Best Vegan Grocery Stores in Minneapolis: Co-ops, Natural Foods & Specialty Shops (2026)",
    description: "The best vegan grocery stores in Minneapolis — from Seward Co-op and Wedge Co-op to Herbivorous Butcher, Trader Joe's, and Whole Foods. Where to buy vegan staples, specialty items, and local plant-based brands in the Twin Cities.",
    publishedAt: "2026-02-25",
    updatedAt: "2026-02-25",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan grocery stores minneapolis", "minneapolis vegan grocery", "vegan shopping minneapolis", "seward co-op vegan", "minneapolis co-op vegan", "plant-based grocery minneapolis", "vegan stores minneapolis", "vegan food minneapolis"],
    readingTime: "8 min read",
    tldr: "Best vegan grocery stores in Minneapolis: Seward Co-op (the anchor of the Twin Cities natural food scene, two locations), Wedge Community Co-op (Lyn-Lake, massive bulk section), Herbivorous Butcher (NE Minneapolis, 100% vegan specialty meats and cheeses), Trader Joe's (best everyday value for vegan staples), and Linden Hills Co-op (South Minneapolis neighborhood anchor). Mississippi Market Co-op covers St. Paul.",
    faqs: [
      {
        question: "What are the best vegan grocery stores in Minneapolis?",
        answer: "The best vegan grocery stores in Minneapolis are: Seward Co-op (Franklin Ave SE — the Twin Cities' original natural food anchor with exceptional vegan selection), Wedge Community Co-op (Lyndale Ave S in Lyn-Lake, massive bulk section and local brands), Herbivorous Butcher (507 1st Ave NE — specialty 100% vegan meats, cheeses, and deli), Linden Hills Co-op (South Minneapolis neighborhood co-op), and Trader Joe's (multiple locations, best everyday vegan value). For St. Paul, Mississippi Market Co-op on Grand Ave is the top pick."
      },
      {
        question: "Is Seward Co-op good for vegans?",
        answer: "Yes — Seward Co-op is one of the best grocery stores in the country for vegans. The Franklin Ave SE location has an extensive bulk section with grains, legumes, nuts, and seeds; a deli with rotating vegan hot food and grab-and-go options; a large supplement and personal care section with vegan-certified products; and strong local and regional brand selection. All products are clearly labeled with vegan, gluten-free, and organic icons. They also have a second location in Minnehaha."
      },
      {
        question: "Where can I buy vegan meat and cheese in Minneapolis?",
        answer: "Herbivorous Butcher (507 1st Ave NE, Northeast Minneapolis) is the top destination for specialty vegan meats and cheeses in Minneapolis — it's a 100% vegan butcher and deli with house-made products like smoked gouda, pepperoni, chicken strips, and pulled pork. For more accessible options, Seward Co-op and Wedge Co-op carry the widest selection of brand-name vegan meats (Impossible, Beyond, Field Roast, Tofurky) and cheeses (Violife, Miyoko's, Kite Hill). Whole Foods also has a strong vegan deli selection."
      },
      {
        question: "Does Trader Joe's in Minneapolis have good vegan options?",
        answer: "Yes — Trader Joe's is one of the best value options for vegan grocery shopping in Minneapolis. They carry a wide range of affordable vegan staples including plant-based milks, vegan cheeses (shredded mozzarella, sliced cheddar, cream cheese), vegan proteins (breaded chicken tenders, gyoza, soyrizo), frozen meals, and an excellent snack selection. Minneapolis has multiple Trader Joe's locations including Uptown (1769 W Lake St), St. Louis Park, and others."
      },
      {
        question: "Are Minneapolis co-ops expensive for vegan shopping?",
        answer: "Co-ops in Minneapolis are generally priced 10-30% higher than conventional grocery stores for packaged items, but their bulk sections often offer better value than comparable packaged products. If you're on a budget, use co-ops for specialty items, local brands, and bulk grains and legumes — and shop Trader Joe's or ALDI for everyday staples like plant milk, canned beans, and frozen vegetables."
      },
      {
        question: "What is the best grocery store for vegan staples in Minneapolis?",
        answer: "For everyday vegan staples (plant milk, canned beans, tofu, frozen vegetables, pasta, snacks), Trader Joe's offers the best combination of price and quality in Minneapolis. For fresh produce and bulk items, Seward Co-op or Wedge Co-op. For specialty vegan meats and cheeses, Herbivorous Butcher. For the largest overall natural foods selection, Whole Foods Market in St. Louis Park. Most vegan Minneapolitans shop at a combination of 2-3 stores depending on what they need."
      }
    ],
    relatedRestaurants: ["herbivorous-butcher", "seward-cafe", "wedge-table", "vegan-east-bakery"],
    relatedPosts: ["best-vegan-restaurants-minneapolis-2026", "vegan-comfort-food-minneapolis", "vegan-food-minneapolis", "vegan-brunch-minneapolis", "northeast-minneapolis-vegan-guide", "vegan-farmers-markets-twin-cities-2026"],
    content: `
## Vegan Grocery Shopping in Minneapolis: The Full Guide

Minneapolis has one of the best vegan grocery ecosystems in the Midwest — anchored by a co-op culture that goes back to the 1970s and accelerated by a food scene that takes plant-based cooking seriously. Whether you're looking for bulk grains, specialty vegan meats, local brands, or just the cheapest possible plant milk, this guide covers every store worth knowing about.

---

## 🌿 The Co-ops: The Heart of MPLS Vegan Grocery Culture

Minneapolis's co-op scene is genuinely exceptional. These are member-owned grocery stores that have been championing organic, local, and plant-forward food long before it was mainstream.

### 1. Seward Co-op — The Anchor

**Two locations:** 2823 E Franklin Ave (Seward) + 317 E 38th St (Minnehaha)

Seward Co-op is the original. It's been in the Seward neighborhood since 1972 and has grown into one of the best natural food stores in the country. For vegans, it checks every box:

- **Bulk section:** Massive selection of grains, legumes, nuts, seeds, flours, spices, and nutritional yeast by the pound
- **Produce:** Local and organic priority, excellent selection year-round
- **Deli:** Rotating vegan hot food (soups, grain bowls, curries), vegan grab-and-go sandwiches and salads
- **Vegan labels:** All products are icon-labeled — vegan, gluten-free, organic, local — so you never have to guess
- **Local brands:** Strong selection of Minnesota and regional vegan producers
- **Refrigerated section:** Comprehensive vegan meat, cheese, and dairy alternatives

The Minnehaha location serves the south Minneapolis corridor. Both locations are excellent; the Franklin Ave original is slightly larger.

**Member savings:** $15 one-time membership fee gives you access to member deals.

---

### 2. Wedge Community Co-op — Best Bulk Section

**2105 Lyndale Ave S (Lyn-Lake / Uptown adjacent)**

The Wedge is the Uptown/Lyn-Lake neighborhood co-op, and its bulk section is arguably the best in the city — more variety than even Seward for dry goods. The Wedge has been in the neighborhood since 1974.

**Why vegans love the Wedge:**
- Bulk bins with 200+ options including specialty items like black sesame seeds, hemp hearts, and unusual grains
- Strong local produce sourcing with Minnesota farm partnerships
- Excellent vegan deli with daily rotating specials
- Wide selection of vegan cheeses (Violife, Miyoko's, Kite Hill, Treeline)

---

### 3. Linden Hills Co-op — South Minneapolis Anchor

**43rd & Upton SW (Linden Hills)**

Linden Hills Co-op is smaller and more neighborhood-focused, but it's an excellent local option for South Minneapolis vegans. Good produce, solid vegan selection, and a community feel. If you live in Linden Hills, Fulton, or Lynnhurst, this is your go-to.

---

### 4. Mississippi Market — St. Paul's Co-op

**Two St. Paul locations:** 622 Selby Ave (Cathedral Hill) + 1500 W 7th St (West 7th)

If you're on the St. Paul side, Mississippi Market is the equivalent of Seward Co-op. Excellent bulk section, strong vegan selection, and the same member-owned ethos. The Selby Ave location is the original and slightly larger.

---

## 🥩 Specialty Vegan: Herbivorous Butcher

**507 1st Ave NE, Northeast Minneapolis**

Herbivorous Butcher deserves its own category. It's a 100% vegan butcher shop and deli — the first vegan butcher shop in the country. Everything is made in-house:

- Vegan "meats": smoked gouda-stuffed sausage, pepperoni, pulled pork, fried chicken strips, Italian sausage
- Vegan "cheeses": smoked gouda, sharp cheddar, brie, cream cheese, queso
- Deli sandwiches and grab-and-go items
- Wholesale to local restaurants (you'll recognize their products on several MPLS menus)

Prices are higher than grocery stores (these are handmade artisan products), but the quality is exceptional. Open Tuesday–Saturday. **Also ships nationally** via their website.

---

## 🛒 Conventional Stores: Best Value Options

### Trader Joe's — Best Everyday Value

**Multiple locations:** Uptown (1769 W Lake St), St. Louis Park, Woodbury, Minnetonka, Maple Grove

| Category | Top Picks | Price Range |
|----------|-----------|-------------|
| Plant milk | Oat, almond, coconut milk | $2.49–$3.49 |
| Vegan cheese | Shredded mozzarella, sliced cheddar, cream cheese | $3.49–$4.49 |
| Frozen protein | Chick'n tenders, mandarin orange chicken (vegan), soyrizo | $3.99–$5.99 |
| Snacks | Everything bagel seasoning, lentil chips, dried mango | $2–$4 |
| Pantry | Canned chickpeas, lentils, coconut milk, pasta | $0.89–$1.99 |

---

### Whole Foods Market

**St. Louis Park (1001 W Highway 7) + Minnetonka (2195 Ridgedale Dr)**

Largest conventional selection of vegan meats, cheeses, and specialty products in the Twin Cities. The hot bar typically has 3-5 clearly labeled vegan options daily. Prime members get 10% off weekly deals.

---

### ALDI — Hidden Gem for Budget Vegan Shopping

**Multiple MPLS-area locations**

ALDI's vegan selection has improved dramatically. Their private-label plant milks, canned beans, and frozen vegetables are priced 30-50% below Trader Joe's or Whole Foods. Worth adding to your rotation for budget staples.

---

### Fresh Thyme Market

**Edina (7200 France Ave S) + Maple Grove + Coon Rapids**

Fresh Thyme sits between conventional grocery stores and full natural foods stores. Good vegan protein and cheese selection. Their weekly sales often feature strong vegan deals.

---

## 🗺️ Where to Shop by Neighborhood

| Your Neighborhood | Best Nearby Options |
|------------------|---------------------|
| **Uptown / Lyn-Lake** | Wedge Co-op (walkable), Trader Joe's (W Lake St) |
| **Seward / Longfellow** | Seward Co-op (home base) |
| **Northeast** | Herbivorous Butcher, Seward Co-op NE location |
| **South Minneapolis** | Linden Hills Co-op, Seward Minnehaha |
| **Midtown / Lake St** | Wedge Co-op, ALDI (budget) |
| **St. Paul** | Mississippi Market (Cathedral Hill or West 7th) |
| **Suburbs** | Trader Joe's + Fresh Thyme (most suburbs) |

---

## Shopping Strategy: What to Buy Where

Most Minneapolis vegans shop at 2-3 stores:

**Seward Co-op or Wedge:** Bulk grains, legumes, specialty flours, local produce, vegan deli  
**Trader Joe's:** Everyday plant milks, budget vegan cheese, frozen proteins, pantry staples  
**Herbivorous Butcher:** Specialty cooking, impressive dinner parties, local gifts  
**Whole Foods:** Specific brands not available elsewhere, prime-sale deals, hot bar lunch  
**ALDI:** Budget staples, plant milks, canned goods, frozen vegetables

---

## The Bottom Line

What makes Minneapolis's vegan grocery scene unusual is that the co-ops aren't niche — they're neighborhood institutions. Seward Co-op has 14,000+ member-owners. The Wedge has been on Lyndale Avenue for 50 years. For vegans new to Minneapolis, joining a co-op is step one.

Browse our full [Minneapolis vegan restaurant guide](/blog/best-vegan-restaurants-minneapolis-2026) to pair your grocery haul with the best plant-based dining in the city.
`
  },
  {
    slug: "vegan-indian-food-minneapolis",
    title: "Best Vegan Indian Food in Minneapolis & St. Paul (2026 Guide)",
    description: "The best vegan Indian and Himalayan food in the Twin Cities — Gandhi Mahal, Himalayan Restaurant, Namaste Cafe, and Everest on Grand. What to order, what to skip, and why Minneapolis is surprisingly great for plant-based Indian cuisine.",
    publishedAt: "2026-02-25",
    updatedAt: "2026-02-25",
    author: "Mia & Jay",
    category: "Guide",
    tags: ["vegan indian food minneapolis", "vegan indian restaurant minneapolis", "vegetarian indian minneapolis", "gandhi mahal vegan", "himalayan restaurant minneapolis vegan", "vegan south asian food twin cities"],
    readingTime: "8 min read",
    tldr: "Best vegan Indian food in Minneapolis: Gandhi Mahal (Longfellow, chana masala + tofu palak, city's most beloved Indian comeback story), Himalayan Restaurant (Lake St, momos + Kathmandu curry, Nepali-Indian-Tibetan), Namaste Cafe (Uptown, organic Indian-Nepali, gorgeous patio), and Everest on Grand in St. Paul (jackfruit katahar + thukpa, Grand Ave institution). All four are vegan-friendly with extensive plant-based menus.",
    faqs: [
      {
        question: "What is the best vegan Indian restaurant in Minneapolis?",
        answer: "Gandhi Mahal (now operating as Curry in a Hurry at 3009 27th Ave S, Longfellow) is widely considered the best vegan-friendly Indian restaurant in Minneapolis. Their chana masala, tofu palak, and vegetable korma are all excellent, and the food is affordable with quick service. For a sit-down experience, Namaste Cafe (2512 Hennepin Ave, Uptown) offers organic Indian and Nepali cuisine with a beautiful patio, and Himalayan Restaurant (2910 E Lake St, Longfellow) serves outstanding momos and curries."
      },
      {
        question: "Is Indian food generally vegan-friendly?",
        answer: "Yes — Indian cuisine is one of the most naturally vegan-friendly cuisines in the world. A large portion of traditional Indian cooking is plant-based: lentil dishes (dal), chickpea dishes (chana masala), vegetable curries, rice dishes, and bread like roti and certain naan preparations. The main non-vegan ingredients to watch for are ghee (clarified butter), paneer (fresh cheese), and cream in certain sauces. Most Minneapolis Indian restaurants will happily substitute tofu for paneer and can prepare dishes without ghee on request."
      },
      {
        question: "What should I order at a vegan Indian restaurant in Minneapolis?",
        answer: "Great vegan orders at Minneapolis Indian restaurants: chana masala (chickpea curry, almost always vegan), dal makhani (lentil dish — ask without butter/cream or request vegan version), aloo gobi (potato and cauliflower), vegetable biryani, samosas (often vegan), momos with vegetable filling, and any jackfruit preparation. Ask that dishes be made without ghee. Avoid paneer dishes unless they can substitute tofu. At Himalayan Restaurant, the momos and chana masala are outstanding vegan choices."
      },
      {
        question: "Is Gandhi Mahal back open in Minneapolis?",
        answer: "Yes — Gandhi Mahal has returned as 'Curry in a Hurry by Gandhi Mahal' at 3009 27th Ave S in Longfellow. The original Gandhi Mahal location (also in Longfellow) was lost in 2020 but the family rebuilt with a quick-service concept that serves the same beloved recipes: chana masala, palak tofu, vegetable korma, and samosa chaat. The Longfellow community rallied around them and the new format delivers the same quality at a faster pace and lower price point."
      },
      {
        question: "Are there vegan Indian restaurants in St. Paul?",
        answer: "Yes. Everest on Grand (1278 Grand Ave, St. Paul) is a well-regarded Nepali-Indian-Tibetan restaurant on Grand Avenue with extensive vegetarian and vegan options — vegetable thukpa (Tibetan noodle soup), momos, katahar (jackfruit curry), and vegetable curries. It's one of the Twin Cities' best spots for Himalayan cuisine with strong vegan options throughout the menu."
      },
      {
        question: "What's the difference between Indian and Himalayan cuisine for vegans?",
        answer: "Both Indian and Himalayan (Nepali/Tibetan) cuisines offer excellent vegan options, but with different flavor profiles. Indian cuisine features complex spice blends (masala, turmeric, cumin, coriander) in thick curries, lentil dishes, and flatbreads. Himalayan cuisine includes momos (dumplings), thukpa (noodle soup), and curries with influences from Nepal, Tibet, and India — often lighter and less intensely spiced. In Minneapolis, restaurants like Himalayan Restaurant and Everest on Grand blend both traditions. Both are worth exploring for vegan diners."
      }
    ],
    relatedRestaurants: ["gandhi-mahal", "himalayan-restaurant", "namaste-cafe", "everest-on-grand"],
    relatedPosts: ["vegan-restaurants-st-paul", "vegan-asian-restaurants-minneapolis", "best-vegan-restaurants-minneapolis-2026", "vegan-brunch-minneapolis", "vegan-comfort-food-minneapolis"],
    content: `
## Why Minneapolis Is Great for Vegan Indian Food

Indian cuisine might be the single best match for vegan eating. Somewhere between 20 and 40 percent of the Indian population is vegetarian, and a significant portion of traditional Indian cooking — dals, chole, aloo preparations, rice dishes — was plant-based long before "plant-based" was a food trend. When you add the Himalayan cuisines of Nepal and Tibet into the mix (momos, thukpa, jackfruit curries), you get a region of the world whose food traditions are naturally aligned with how vegans eat.

Minneapolis has four restaurants that bring this cooking to a high level. Here's what you need to know about each one.

---

## 1. Gandhi Mahal (Curry in a Hurry) — Longfellow's Comeback Story

**Longfellow | 3009 27th Ave S | $**

Gandhi Mahal is a Minneapolis institution. The original restaurant — a full-service destination on Minnehaha Avenue — was one of the best Indian restaurants in the Twin Cities for over a decade. When it was lost in 2020, the community grieved. And then rallied. The Gandhi Mahal family came back with a quick-service concept, Curry in a Hurry, serving the same food faster and cheaper.

The result is one of the best value lunch spots in the city. The chana masala is deep and complex, the tofu palak is silky and rich, and the samosa chaat — chickpeas, tamarind chutney, yogurt (specify vegan) on flaky pastry — is a snack that demands repeating.

**What to order (vegan):**
- **Chana Masala** — the foundation dish, always vegan, deeply satisfying
- **Tofu Palak** — spinach-based curry with tofu substituted for paneer; ask to confirm vegan (no ghee)
- **Vegetable Korma** — mild, coconut-and-cashew based curry, comfort food at its best
- **Samosa Chaat** — specify no yogurt for fully vegan; the tamarind chutney alone is worth it
- **Vegetable Biryani** — fragrant basmati rice, mixed vegetables, whole spices

**What to watch:** Most dishes here are naturally dairy-light, but always mention vegan when ordering — ghee can sneak into dal and bread preparations.

**Bottom line:** Affordable, fast, and genuinely good. This is the place for vegan Indian on a weeknight.

---

## 2. Himalayan Restaurant — Lake Street's Momo Destination

**Longfellow | 2910 E Lake St | $$**

Lake Street's Himalayan Restaurant sits at the intersection of Indian, Nepali, and Tibetan cooking — a combination that produces some of the most distinctive and vegan-friendly food in the Twin Cities. The momos are the star: steamed (or kothe-style, pan-fried on one side) dumplings stuffed with spiced vegetables, served with a tangy tomato-cilantro chutney that you will want by the jar.

The curry selection is strong. The chana masala is a lighter, Nepali interpretation — brighter and more citrus-forward than the Indian version. The Kathmandu curry is the restaurant's signature: creamy without being heavy, complex without being overwhelming.

**What to order (vegan):**
- **Kothe Momos (vegetable)** — pan-fried on one side, crispy bottom, soft top, best dumplings on Lake Street
- **Steamed Momos (vegetable)** — if you want the classic version; the chutney is the same either way
- **Chana Masala** — brighter and lighter than most Indian versions; specify vegan
- **Kathmandu Curry (tofu)** — the house specialty; ask without cream for fully vegan
- **Thukpa (vegetable)** — Tibetan noodle soup; warming, substantial, naturally vegan

**What to watch:** Some curries use butter or cream. Ask for vegan preparation — the kitchen accommodates.

**Neighborhood note:** Himalayan is in Longfellow, a 10-minute drive from Uptown. Worth the trip specifically for the momos.

---

## 3. Namaste Cafe — Organic Indian in Uptown

**Uptown | 2512 Hennepin Ave | $$**

Namaste Cafe occupies a converted Victorian house on Hennepin Avenue — one of those only-in-Minneapolis dining spaces where the building is part of the experience. The menu is organic Indian and Nepali cuisine, carefully prepared and labeled. The patio is one of the better outdoor dining spots in Uptown.

The bhel puri starter — puffed rice, vegetables, chutneys — is a refreshing way to begin. The mango curry with tofu is the standout main: sweet, sour, and spicy in a balance that works. The chai is house-made and worth ordering with dessert.

**What to order (vegan):**
- **Bhel Puri** — light, crunchy street food starter; naturally vegan
- **Mango Curry with Tofu** — their most distinctive dish; sweet-tart-spicy, excellent balance
- **Aloo Bodi** — potato and black-eyed pea curry; simple, hearty, fully vegan
- **Dal Soup** — warming lentil soup; ask to confirm no ghee
- **Vegetable Thali** — a sampler plate; ask which components are vegan

**What makes it different:** Everything is organic. The space is unhurried. The patio, in warm weather, is one of Uptown's nicest dining experiences.

---

## 4. Everest on Grand — St. Paul's Himalayan Institution

**Summit-University, St. Paul | 1278 Grand Ave | $$**

Cross the river and Everest on Grand becomes the destination. Grand Avenue's dining strip has no shortage of excellent restaurants, and Everest has been one of its anchors for years. The menu spans India, Nepal, and Tibet, with an emphasis on vegetarian cooking that means vegan diners have genuine choices throughout.

The katahar — young jackfruit buds cooked with potatoes and spices — is one of the more interesting dishes in the Twin Cities. Long before jackfruit became a mainstream plant-based meat substitute, Nepali cooking was using it as a savory ingredient. Everest's version is the real thing.

**What to order (vegan):**
- **Katahar** — jackfruit curry with potatoes and spices; the standout dish, unique to Himalayan cooking
- **Momos (vegetable)** — stuffed with cabbage and ginger; served with tomato-sesame chutney
- **Vegetable Thukpa** — Tibetan noodle soup with snap peas; warming and deeply comforting
- **Vegetable Curry** — rotating seasonal preparations; ask the server what's vegan today
- **Roti** — whole wheat flatbread, often vegan; confirm no ghee

**St. Paul logistics:** Everest on Grand is on the heart of Grand Avenue, walkable from Cathedral Hill and the Macalester area. Worth combining with a walk down Grand.

---

## Vegan Indian Ordering Guide: What's Safe, What to Ask

Indian and Himalayan menus can feel intimidating if you're not sure what's automatically vegan. Here's a quick reference:

| Dish | Typically Vegan? | What to Watch |
|------|-----------------|---------------|
| Chana masala | ✅ Usually | Ask about ghee in base |
| Dal | ⚠️ Often | Tadka (finishing) often uses ghee; ask |
| Aloo gobi | ✅ Usually | Sometimes finished with ghee |
| Vegetable biryani | ✅ Usually | Ask about ghee in rice cooking |
| Momos (vegetable) | ✅ Yes | Wrappers are flour + water |
| Naan | ❌ Usually not | Contains dairy; roti is safer |
| Roti / chapati | ✅ Usually | Confirm no ghee |
| Paneer dishes | ❌ No | Paneer is fresh cheese; ask for tofu sub |
| Samosas | ✅ Usually | Some use ghee in pastry; ask |
| Lassi | ❌ No | Yogurt-based |
| Chai | ⚠️ Ask | Usually milk-based; ask for plant milk |

**The one ask that covers most situations:** When ordering, say *"I'm vegan — can you make this without ghee or dairy?"* Most Minneapolis Indian restaurants will accommodate without issue.

---

## The Neighborhoods

The four restaurants in this guide are split between two cities:

**Minneapolis — Longfellow (Lake Street corridor):**
Both Gandhi Mahal (Curry in a Hurry) and Himalayan Restaurant are in Longfellow, within a mile of each other on or near Lake Street. If you're doing a South Minneapolis food tour, you can hit both.

**Minneapolis — Uptown:**
Namaste Cafe is on Hennepin Avenue, walkable from the Uptown core and close to Lyn-Lake. Pairs well with dessert at [Glam Doll Donuts](/restaurants/glam-doll-donuts) a few blocks away.

**St. Paul — Grand Avenue:**
Everest on Grand is an easy drive from Minneapolis via I-94, right on the Grand Avenue strip. Pair it with a stop at [J. Selby's](/blog/j-selbys-review-saint-paul-vegan) a few miles away for a full St. Paul vegan day.

---

*See also: [Vegan Asian Restaurants Minneapolis](/blog/vegan-asian-restaurants-minneapolis) · [Vegan Restaurants St. Paul](/blog/vegan-restaurants-st-paul) · [Best Vegan Restaurants Minneapolis 2026](/blog/best-vegan-restaurants-minneapolis-2026)*
`
  },

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
