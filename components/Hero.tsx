'use client';

import Image from 'next/image';
import { Shield, MapPin, TrendingUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const textVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15
    }
  }
};

const floatAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  return (
    <section className="bg-background pt-3 sm:pt-5 pb-12 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 sm:pt-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={textVariant} className="text-sm tracking-[0.2em] text-link-blue font-medium uppercase mb-6">
              WEBSITES · GOOGLE MAPS · GOOGLE &amp; META ADS FOR LOCAL BUSINESSES
            </motion.p>
            <motion.h1 variants={textVariant} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
              <span className="block">Get found.</span>
              <span className="block">Get called.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-link-blue drop-shadow-sm">Get customers.</span>
            </motion.h1>
            <motion.p variants={textVariant} className="text-lg lg:text-xl text-muted max-w-lg mt-6 mb-8 leading-relaxed">
              We build your website, get you ranking on Google Maps, and run Google &amp; Meta Ads that bring in real customers — all managed by one team.
            </motion.p>
            <motion.div variants={textVariant} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                id="hero-cta-primary"
                className="rounded-full bg-accent hover:bg-accent-hover text-black font-semibold px-8 py-4 text-lg text-center hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(245,166,35,0.4)] transition-all duration-200"
              >
                Start Your Growth
              </a>
              <a
                href="#process"
                id="hero-cta-secondary"
                className="rounded-full border-2 border-primary text-primary font-semibold px-8 py-4 text-lg text-center hover:bg-black/5 hover:scale-[1.02] transition-all duration-200"
              >
                See Our Process
              </a>
            </motion.div>
            <motion.div variants={textVariant} className="flex items-center gap-2 text-sm text-muted mt-6">
              <Shield className="w-4 h-4 shrink-0" />
              <span>New agency, transparent pricing, no long-term lock-in contracts.</span>
            </motion.div>
          </motion.div>

          {/* Right side: Generated illustration with floating animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-lg mx-auto"
          >
            <motion.div variants={floatAnimation} initial="initial" animate="animate">
              <Image
                src="/images/hero-illustration.jpg"
                alt="Local business with digital marketing - websites, Google Maps, and social media ads"
                width={800}
                height={450}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating Google Maps card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
              viewport={{ once: true }}
              className="absolute top-4 right-0 lg:-right-4 bg-white/90 backdrop-blur-xl border border-black/5 rounded-xl shadow-2xl shadow-black/10 p-3 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div>
                <div className="text-xs text-muted">Google Maps</div>
                <div className="text-sm font-bold text-primary">Ranked #1 nearby</div>
              </div>
              <MapPin className="w-4 h-4 text-link-blue" />
            </motion.div>

            {/* Floating Ads card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 80 }}
              viewport={{ once: true }}
              className="absolute bottom-8 -left-4 lg:-left-8 bg-white/90 backdrop-blur-xl border border-black/5 rounded-xl shadow-2xl shadow-black/10 p-3 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <div>
                <div className="text-xs text-muted">Google &amp; Meta Ads</div>
                <div className="text-sm font-bold text-primary">New enquiries</div>
              </div>
              <TrendingUp className="w-4 h-4 text-accent" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
