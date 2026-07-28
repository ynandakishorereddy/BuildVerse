'use client';

import { useInView } from '@/hooks/useInView';
import { Target, Heart, TrendingUp } from 'lucide-react';

export default function About() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Text */}
            <div>
              <p className="text-sm tracking-[0.2em] text-link-blue font-medium uppercase mb-4">ABOUT US</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-sora">
                We exist to help local businesses thrive online.
              </h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                Most web agencies overcharge and underdeliver. They build a pretty website and then disappear. But a website alone doesn't bring customers—visibility does.
              </p>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                That's why we started BuildVerse Solutions. We don't just build sites; we build <strong>growth systems</strong>. Whether you run a bakery, a salon, or a clinic, our goal is simple: get you found on Google Maps, run ads that work, and turn local searches into foot traffic and phone calls.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex flex-shrink-0 items-center justify-center">
                    <Heart className="w-5 h-5 text-accent-hover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm mb-1">Local Focus</h4>
                    <p className="text-xs text-muted">We understand local markets.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-link-blue/10 flex flex-shrink-0 items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-link-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm mb-1">ROI Driven</h4>
                    <p className="text-xs text-muted">We focus on calls & customers.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side: Graphic */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-link-blue/20 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="bg-primary rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-link-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30 -ml-20 -mb-20"></div>
                
                <div className="relative z-10 text-center">
                  <Target className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white font-sora mb-4">Our Mission</h3>
                  <p className="text-white/80 text-lg">
                    To make enterprise-level digital marketing accessible and affordable for everyday local businesses.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
