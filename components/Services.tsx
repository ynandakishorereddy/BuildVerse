'use client';

import { Globe, MapPin, Megaphone, BarChart3 } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function Services() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          ref={ref}
          className={`transition-all duration-700 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm tracking-[0.2em] text-link-blue font-medium uppercase mb-3">
            WHAT WE DO
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Three services, one team.
          </h2>
          <p className="text-lg text-muted max-w-2xl mb-14">
            Pick one or combine them. Everything below is a concrete, real deliverable — no vague promises.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className={`bg-background rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border group ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-primary">Website Development</h3>
                <BarChart3 className="w-4 h-4 text-accent" />
              </div>
              <p className="text-muted mt-3">
                A fast, mobile-friendly site that turns visitors into calls.
              </p>
            </div>

            <div className={`bg-background rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border group ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-primary">Google Maps Setup</h3>
                <BarChart3 className="w-4 h-4 text-accent" />
              </div>
              <p className="text-muted mt-3">
                Get found when locals search &quot;near me.&quot;
              </p>
            </div>

            <div className={`bg-background rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border group ${isInView ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-primary">Google & Meta Ads</h3>
                <BarChart3 className="w-4 h-4 text-accent" />
              </div>
              <p className="text-muted mt-3">
                Targeted ads that bring in real enquiries, not just clicks.
              </p>
            </div>

          </div>

          <p className="text-xs text-muted text-center mt-10 max-w-2xl mx-auto">
            Industry research shows that most consumers search online before visiting a local business. The services above are designed to capitalize on this consumer behavior.
          </p>
        </div>
        
      </div>
    </section>
  );
}
