'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DownloadGuidePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          // Tag for lead magnet subscribers
          utm_source: 'lead_magnet',
          utm_campaign: 'vegan_guide_pdf'
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Check your email for the guide!');
        setEmail('');
        // Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'lead_magnet_download', {
            event_category: 'engagement',
            event_label: 'vegan_guide_pdf'
          });
        }
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#3d4a3d]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#d4a574]/5 blur-[100px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 py-24">
        {/* Back link */}
        <Link 
          href="/guide" 
          className="inline-flex items-center gap-2 text-sm text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors mb-12 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to guide
        </Link>

        {status === 'success' ? (
          /* Success State */
          <div className="card-elevated rounded-3xl p-10 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3d4a3d] to-[#4a5d4a] flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-[#4ade80]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="font-display text-3xl text-[#f5f0e8] mb-4">
              You&apos;re In! 🌱
            </h1>
            <p className="text-[#f5f0e8]/60 mb-8">
              Check your inbox for the Minneapolis Vegan Dining Guide. 
              We&apos;ve also added you to our weekly newsletter with new restaurant 
              openings and exclusive deals.
            </p>
            
            <div className="space-y-4">
              <a
                href="/downloads/minneapolis-vegan-guide.pdf"
                download
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Guide Now
              </a>
              
              <p className="text-sm text-[#f5f0e8]/40">
                Can&apos;t find the email? Check your spam folder or{' '}
                <a href="mailto:hello@mplsvegan.com" className="text-[#d4a574] hover:underline">
                  contact us
                </a>
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-[#f5f0e8]/10">
              <p className="text-sm text-[#f5f0e8]/40 mb-4">While you wait, explore our favorites:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/guide#brunch" className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm text-[#f5f0e8]/60 hover:text-[#d4a574] transition-colors">
                  🍳 Brunch Spots
                </Link>
                <Link href="/guide#comfort" className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm text-[#f5f0e8]/60 hover:text-[#d4a574] transition-colors">
                  🍔 Comfort Food
                </Link>
                <Link href="/guide#date-night" className="px-4 py-2 bg-[#2a2a2a] rounded-full text-sm text-[#f5f0e8]/60 hover:text-[#d4a574] transition-colors">
                  🍣 Date Night
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* Form State */
          <div className="card-elevated rounded-3xl p-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a574]/10 border border-[#d4a574]/20 rounded-full text-sm text-[#d4a574] mb-8">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15l-2-2m0 0l2-2m-2 2h12M3 7v10c0 1.1.9 2 2 2h6" />
              </svg>
              Free Download
            </div>
            
            {/* Header */}
            <h1 className="font-display text-3xl lg:text-4xl text-[#f5f0e8] mb-4">
              The Ultimate Minneapolis Vegan Dining Guide
            </h1>
            <p className="text-[#f5f0e8]/60 mb-8">
              Get our curated PDF guide with 40+ restaurants, neighborhood maps, 
              insider tips, and what to order at each spot. Updated for 2026.
            </p>

            {/* What's inside */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '📍', text: '40+ restaurants' },
                { icon: '🗺️', text: 'Neighborhood maps' },
                { icon: '🍽️', text: 'What to order' },
                { icon: '💡', text: 'Insider tips' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-[#f5f0e8]/60">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-[#2a2a2a] border border-[#f5f0e8]/10 rounded-xl text-[#f5f0e8] placeholder:text-[#f5f0e8]/30 focus:outline-none focus:border-[#d4a574]/50 focus:ring-2 focus:ring-[#d4a574]/20 transition-all"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#c49464] text-[#1a1a1a] font-semibold rounded-xl hover:from-[#e4b584] hover:to-[#d4a574] hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Get Free Guide
                  </span>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">{message}</p>
              )}
              
              <p className="text-xs text-[#f5f0e8]/30 text-center">
                You&apos;ll also get our weekly newsletter. Unsubscribe anytime.
              </p>
            </form>

            {/* Social proof */}
            <div className="mt-8 pt-8 border-t border-[#f5f0e8]/10 flex items-center justify-center gap-6 text-sm text-[#f5f0e8]/40">
              <span>Join 500+ plant-based food lovers</span>
              <span className="text-[#d4a574]">•</span>
              <span>Updated weekly</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
