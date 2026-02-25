import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Minneapolis Vegan Restaurants Local Guide 2026 | 75+ Plant-Based Spots",
  description: "The #1 local guide to vegan & vegetarian restaurants in Minneapolis — 75+ plant-based spots with real reviews, hours, must-try dishes & neighborhood maps. Uptown, Northeast, Downtown & more. Updated 2026.",
  keywords: [
    "vegan restaurants Minneapolis",
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
    title: "Minneapolis Vegan Restaurants Local Guide 2026 | 75+ Plant-Based Spots",
    description: "The #1 local guide to vegan restaurants in Minneapolis — 75+ plant-based spots with real reviews, hours & neighborhood maps. Updated 2026.",
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
    title: "Minneapolis Vegan Restaurants Local Guide 2026 | 75+ Spots",
    description: "The #1 local guide to 75+ vegan & plant-based restaurants in Minneapolis. Real reviews, hours & neighborhood maps. Updated 2026.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessListSchema) }}
        />
      </head>
      <body className="font-body bg-[#1a1a1a] text-[#f5f0e8] antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
