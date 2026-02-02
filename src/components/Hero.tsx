import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-emerald-600" />
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
          <span className="text-5xl">🌱</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Minneapolis Vegan
          <span className="block text-green-200">Restaurant Directory</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
          Discover the best vegan and plant-based dining in the Twin Cities. 
          From soul food to Ethiopian cuisine, we&apos;ve got you covered.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#restaurants"
            className="px-8 py-4 bg-white text-green-700 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Restaurants
          </Link>
          <Link 
            href="/neighborhoods"
            className="px-8 py-4 bg-green-700 text-white rounded-full font-semibold text-lg hover:bg-green-800 transition-colors border-2 border-white/30"
          >
            Browse by Neighborhood
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <div>
            <div className="text-4xl font-bold">20+</div>
            <div className="text-green-200">Restaurants</div>
          </div>
          <div>
            <div className="text-4xl font-bold">14</div>
            <div className="text-green-200">Neighborhoods</div>
          </div>
          <div>
            <div className="text-4xl font-bold">10+</div>
            <div className="text-green-200">Cuisine Types</div>
          </div>
          <div>
            <div className="text-4xl font-bold">2</div>
            <div className="text-green-200">Cities</div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  );
}
