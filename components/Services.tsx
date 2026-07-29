'use client';

import { Globe, MapPin, Megaphone, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function Services() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          ref={ref}
          className={`transition-all duration-700 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-sm tracking-[0.2em] text-link-blue font-medium uppercase mb-3">
              WHAT WE DO
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-sora">
              Three services, one team.
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
              Pick one or combine them. Everything below is a concrete, real deliverable — no vague promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            
            {/* Card 1 - Website Development */}
            <div className={`group bg-background rounded-2xl sm:rounded-3xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {/* Animated visual area */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                {/* Floating browser mockup */}
                <div className="absolute inset-4 sm:inset-6 bg-white rounded-xl shadow-lg border border-border transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-1">
                  {/* Browser bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <div className="ml-2 flex-1 bg-gray-100 rounded-full h-4 px-2 flex items-center">
                      <span className="text-[8px] text-muted truncate">yourbusiness.com</span>
                    </div>
                  </div>
                  {/* Page content mockup */}
                  <div className="p-3">
                    <div className="h-2 w-20 bg-link-blue/30 rounded-full mb-2 group-hover:w-24 transition-all duration-500"></div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1.5"></div>
                    <div className="h-1.5 w-3/4 bg-gray-100 rounded-full mb-3"></div>
                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="h-10 sm:h-14 bg-gradient-to-b from-link-blue/10 to-link-blue/5 rounded group-hover:from-link-blue/20 transition-all duration-500"></div>
                      <div className="h-10 sm:h-14 bg-gradient-to-b from-accent/10 to-accent/5 rounded group-hover:from-accent/20 transition-all duration-500 delay-75"></div>
                      <div className="h-10 sm:h-14 bg-gradient-to-b from-purple-500/10 to-purple-500/5 rounded group-hover:from-purple-500/20 transition-all duration-500 delay-150"></div>
                    </div>
                  </div>
                </div>
                {/* Floating elements that animate on hover */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-link-blue/10 rounded-full group-hover:scale-150 group-hover:bg-link-blue/20 transition-all duration-700"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 bg-accent/20 rounded-full group-hover:scale-125 transition-all duration-500 delay-100"></div>
              </div>
              {/* Card content */}
              <div className="p-5 sm:p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary font-sora">Website Development</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  A fast, mobile-friendly site that turns visitors into calls. Built with modern tech for blazing speed.
                </p>
                <a href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-link-blue hover:text-primary transition-colors group/link">
                  Get Started <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Card 2 - Google Maps SEO */}
            <div className={`group bg-background rounded-2xl sm:rounded-3xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              {/* Animated visual area */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden">
                {/* Map mockup */}
                <div className="absolute inset-0">
                  {/* Grid lines (roads) */}
                  <div className="absolute top-1/4 w-full h-px bg-gray-200"></div>
                  <div className="absolute top-1/2 w-full h-px bg-gray-200"></div>
                  <div className="absolute top-3/4 w-full h-px bg-gray-200"></div>
                  <div className="absolute left-1/4 h-full w-px bg-gray-200"></div>
                  <div className="absolute left-1/2 h-full w-px bg-gray-200"></div>
                  <div className="absolute left-3/4 h-full w-px bg-gray-200"></div>
                  {/* Map blocks */}
                  <div className="absolute top-[15%] left-[10%] w-16 h-10 bg-green-100/80 rounded-sm"></div>
                  <div className="absolute top-[55%] right-[15%] w-20 h-8 bg-green-100/80 rounded-sm"></div>
                  <div className="absolute bottom-[10%] left-[20%] w-12 h-12 bg-blue-50/80 rounded-sm"></div>
                </div>
                {/* Animated pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 w-10 h-10 bg-red-500/30 rounded-full animate-ping"></div>
                  </div>
                  {/* Info popup */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-xl px-3 py-1.5 shadow-xl border border-border whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500">
                    <p className="text-[10px] font-bold text-primary flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Ranked #1 nearby
                    </p>
                  </div>
                </div>
                {/* Other pins */}
                <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-gray-400 rounded-full opacity-40"></div>
                <div className="absolute top-[60%] right-[30%] w-3 h-3 bg-gray-400 rounded-full opacity-40"></div>
                <div className="absolute bottom-[25%] left-[60%] w-3 h-3 bg-gray-400 rounded-full opacity-40"></div>
              </div>
              {/* Card content */}
              <div className="p-5 sm:p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-200 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary font-sora">Google Maps SEO</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Get found when locals search &quot;near me.&quot; We optimize your profile to appear #1 in local results.
                </p>
                <a href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-primary transition-colors group/link">
                  Boost Visibility <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Card 3 - Meta & Google Ads */}
            <div className={`group bg-background rounded-2xl sm:rounded-3xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${isInView ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
              {/* Animated visual area */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
                {/* Notification cards that animate */}
                <div className="absolute inset-4 sm:inset-5 flex flex-col gap-2.5 justify-center">
                  <div className="flex items-center gap-3 bg-white rounded-xl p-2.5 sm:p-3 shadow-sm border border-border group-hover:translate-x-1 transition-transform duration-500">
                    <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-xs shrink-0">f</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary">12 new leads <span className="text-muted font-normal">• 2h ago</span></p>
                      <p className="text-[9px] sm:text-[10px] text-muted truncate">From Facebook campaign</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-2.5 sm:p-3 shadow-sm border border-border group-hover:translate-x-2 transition-transform duration-500 delay-75">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-[9px] shrink-0">IG</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary">8 enquiries <span className="text-muted font-normal">• 5h ago</span></p>
                      <p className="text-[9px] sm:text-[10px] text-muted truncate">Instagram story ad</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-2.5 sm:p-3 shadow-sm border border-border group-hover:translate-x-3 transition-transform duration-500 delay-150">
                    <div className="w-8 h-8 rounded-full bg-[#4285F4] flex items-center justify-center text-white font-bold text-[9px] shrink-0">G</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary">24 clicks <span className="text-muted font-normal">• today</span></p>
                      <p className="text-[9px] sm:text-[10px] text-muted truncate">Google Search Ads</p>
                    </div>
                  </div>
                </div>
                {/* Floating decorative elements */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-purple-200/50 rounded-full group-hover:scale-150 transition-all duration-700"></div>
                <div className="absolute bottom-4 left-4 w-5 h-5 bg-pink-200/50 rounded-full group-hover:scale-125 transition-all duration-500 delay-100"></div>
              </div>
              {/* Card content */}
              <div className="p-5 sm:p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-200 transition-all duration-300">
                    <Megaphone className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary font-sora">Google & Meta Ads</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Targeted ads that bring in real enquiries, not just clicks. Campaigns that deliver measurable ROI.
                </p>
                <a href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-primary transition-colors group/link">
                  Launch Ads <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          <p className="text-xs text-muted text-center mt-8 sm:mt-10 max-w-2xl mx-auto">
            Industry research shows that most consumers search online before visiting a local business. The services above are designed to capitalize on this consumer behavior.
          </p>
        </div>
        
      </div>
    </section>
  );
}
