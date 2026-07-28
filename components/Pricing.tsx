'use client';

import { Check } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function Pricing() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-4 font-sora">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-muted text-center max-w-2xl mx-auto mb-14">
            No hidden fees. No vague quotes. Here&apos;s exactly what you pay.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 - Website Development */}
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-primary font-sora">Website Development</h3>
              <p className="text-xs tracking-widest text-muted font-medium uppercase mt-5 mb-1">STARTING AT</p>
              <div className="text-3xl font-extrabold text-primary font-sora">₹8,000–₹25,000</div>
              <p className="text-sm text-muted mb-1">one-time</p>
              <p className="text-sm text-muted italic mb-6">Depending on pages & features</p>
              
              <div className="border-t border-border my-2"></div>
              
              <ul className="flex-1 space-y-3 mt-4 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Up to 5 responsive pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Contact form + WhatsApp integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">1 round of revisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Delivered in 7–10 days</span>
                </li>
              </ul>
              
              <div className="mt-auto pt-6">
                <a id="pricing-cta-website" href="#contact" className="block text-center rounded-full border-2 border-primary text-primary font-semibold px-6 py-3 hover:bg-primary hover:text-white transition-all duration-200">
                  Get a Quote
                </a>
              </div>
            </div>

            {/* Card 2 - Google Maps Setup */}
            <div className="bg-white rounded-2xl p-8 border-2 border-accent shadow-lg flex flex-col relative hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-primary font-sora">Google Maps Setup</h3>
              <p className="text-xs tracking-widest text-muted font-medium uppercase mt-5 mb-1">STARTING AT</p>
              <div className="text-3xl font-extrabold text-primary font-sora">₹3,000</div>
              <p className="text-sm text-muted">one-time</p>
              <p className="text-sm font-semibold text-primary mb-1">+ ₹1,500–3,000/mo</p>
              <p className="text-sm text-muted italic mb-6">Monthly for ongoing optimization</p>
              
              <div className="border-t border-border my-2"></div>
              
              <ul className="flex-1 space-y-3 mt-4 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Profile setup & optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Category & keyword fix</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Review request templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Monthly check-in</span>
                </li>
              </ul>
              
              <div className="mt-auto pt-6">
                <a id="pricing-cta-maps" href="#contact" className="block text-center rounded-full bg-accent hover:bg-accent-hover text-primary font-semibold px-6 py-3 hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
                  Get a Quote
                </a>
              </div>
            </div>

            {/* Card 3 - Meta Ads Management */}
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-primary font-sora">Meta Ads Management</h3>
              <p className="text-xs tracking-widest text-muted font-medium uppercase mt-5 mb-1">STARTING AT</p>
              <div className="text-3xl font-extrabold text-primary font-sora">₹4,000–8,000</div>
              <p className="text-sm text-muted mb-1">/month</p>
              <p className="text-sm text-muted italic mb-6">Ad spend paid directly to Meta, separate from this fee</p>
              
              <div className="border-t border-border my-2"></div>
              
              <ul className="flex-1 space-y-3 mt-4 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Campaign setup & targeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">2–3 ad creative variations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Weekly spend reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">You control the budget</span>
                </li>
              </ul>
              
              <div className="mt-auto pt-6">
                <a id="pricing-cta-ads" href="#contact" className="block text-center rounded-full border-2 border-primary text-primary font-semibold px-6 py-3 hover:bg-primary hover:text-white transition-all duration-200">
                  Get a Quote
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 bg-[#EEF2FF] rounded-2xl p-6 lg:p-8 text-center">
            <h3 className="text-lg font-semibold text-primary font-sora">💰 Save 10–15% when you combine 2+ services.</h3>
            <p className="text-sm text-muted mt-2">Final quote depends on your business size and goals — book a free call for exact pricing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
