'use client';

import { useInView } from '@/hooks/useInView';

export default function SampleWork() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="work" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          ref={ref}
          className={`transition-all duration-700 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-sm tracking-[0.15em] text-link-blue font-medium uppercase mb-3">
            SAMPLE WEBSITE CONCEPTS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            See the quality of our work.
          </h2>
          <p className="text-lg text-muted max-w-3xl mb-14">
            We're a new agency, so these are concept and demo layouts we've designed — not real client results. They show the standard you can expect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="bg-[#1E293B] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#EAB308]"></div>
                <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
                <div className="ml-3 flex-1 bg-[#334155] rounded-full px-3 py-1 text-xs text-[#94A3B8] truncate">
                  restaurant-demo.buildverse.in
                </div>
              </div>
              <div className="h-1.5 w-full bg-[#EF6C35]"></div>
              <div className="p-6">
                <p className="text-xs tracking-[0.15em] font-medium uppercase mb-3 text-[#EF6C35]">
                  CONCEPT · RESTAURANT
                </p>
                <h3 className="text-xl font-bold text-primary mb-3">Spice Route Kitchen</h3>
                <div className="h-3 rounded-full bg-gray-200 w-full mb-2"></div>
                <div className="h-3 rounded-full bg-gray-200 w-3/4 mb-5"></div>
                <div className="inline-block rounded-full bg-accent px-4 py-2 text-xs font-semibold text-primary mb-5">
                  View Menu
                </div>
                <div className="flex gap-3">
                  <div className="h-16 bg-gray-100 rounded-lg flex-1"></div>
                  <div className="h-16 bg-gray-100 rounded-lg flex-1"></div>
                  <div className="h-16 bg-gray-100 rounded-lg flex-1"></div>
                </div>
              </div>
              <div className="text-sm text-muted font-medium text-center py-4 border-t border-border/50">
                Restaurant Website Concept
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="bg-[#1E293B] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#EAB308]"></div>
                <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
                <div className="ml-3 flex-1 bg-[#334155] rounded-full px-3 py-1 text-xs text-[#94A3B8] truncate">
                  clinic-demo.buildverse.in
                </div>
              </div>
              <div className="h-1.5 w-full bg-[#14B8A6]"></div>
              <div className="p-6">
                <p className="text-xs tracking-[0.15em] font-medium uppercase mb-3 text-[#14B8A6]">
                  CONCEPT · HEALTHCARE
                </p>
                <h3 className="text-xl font-bold text-primary mb-3">CityCare Dental</h3>
                <div className="h-3 rounded-full bg-gray-200 w-full mb-2"></div>
                <div className="h-3 rounded-full bg-gray-200 w-3/4 mb-5"></div>
                <div className="inline-block rounded-full bg-accent px-4 py-2 text-xs font-semibold text-primary mb-5">
                  Book Now
                </div>
                <div className="flex gap-3">
                  <div className="h-16 bg-gray-100 rounded-lg flex-1"></div>
                  <div className="h-16 bg-gray-100 rounded-lg flex-1"></div>
                  <div className="h-16 bg-gray-100 rounded-lg flex-1"></div>
                </div>
              </div>
              <div className="text-sm text-muted font-medium text-center py-4 border-t border-border/50">
                Clinic Website Concept
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="bg-[#1E293B] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#EAB308]"></div>
                <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
                <div className="ml-3 flex-1 bg-[#334155] rounded-full px-3 py-1 text-xs text-[#94A3B8] truncate">
                  retail-demo.buildverse.in
                </div>
              </div>
              <div className="h-1.5 w-full bg-[#8B5CF6]"></div>
              <div className="p-6">
                <p className="text-xs tracking-[0.15em] font-medium uppercase mb-3 text-[#8B5CF6]">
                  CONCEPT · RETAIL
                </p>
                <h3 className="text-xl font-bold text-primary mb-3">Urban Threads Store</h3>
                <div className="h-3 rounded-full bg-gray-200 w-full mb-2"></div>
                <div className="h-3 rounded-full bg-gray-200 w-3/4 mb-5"></div>
                <div className="inline-block rounded-full bg-accent px-4 py-2 text-xs font-semibold text-primary mb-5">
                  Shop Now
                </div>
                <div className="flex gap-3">
                  <div className="h-16 bg-gray-100 rounded-lg flex-1"></div>
                  <div className="h-16 bg-gray-100 rounded-lg flex-1"></div>
                  <div className="h-16 bg-gray-100 rounded-lg flex-1"></div>
                </div>
              </div>
              <div className="text-sm text-muted font-medium text-center py-4 border-t border-border/50">
                Retail Store Concept
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
