'use client';

import { motion, Variants } from 'framer-motion';

export default function Process() {
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="process" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-14">
            <p className="text-sm tracking-[0.2em] text-link-blue font-medium uppercase mb-3">OUR PROCESS</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-sora">How it works</h2>
          </motion.div>

          <div className="relative max-w-6xl mx-auto mt-16">
            {/* Horizontal Line with Moving Animation (Desktop Only) */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 right-0 h-0.5 bg-black/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: "400%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-link-blue to-transparent"
              ></motion.div>
            </div>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
              {steps.map((step, index) => {
                const isUp = index % 2 === 0;
                return (
                  <motion.div variants={itemVariants} key={index} className="relative flex flex-col md:h-[400px] items-center group">
                    {/* Circle Container */}
                    <div className="w-12 h-12 rounded-full bg-card border-2 border-accent text-accent font-bold text-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,166,35,0.2)] group-hover:bg-accent group-hover:text-black group-hover:scale-110 transition-all duration-300 z-10 mb-6 md:mb-0 md:absolute md:top-1/2 md:-translate-y-1/2">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className={`w-full bg-card border border-black/5 p-6 rounded-2xl shadow-sm group-hover:shadow-[0_10px_40px_rgba(59,95,224,0.1)] transition-all duration-300 text-center flex flex-col md:absolute md:left-0 md:right-0 md:w-auto ${
                      isUp 
                        ? 'md:bottom-[calc(50%+40px)] md:group-hover:-translate-y-2' 
                        : 'md:top-[calc(50%+40px)] md:group-hover:translate-y-2'
                    }`}>
                      <h3 className="text-lg font-bold text-primary font-sora mb-3">{step.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
