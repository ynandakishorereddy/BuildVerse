'use client';

import { useState, useEffect } from 'react';
import { BarChart3, Menu, X } from 'lucide-react';

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
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
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
            <a href="#" className="text-sm font-medium text-primary hover:text-link-blue transition-colors">Home</a>
            <a href="#services" className="text-sm font-medium text-primary hover:text-link-blue transition-colors">Services</a>
            <a href="#work" className="text-sm font-medium text-primary hover:text-link-blue transition-colors">Work</a>
            <a href="#pricing" className="text-sm font-medium text-primary hover:text-link-blue transition-colors">Pricing</a>
            <a href="#contact" className="text-sm font-medium text-primary hover:text-link-blue transition-colors">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a
              id="nav-cta-button"
              href="#contact"
              className="inline-block rounded-full bg-accent hover:bg-accent-hover text-primary text-sm font-semibold px-5 py-2.5 hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
            >
              Get a Free Quote
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
        <div className="md:hidden border-t border-border bg-white absolute w-full left-0 shadow-lg">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            <a
              id="mobile-nav-link-home"
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-primary hover:text-link-blue transition-colors"
            >
              Home
            </a>
            <a
              id="mobile-nav-link-services"
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-primary hover:text-link-blue transition-colors"
            >
              Services
            </a>
            <a
              id="mobile-nav-link-pricing"
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-primary hover:text-link-blue transition-colors"
            >
              Pricing
            </a>
            <a
              id="mobile-nav-link-contact"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-primary hover:text-link-blue transition-colors"
            >
              Contact
            </a>
            <a
              id="mobile-nav-cta-button"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block text-center rounded-full bg-accent hover:bg-accent-hover text-primary text-sm font-semibold px-5 py-3 hover:scale-[1.02] transition-all duration-200 mt-4"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
