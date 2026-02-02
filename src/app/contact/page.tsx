'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#3d4a3d]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#d4a574]/5 blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-24 pt-32">
        {/* Back link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors mb-12 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gradient-to-r from-[#d4a574] to-transparent" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4a574]">Get In Touch</span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl text-[#f5f0e8] tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-[#f5f0e8]/50 text-lg max-w-xl">
            Have a suggestion, correction, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card-elevated rounded-2xl p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[#3d4a3d]/30 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl text-[#f5f0e8] mb-3">Thank You!</h2>
                  <p className="text-[#f5f0e8]/50 mb-8">
                    We&apos;ve received your message and will get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'general', message: '' });
                    }}
                    className="text-[#d4a574] hover:text-[#e6c49a] font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#d4a574] mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field w-full px-5 py-4 rounded-xl text-sm"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#d4a574] mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field w-full px-5 py-4 rounded-xl text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-[#d4a574] mb-2 font-medium">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input-field w-full px-5 py-4 rounded-xl text-sm appearance-none cursor-pointer"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="suggestion">Suggest a Restaurant</option>
                        <option value="correction">Report a Correction</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                      <svg 
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f5f0e8]/30 pointer-events-none"
                        viewBox="0 0 24 24"
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#d4a574] mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="input-field w-full px-5 py-4 rounded-xl text-sm resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full px-6 py-4 rounded-xl text-sm font-medium"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Ways to reach us */}
            <div className="card-elevated rounded-2xl p-8">
              <h2 className="font-display text-xl text-[#f5f0e8] mb-6">Ways to Reach Us</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3d4a3d]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-[#f5f0e8] font-medium mb-1">Email</h3>
                    <a href="mailto:hello@mplsvegan.com" className="text-[#d4a574] hover:text-[#e6c49a] text-sm transition-colors">
                      hello@mplsvegan.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3d4a3d]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#d4a574]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-[#f5f0e8] font-medium mb-1">Social</h3>
                    <p className="text-[#f5f0e8]/50 text-sm">@mplsvegan on Instagram & X</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggest a restaurant */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#3d4a3d]/30 to-[#3d4a3d]/10 border border-[#3d4a3d]/30">
              <h2 className="font-display text-xl text-[#f5f0e8] mb-4">Suggest a Restaurant</h2>
              <p className="text-[#f5f0e8]/50 text-sm leading-relaxed mb-4">
                Know a great vegan or vegan-friendly restaurant? We&apos;d love to hear about it! Include:
              </p>
              <ul className="space-y-2 text-sm text-[#f5f0e8]/40">
                {[
                  'Restaurant name and address',
                  'Vegan status (100%, friendly, etc.)',
                  'What makes it special',
                  'Your favorite dishes',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#d4a574]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Report issues */}
            <div className="card-elevated rounded-2xl p-8">
              <h2 className="font-display text-xl text-[#f5f0e8] mb-4">Report Issues</h2>
              <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">
                Notice incorrect info, outdated hours, or closed restaurants? Let us know so we can keep the directory accurate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
