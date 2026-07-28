'use client';

import { Eye, Unlock, Users, MapPin } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function WhyChooseUs() {
  const { ref, isInView } = useInView(0.1);

  const reasons = [
    {
      icon: Eye,
      title: 'Transparent Pricing',
      description: 'Real numbers upfront, no hidden fees or vague "contact us" quotes.'
    },
    {
      icon: Unlock,
      title: 'No Lock-In Contracts',
      description: 'Leave anytime. We earn your business every month.'
    },
    {
      icon: Users,
      title: 'One Team, Three Services',
      description: 'No juggling separate vendors for web, SEO, and ads.'
    },
    {
      icon: MapPin,
      title: 'Built for Local Businesses',
      description: 'Every service designed around getting local customers to call, not vanity metrics.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.2em] text-link-blue font-medium uppercase mb-3">WHY BUILDVERSE</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-sora">Why choose us?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="text-center p-6 group">
                  <div className="w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:shadow-md group-hover:border-link-blue/40 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-link-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 font-sora">{reason.title}</h3>
                  <p className="text-sm text-muted">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
