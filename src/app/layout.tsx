import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterPopup from "@/components/NewsletterPopup";
import { PostHogProvider } from "@/components/providers/posthog-provider";


const instrumentSerif = Instrument_Serif({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minneapolis Vegan Restaurants | 50+ Plant-Based Spots to Eat Now",
  description: "Looking for vegan food in Minneapolis? Browse 50+ restaurants with real reviews, hours, photos, and maps. From The Herbivorous Butcher to Ethiopian cuisine. Find your next meal.",
  keywords: [
    "vegan restaurants Minneapolis",
    "Twin Cities vegan restaurants directory",
    "vegan restaurants directory Minneapolis",
    "best vegan food websites minneapolis",
    "plant-based Minneapolis",
    "vegan Saint Paul",
    "Twin Cities vegan",
    "vegetarian Minneapolis",
    "vegan brunch Minneapolis",
    "vegan date night Minneapolis",
    "Ethiopian vegan Minneapolis",
    "best vegan food Minneapolis 2026"
  ],
  authors: [{ name: "MPLS Vegan Team" }],
  creator: "Minneapolis Vegan Directory",
  publisher: "Minneapolis Vegan Directory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mplsvegan.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Minneapolis Vegan Restaurants | 50+ Plant-Based Spots to Eat Now",
    description: "Looking for vegan food in Minneapolis? Browse 50+ restaurants with real reviews, hours, photos, and maps. From The Herbivorous Butcher to Ethiopian cuisine.",
    url: 'https://mplsvegan.com',
    siteName: "Minneapolis Vegan Directory",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Minneapolis Vegan Directory - Plant-Based Restaurants Guide',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minneapolis Vegan Restaurants | 50+ Plant-Based Spots to Eat Now",
    description: "Looking for vegan food in Minneapolis? Browse 50+ restaurants with real reviews, hours, photos, and maps. Find your next meal.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when available
    // google: 'google-site-verification-code',
    // yandex: 'yandex-verification-code',
  },
};

// JSON-LD structured data for the website
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Minneapolis Vegan Directory',
  alternateName: 'MPLS Vegan',
  url: 'https://mplsvegan.com',
  description: 'The ultimate guide to vegan and plant-based restaurants in Minneapolis, Minnesota',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://mplsvegan.com/?search={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Minneapolis Vegan Directory',
  url: 'https://mplsvegan.com',
  logo: 'https://mplsvegan.com/logo.png',
  description: 'Comprehensive guide to vegan and plant-based restaurants in the Twin Cities',
  areaServed: {
    '@type': 'City',
    name: 'Minneapolis',
    containedInPlace: {
      '@type': 'State',
      name: 'Minnesota'
    }
  },
  knowsAbout: [
    'Vegan Restaurants',
    'Plant-Based Dining',
    'Vegetarian Food',
    'Minneapolis Restaurants',
    'Twin Cities Dining'
  ]
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MPLS Vegan',
  description: 'Minneapolis vegan restaurant directory — 70+ plant-based spots with reviews, hours, and maps.',
  url: 'https://mplsvegan.com',
  logo: 'https://mplsvegan.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Minneapolis',
    addressRegion: 'MN',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Minneapolis' },
    { '@type': 'City', name: 'Saint Paul' },
  ],
  priceRange: 'Free',
};

const localBusinessListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Vegan Restaurants in Minneapolis 2026',
  description: 'Top-rated vegan and plant-based restaurants in Minneapolis',
  numberOfItems: 50,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Restaurant',
        name: 'The Herbivorous Butcher',
        servesCuisine: 'Vegan',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Minneapolis',
          addressRegion: 'MN'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Restaurant',
        name: 'J. Selby\'s',
        servesCuisine: 'Vegan American',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'St. Paul',
          addressRegion: 'MN'
        }
      }
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Restaurant',
        name: 'Lulu EthioVegan',
        servesCuisine: 'Vegan Ethiopian',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Minneapolis',
          addressRegion: 'MN'
        }
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessListSchema) }}
        />
      </head>
      <body className="font-body bg-[#1a1a1a] text-[#f5f0e8] antialiased">
        <PostHogProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <NewsletterPopup />
        </PostHogProvider>
      </body>
    </html>
  );
}
