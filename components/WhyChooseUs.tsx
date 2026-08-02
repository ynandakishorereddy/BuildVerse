'use client';

import { Eye, Unlock, Users, MapPin } from 'lucide-react';
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

export default function WhyChooseUs() {
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-14">
            <p className="text-sm tracking-[0.2em] text-link-blue font-medium uppercase mb-3">WHY BUILDVERSE</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-sora">Why choose us?</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div variants={itemVariants} key={index} className="text-center p-6 group">
                  <div className="w-14 h-14 rounded-xl bg-card border border-white/5 flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:shadow-md group-hover:border-link-blue/40 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-link-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 font-sora">{reason.title}</h3>
                  <p className="text-sm text-muted">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
