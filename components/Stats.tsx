'use client';

import { useCountUp } from '@/hooks/useCountUp';
import { BarChart3, Star, Users, Briefcase } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: 2, suffix: '+', label: 'Projects Delivered', color: 'text-accent' },
  { icon: Star, value: 4.6, suffix: '', label: 'Avg. Google Rating', color: 'text-yellow-500' },
  { icon: Users, value: 2, suffix: '+', label: 'Happy Clients', color: 'text-link-blue' },
  { icon: BarChart3, value: 3, suffix: '', label: 'Services Offered', color: 'text-green-500' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-link-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  color,
  delay,
}: {
  icon: typeof Briefcase;
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
}) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div
      ref={ref}
      className="text-center group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-7 h-7 ${color}`} />
      </div>
      <div className="text-4xl lg:text-5xl font-extrabold text-white font-sora mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/60 font-medium">{label}</div>
    </div>
  );
}
