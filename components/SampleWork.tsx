'use client';

import { ExternalLink } from 'lucide-react';
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

export default function SampleWork() {
  return (
    <section id="work" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={itemVariants} className="text-sm tracking-[0.15em] text-link-blue font-medium uppercase mb-3">
            OUR PORTFOLIO
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Real projects, real results.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted max-w-3xl mb-14">
            Here are websites we&apos;ve built for real local businesses. Click to visit the live sites and see the quality for yourself.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {/* Card 1 - Srirasthu Convention Hall (REAL) */}
            <motion.a variants={itemVariants} whileHover={{ y: -5 }} href="https://srivasthu-convention-hall.vercel.app/" target="_blank" rel="noopener noreferrer" className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-black/5">
              <div className="bg-[#1E293B] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#EAB308]"></div>
                <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
                <div className="ml-3 flex-1 bg-[#334155] rounded-full px-3 py-1 text-xs text-[#94A3B8] truncate">
                  srivasthu-convention-hall.vercel.app
                </div>
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-[#8B1A1A] to-[#D4A853]"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs tracking-[0.15em] font-bold uppercase text-[#8B1A1A]">
                    ✅ LIVE · EVENT VENUE
                  </p>
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-link-blue transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Srirasthu A/C Banquet Hall</h3>
                <p className="text-sm text-muted mb-4">Premium wedding & function hall in Kodad, Telangana. Features gallery, testimonials, FAQ, booking process, and Google Maps integration.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#8B1A1A]/10 text-[#8B1A1A] px-2.5 py-1 rounded-full font-medium">Weddings</span>
                  <span className="text-xs bg-[#D4A853]/20 text-[#8B1A1A] px-2.5 py-1 rounded-full font-medium">Events</span>
                  <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-medium">SEO</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span>⭐ 4.2 Google Rating</span>
                  <span>💒 50+ Weddings</span>
                </div>
              </div>
              <div className="text-sm text-link-blue font-semibold text-center py-4 border-t border-border/50 group-hover:bg-link-blue/5 transition-colors">
                Visit Live Site →
              </div>
            </motion.a>

            {/* Card 2 - The Empire Unisex Saloon (REAL) */}
            <motion.a variants={itemVariants} whileHover={{ y: -5 }} href="https://the-empire-unisex-saloon.vercel.app/" target="_blank" rel="noopener noreferrer" className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-black/5">
              <div className="bg-[#1E293B] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#EAB308]"></div>
                <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
                <div className="ml-3 flex-1 bg-[#334155] rounded-full px-3 py-1 text-xs text-[#94A3B8] truncate">
                  the-empire-unisex-saloon.vercel.app
                </div>
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-[#1a1a2e] to-[#c9a84c]"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs tracking-[0.15em] font-bold uppercase text-[#1a1a2e]">
                    ✅ LIVE · BEAUTY SALON
                  </p>
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-link-blue transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">The Empire Unisex Saloon</h3>
                <p className="text-sm text-muted mb-4">Premium hair & beauty salon in Kodad with 20+ services, bridal makeup showcase, filterable service categories, gallery, and WhatsApp booking.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#1a1a2e]/10 text-[#1a1a2e] px-2.5 py-1 rounded-full font-medium">Hair & Beauty</span>
                  <span className="text-xs bg-[#c9a84c]/20 text-[#1a1a2e] px-2.5 py-1 rounded-full font-medium">Bridal</span>
                  <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-medium">SEO</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span>⭐ 5.0 Rating</span>
                  <span>💇 8+ Years Experience</span>
                </div>
              </div>
              <div className="text-sm text-link-blue font-semibold text-center py-4 border-t border-border/50 group-hover:bg-link-blue/5 transition-colors">
                Visit Live Site →
              </div>
            </motion.a>

            {/* Card 3 - SVS Consultants (REAL) */}
            <motion.a variants={itemVariants} whileHover={{ y: -5 }} href="https://svs-consultancy.vercel.app/" target="_blank" rel="noopener noreferrer" className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-black/5">
              <div className="bg-[#1E293B] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#EAB308]"></div>
                <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
                <div className="ml-3 flex-1 bg-[#334155] rounded-full px-3 py-1 text-xs text-[#94A3B8] truncate">
                  svs-consultancy.vercel.app
                </div>
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-[#1E3A8A] to-[#EA580C]"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs tracking-[0.15em] font-bold uppercase text-[#1E3A8A]">
                    ✅ LIVE · TAX &amp; BUSINESS CONSULTANCY
                  </p>
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-link-blue transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">SVS Consultants</h3>
                <p className="text-sm text-muted mb-4">Professional Income Tax, GST, Audit, Accounts Maintenance &amp; Business Licensing firm in Hayathnagar, Telangana with online consultation booking.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#1E3A8A]/10 text-[#1E3A8A] px-2.5 py-1 rounded-full font-medium">Tax &amp; GST</span>
                  <span className="text-xs bg-[#EA580C]/15 text-[#C2410C] px-2.5 py-1 rounded-full font-medium">Licensing</span>
                  <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-medium">SEO</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span>⭐ 10+ Years Trust</span>
                  <span>📊 500+ Clients</span>
                </div>
              </div>
              <div className="text-sm text-link-blue font-semibold text-center py-4 border-t border-border/50 group-hover:bg-link-blue/5 transition-colors">
                Visit Live Site →
              </div>
            </motion.a>

            {/* Card 4 - Concept placeholder */}
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-card rounded-2xl overflow-hidden shadow-md border border-black/5 relative hover:shadow-xl transition-shadow">
              <div className="bg-[#1E293B] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#EAB308]"></div>
                <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
                <div className="ml-3 flex-1 bg-[#334155] rounded-full px-3 py-1 text-xs text-[#94A3B8] truncate">
                  your-business.buildverse.in
                </div>
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-accent to-link-blue"></div>
              <div className="p-6 flex flex-col items-center justify-center min-h-[260px] text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Your Business Here?</h3>
                <p className="text-sm text-muted mb-5 max-w-xs">
                  We&apos;re building websites for local businesses just like yours. Let&apos;s make your business the next success story.
                </p>
                <a href="#contact" className="inline-block rounded-full bg-accent hover:bg-accent-hover text-black font-semibold px-6 py-2.5 text-sm hover:scale-[1.02] transition-all duration-200">
                  Start Your Growth
                </a>
              </div>
              <div className="text-sm text-muted font-medium text-center py-4 border-t border-border/50">
                Your next project
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
