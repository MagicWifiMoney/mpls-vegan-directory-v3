import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Minneapolis Vegan Directory',
  description: 'Learn about the Minneapolis Vegan Directory, your guide to plant-based dining in the Twin Cities.',
};

export default function AboutPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <nav className="mb-4">
          <Link href="/" className="text-green-600 hover:text-green-700 text-sm">
            ← Back to home
          </Link>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About MPLS Vegan Directory
        </h1>
      </div>

      {/* Content */}
      <div className="prose prose-lg prose-green max-w-none">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Minneapolis Vegan Directory was created to help plant-based eaters discover 
            the vibrant vegan food scene in the Twin Cities. Whether you&apos;re a longtime vegan, 
            newly plant-curious, or just looking for a delicious meat-free meal, we&apos;re here 
            to guide you to the best restaurants Minneapolis and Saint Paul have to offer.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From America&apos;s first vegan butcher shop to soul food, Ethiopian cuisine to artisan 
            bakeries, the Twin Cities has emerged as a hub for innovative plant-based dining. 
            We&apos;re proud to showcase the chefs, entrepreneurs, and communities making this 
            possible.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Include</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">✓</span>
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">100% Vegan Restaurants</h3>
                <p className="text-gray-600">Fully plant-based establishments where every menu item is vegan.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-bold">✓</span>
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Vegetarian Restaurants</h3>
                <p className="text-gray-600">Meat-free restaurants with extensive vegan options.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">✓</span>
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Vegan-Friendly Spots</h3>
                <p className="text-gray-600">Restaurants that excel at accommodating plant-based diners.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Minneapolis?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Twin Cities has quietly become one of the most exciting vegan food destinations 
            in the Midwest. Here&apos;s what makes it special:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Innovation:</strong> Home to The Herbivorous Butcher, America&apos;s first vegan butcher shop</li>
            <li><strong>Diversity:</strong> Ethiopian, Soul Food, Thai, Indian—global cuisines shine here</li>
            <li><strong>Community:</strong> Many restaurants are collectively owned or community-focused</li>
            <li><strong>Black-owned businesses:</strong> Trio Plant-Based and others lead the way</li>
            <li><strong>Accessibility:</strong> Options at every price point, from diners to fine dining</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Connected</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We&apos;re always updating our directory with new restaurants and information. 
            Have a suggestion or correction? We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
