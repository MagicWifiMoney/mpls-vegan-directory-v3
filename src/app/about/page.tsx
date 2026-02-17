import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Mia & Jay | Minneapolis Vegan Directory — Born & Raised in MPLS',
  description: 'Meet Mia and Jay, the husband-and-wife team behind the Minneapolis Vegan Directory. Born and raised in the Twin Cities, they created the definitive guide to plant-based dining in Minneapolis & Saint Paul.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Mia & Jay | Minneapolis Vegan Directory',
    description: 'Born and raised in Minneapolis — meet the team behind the Twin Cities\' definitive plant-based dining guide.',
    url: 'https://mplsvegan.com/about',
  },
};

const teamMembers = [
  {
    name: 'Mia',
    role: 'Co-Founder & Content Director',
    image: '/images/team/mia.png',
    bio: 'Born and raised on the North Side of Minneapolis, Mia grew up surrounded by the flavors of the Twin Cities. A lifelong foodie who went plant-based in 2019, she brings a keen eye for storytelling and a deep connection to the local community. She handles all the writing, photography, and restaurant reviews — and yes, she\'s tried every single spot in the directory.',
    expertise: 'Restaurant Reviews, Food Photography, Content Strategy',
  },
  {
    name: 'Jay',
    role: 'Co-Founder & Technical Lead',
    image: '/images/team/jay.png',
    bio: 'Jay grew up in South Minneapolis and has been exploring the city\'s food scene since he could ride the bus. After a career in tech, he combined his passion for web development with Mia\'s food obsession to build the Minneapolis Vegan Directory. He handles the technical side — from SEO to site performance — and serves as the official taste-test partner.',
    expertise: 'Web Development, SEO, Data & Analytics',
  },
];

export default function AboutPage() {
  // Person schema for E-E-A-T
  const personSchemas = teamMembers.map((member) => ({
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    image: `https://mplsvegan.com${member.image}`,
    worksFor: {
      '@type': 'Organization',
      name: 'Minneapolis Vegan Directory',
      url: 'https://mplsvegan.com',
    },
    knowsAbout: ['Vegan dining', 'Plant-based restaurants', 'Minneapolis food scene', 'Twin Cities dining'],
  }));

  const aboutPageSchema = {
    '@type': 'AboutPage',
    name: 'About Minneapolis Vegan Directory',
    description: 'Meet Mia and Jay, the husband-and-wife team behind the definitive guide to vegan dining in Minneapolis & Saint Paul.',
    url: 'https://mplsvegan.com/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Minneapolis Vegan Directory',
      url: 'https://mplsvegan.com',
      founder: personSchemas.map((p) => ({
        '@type': 'Person',
        name: p.name,
        jobTitle: p.jobTitle,
      })),
    },
  };

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [...personSchemas, aboutPageSchema],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
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
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">About Us</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl text-[#f5f0e8] tracking-tight mb-4">
              Meet Mia &amp; Jay
            </h1>
            <p className="text-xl text-[#f5f0e8]/60 max-w-2xl">
              Born and raised in Minneapolis. Building the definitive guide to plant-based dining in the Twin Cities.
            </p>
          </div>

          <div className="space-y-8">
            {/* Team Section */}
            <div className="card-elevated rounded-2xl p-8 lg:p-10">
              <h2 className="font-display text-2xl text-[#f5f0e8] mb-8">The Team</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex flex-col items-center text-center">
                    <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 ring-2 ring-[#d4a574]/30">
                      <Image
                        src={member.image}
                        alt={`${member.name} — ${member.role} at Minneapolis Vegan Directory`}
                        fill
                        className="object-cover"
                        sizes="144px"
                      />
                    </div>
                    <h3 className="font-display text-xl text-[#f5f0e8] mb-1">{member.name}</h3>
                    <p className="text-sm text-[#d4a574] mb-4">{member.role}</p>
                    <p className="text-sm text-[#f5f0e8]/60 leading-relaxed mb-4">{member.bio}</p>
                    <p className="text-xs text-[#f5f0e8]/40">
                      <span className="text-[#f5f0e8]/50 font-medium">Expertise:</span> {member.expertise}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Story */}
            <div className="card-elevated rounded-2xl p-8 lg:p-10">
              <h2 className="font-display text-2xl text-[#f5f0e8] mb-6">Our Story</h2>
              <div className="space-y-4 text-[#f5f0e8]/60 leading-relaxed">
                <p>
                  We started the Minneapolis Vegan Directory because we kept having the same conversation: &quot;Where
                  should we eat tonight?&quot; As lifelong Minneapolitans who went plant-based, we knew the scene was
                  incredible — but there was no single place that mapped it all out.
                </p>
                <p>
                  So we started documenting every vegan and vegan-friendly restaurant we could find. We visited every
                  spot personally, talked to the chefs, tried the menus, and wrote real reviews — not just copied
                  descriptions from Yelp. From America&apos;s first{' '}
                  <Link href="/restaurants/herbivorous-butcher" className="text-[#d4a574] hover:underline">
                    vegan butcher shop
                  </Link>{' '}
                  to soulful{' '}
                  <Link href="/restaurants/cuisine/ethiopian" className="text-[#d4a574] hover:underline">
                    Ethiopian cuisine
                  </Link>{' '}
                  to craft{' '}
                  <Link href="/restaurants/cuisine/bakery" className="text-[#d4a574] hover:underline">
                    vegan bakeries
                  </Link>
                  , we&apos;ve covered it all.
                </p>
                <p>
                  Today, our{' '}
                  <Link href="/restaurants" className="text-[#d4a574] hover:underline">
                    restaurant directory
                  </Link>{' '}
                  features 46+ restaurants across 25 neighborhoods. Our{' '}
                  <Link href="/blog" className="text-[#d4a574] hover:underline">
                    blog
                  </Link>{' '}
                  publishes guides, reviews, and inspiration for plant-based eating. And our free{' '}
                  <Link href="/guide" className="text-[#d4a574] hover:underline">
                    dining guide
                  </Link>{' '}
                  helps newcomers discover the best the Twin Cities have to offer.
                </p>
              </div>
            </div>

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
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
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
                  { label: 'Diversity', text: 'Ethiopian, Soul Food, Thai, Indian — global cuisines shine here' },
                  { label: 'Community', text: 'Many restaurants are collectively owned or community-focused' },
                  { label: 'Black-owned businesses', text: 'Trio Plant-Based, The Dripping Root, and others lead the way' },
                  { label: 'Accessibility', text: 'Options at every price point, from punk diners to fine dining' },
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
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium"
                >
                  Contact Us
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </Link>
                <Link
                  href="/restaurants"
                  className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium"
                >
                  Browse Restaurants
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
