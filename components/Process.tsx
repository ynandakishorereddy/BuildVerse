'use client';

import { useInView } from '@/hooks/useInView';

export default function Process() {
  const { ref, isInView } = useInView(0.1);

  const steps = [
    {
      number: '1',
      title: 'Free consultation call',
      description: 'Tell us about your business and goals — no obligation.'
    },
    {
      number: '2',
      title: 'We build & set up',
      description: 'Your chosen services are built and configured.'
    },
    {
      number: '3',
      title: 'You review & launch',
      description: 'Review everything, request changes, then go live.'
    },
    {
      number: '4',
      title: 'Ongoing optimization',
      description: 'Monthly check-ins and improvements for Maps & Ads.'
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref as any} className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.2em] text-link-blue font-medium uppercase mb-3">OUR PROCESS</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-sora">How it works</h2>
          </div>

          {/* Desktop: grid grid-cols-4 gap-0, Mobile: grid grid-cols-1 gap-8 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center group">
                <div className="relative w-full flex justify-center">
                  {/* Connecting line (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-border group-hover:bg-link-blue/30 transition-colors duration-300"></div>
                  )}
                  {/* Numbered circle */}
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mx-auto relative z-10 shadow-md group-hover:scale-110 group-hover:bg-link-blue transition-all duration-300">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary mt-4 text-center font-sora">{step.title}</h3>
                <p className="text-sm text-muted mt-2 text-center max-w-[200px] mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
