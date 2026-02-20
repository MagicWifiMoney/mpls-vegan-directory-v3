import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]" />
        
        {/* Ambient glow */}
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-[#3d4a3d]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#d4a574]/10 blur-[100px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(245, 240, 232, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(245, 240, 232, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column - Main content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overline */}
            <div className="inline-flex items-center gap-3 animate-fade-in-up stagger-1">
              <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">Twin Cities Plant-Based Guide</span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up stagger-2">
              <span className="block font-display text-5xl sm:text-6xl lg:text-7xl text-[#f5f0e8] leading-[1.1] tracking-tight">
                Minneapolis
              </span>
              <span className="block font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight mt-2">
                <span className="text-gradient">Vegan</span>
                <span className="text-[#f5f0e8]"> Directory</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[#f5f0e8]/60 max-w-xl leading-relaxed animate-fade-in-up stagger-3">
              Discover exceptional plant-based dining across the Twin Cities. From America&apos;s first vegan butcher to soulful Ethiopian cuisine—find your next favorite spot.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up stagger-4">
              <Link 
                href="#restaurants"
                className="btn-primary px-8 py-4 rounded-full text-base font-medium inline-flex items-center gap-2"
              >
                Explore Restaurants
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <Link 
                href="/neighborhoods"
                className="btn-secondary px-8 py-4 rounded-full text-base font-medium"
              >
                Browse by Area
              </Link>
            </div>
          </div>

          {/* Right column - Stats & visual element */}
          <div className="lg:col-span-5 relative">
            {/* Decorative card stack */}
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Background cards */}
              <div className="absolute top-8 left-8 right-0 bottom-0 rounded-3xl bg-[#3d4a3d]/30 transform rotate-3" />
              <div className="absolute top-4 left-4 right-4 bottom-4 rounded-3xl bg-[#2a2a2a] transform -rotate-2" />
              
              {/* Main card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-[#f5f0e8]/10 overflow-hidden">
                {/* Card content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  {/* Top section */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3d4a3d]/50 text-[#d4a574] text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#d4a574] animate-pulse" />
                      Now Exploring
                    </div>
                    
                    {/* Featured stat */}
                    <div>
                      <span className="font-display text-7xl lg:text-8xl text-gradient">70+</span>
                      <p className="text-[#f5f0e8]/50 mt-2">Curated restaurants across<br />Minneapolis & Saint Paul</p>
                    </div>
                  </div>

                  {/* Bottom stats grid */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#f5f0e8]/10">
                    <div>
                      <span className="font-display text-2xl text-[#f5f0e8]">25</span>
                      <p className="text-xs text-[#f5f0e8]/40 mt-1">Neighborhoods</p>
                    </div>
                    <div>
                      <span className="font-display text-2xl text-[#f5f0e8]">15+</span>
                      <p className="text-xs text-[#f5f0e8]/40 mt-1">Cuisines</p>
                    </div>
                    <div>
                      <span className="font-display text-2xl text-[#f5f0e8]">100%</span>
                      <p className="text-xs text-[#f5f0e8]/40 mt-1">Plant-Forward</p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#d4a574]/10 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#3d4a3d]/30 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#f5f0e8]/30">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#f5f0e8]/30 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-4 bg-[#d4a574] animate-[scroll_1.5s_ease-in-out_infinite]" 
            style={{
              animation: 'scroll 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
