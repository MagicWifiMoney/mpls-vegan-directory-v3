export interface Restaurant {
  id: string;
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website: string;
  googlePlaceId: string;
  cuisineType: string[];
  veganStatus: '100% Vegan' | 'Vegetarian' | 'Vegan-Friendly';
  neighborhood: string;
  neighborhoodSlug: string;
  description: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  features: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  // These will be populated from Google Places API
  rating?: number;
  reviewCount?: number;
  hours?: string[];
  photos?: string[];
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    slug: 'herbivorous-butcher',
    name: 'The Herbivorous Butcher',
    address: '507 1st Ave NE',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55413',
    phone: '(612) 208-0992',
    website: 'https://www.theherbivorousbutcher.com/',
    googlePlaceId: 'ChIJe_6GK2wts1IRMpE4t_XUYAU',
    cuisineType: ['Deli', 'Vegan Meats', 'Cheese Shop'],
    veganStatus: '100% Vegan',
    neighborhood: 'Northeast Minneapolis',
    neighborhoodSlug: 'northeast',
    description: "America's first vegan butcher shop, The Herbivorous Butcher is a revolutionary establishment run by sibling duo Aubry and Kale Walch. Since 2016, they've been crafting mind-blowing plant-based meats and cheeses that fool even the most devoted carnivores. From Korean BBQ ribs to pepperoni, Italian sausages to turkey deli slices, every product is handcrafted in-house. Their artisan vegan cheeses include cheddar, havarti, gouda, and pepperjack. Grab a sandwich for lunch or stock up on provisions for home cooking.",
    priceRange: '$$',
    features: ['Takeout', 'Retail Shop', 'Catering', 'Online Orders'],
    coordinates: { lat: 44.9936, lng: -93.2636 }
  },
  {
    id: '2',
    slug: 'j-selbys',
    name: "J. Selby's",
    address: '169 Victoria St N',
    city: 'Saint Paul',
    state: 'MN',
    zip: '55104',
    phone: '(651) 222-3263',
    website: 'https://www.jselbys.com/',
    googlePlaceId: 'ChIJG4cPMgwrs1IRz_FTf4_XBEU',
    cuisineType: ['American', 'Comfort Food', 'Fast Casual'],
    veganStatus: '100% Vegan',
    neighborhood: 'Cathedral Hill',
    neighborhoodSlug: 'cathedral-hill',
    description: "A beloved plant-based haven in Saint Paul, J. Selby's serves innovative takes on American comfort food and fast food favorites. The menu features playful dishes like the legendary Crunchwrap (vegan taco meat wrapped in a grilled flour tortilla), crispy fried lion's mane mushroom 'wings,' and the indulgent Dirty Double burger with secret sauce. Their brunch features bottomless mimosas and hearty breakfast burritos. Don't miss the dairy-free shakes, sundaes, and extra-thick Frostbites with mix-ins like cookie dough.",
    priceRange: '$$',
    features: ['Dine-In', 'Takeout', 'Delivery', 'Brunch', 'Full Bar'],
    coordinates: { lat: 44.9533, lng: -93.1377 }
  },
  {
    id: '3',
    slug: 'trio-plant-based',
    name: 'Trio Plant-Based',
    address: '610 W Lake St',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55408',
    phone: '(612) 326-1326',
    website: 'https://www.trioplantbased.com/',
    googlePlaceId: 'ChIJrwLB4Gkts1IRhXqQ9Q8n-HQ',
    cuisineType: ['Soul Food', 'Southern', 'American'],
    veganStatus: '100% Vegan',
    neighborhood: 'Lyn-Lake',
    neighborhoodSlug: 'lyn-lake',
    description: "Minnesota's first Black-owned vegan restaurant, Trio Plant-Based serves soul food favorites that satisfy even the heartiest appetites. Chef Louis Hunter creates comfort food magic with dishes like the legendary Soul Food Platter featuring mac and cheese, collard greens, crumbled cornbread, and jackfruit BBQ riblets. The menu also includes nacho fries loaded with taco fixings, falafel burgers, chili mac, and Buffalo cauliflower wraps. Their cornbread alone is worth the visit—maple-kissed perfection.",
    priceRange: '$$',
    features: ['Dine-In', 'Takeout', 'Delivery', 'Catering'],
    coordinates: { lat: 44.9487, lng: -93.2901 }
  },
  {
    id: '4',
    slug: 'lulu-ethiovegan',
    name: 'Lulu EthioVegan',
    address: '12 E Franklin Ave',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55404',
    phone: '(612) 353-5758',
    website: 'https://www.luluethiovegan.com/',
    googlePlaceId: 'ChIJA4Fk8HIrs1IRGYAIz5GYXMI',
    cuisineType: ['Ethiopian', 'African'],
    veganStatus: '100% Vegan',
    neighborhood: 'Elliot Park',
    neighborhoodSlug: 'elliot-park',
    description: "Chef TG Feyisa brings heart, heritage, and serious culinary skill to her exclusively vegan Ethiopian restaurant. Traditional dishes are reimagined with plant-based ingredients: beef tibs become tender rosemary mushrooms with peppers, doro wot transforms into crispy shimbra asa (chickpeas in berbere sauce). The sampler platters are perfect for sharing, featuring sambusa (lentil-filled pastries), foule (crushed fava beans), and hearty lentil stews. Everything is scooped up with airy injera flatbread. The cozy Franklin Avenue spot is ideal for sipping ginger tea or telba (Ethiopian flaxseed drink).",
    priceRange: '$$',
    features: ['Dine-In', 'Takeout', 'Catering'],
    coordinates: { lat: 44.9625, lng: -93.2688 }
  },
  {
    id: '5',
    slug: 'reverie-cafe-bar',
    name: 'Reverie Cafe + Bar',
    address: '1517 E 35th St',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55407',
    phone: '(612) 987-7080',
    website: 'https://www.reveriempls.com/',
    googlePlaceId: 'ChIJ8Sf0O1Ets1IRzBK0XVXZR6U',
    cuisineType: ['American', 'Bar Food', 'International'],
    veganStatus: '100% Vegan',
    neighborhood: 'Powderhorn',
    neighborhoodSlug: 'powderhorn',
    description: "A vibrant community hub in Powderhorn, Reverie Cafe + Bar features a completely plant-based menu with big personality. The scratch kitchen serves creative dishes like lemongrass tofu tacos, Korean BBQ mock-duck tacos, Cuban sandwiches with pulled jackfruit, and the famous Rev Burger made with tempeh, tomato jam, smoked onions, and kimchi aioli. Dark chocolate beignets and cashew cheesecake prove vegan desserts can be transcendent. With 20 craft beers on tap and mural-lined walls, it's the perfect spot for a night out.",
    priceRange: '$$',
    features: ['Dine-In', 'Takeout', 'Full Bar', 'Brunch', 'Live Music'],
    coordinates: { lat: 44.9341, lng: -93.2447 }
  },
  {
    id: '6',
    slug: 'french-meadow',
    name: 'French Meadow Bakery & Café',
    address: '2610 Lyndale Ave S',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55408',
    phone: '(612) 870-7855',
    website: 'https://www.frenchmeadowcafe.com/',
    googlePlaceId: 'ChIJ4cujzHkts1IRj6J_9fF8jBM',
    cuisineType: ['American', 'Bakery', 'Brunch'],
    veganStatus: 'Vegan-Friendly',
    neighborhood: 'Lyn-Lake',
    neighborhoodSlug: 'lyn-lake',
    description: "A longtime staple for organic, locally-sourced food since 1985, French Meadow offers extensive vegan options alongside their full menu. The tempeh Reuben is legendary, as is the tofu scramble for breakfast. Blackened tempeh tacos and veggie quesadillas satisfy lunch cravings. Their bakery case features vegan muffins, pastries, and their famous organic breads. With locations in both Minneapolis and Saint Paul's Grand Avenue, it's an accessible choice for plant-based dining. The relaxed atmosphere is perfect for lingering over brunch.",
    priceRange: '$$',
    features: ['Dine-In', 'Takeout', 'Bakery', 'Brunch', 'Patio'],
    coordinates: { lat: 44.9508, lng: -93.2879 }
  },
  {
    id: '7',
    slug: 'hard-times-cafe',
    name: 'Hard Times Cafe',
    address: '1821 Riverside Ave',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55454',
    phone: '(612) 666-0556',
    website: 'https://www.facebook.com/thenewhardtimescafe',
    googlePlaceId: 'ChIJfwYb5XYrs1IRLGbFT_6CCXM',
    cuisineType: ['American', 'Diner', 'Punk'],
    veganStatus: 'Vegetarian',
    neighborhood: 'Cedar-Riverside',
    neighborhoodSlug: 'cedar-riverside',
    description: "Since 1992, this collectively-owned punk cafe with its hand-painted bright green facade has been a classic haunt for vegan and vegetarian bites. The vibe is grungy and unpretentious—perfect for students and creatives. Breakfast items like the vegan Helter Skelter (hash browns and tofu), vegan biscuits with mushroom gravy, and the 'big fat pancake' are served all day. Lunch brings a seitan Philly and Korean BBQ tofu bun. Cash only, but an ATM is available. Affordable prices and generous portions keep regulars coming back.",
    priceRange: '$',
    features: ['Dine-In', 'Takeout', 'Cash Only', 'All-Day Breakfast'],
    coordinates: { lat: 44.9706, lng: -93.2471 }
  },
  {
    id: '8',
    slug: 'seward-cafe',
    name: 'Seward Cafe',
    address: '2129 E Franklin Ave',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55404',
    phone: '(612) 332-1011',
    website: 'https://sewardcafe.com/',
    googlePlaceId: 'ChIJt9LM_3krs1IRv7_CEYQ-CfA',
    cuisineType: ['American', 'Brunch', 'Cafe'],
    veganStatus: 'Vegetarian',
    neighborhood: 'Seward',
    neighborhoodSlug: 'seward',
    description: "A collectively-owned neighborhood institution, Seward Cafe serves up vegan-friendly brunch in a cozy, community-focused setting. The Earth breakfast, built on a base of hash browns with eggs or scrambled tofu, is a longtime favorite. Their fluffy, diner-style vegan pancakes come with options to add blueberries, chocolate chips, tahini, or jam. The cafe emphasizes local, organic ingredients and fair trade coffee. It's a gathering place for the Seward neighborhood, where regulars are greeted by name and newcomers feel welcome.",
    priceRange: '$',
    features: ['Dine-In', 'Takeout', 'Brunch', 'Coffee'],
    coordinates: { lat: 44.9620, lng: -93.2376 }
  },
  {
    id: '9',
    slug: 'francis-burger-joint',
    name: 'Francis Burger Joint',
    address: '2422 Central Ave NE',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55418',
    phone: '(612) 208-6870',
    website: 'https://www.francisburgerjoint.com/',
    googlePlaceId: 'ChIJoYcRmM8ss1IR_DmV8YK5VYY',
    cuisineType: ['Burgers', 'American', 'Bar'],
    veganStatus: '100% Vegan',
    neighborhood: 'Northeast Minneapolis',
    neighborhoodSlug: 'northeast',
    description: "Francis serves incredible vegan burgers: a taco-seasoned Impossible burger, a garlicky black bean burger, even a Juicy Lucy stuffed with vegan cheese. But what truly sets Francis apart is their fully vegan bar program—no animal-derived dyes, additives, or fining agents in any drink. No crushed beetle dyes in Negronis, no fish bladder-filtered wines. The industrial-chic Northeast space is perfect for a casual night out. A second location in Longfellow expands their reach across the city.",
    priceRange: '$$',
    features: ['Dine-In', 'Takeout', 'Full Bar', 'Late Night'],
    coordinates: { lat: 45.0123, lng: -93.2473 }
  },
  {
    id: '10',
    slug: 'vegan-east',
    name: 'Vegan East',
    address: '5501 34th Ave S',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55417',
    phone: '(612) 354-3052',
    website: 'https://www.veganeast.com/',
    googlePlaceId: 'ChIJNS_hB0Avs1IRDk6aX1N7zSo',
    cuisineType: ['Bakery', 'Desserts'],
    veganStatus: '100% Vegan',
    neighborhood: 'Minnehaha',
    neighborhoodSlug: 'minnehaha',
    description: "An all-vegan bakery paradise in South Minneapolis, Vegan East crafts an ever-rotating array of sweet treats. Cupcakes, cinnamon rolls, homemade pop-tarts, brownies, and cookies fill the display case daily. Fan favorites include the Snickers cookie (packed with chocolate, caramel, and peanuts) and seasonal s'mores bars. Everything is made fresh with quality ingredients. A second location in White Bear Lake serves the eastern suburbs. Perfect for grabbing dessert or a special occasion cake.",
    priceRange: '$',
    features: ['Takeout', 'Bakery', 'Special Orders', 'Gluten-Free Options'],
    coordinates: { lat: 44.9128, lng: -93.2317 }
  },
  {
    id: '11',
    slug: 'modern-times',
    name: 'Modern Times Cafe',
    address: '3200 Chicago Ave S',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55407',
    phone: '(612) 886-3882',
    website: 'https://moderntimesmpls.com/',
    googlePlaceId: 'ChIJRR8Io1Uts1IRGkH_RhEPxsQ',
    cuisineType: ['American', 'Cafe', 'Brunch'],
    veganStatus: 'Vegetarian',
    neighborhood: 'Powderhorn',
    neighborhoodSlug: 'powderhorn',
    description: "A staple in Minneapolis's progressive cafe scene with a cozy vibe—'for punks and their parents'—Modern Times serves veggie bowls, sandwiches, breakfast burritos, and pancakes made with organic, local ingredients. Most items are vegetarian-friendly, and many can be made vegan by swapping in tofu or tempeh. The space doubles as a community gathering spot with occasional events. Fair trade coffee and a laid-back atmosphere make it ideal for working remotely or catching up with friends.",
    priceRange: '$',
    features: ['Dine-In', 'Takeout', 'Coffee', 'Brunch', 'WiFi'],
    coordinates: { lat: 44.9372, lng: -93.2615 }
  },
  {
    id: '12',
    slug: 'lutunjis-palate',
    name: "Lutunji's Palate",
    address: '1400 Park Ave',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55404',
    phone: '(612) 345-4534',
    website: 'https://lutunjispalate.com/',
    googlePlaceId: 'ChIJVVVVVXkrs1IRJ8b7U_WvJDI',
    cuisineType: ['Bakery', 'Soul Food', 'Desserts'],
    veganStatus: '100% Vegan',
    neighborhood: 'Elliot Park',
    neighborhoodSlug: 'elliot-park',
    description: "Lutunji Abrams is best known for her peach cobbler, and her vegan version with flaky coconut oil crust is equally sumptuous. This Elliot Park bakery specializes in all kinds of vegan treats, many of them gluten-free: coconut macaroons, cashew milk ice cream, and Oreo 'cheezecake.' Savory options include plant-based omelets and croissant sandwiches. Lutunji's warmth and dedication to craft shine through in every bite. A hidden gem that deserves more attention.",
    priceRange: '$',
    features: ['Takeout', 'Bakery', 'Gluten-Free Options', 'Catering'],
    coordinates: { lat: 44.9680, lng: -93.2633 }
  },
  {
    id: '13',
    slug: 'bole-ethiopian',
    name: 'Bole Ethiopian Cuisine',
    address: '1341 Pascal St N',
    city: 'Saint Paul',
    state: 'MN',
    zip: '55108',
    phone: '(651) 330-2492',
    website: 'https://boleethiopiancuisine.com/',
    googlePlaceId: 'ChIJj5kE0jQqs1IRb5V9N3MpfwQ',
    cuisineType: ['Ethiopian', 'African'],
    veganStatus: 'Vegan-Friendly',
    neighborhood: 'Como',
    neighborhoodSlug: 'como',
    description: "Located just west of Como Park, Bole Ethiopian Cuisine has helped Saint Paul maintain its reputation for top-tier Ethiopian food since Rekik Meratsion and Solomon Hailie relaunched it in 2021. The vegan sampler platter is exceptional, featuring house specialties like roasted beets, sautéed collard greens, and lentil and vegetable stews. Gluten-free injera is available by request. Don't skip the honey wine (tej). The warm, welcoming atmosphere makes every meal feel like a celebration.",
    priceRange: '$$',
    features: ['Dine-In', 'Takeout', 'Reservations', 'Gluten-Free Options'],
    coordinates: { lat: 44.9685, lng: -93.1634 }
  },
  {
    id: '14',
    slug: 'everest-on-grand',
    name: 'Everest on Grand',
    address: '1278 Grand Ave',
    city: 'Saint Paul',
    state: 'MN',
    zip: '55105',
    phone: '(651) 231-0056',
    website: 'https://www.everestongrand.com/',
    googlePlaceId: 'ChIJNZGVz_kos1IRDlSn-7-Z-Zs',
    cuisineType: ['Nepali', 'Indian', 'Tibetan'],
    veganStatus: 'Vegan-Friendly',
    neighborhood: 'Summit-University',
    neighborhoodSlug: 'summit-university',
    description: "Everest on Grand spans the cuisines of India, Nepal, and Tibet with abundant vegetarian options. Start with momos stuffed with cabbage and ginger, or try katahar—young, green jackfruit buds with potatoes and spices. The vegetable thukpa (Tibetan noodle soup with snap peas) is comforting perfection. A whole roster of vegetarian curries pairs beautifully with warm naan or roti. The Grand Avenue location is cozy and welcoming, perfect for a winter evening meal.",
    priceRange: '$$',
    features: ['Dine-In', 'Takeout', 'Delivery', 'Catering'],
    coordinates: { lat: 44.9400, lng: -93.1409 }
  },
  {
    id: '15',
    slug: 'namaste-cafe',
    name: 'Namaste Cafe',
    address: '2512 Hennepin Ave',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55405',
    phone: '(612) 827-2496',
    website: 'https://www.namastecafemn.com/',
    googlePlaceId: 'ChIJ_zHEiHkts1IR6oXPZDwKf9M',
    cuisineType: ['Indian', 'Nepali'],
    veganStatus: 'Vegan-Friendly',
    neighborhood: 'Uptown',
    neighborhoodSlug: 'uptown',
    description: "A former Victorian home turned cozy restaurant in Uptown, Namaste Cafe serves excellent organic Indian and Nepali cuisine. Start with light, crispy bhel puri or golgappa flavor parcels. The aloo bodi or Punjabi spinach paneer make hearty vegetarian entrées, while the tangy mango curry with tofu perfectly balances sweet, sour, and spicy notes. The charming patio is perfect for settling in with a chai on a warm afternoon. All ingredients are organic, and the atmosphere is unhurried and welcoming.",
    priceRange: '$$',
    features: ['Dine-In', 'Takeout', 'Patio', 'Organic'],
    coordinates: { lat: 44.9581, lng: -93.2985 }
  },
  {
    id: '16',
    slug: 'himalayan-restaurant',
    name: 'Himalayan Restaurant',
    address: '2910 E Lake St',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55406',
    phone: '(612) 332-0880',
    website: 'https://www.himalayanmomo.com/',
    googlePlaceId: 'ChIJR9p9JxIts1IR0KvFz5f2vCw',
    cuisineType: ['Nepali', 'Indian', 'Tibetan'],
    veganStatus: 'Vegan-Friendly',
    neighborhood: 'Longfellow',
    neighborhoodSlug: 'longfellow',
    description: "Himalayan Restaurant on Lake Street delves into Indian, Nepalese, and Tibetan cuisine with extensive vegetarian offerings. Start with kothe—steamed momos that are pan-fried and served with savory tomato-cilantro chutney. The chana masala and creamy Kathmandu curry are standouts, best paired with aloo paratha or extra-buttery naan. Save room for desserts like kheer (rice pudding) and mango pudding. The warm, family-run atmosphere and generous portions keep the neighborhood coming back.",
    priceRange: '$$',
    features: ['Dine-In', 'Takeout', 'Delivery', 'Catering'],
    coordinates: { lat: 44.9484, lng: -93.2179 }
  },
  {
    id: '17',
    slug: 'foxy-falafel',
    name: 'Foxy Falafel',
    address: '791 Raymond Ave',
    city: 'Saint Paul',
    state: 'MN',
    zip: '55114',
    phone: '(651) 888-2255',
    website: 'https://foxyfalafel.com/',
    googlePlaceId: 'ChIJv_VT7cUps1IRB7Xp4sLRGGQ',
    cuisineType: ['Mediterranean', 'Middle Eastern', 'Falafel'],
    veganStatus: 'Vegetarian',
    neighborhood: 'St. Anthony Park',
    neighborhoodSlug: 'st-anthony-park',
    description: "This food truck turned restaurant is fueled by the vegetarian power of chickpeas. Erica Strait, a Midwest farm gal turned NYC food pro, crafts legendary falafel that's light, crunchy, fluffy, and endlessly satisfying. Choose from rice bowls, platters, or pita pocket sandwiches, each topped with your choice of four different falafel flavors. The Mediterranean classics are all here, executed with care and quality ingredients. A perfect quick lunch or casual dinner option.",
    priceRange: '$',
    features: ['Dine-In', 'Takeout', 'Delivery'],
    coordinates: { lat: 44.9613, lng: -93.1919 }
  },
  {
    id: '18',
    slug: 'tongue-in-cheek',
    name: 'Tongue in Cheek',
    address: '989 Payne Ave',
    city: 'Saint Paul',
    state: 'MN',
    zip: '55130',
    phone: '(651) 888-6148',
    website: 'https://tongueincheek.biz/',
    googlePlaceId: 'ChIJQWJZPvkps1IR3oHMr7bJ-6I',
    cuisineType: ['Fine Dining', 'New American'],
    veganStatus: 'Vegan-Friendly',
    neighborhood: 'Payne-Phalen',
    neighborhoodSlug: 'payne-phalen',
    description: "Too often, vegan restaurants get pigeonholed as curiosities. Tongue in Cheek changes that with a six-course vegetarian tasting menu (fully vegan available) that ranks among the best dining in the Twin Cities, period. Chef-prepared dishes, top-notch service, and an intimate Payne Avenue atmosphere create a truly special experience. Over half the remaining menu is vegan or can be prepared vegan. When animal products are used, they're sourced humanely and sustainably. A destination for special occasions.",
    priceRange: '$$$',
    features: ['Dine-In', 'Reservations Required', 'Tasting Menu', 'Fine Dining'],
    coordinates: { lat: 44.9780, lng: -93.0755 }
  },
  {
    id: '19',
    slug: 'amazing-thailand',
    name: 'Amazing Thailand',
    address: '3024 Hennepin Ave',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55408',
    phone: '(612) 824-1909',
    website: 'https://www.amazingthailandusa.com/',
    googlePlaceId: 'ChIJNz_pF3gts1IR7AaGJvqFcLQ',
    cuisineType: ['Thai', 'Asian'],
    veganStatus: 'Vegan-Friendly',
    neighborhood: 'Uptown',
    neighborhoodSlug: 'uptown',
    description: "Consistently rated among the best Thai restaurants in the Twin Cities, Amazing Thailand offers extensive vegan options with authentic flavors. The papaya salad made vegan with crisp green papaya, carrots, tomatoes, spicy chili, and perfectly fried tofu is exceptional. Curries are rich and aromatic, and the mock duck preparations rival any meat version. Pad Thai, basil stir-fries, and coconut soups are all available with tofu or vegetables. Friendly service and consistent quality keep locals returning for decades.",
    priceRange: '$$',
    features: ['Dine-In', 'Takeout', 'Delivery'],
    coordinates: { lat: 44.9519, lng: -93.2990 }
  },
  {
    id: '20',
    slug: 'glam-doll-donuts',
    name: 'Glam Doll Donuts',
    address: '2605 Nicollet Ave',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55408',
    phone: '(612) 874-5752',
    website: 'https://glamdolldonuts.com/',
    googlePlaceId: 'ChIJw_EH93kts1IR7wI2bNMAhUE',
    cuisineType: ['Donuts', 'Bakery', 'Coffee'],
    veganStatus: 'Vegan-Friendly',
    neighborhood: 'Lyn-Lake',
    neighborhoodSlug: 'lyn-lake',
    description: "This punk-rock donut shop serves creative, Instagram-worthy vegan donuts that rival their traditional counterparts. The rotating menu features inventive flavors like maple bacon (with coconut bacon), salted caramel, and seasonal specials. Fluffy, fresh, and generously topped, these donuts satisfy any sweet tooth. The Nicollet Avenue location features bold decor and a rock-and-roll attitude. Pair your donut with locally roasted coffee for the complete experience. A must-visit for anyone with a sweet tooth.",
    priceRange: '$',
    features: ['Takeout', 'Coffee', 'Vegan Options Daily'],
    coordinates: { lat: 44.9509, lng: -93.2781 }
  }
];

// Helper functions
export function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return restaurants.find(r => r.slug === slug);
}

export function getRestaurantsByNeighborhood(neighborhoodSlug: string): Restaurant[] {
  return restaurants.filter(r => r.neighborhoodSlug === neighborhoodSlug);
}

export function getVeganOnlyRestaurants(): Restaurant[] {
  return restaurants.filter(r => r.veganStatus === '100% Vegan');
}

export function searchRestaurants(query: string): Restaurant[] {
  const lowerQuery = query.toLowerCase();
  return restaurants.filter(r => 
    r.name.toLowerCase().includes(lowerQuery) ||
    r.cuisineType.some(c => c.toLowerCase().includes(lowerQuery)) ||
    r.neighborhood.toLowerCase().includes(lowerQuery) ||
    r.description.toLowerCase().includes(lowerQuery)
  );
}

export const neighborhoods = [
  { name: 'Northeast Minneapolis', slug: 'northeast', city: 'Minneapolis' },
  { name: 'Uptown', slug: 'uptown', city: 'Minneapolis' },
  { name: 'Lyn-Lake', slug: 'lyn-lake', city: 'Minneapolis' },
  { name: 'Powderhorn', slug: 'powderhorn', city: 'Minneapolis' },
  { name: 'Seward', slug: 'seward', city: 'Minneapolis' },
  { name: 'Elliot Park', slug: 'elliot-park', city: 'Minneapolis' },
  { name: 'Cedar-Riverside', slug: 'cedar-riverside', city: 'Minneapolis' },
  { name: 'Longfellow', slug: 'longfellow', city: 'Minneapolis' },
  { name: 'Minnehaha', slug: 'minnehaha', city: 'Minneapolis' },
  { name: 'Cathedral Hill', slug: 'cathedral-hill', city: 'Saint Paul' },
  { name: 'Summit-University', slug: 'summit-university', city: 'Saint Paul' },
  { name: 'Como', slug: 'como', city: 'Saint Paul' },
  { name: 'St. Anthony Park', slug: 'st-anthony-park', city: 'Saint Paul' },
  { name: 'Payne-Phalen', slug: 'payne-phalen', city: 'Saint Paul' },
];

export function getNeighborhoodBySlug(slug: string) {
  return neighborhoods.find(n => n.slug === slug);
}

export const cuisineTypes = [
  'American',
  'Ethiopian',
  'Soul Food',
  'Indian',
  'Nepali',
  'Thai',
  'Mediterranean',
  'Bakery',
  'Burgers',
  'Fine Dining',
];
