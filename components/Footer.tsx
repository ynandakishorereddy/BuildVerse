import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-black/5 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo-icon.png" alt="BuildVerse" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold font-sora leading-tight">BuildVerse</span>
                <span className="text-[11px] sm:text-xs font-semibold text-white/60 font-sora leading-tight tracking-wider uppercase">Solutions</span>
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
                <a href="/#services" className="text-sm text-white/70 hover:text-accent transition-colors">Website Development</a>
              </li>
              <li className="mb-3">
                <a href="/#services" className="text-sm text-white/70 hover:text-accent transition-colors">Google Maps Setup</a>
              </li>
              <li className="mb-3">
                <a href="/#services" className="text-sm text-white/70 hover:text-accent transition-colors">Meta Ads Management</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4 font-sora">Company</h4>
            <ul className="flex flex-col">
              <li className="mb-3">
                <a href="/#about" className="text-sm text-white/70 hover:text-accent transition-colors">About Us</a>
              </li>
              <li className="mb-3">
                <a href="/#process" className="text-sm text-white/70 hover:text-accent transition-colors">Our Process</a>
              </li>
              <li className="mb-3">
                <a href="/#pricing" className="text-sm text-white/70 hover:text-accent transition-colors">Pricing</a>
              </li>
              <li className="mb-3">
                <a href="/blog" className="text-sm text-white/70 hover:text-accent transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4 font-sora">Connect</h4>
            <ul className="flex flex-col">
              <li className="mb-3">
                <a href="tel:+918374424565" className="text-sm text-white/70 hover:text-accent transition-colors">
                  +91 83744 24565
                </a>
              </li>
              <li className="mb-3">
                <a href="mailto:buildversesolutions@gmail.com" className="text-sm text-white/70 hover:text-accent transition-colors break-all">
                  buildversesolutions@gmail.com
                </a>
              </li>
              <li className="mb-3">
                <a href="https://www.youtube.com/@buildversesolutions.i" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#FF0000] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-white/40">
            © 2026 BuildVerse Solutions. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-white/40">
            Made with purpose for local businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
