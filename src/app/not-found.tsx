import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-8">
          <span className="text-6xl">🥗</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Oops! Looks like this page has gone plant-based and disappeared. 
          Let&apos;s get you back to finding delicious vegan food.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/neighborhoods"
            className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-full font-semibold hover:bg-green-50 transition-colors"
          >
            Browse Neighborhoods
          </Link>
        </div>
      </div>
    </div>
  );
}
