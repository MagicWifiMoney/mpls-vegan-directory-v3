'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export default function SuggestRestaurantPage() {
  const [form, setForm] = useState({
    restaurantName: '',
    address: '',
    whyVeganFriendly: '',
    submitterEmail: '',
  });
  const [state, setState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Submission failed');
      }

      setState('success');
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#3d4a3d]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#d4a574]/5 blur-[100px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 py-24 pt-32">
        {/* Back link */}
        <Link
          href="/restaurants"
          className="inline-flex items-center gap-2 text-sm text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors mb-12 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to restaurants
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">Community</span>
          </div>
          <h1 className="font-display text-5xl text-[#f5f0e8] tracking-tight mb-4">
            Suggest a Restaurant
          </h1>
          <p className="text-[#f5f0e8]/60 text-lg leading-relaxed">
            Know a great vegan-friendly spot we haven&apos;t covered yet? Tell us about it and
            we&apos;ll review it for the directory.
          </p>
        </div>

        {state === 'success' ? (
          <div className="rounded-2xl border border-[#3d4a3d]/40 bg-[#1a2a1a]/60 p-10 text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h2 className="font-display text-2xl text-[#f5f0e8] mb-3">Thanks for the tip!</h2>
            <p className="text-[#f5f0e8]/60 mb-8">
              We&apos;ll review your suggestion and add it to the directory if it&apos;s a good fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/restaurants"
                className="px-6 py-3 rounded-full bg-[#3d4a3d] text-[#f5f0e8] text-sm font-medium hover:bg-[#4a5a4a] transition-colors"
              >
                Browse restaurants
              </Link>
              <button
                onClick={() => { setForm({ restaurantName: '', address: '', whyVeganFriendly: '', submitterEmail: '' }); setState('idle'); }}
                className="px-6 py-3 rounded-full border border-[#3d4a3d]/40 text-[#f5f0e8]/70 text-sm font-medium hover:text-[#f5f0e8] hover:border-[#3d4a3d] transition-colors"
              >
                Suggest another
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Restaurant name */}
            <div>
              <label className="block text-sm font-medium text-[#f5f0e8]/80 mb-2">
                Restaurant name <span className="text-[#d4a574]">*</span>
              </label>
              <input
                type="text"
                name="restaurantName"
                value={form.restaurantName}
                onChange={handleChange}
                required
                placeholder="e.g. The Herbivorous Butcher"
                className="w-full bg-[#1a1a1a]/80 border border-[#3d4a3d]/40 rounded-xl px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#d4a574]/60 transition-colors"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-[#f5f0e8]/80 mb-2">
                Address or neighborhood
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="e.g. 507 1st Ave NE, Minneapolis or Northeast Mpls"
                className="w-full bg-[#1a1a1a]/80 border border-[#3d4a3d]/40 rounded-xl px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#d4a574]/60 transition-colors"
              />
            </div>

            {/* Why vegan friendly */}
            <div>
              <label className="block text-sm font-medium text-[#f5f0e8]/80 mb-2">
                Why is it great for vegans?
              </label>
              <textarea
                name="whyVeganFriendly"
                value={form.whyVeganFriendly}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us what makes it special — dedicated vegan menu, outstanding options, amazing tofu dish, etc."
                className="w-full bg-[#1a1a1a]/80 border border-[#3d4a3d]/40 rounded-xl px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#d4a574]/60 transition-colors resize-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#f5f0e8]/80 mb-2">
                Your email <span className="text-[#d4a574]">*</span>
              </label>
              <input
                type="email"
                name="submitterEmail"
                value={form.submitterEmail}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full bg-[#1a1a1a]/80 border border-[#3d4a3d]/40 rounded-xl px-4 py-3 text-[#f5f0e8] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#d4a574]/60 transition-colors"
              />
              <p className="text-xs text-[#f5f0e8]/40 mt-1.5">
                We may follow up with questions. Not shared publicly.
              </p>
            </div>

            {state === 'error' && (
              <p className="text-red-400 text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={state === 'submitting'}
              className="w-full py-4 rounded-xl bg-[#d4a574] hover:bg-[#c49464] text-[#1a1a1a] font-semibold text-sm transition-colors disabled:opacity-50"
            >
              {state === 'submitting' ? 'Submitting…' : 'Submit suggestion'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
