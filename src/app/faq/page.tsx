import { Metadata } from 'next';
import Link from 'next/link';
import { restaurants } from '@/data/restaurants';

export const metadata: Metadata = {
  title: 'FAQ | Minneapolis Vegan Restaurant Guide',
  description: 'Frequently asked questions about vegan dining in Minneapolis and Saint Paul. Find answers about the best vegan restaurants, neighborhoods, and plant-based options in the Twin Cities.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Vegan Dining FAQ - Minneapolis & Saint Paul',
    description: 'Everything you need to know about eating vegan in the Twin Cities',
    url: 'https://mplsvegan.com/faq',
  },
};

const faqs = [
  {
    question: "Is Minneapolis good for vegans?",
    answer: `Absolutely! Minneapolis is consistently ranked among the top vegan-friendly cities in the Midwest. With over ${restaurants.filter(r => r.veganStatus === '100% Vegan').length} fully vegan restaurants and ${restaurants.length}+ plant-based friendly spots across the Twin Cities, you'll find everything from upscale fine dining to casual comfort food. The Herbivorous Butcher, America's first vegan butcher shop, calls Northeast Minneapolis home, and the city has a thriving plant-based community.`
  },
  {
    question: "How many vegan restaurants are in Minneapolis?",
    answer: `The Twin Cities metro area has ${restaurants.filter(r => r.veganStatus === '100% Vegan').length} fully vegan restaurants and ${restaurants.length}+ restaurants with substantial vegan menus. This includes everything from dedicated vegan eateries to vegan-friendly spots with creative plant-based options. The scene is constantly growing, with new spots opening regularly.`
  },
  {
    question: "What's the best vegan brunch in Minneapolis?",
    answer: "For vegan brunch, locals swear by J. Selby's in Saint Paul for their legendary Crunchwrap and bottomless mimosas. The Herbivorous Butcher offers deli-style breakfast sandwiches, while Reverie Café + Bar in South Minneapolis has creative brunch plates. For a cozy neighborhood vibe, try Modern Times Cafe in the Seward neighborhood."
  },
  {
    question: "Where can I find vegan comfort food in Minneapolis?",
    answer: "Minneapolis excels at vegan comfort food! J. Selby's serves up fried 'chicken,' burgers, and shakes. The Herbivorous Butcher makes incredible vegan meats and cheeses. For Ethiopian comfort food, Lulu EthioVegan is a must. Pizza Lucé offers vegan cheese on any pizza, and Trio Plant-Based serves elevated comfort classics."
  },
  {
    question: "Are there vegan-friendly restaurants in Saint Paul?",
    answer: "Saint Paul has a growing vegan scene! J. Selby's in Cathedral Hill is the crown jewel—a fully vegan restaurant with an incredible menu. You'll also find great options at The Herbivorous Butcher (technically Minneapolis but close), plus many restaurants along Grand Avenue and in Downtown Saint Paul offer vegan menus."
  },
  {
    question: "What neighborhoods have the most vegan options?",
    answer: "Northeast Minneapolis is the vegan hotspot, home to The Herbivorous Butcher and multiple vegan-friendly eateries. The Uptown/Lyn-Lake area has great variety. South Minneapolis neighborhoods like Seward and Longfellow have cozy cafes. In Saint Paul, Cathedral Hill (home to J. Selby's) and Grand Avenue offer solid options."
  },
  {
    question: "Where can I get vegan pizza in Minneapolis?",
    answer: "Several spots do excellent vegan pizza! Pizza Lucé offers Daiya cheese on any pizza at all locations. Galactic Pizza has vegan options with house-made seitan. Broadway Pizza and other local chains are adding vegan cheese. For something different, try the vegan flatbreads at Reverie Café + Bar."
  },
  {
    question: "What's the best vegan date night restaurant?",
    answer: "For a special occasion, Trio Plant-Based offers upscale vegan fine dining. Reverie Café + Bar has a romantic atmosphere with creative cocktails. The Bachelor Farmer (when available) offers sophisticated seasonal dishes. For a unique experience, book a charcuterie board from The Herbivorous Butcher and pair with local wines."
  },
  {
    question: "Do Minneapolis restaurants label vegan options clearly?",
    answer: "Most Minneapolis restaurants are vegan-savvy and clearly mark plant-based options with 'V' or 'VG' symbols. Staff are generally knowledgeable about ingredients. When in doubt, just ask—the Twin Cities restaurant scene is very accommodating to dietary restrictions."
  },
  {
    question: "Where can I buy vegan groceries in Minneapolis?",
    answer: "The Herbivorous Butcher sells their house-made vegan meats and cheeses for home cooking. Mississippi Market co-ops have extensive vegan sections. Whole Foods and Lunds & Byerlys stock major vegan brands. For specialty items, check out the Seward Co-op and local Asian markets for tofu and plant-based proteins."
  }
];

// Generate FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#3d4a3d]/10 blur-[120px]" />
          <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#d4a574]/5 blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-24 pt-32">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors mb-12 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>

          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">FAQ</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl text-[#f5f0e8] tracking-tight mb-4">
              Vegan Dining FAQ — Minneapolis & Saint Paul
            </h1>
            <p className="text-[#f5f0e8]/50 text-lg max-w-2xl">
              Everything you need to know about vegan dining in Minneapolis and Saint Paul.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group card-elevated rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h2 className="font-display text-lg text-[#f5f0e8] pr-8 group-hover:text-[#d4a574] transition-colors">
                    {faq.question}
                  </h2>
                  <svg
                    className="w-5 h-5 text-[#d4a574] flex-shrink-0 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-[#f5f0e8]/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 card-elevated rounded-2xl p-10 text-center">
            <h2 className="font-display text-2xl text-[#f5f0e8] mb-4">
              Still have questions?
            </h2>
            <p className="text-[#f5f0e8]/50 mb-8 max-w-xl mx-auto">
              Can&apos;t find what you&apos;re looking for? We&apos;d love to help you discover the perfect vegan spot.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium"
            >
              Get in Touch
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>

          {/* Last Updated */}
          <p className="mt-12 text-center text-sm text-[#f5f0e8]/30">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>
    </>
  );
}
