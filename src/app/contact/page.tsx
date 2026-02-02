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
    // In production, this would send to an API endpoint
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
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <nav className="mb-4">
          <Link href="/" className="text-green-600 hover:text-green-700 text-sm">
            ← Back to home
          </Link>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg">
          Have a suggestion, correction, or just want to say hello? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                We&apos;ve received your message and will get back to you soon.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'general', message: '' });
                }}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="general">General Inquiry</option>
                  <option value="suggestion">Suggest a Restaurant</option>
                  <option value="correction">Report a Correction</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Ways to Reach Us</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <a href="mailto:hello@mplsvegan.com" className="text-green-600 hover:text-green-700">
                    hello@mplsvegan.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">Social Media</h3>
                  <p className="text-gray-600">@mplsvegan on Instagram & Twitter</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Suggest a Restaurant</h2>
            <p className="text-gray-700 mb-4">
              Know a great vegan or vegan-friendly restaurant that should be on our list? 
              We&apos;d love to hear about it! Please include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Restaurant name and address</li>
              <li>Whether it&apos;s 100% vegan or vegan-friendly</li>
              <li>What makes it special</li>
              <li>Your favorite dishes</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Report Issues</h2>
            <p className="text-gray-700">
              If you notice any incorrect information, outdated hours, or closed restaurants 
              on our site, please let us know so we can keep the directory accurate and helpful 
              for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
