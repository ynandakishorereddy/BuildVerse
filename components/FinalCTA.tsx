'use client';

import { useState } from 'react';
import { Phone, Unlock, Eye } from 'lucide-react';

export default function FinalCTA() {
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted contact info:', contactInfo);
    setContactInfo('');
    alert('Thank you! We will get in touch shortly.');
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
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="Enter your phone or email"
              required
              className="flex-1 rounded-full px-6 py-4 text-primary bg-white border-0 placeholder:text-muted focus:ring-2 focus:ring-accent outline-none text-base shadow-inner"
            />
            <button
              type="submit"
              id="final-cta-submit"
              className="rounded-full bg-accent hover:bg-accent-hover text-primary font-semibold px-8 py-4 text-lg hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
            >
              Get a Free Quote
            </button>
          </form>

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
