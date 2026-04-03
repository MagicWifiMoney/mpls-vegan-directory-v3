'use client';

import { useState } from 'react';
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
                <span className="text-[#f5f0e8]"> Restaurants</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-[#f5f0e8]/60 max-w-xl leading-relaxed animate-fade-in-up stagger-3">
              Discover the best vegan restaurants in Minneapolis MN — from America&apos;s first vegan butcher to soulful Ethiopian cuisine. Your complete Twin Cities plant-based guide.
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

            {/* Newsletter inline CTA */}
            <HeroNewsletterInline />
          </div>

          {/* Right column - Newsletter capture */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Background cards */}
              <div className="absolute top-8 left-8 right-0 bottom-0 rounded-3xl bg-[#3d4a3d]/30 transform rotate-3" />
              <div className="absolute top-4 left-4 right-4 bottom-4 rounded-3xl bg-[#2a2a2a] transform -rotate-2" />
              
              {/* Main card - Newsletter */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-[#f5f0e8]/10 overflow-hidden">
                {/* Card content - Newsletter */}
                <HeroNewsletterCard />

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

// Inline newsletter form in hero left column
function HeroNewsletterInline() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus('success'); setEmail(''); }
      else setStatus('idle');
    } catch { setStatus('idle'); }
  };

  if (status === 'success') {
    return (
      <div className="animate-fade-in-up stagger-5 mt-2">
        <p className="text-[#4ade80] text-sm font-medium">🌱 You&apos;re in! Welcome to the community.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in-up stagger-5 mt-2 flex flex-col sm:flex-row gap-3 max-w-md">
      <div className="flex flex-1 items-center gap-2 px-4 py-3 bg-[#2a2a2a]/80 border border-[#f5f0e8]/10 rounded-full backdrop-blur-sm">
        <svg className="w-4 h-4 text-[#d4a574] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Get the weekly vegan digest"
          className="flex-1 bg-transparent text-sm text-[#f5f0e8] placeholder:text-[#f5f0e8]/40 focus:outline-none"
          required
          disabled={status === 'loading'}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-gradient-to-r from-[#d4a574] to-[#c49464] text-[#1a1a1a] font-semibold rounded-full text-sm hover:from-[#e4b584] hover:to-[#d4a574] transition-all disabled:opacity-50 whitespace-nowrap"
      >
        {status === 'loading' ? 'Joining...' : 'Subscribe Free'}
      </button>
    </form>
  );
}

// Newsletter card in hero right column
function HeroNewsletterCard() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus('success'); setEmail(''); }
      else setStatus('idle');
    } catch { setStatus('idle'); }
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-between p-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3d4a3d]/50 text-[#d4a574] text-sm">
          <span className="w-2 h-2 rounded-full bg-[#d4a574] animate-pulse" />
          Weekly Newsletter
        </div>
        <div>
          <h3 className="font-display text-3xl lg:text-4xl text-[#f5f0e8] leading-tight">Stay in the<br /><span className="text-gradient">Plant Loop</span></h3>
          <p className="text-[#f5f0e8]/50 mt-3 text-sm leading-relaxed">New vegan spots, deals, and Minneapolis plant-based news — every week.</p>
        </div>
        <ul className="space-y-2">
          {['🌱 New restaurant openings', '🔥 Exclusive deals & specials', '🗺️ Neighborhood guides'].map(item => (
            <li key={item} className="flex items-center gap-2 text-sm text-[#f5f0e8]/60">{item}</li>
          ))}
        </ul>
      </div>

      {status === 'success' ? (
        <div className="bg-[#3d4a3d]/40 border border-[#4ade80]/30 rounded-2xl p-4 text-center">
          <p className="text-[#4ade80] font-medium">🎉 You&apos;re subscribed!</p>
          <p className="text-[#f5f0e8]/50 text-xs mt-1">Check your inbox for a welcome email</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-[#1a1a1a]/60 border border-[#f5f0e8]/15 rounded-xl text-[#f5f0e8] placeholder:text-[#f5f0e8]/30 focus:outline-none focus:border-[#d4a574]/60 transition-all text-sm"
            required
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3 bg-gradient-to-r from-[#d4a574] to-[#c49464] text-[#1a1a1a] font-semibold rounded-xl hover:from-[#e4b584] hover:to-[#d4a574] transition-all disabled:opacity-50 text-sm"
          >
            {status === 'loading' ? 'Subscribing...' : 'Get the Newsletter →'}
          </button>
          <p className="text-center text-[#f5f0e8]/25 text-xs">Free forever. Unsubscribe anytime.</p>
        </form>
      )}
    </div>
  );
}
