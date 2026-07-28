import { Shield, MapPin, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div>
            <p className="text-sm tracking-[0.2em] text-link-blue font-medium uppercase mb-6">
              WEBSITES · GOOGLE MAPS · GOOGLE & META ADS FOR LOCAL BUSINESSES
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
              <span className="block">Get found.</span>
              <span className="block">Get called.</span>
              <span className="block text-link-blue">Get customers.</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted max-w-lg mt-6 mb-8 leading-relaxed">
              We build your website, get you ranking on Google Maps, and run Google & Meta Ads that bring in real customers — all managed by one team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                id="hero-cta-primary"
                className="rounded-full bg-accent hover:bg-accent-hover text-primary font-semibold px-8 py-4 text-lg text-center hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
              >
                Get a Free Quote
              </a>
              <a
                href="#process"
                id="hero-cta-secondary"
                className="rounded-full border-2 border-primary text-primary font-semibold px-8 py-4 text-lg text-center hover:bg-primary hover:text-white hover:scale-[1.02] transition-all duration-200"
              >
                See Our Process
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted mt-6">
              <Shield className="w-4 h-4 shrink-0" />
              <span>New agency, transparent pricing, no long-term lock-in contracts.</span>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto aspect-square">
            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary/5 to-link-blue/5 p-8 flex items-end justify-center gap-6 relative">
              <div className="w-16 lg:w-20 rounded-t-xl bg-gradient-to-t from-primary to-primary/80" style={{ height: '40%' }}></div>
              <div className="w-16 lg:w-20 rounded-t-xl bg-gradient-to-t from-primary to-link-blue/80" style={{ height: '65%' }}></div>
              <div className="w-16 lg:w-20 rounded-t-xl bg-gradient-to-t from-link-blue to-link-blue/80" style={{ height: '90%' }}></div>
              
              <div className="absolute top-4 right-0 lg:-right-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div>
                  <div className="text-xs text-muted">Google Maps</div>
                  <div className="text-sm font-bold text-primary">Ranked #1 nearby</div>
                </div>
                <MapPin className="w-4 h-4 text-link-blue" />
              </div>

              <div className="absolute bottom-8 -left-4 lg:-left-8 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div>
                  <div className="text-xs text-muted">Google & Meta Ads</div>
                  <div className="text-sm font-bold text-primary">New enquiries</div>
                </div>
                <TrendingUp className="w-4 h-4 text-accent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
