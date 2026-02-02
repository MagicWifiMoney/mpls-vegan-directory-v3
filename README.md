# Minneapolis Vegan Directory 🌱

A modern, responsive directory of vegan and plant-based restaurants in Minneapolis and Saint Paul, MN.

## Features

- **20+ Restaurants** curated vegan and vegan-friendly spots
- **Search & Filter** by cuisine type, vegan status, and neighborhood
- **14 Neighborhoods** across Minneapolis and Saint Paul
- **Mobile-First Design** responsive and fast-loading
- **SEO Optimized** with LocalBusiness schema markup
- **Google Places Integration** for ratings and hours (optional)

## Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or navigate to project
cd mpls-vegan-directory-v3

# Install dependencies
npm install

# Copy environment file (optional, for Google Places API)
cp .env.local.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables (Optional)

For Google Places API integration, add your API keys to `.env.local`:

```
GOOGLE_PLACES_API_KEY=your_server_side_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_client_side_key
```

The site works without API keys - it will use the static data for ratings.

## URL Structure

- `/` - Homepage with search, filters, and restaurant grid
- `/restaurants/[slug]` - Individual restaurant pages (e.g., `/restaurants/herbivorous-butcher`)
- `/neighborhoods` - Browse all neighborhoods
- `/neighborhoods/[slug]` - Neighborhood pages (e.g., `/neighborhoods/northeast`)
- `/about` - About the directory
- `/contact` - Contact form

## Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Git Integration

1. Push your code to GitHub
2. Import the repository in [Vercel Dashboard](https://vercel.com/new)
3. Configure environment variables if using Google Places API
4. Deploy!

### Environment Variables in Vercel

If using Google Places API, add these in your Vercel project settings:
- `GOOGLE_PLACES_API_KEY`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── places/[placeId]/    # Google Places API route
│   ├── restaurants/[slug]/       # Restaurant detail pages
│   ├── neighborhoods/
│   │   ├── page.tsx              # Neighborhoods index
│   │   └── [slug]/               # Neighborhood detail pages
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── not-found.tsx             # 404 page
├── components/
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Site footer
│   ├── Hero.tsx                  # Homepage hero section
│   ├── RestaurantCard.tsx        # Restaurant card component
│   ├── SearchFilters.tsx         # Search and filter UI
│   └── Map.tsx                   # Map placeholder component
├── data/
│   └── restaurants.ts            # Restaurant data and helpers
└── lib/
    └── google-places.ts          # Google Places API utilities
```

## Restaurant Data

All restaurant data is stored in `src/data/restaurants.ts`. Each restaurant includes:

- Name, address, phone, website
- Google Place ID (for API integration)
- Cuisine types
- Vegan status (100% Vegan / Vegetarian / Vegan-Friendly)
- Neighborhood
- Description
- Price range
- Features
- Coordinates

## Phase 2 Roadmap

- [ ] Interactive Google Maps integration
- [ ] User reviews and ratings
- [ ] Restaurant photo galleries
- [ ] Hours display from Google Places API
- [ ] "Open Now" filter
- [ ] Email newsletter signup
- [ ] Social sharing buttons
- [ ] Restaurant owner dashboard
- [ ] Blog/articles section
- [ ] Event listings

## Contributing

Suggestions for new restaurants or corrections? Open an issue or submit a PR!

## License

MIT

---

Made with 💚 in Minneapolis
