import { BarChart3 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="text-accent w-7 h-7" />
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold font-sora">BuildVerse</span>
                <span className="text-xs text-white/50 font-sora">Solutions</span>
              </div>
            </div>
            <p className="text-sm text-white/60 mt-4 max-w-xs">
              Get found. Get called. Get customers.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4 font-sora">Services</h4>
            <ul className="flex flex-col">
              <li className="mb-3">
                <a href="#pricing" className="text-sm text-white/70 hover:text-accent transition-colors">Website Development</a>
              </li>
              <li className="mb-3">
                <a href="#pricing" className="text-sm text-white/70 hover:text-accent transition-colors">Google Maps Setup</a>
              </li>
              <li className="mb-3">
                <a href="#pricing" className="text-sm text-white/70 hover:text-accent transition-colors">Meta Ads Management</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4 font-sora">Company</h4>
            <ul className="flex flex-col">
              <li className="mb-3">
                <a href="#about" className="text-sm text-white/70 hover:text-accent transition-colors">About Us</a>
              </li>
              <li className="mb-3">
                <a href="#process" className="text-sm text-white/70 hover:text-accent transition-colors">Our Process</a>
              </li>
              <li className="mb-3">
                <a href="#pricing" className="text-sm text-white/70 hover:text-accent transition-colors">Pricing</a>
              </li>
              <li className="mb-3 mt-4 text-sm text-white/50 font-semibold uppercase">
                Contact Us
              </li>
              <li className="mb-2">
                <a href="tel:+918374424565" className="text-sm text-white/70 hover:text-accent transition-colors">
                  +91 83744 24565
                </a>
              </li>
              <li className="mb-3">
                <a href="mailto:buildversesolutins@gmail.com" className="text-sm text-white/70 hover:text-accent transition-colors break-all">
                  buildversesolutins@gmail.com
                </a>
              </li>            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © 2026 BuildVerse Solutions. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Made with purpose for local businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
