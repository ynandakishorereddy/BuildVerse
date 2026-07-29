'use client';

import { useState, useEffect } from 'react';
import { BarChart3, Menu, X, Home, Briefcase, FolderOpen, Tag, MessageSquare } from 'lucide-react';

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
      className={`sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-black/5 transition-all duration-300 ${
        isScrolled ? 'shadow-md shadow-black/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <BarChart3 className="text-accent w-7 h-7" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">BuildVerse</span>
              <span className="text-xs text-muted leading-tight">Solutions</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-link-blue transition-colors"><Home className="w-4 h-4 text-blue-500"/> Home</a>
            <a href="/#services" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-link-blue transition-colors"><Briefcase className="w-4 h-4 text-orange-500"/> Services</a>
            <a href="/#work" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-link-blue transition-colors"><FolderOpen className="w-4 h-4 text-purple-500"/> Work</a>
            <a href="/#pricing" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-link-blue transition-colors"><Tag className="w-4 h-4 text-green-500"/> Pricing</a>
            <a href="/blog" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-link-blue transition-colors"><MessageSquare className="w-4 h-4 text-indigo-500"/> Blog</a>
            <a href="/#contact" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-link-blue transition-colors"><MessageSquare className="w-4 h-4 text-red-500"/> Contact</a>
          </nav>

          <div className="hidden md:block">
            <a
              id="nav-cta-button"
              href="/#contact"
              className="inline-block rounded-full bg-accent hover:bg-accent-hover text-black text-sm font-semibold px-5 py-2.5 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(245,166,35,0.4)] transition-all duration-200"
            >
              Start Your Growth
            </a>
          </div>

          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary hover:text-link-blue p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-card absolute w-full left-0 shadow-xl shadow-black/10">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            <a
              id="mobile-nav-link-home"
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-link-blue transition-colors"
            >
              <Home className="w-4 h-4 text-blue-500"/> Home
            </a>
            <a
              id="mobile-nav-link-services"
              href="/#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-link-blue transition-colors"
            >
              <Briefcase className="w-4 h-4 text-orange-500"/> Services
            </a>
            <a
              id="mobile-nav-link-work"
              href="/#work"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-link-blue transition-colors"
            >
              <FolderOpen className="w-4 h-4 text-purple-500"/> Work
            </a>
            <a
              id="mobile-nav-link-pricing"
              href="/#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-link-blue transition-colors"
            >
              <Tag className="w-4 h-4 text-green-500"/> Pricing
            </a>
            <a
              id="mobile-nav-link-blog"
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-link-blue transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-indigo-500"/> Blog
            </a>
            <a
              id="mobile-nav-link-contact"
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-link-blue transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-red-500"/> Contact
            </a>
            <a
              id="mobile-nav-cta-button"
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block text-center rounded-full bg-accent hover:bg-accent-hover text-black text-sm font-semibold px-5 py-3 hover:scale-[1.02] transition-all duration-200 mt-4 shadow-[0_0_15px_rgba(245,166,35,0.4)]"
            >
              Start Your Growth
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
