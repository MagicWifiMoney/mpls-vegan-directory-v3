import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | MPLS Vegan Restaurant Guide 2026',
  description: 'Learn about the Minneapolis Vegan Directory, your guide to plant-based dining in the Twin Cities.',
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
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
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">About Us</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl text-[#f5f0e8] tracking-tight">
            MPLS Vegan Directory
          </h1>
        </div>

        {/* Content blocks */}
        <div className="space-y-8">
          {/* Mission */}
          <div className="card-elevated rounded-2xl p-8 lg:p-10">
            <h2 className="font-display text-2xl text-[#f5f0e8] mb-6">Our Mission</h2>
            <div className="space-y-4 text-[#f5f0e8]/60 leading-relaxed">
              <p>
                The Minneapolis Vegan Directory was created to help plant-based eaters discover 
                the vibrant vegan food scene in the Twin Cities. Whether you&apos;re a longtime vegan, 
                newly plant-curious, or just looking for a delicious meat-free meal, we&apos;re here 
                to guide you to the best restaurants Minneapolis and Saint Paul have to offer.
              </p>
              <p>
                From America&apos;s first vegan butcher shop to soul food, Ethiopian cuisine to artisan 
                bakeries, the Twin Cities has emerged as a hub for innovative plant-based dining. 
                We&apos;re proud to showcase the chefs, entrepreneurs, and communities making this 
                possible.
              </p>
            </div>
          </div>

          {/* What We Include */}
          <div className="card-elevated rounded-2xl p-8 lg:p-10">
            <h2 className="font-display text-2xl text-[#f5f0e8] mb-8">What We Include</h2>
            <div className="space-y-6">
              {[
                {
                  status: '100% Vegan',
                  class: 'badge-vegan',
                  description: 'Fully plant-based establishments where every menu item is vegan.',
                },
                {
                  status: 'Vegetarian',
                  class: 'badge-vegetarian',
                  description: 'Meat-free restaurants with extensive vegan options.',
                },
                {
                  status: 'Vegan-Friendly',
                  class: 'badge-friendly',
                  description: 'Restaurants that excel at accommodating plant-based diners.',
                },
              ].map((item) => (
                <div key={item.status} className="flex items-start gap-4">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${item.class} flex-shrink-0`}>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                    </svg>
                    {item.status}
                  </span>
                  <p className="text-[#f5f0e8]/60 text-sm pt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Minneapolis */}
          <div className="card-elevated rounded-2xl p-8 lg:p-10">
            <h2 className="font-display text-2xl text-[#f5f0e8] mb-6">Why Minneapolis?</h2>
            <p className="text-[#f5f0e8]/60 leading-relaxed mb-6">
              The Twin Cities has quietly become one of the most exciting vegan food destinations 
              in the Midwest. Here&apos;s what makes it special:
            </p>
            <ul className="space-y-4">
              {[
                { label: 'Innovation', text: "Home to The Herbivorous Butcher, America's first vegan butcher shop" },
                { label: 'Diversity', text: 'Ethiopian, Soul Food, Thai, Indian—global cuisines shine here' },
                { label: 'Community', text: 'Many restaurants are collectively owned or community-focused' },
                { label: 'Black-owned businesses', text: 'Trio Plant-Based and others lead the way' },
                { label: 'Accessibility', text: 'Options at every price point, from diners to fine dining' },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a574] mt-2 flex-shrink-0" />
                  <p className="text-[#f5f0e8]/60">
                    <span className="text-[#f5f0e8] font-medium">{item.label}:</span> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="card-elevated rounded-2xl p-8 lg:p-10 text-center">
            <h2 className="font-display text-2xl text-[#f5f0e8] mb-4">Stay Connected</h2>
            <p className="text-[#f5f0e8]/60 leading-relaxed mb-8 max-w-lg mx-auto">
              We&apos;re always updating our directory with new restaurants and information. 
              Have a suggestion or correction? We&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium"
            >
              Contact Us
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
