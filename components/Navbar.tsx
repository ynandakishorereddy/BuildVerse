'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, FolderOpen, Tag, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-black/5 transition-all duration-300 ${
        isScrolled ? 'shadow-md shadow-black/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo Brand - shrink-0 & clean responsive text */}
          <a href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group min-w-0">
            <Image 
              src="/images/logo-icon.png" 
              alt="BuildVerse" 
              width={48} 
              height={48} 
              className="w-9 h-9 sm:w-11 sm:h-11 object-contain shrink-0 group-hover:scale-105 transition-transform duration-200" 
            />
            <div className="flex flex-col min-w-0">
              <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-primary leading-tight tracking-tight whitespace-nowrap">
                BuildVerse
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-muted leading-tight tracking-wider uppercase whitespace-nowrap">
                Solutions
              </span>
            </div>
          </a>
          
          {/* Desktop Navigation Links - Shown only on lg (1024px) and above */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 shrink-0">
            <a href="/" className="flex items-center gap-1.5 text-xs xl:text-sm font-medium text-primary hover:text-link-blue transition-colors whitespace-nowrap">
              <Home className="w-4 h-4 text-blue-500 shrink-0"/> Home
            </a>
            <a href="/#services" className="flex items-center gap-1.5 text-xs xl:text-sm font-medium text-primary hover:text-link-blue transition-colors whitespace-nowrap">
              <Briefcase className="w-4 h-4 text-orange-500 shrink-0"/> Services
            </a>
            <a href="/#work" className="flex items-center gap-1.5 text-xs xl:text-sm font-medium text-primary hover:text-link-blue transition-colors whitespace-nowrap">
              <FolderOpen className="w-4 h-4 text-purple-500 shrink-0"/> Work
            </a>
            <a href="/#pricing" className="flex items-center gap-1.5 text-xs xl:text-sm font-medium text-primary hover:text-link-blue transition-colors whitespace-nowrap">
              <Tag className="w-4 h-4 text-green-500 shrink-0"/> Pricing
            </a>
            <a href="/blog" className="flex items-center gap-1.5 text-xs xl:text-sm font-medium text-primary hover:text-link-blue transition-colors whitespace-nowrap">
              <MessageSquare className="w-4 h-4 text-indigo-500 shrink-0"/> Blog
            </a>
            <a href="/#contact" className="flex items-center gap-1.5 text-xs xl:text-sm font-medium text-primary hover:text-link-blue transition-colors whitespace-nowrap">
              <MessageSquare className="w-4 h-4 text-red-500 shrink-0"/> Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block shrink-0">
            <a
              id="nav-cta-button"
              href="/#contact"
              className="inline-block rounded-full bg-accent hover:bg-accent-hover text-black text-xs xl:text-sm font-semibold px-4 xl:px-5 py-2 xl:py-2.5 whitespace-nowrap hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(245,166,35,0.4)] transition-all duration-200"
            >
              Start Your Growth
            </a>
          </div>

          {/* Mobile & Tablet Toggle Button - Shown on screens < 1024px */}
          <div className="lg:hidden shrink-0">
            <button
              id="mobile-menu-button"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary hover:text-link-blue p-2 rounded-lg hover:bg-black/5 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (< 1024px) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-t border-black/5 bg-card absolute w-full left-0 shadow-xl shadow-black/10 z-50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 flex flex-col max-w-7xl mx-auto">
              <a id="mobile-nav-link-home" href="/" onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-primary hover:text-link-blue transition-colors py-3 px-3 rounded-xl hover:bg-background">
                <Home className="w-4 h-4 text-blue-500"/> Home
              </a>
              <a id="mobile-nav-link-services" href="/#services" onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-primary hover:text-link-blue transition-colors py-3 px-3 rounded-xl hover:bg-background">
                <Briefcase className="w-4 h-4 text-orange-500"/> Services
              </a>
              <a id="mobile-nav-link-work" href="/#work" onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-primary hover:text-link-blue transition-colors py-3 px-3 rounded-xl hover:bg-background">
                <FolderOpen className="w-4 h-4 text-purple-500"/> Work
              </a>
              <a id="mobile-nav-link-pricing" href="/#pricing" onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-primary hover:text-link-blue transition-colors py-3 px-3 rounded-xl hover:bg-background">
                <Tag className="w-4 h-4 text-green-500"/> Pricing
              </a>
              <a id="mobile-nav-link-blog" href="/blog" onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-primary hover:text-link-blue transition-colors py-3 px-3 rounded-xl hover:bg-background">
                <MessageSquare className="w-4 h-4 text-indigo-500"/> Blog
              </a>
              <a id="mobile-nav-link-contact" href="/#contact" onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-primary hover:text-link-blue transition-colors py-3 px-3 rounded-xl hover:bg-background">
                <MessageSquare className="w-4 h-4 text-red-500"/> Contact
              </a>
              <a
                id="mobile-nav-cta-button"
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block text-center rounded-full bg-accent hover:bg-accent-hover text-black text-sm font-semibold px-5 py-3 hover:scale-[1.02] transition-all duration-200 mt-3 shadow-[0_0_15px_rgba(245,166,35,0.4)]"
              >
                Start Your Growth
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
