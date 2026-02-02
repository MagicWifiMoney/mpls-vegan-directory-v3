'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'full' | 'compact';
}

export default function NewsletterSignup({ variant = 'full' }: NewsletterSignupProps) {
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
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Welcome to the family! 🌱');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (variant === 'compact') {
    return (
      <div className="w-full">
        <h3 className="text-xs uppercase tracking-widest text-[#d4a574] mb-4 font-medium">Newsletter</h3>
        <p className="text-[#f5f0e8]/50 text-sm mb-4">
          Weekly updates on new vegan spots
        </p>
        
        {status === 'success' ? (
          <div className="text-[#4ade80] text-sm">{message}</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 bg-[#2a2a2a] border border-[#f5f0e8]/10 rounded-lg text-[#f5f0e8] placeholder:text-[#f5f0e8]/30 focus:outline-none focus:border-[#d4a574]/50 transition-colors text-sm"
              required
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-[#d4a574] to-[#c49464] text-[#1a1a1a] font-medium rounded-lg hover:from-[#e4b584] hover:to-[#d4a574] transition-all disabled:opacity-50 text-sm"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-xs">{message}</p>
            )}
          </form>
        )}
      </div>
    );
  }

  // Full variant
  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#2a2a2a]/30 to-[#1a1a1a]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#d4a574]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#3d4a3d]/10 blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Content card */}
        <div className="card-elevated rounded-3xl p-8 md:p-12 text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3d4a3d] to-[#4a5d4a] flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Section header */}
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4a574]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">Stay in the loop</span>
            <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#f5f0e8] mb-4">
            Get Weekly Updates
          </h2>
          <p className="text-[#f5f0e8]/50 text-lg mb-2 max-w-xl mx-auto">
            Get weekly updates on new vegan spots in the Twin Cities
          </p>
          <p className="text-[#d4a574] text-sm mb-8">
            Join 500+ plant-based food lovers
          </p>

          {status === 'success' ? (
            <div className="bg-[#3d4a3d]/30 border border-[#4ade80]/30 rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-[#4ade80]/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4ade80]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-[#f5f0e8] mb-2">You&apos;re In! 🌱</h3>
              <p className="text-[#f5f0e8]/60">{message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-[#2a2a2a] border border-[#f5f0e8]/10 rounded-xl text-[#f5f0e8] placeholder:text-[#f5f0e8]/30 focus:outline-none focus:border-[#d4a574]/50 focus:ring-2 focus:ring-[#d4a574]/20 transition-all"
                  required
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#c49464] text-[#1a1a1a] font-semibold rounded-xl hover:from-[#e4b584] hover:to-[#d4a574] hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 whitespace-nowrap"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              
              {status === 'error' && (
                <p className="mt-4 text-red-400 text-sm">{message}</p>
              )}
              
              <p className="mt-6 text-[#f5f0e8]/30 text-sm">
                We respect your inbox. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          <div className="text-center">
            <div className="font-display text-2xl lg:text-3xl text-[#d4a574]">47</div>
            <div className="text-xs uppercase tracking-wider text-[#f5f0e8]/40">Spots Listed</div>
          </div>
          <div className="text-center border-x border-[#f5f0e8]/10">
            <div className="font-display text-2xl lg:text-3xl text-[#d4a574]">23</div>
            <div className="text-xs uppercase tracking-wider text-[#f5f0e8]/40">Neighborhoods</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl lg:text-3xl text-[#d4a574]">100%</div>
            <div className="text-xs uppercase tracking-wider text-[#f5f0e8]/40">Plant Love</div>
          </div>
        </div>
      </div>
    </section>
  );
}
