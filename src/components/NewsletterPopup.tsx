'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'mpls_vegan_popup_dismissed';
const DISMISS_DAYS = 7;

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  useEffect(() => {
    // Check if dismissed recently
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const { ts } = JSON.parse(stored);
        if (Date.now() - ts < DISMISS_DAYS * 24 * 60 * 60 * 1000) return;
      }
    } catch { /* ignore */ }

    // Exit-intent: mouse leaves top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setVisible(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
        clearTimeout(timer);
      }
    };

    // Fallback: show after 8s
    const timer = setTimeout(() => {
      setVisible(true);
      document.removeEventListener('mouseleave', handleMouseLeave);
    }, 8000);

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now() }));
    } catch { /* ignore */ }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'popup' }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        // Auto-close after 3s on success
        setTimeout(dismiss, 3000);
      } else {
        setStatus('idle');
      }
    } catch {
      setStatus('idle');
    }
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative w-full max-w-lg pointer-events-auto animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={dismiss}
            className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-[#2a2a2a] border border-[#f5f0e8]/15 flex items-center justify-center text-[#f5f0e8]/60 hover:text-[#f5f0e8] transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Card */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-[#f5f0e8]/10 shadow-2xl">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#3d4a3d] via-[#d4a574] to-[#3d4a3d]" />

            <div className="p-8 md:p-10">
              {status === 'success' ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-[#3d4a3d]/50 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <h3 className="font-display text-2xl text-[#f5f0e8] mb-2">You&apos;re In!</h3>
                  <p className="text-[#f5f0e8]/50">Watch your inbox — deals incoming.</p>
                </div>
              ) : (
                <>
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4a574]/15 border border-[#d4a574]/30 mb-6">
                    <span className="text-lg">🔥</span>
                    <span className="text-xs uppercase tracking-widest text-[#d4a574] font-medium">Exclusive Subscriber Deals</span>
                  </div>

                  {/* Headline */}
                  <h2 className="font-display text-3xl md:text-4xl text-[#f5f0e8] leading-tight mb-3">
                    Get exclusive deals from<br />
                    <span className="text-gradient">your favorite vegan spots</span>
                  </h2>

                  <p className="text-[#f5f0e8]/55 mb-6 leading-relaxed">
                    Subscribe for free and unlock weekly specials, new restaurant alerts, and deals only available to our community.
                  </p>

                  {/* Social proof */}
                  <div className="flex items-center gap-3 mb-7">
                    <div className="flex -space-x-2">
                      {['🧑', '👩', '🧑‍🦱', '👩‍🦰'].map((emoji, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-[#3d4a3d]/60 border border-[#f5f0e8]/10 flex items-center justify-center text-sm">
                          {emoji}
                        </div>
                      ))}
                    </div>
                    <p className="text-[#f5f0e8]/40 text-sm">
                      Join the Minneapolis plant-based community
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for free access"
                      className="w-full px-5 py-4 bg-[#111]/60 border border-[#f5f0e8]/10 rounded-xl text-[#f5f0e8] placeholder:text-[#f5f0e8]/30 focus:outline-none focus:border-[#d4a574]/50 focus:ring-2 focus:ring-[#d4a574]/15 transition-all text-sm"
                      required
                      disabled={status === 'loading'}
                      autoFocus
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-gradient-to-r from-[#d4a574] to-[#c49464] text-[#1a1a1a] font-bold rounded-xl hover:from-[#e4b584] hover:to-[#d4a574] hover:scale-[1.02] transition-all disabled:opacity-50 text-sm tracking-wide"
                    >
                      {status === 'loading' ? 'Getting you in...' : '🌿 Get Exclusive Deals — It\'s Free'}
                    </button>
                  </form>

                  <button
                    onClick={dismiss}
                    className="mt-4 w-full text-center text-[#f5f0e8]/25 text-xs hover:text-[#f5f0e8]/40 transition-colors"
                  >
                    No thanks, I&apos;ll pay full price
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        .animate-slide-up { animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </>
  );
}
