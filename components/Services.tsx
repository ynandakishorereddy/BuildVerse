'use client';

import { Globe, MapPin, Megaphone, ArrowRight, TrendingUp, Star, Users } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function Services() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-background">
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
              What do we offer?
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
              Pick one or combine them. Everything below is a concrete, real deliverable — no vague promises.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-auto">
            
            {/* Card 1 - Website Development (Large) */}
            <div className={`sm:col-span-1 lg:row-span-2 bg-[#0F172A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {/* Decorative mockup */}
              <div className="relative w-full h-40 sm:h-52 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                <div className="absolute inset-3 sm:inset-4 bg-white/5 backdrop-blur rounded-lg border border-white/10 p-3 sm:p-4">
                  <div className="h-2 w-16 bg-link-blue/60 rounded-full mb-3"></div>
                  <div className="h-2 w-24 bg-white/20 rounded-full mb-2"></div>
                  <div className="h-2 w-20 bg-white/15 rounded-full mb-4"></div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-12 sm:h-16 bg-gradient-to-b from-link-blue/30 to-link-blue/10 rounded-md"></div>
                    <div className="h-12 sm:h-16 bg-gradient-to-b from-accent/30 to-accent/10 rounded-md"></div>
                    <div className="h-12 sm:h-16 bg-gradient-to-b from-white/15 to-white/5 rounded-md"></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-link-blue/20 rounded-full blur-xl"></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-link-blue/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-link-blue" />
                </div>
                <h3 className="text-xl font-bold text-white font-sora">Web Development</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Build fast, modern, and responsive websites tailored to your business goals. Mobile-first design that turns visitors into customers.
              </p>
              <a href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-link-blue hover:text-white transition-colors group/link">
                Get Started <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card 2 - Google Maps (Medium with map mockup) */}
            <div className={`bg-[#0F172A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              {/* Map mockup */}
              <div className="relative w-full h-32 sm:h-36 mb-5 rounded-xl overflow-hidden bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 animate-pulse">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-lg px-2.5 py-1 shadow-xl whitespace-nowrap">
                      <p className="text-[10px] font-bold text-primary">Ranked #1</p>
                    </div>
                  </div>
                </div>
                {/* Map grid lines */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/3 w-full h-px bg-white"></div>
                  <div className="absolute top-2/3 w-full h-px bg-white"></div>
                  <div className="absolute left-1/3 h-full w-px bg-white"></div>
                  <div className="absolute left-2/3 h-full w-px bg-white"></div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white font-sora">Google Maps SEO</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Get found when locals search &quot;near me.&quot; We optimize your Google Business Profile to rank #1.
              </p>
            </div>

            {/* Card 3 - SEO (with stats) */}
            <div className={`bg-[#0F172A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${isInView ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
              {/* Decorative globe/wave */}
              <div className="relative w-full h-28 sm:h-32 mb-5 rounded-xl overflow-hidden bg-gradient-to-br from-accent/20 to-orange-900/20 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-extrabold text-accent font-sora">97%</p>
                  <p className="text-[10px] sm:text-xs text-white/50 mt-1">of consumers search online<br/>before visiting locally</p>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white font-sora">SEO Optimization</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Improve your online visibility with smart SEO techniques and keyword strategies that bring organic traffic.
              </p>
            </div>

            {/* Card 4 - App/Product Debugging (Small) */}
            <div className={`bg-[#1E293B] rounded-2xl sm:rounded-3xl p-6 sm:p-8 group hover:shadow-2xl transition-all duration-500 ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white font-sora">Brand Identity</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                We craft compelling logos, colors, and brand guidelines that make your business look professional and trustworthy.
              </p>
            </div>

            {/* Card 5 - Meta Ads (Medium with social proof) */}
            <div className={`bg-[#0F172A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${isInView ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
              {/* Social proof mockup */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-xs shrink-0">f</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white">12+ new leads <span className="text-white/40 font-normal">• 2h ago</span></p>
                    <p className="text-[10px] text-white/40 truncate">From your Meta Ads campaign</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs shrink-0">ig</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white">8+ enquiries <span className="text-white/40 font-normal">• 5h ago</span></p>
                    <p className="text-[10px] text-white/40 truncate">Instagram story ad performing well</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white">18+ messages <span className="text-white/40 font-normal">• today</span></p>
                    <p className="text-[10px] text-white/40 truncate">WhatsApp enquiries from ads</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Megaphone className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white font-sora">Meta & Google Ads</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Drive growth through engaging digital campaigns and performance marketing that bring real enquiries.
              </p>
              <a href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors group/link">
                Launch Campaigns <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card 6 - Social Media (Small) */}
            <div className={`bg-[#1E293B] rounded-2xl sm:rounded-3xl p-6 sm:p-8 group hover:shadow-2xl transition-all duration-500 ${isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-lg font-bold text-white font-sora">Social Media</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                We manage your social media presence to build community, increase brand awareness, and drive engagement.
              </p>
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
