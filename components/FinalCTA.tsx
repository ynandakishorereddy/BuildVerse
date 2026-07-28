'use client';

import { useState } from 'react';
import { Phone, Unlock, Eye } from 'lucide-react';

export default function FinalCTA() {
  const [contactInfo, setContactInfo] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo) return;

    // Check if it's an email (contains @)
    if (contactInfo.includes('@')) {
      setStatus('loading');
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contactInfo }),
        });
        if (response.ok) {
          setStatus('success');
          setContactInfo('');
        } else {
          setStatus('error');
        }
      } catch (error) {
        setStatus('error');
      }
    } else {
      // It's a phone number, redirect to WhatsApp
      const defaultMessage = encodeURIComponent("Hi BuildVerse, I'd like a free quote for my business!");
      window.open(`https://wa.me/918374424565?text=${defaultMessage}`, '_blank');
      setContactInfo('');
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto">
        <div className="bg-gradient-to-br from-primary to-link-blue rounded-3xl p-8 lg:p-16 text-center shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-sora">Ready to get more customers?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Tell us about your business and we'll put together a clear, no-pressure quote — free of charge.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => {
                setContactInfo(e.target.value);
                if (status !== 'idle') setStatus('idle');
              }}
              placeholder="Enter your phone or email"
              required
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 rounded-full px-6 py-4 text-primary bg-white border-0 placeholder:text-muted focus:ring-2 focus:ring-accent outline-none text-base shadow-inner disabled:opacity-70"
            />
            <button
              type="submit"
              id="final-cta-submit"
              disabled={status === 'loading' || status === 'success'}
              className="rounded-full bg-accent hover:bg-accent-hover text-primary font-semibold px-8 py-4 text-lg hover:scale-[1.02] hover:shadow-lg transition-all duration-200 disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none min-w-[200px]"
            >
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Get a Free Quote'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-green-300 font-medium">
              Thank you! Check your inbox or WhatsApp.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-300 font-medium">
              Something went wrong. Please try again or use the links below.
            </p>
          )}
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90 text-sm font-medium">
            <a href="tel:+918374424565" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 83744 24565</span>
            </a>
            <a href="mailto:buildversesolutins@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>buildversesolutins@gmail.com</span>
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Unlock className="w-4 h-4" />
              <span>No lock-in</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>Transparent pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
