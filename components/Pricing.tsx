'use client';

import { Check } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 70, damping: 15 } 
  }
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-bold text-primary text-center mb-4 font-sora">
            Simple, transparent pricing.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted text-center max-w-2xl mx-auto mb-14">
            No hidden fees. No vague quotes. Here&apos;s exactly what you pay.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 - Website Development */}
            <motion.div variants={itemVariants} className="bg-card rounded-2xl p-8 border border-black/10 shadow-sm flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-primary font-sora">Website Development</h3>
              <p className="text-xs tracking-widest text-muted font-medium uppercase mt-5 mb-1">ONE-TIME SETUP</p>
              <div className="text-3xl font-extrabold text-primary font-sora">₹1,500–₹10,000</div>
              <p className="text-sm text-muted mb-1">Based on complexity</p>
              <p className="text-sm font-semibold text-green-600 mb-6">+ 6 months free maintenance</p>
              
              <div className="border-t border-black/5 my-2"></div>
              
              <ul className="flex-1 space-y-3 mt-4 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Responsive modern design</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Contact form + WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">6 months full support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Free minor updates</span>
                </li>
              </ul>
              
              <div className="mt-auto pt-6">
                <a id="pricing-cta-website" href="#contact" className="block text-center rounded-full border-2 border-primary text-primary font-semibold px-6 py-3 hover:bg-primary hover:text-white transition-all duration-200">
                  Grow My Business
                </a>
              </div>
            </motion.div>

            {/* Card 2 - Google Maps Setup */}
            <motion.div variants={itemVariants} className="bg-[#0F172A] rounded-2xl p-8 border-2 border-accent shadow-[0_10px_40px_rgba(245,166,35,0.2)] flex flex-col relative hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold text-white font-sora">Google Maps Setup</h3>
              <p className="text-xs tracking-widest text-white/60 font-medium uppercase mt-5 mb-1">ONE-TIME SETUP</p>
              <div className="text-3xl font-extrabold text-white font-sora">₹1,000</div>
              <p className="text-sm font-semibold text-green-400 mt-1 mb-1">+ 3 months free support</p>
              <p className="text-sm text-white/60 italic mb-6">Monthly maintenance extra after 3 months</p>
              
              <div className="border-t border-white/10 my-2"></div>
              
              <ul className="flex-1 space-y-3 mt-4 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white text-sm">Profile setup & optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white text-sm">Category & keyword fix</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white text-sm">Review request templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white text-sm">3 months maintenance included</span>
                </li>
              </ul>
              
              <div className="mt-auto pt-6">
                <a id="pricing-cta-maps" href="#contact" className="block text-center rounded-full bg-accent hover:bg-accent-hover text-black font-semibold px-6 py-3 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(245,166,35,0.4)] transition-all duration-200">
                  Grow My Business
                </a>
              </div>
            </motion.div>

            {/* Card 3 - Google/Meta Ads */}
            <motion.div variants={itemVariants} className="bg-card rounded-2xl p-8 border border-black/10 shadow-sm flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-primary font-sora">Google & Meta Ads</h3>
              <p className="text-xs tracking-widest text-muted font-medium uppercase mt-5 mb-1">SETUP FEE (ONE-TIME)</p>
              <div className="text-3xl font-extrabold text-primary font-sora">₹2,000–₹5,000</div>
              <p className="text-sm font-semibold text-primary mt-2 mb-1">+ ₹3,000–₹15,000/month</p>
              <p className="text-sm text-muted italic mb-6">Management fee. Ad budget is paid separately to Google/Meta.</p>
              
              <div className="border-t border-black/5 my-2"></div>
              
              <ul className="flex-1 space-y-3 mt-4 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Campaign setup & targeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Ad creative & copy variations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">Weekly spend reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-primary text-sm">You control the daily budget</span>
                </li>
              </ul>
              
              <div className="mt-auto pt-6">
                <a id="pricing-cta-ads" href="#contact" className="block text-center rounded-full border-2 border-primary text-primary font-semibold px-6 py-3 hover:bg-primary hover:text-white transition-all duration-200">
                  Grow My Business
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-14 bg-blue-50 border border-blue-100 rounded-2xl p-6 lg:p-8 text-center">
            <h3 className="text-lg font-semibold text-primary font-sora">💰 Save 10–15% when you combine 2+ services.</h3>
            <p className="text-sm text-muted mt-2">Final quote depends on your business size and goals — book a free call for exact pricing.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
