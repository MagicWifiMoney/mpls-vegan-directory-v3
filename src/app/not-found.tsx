import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-6">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3d4a3d]/10 blur-[120px]" />
      </div>

      <div className="relative text-center max-w-lg">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#2a2a2a] border border-[#f5f0e8]/10 mb-8">
          <svg className="w-12 h-12 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Text */}
        <h1 className="font-display text-5xl text-[#f5f0e8] mb-4">
          Page Not Found
        </h1>
        <p className="text-[#f5f0e8]/50 text-lg mb-10">
          Oops! Looks like this page has gone plant-based and disappeared. 
          Let&apos;s get you back to finding delicious vegan food.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary px-8 py-4 rounded-full text-base font-medium inline-flex items-center justify-center gap-2"
          >
            Go to Homepage
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
          <Link
            href="/neighborhoods"
            className="btn-secondary px-8 py-4 rounded-full text-base font-medium"
          >
            Browse Neighborhoods
          </Link>
        </div>
      </div>
    </div>
  );
}
