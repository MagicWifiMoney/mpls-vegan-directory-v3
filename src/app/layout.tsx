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
  title: "Minneapolis Vegan Directory | Plant-Based Restaurants in Twin Cities",
  description: "Discover the best vegan and plant-based restaurants in Minneapolis and Saint Paul. Find 100% vegan spots, vegetarian restaurants, and vegan-friendly eateries throughout the Twin Cities.",
  keywords: ["vegan restaurants Minneapolis", "plant-based Minneapolis", "vegan Saint Paul", "Twin Cities vegan", "vegetarian Minneapolis"],
  openGraph: {
    title: "Minneapolis Vegan Directory",
    description: "Your guide to plant-based dining in the Twin Cities",
    type: "website",
    locale: "en_US",
    siteName: "Minneapolis Vegan Directory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minneapolis Vegan Directory",
    description: "Your guide to plant-based dining in the Twin Cities",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body className="font-body bg-[#1a1a1a] text-[#f5f0e8] antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
