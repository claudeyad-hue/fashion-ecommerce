import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-ivory overflow-hidden border-b border-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-burgundy/10 text-burgundy text-xs uppercase tracking-widest font-bold border border-burgundy/20">
              <Sparkles size={13} />
              <span>Spring / Summer 2026 Editorial Drop</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight text-near-black leading-[1.12]">
              Elevated Style. <br />
              <span className="italic font-normal text-burgundy">Sculptural</span> Luxury.
            </h1>

            <p className="text-sm sm:text-base text-warm-grey max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Discover artisanal earrings, structured leather handbags, precision-cut denim, and
              curated lifestyle accents designed for the confident, contemporary wardrobe.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link to="/shop">
                <Button variant="burgundy" size="lg" className="w-full sm:w-auto">
                  Explore Collection <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/shop?filter=new-arrivals">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View New Arrivals
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-light-grey flex items-center justify-center lg:justify-start gap-8 text-xs text-warm-grey">
              <div>
                <p className="font-display text-xl font-bold text-charcoal">40+</p>
                <p className="text-[11px] uppercase tracking-wider">Artisan Styles</p>
              </div>
              <div className="h-8 w-px bg-light-grey" />
              <div>
                <p className="font-display text-xl font-bold text-charcoal">4.9 ★</p>
                <p className="text-[11px] uppercase tracking-wider">Customer Rating</p>
              </div>
              <div className="h-8 w-px bg-light-grey" />
              <div>
                <p className="font-display text-xl font-bold text-charcoal">100%</p>
                <p className="text-[11px] uppercase tracking-wider">Authentic Materials</p>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Campaign Visual */}
              <div className="aspect-[4/5] bg-cream overflow-hidden border border-light-grey shadow-xl relative">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&auto=format&fit=crop&q=85"
                  alt="LUXE Fashion Campaign"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-4 backdrop-blur-xs bg-black/30 border border-white/20">
                  <p className="text-[10px] uppercase tracking-widest text-amber-300 font-semibold">
                    Signature Spotlight
                  </p>
                  <p className="font-display text-base font-semibold">
                    Celestial Vermeil & Italian Vegan Leather Edit
                  </p>
                </div>
              </div>

              {/* Overlapping Floating Tag */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 border border-light-grey shadow-lg hidden sm:block max-w-xs">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&auto=format&fit=crop&q=80"
                    alt="Celestial Nova Drop Earrings"
                    className="w-12 h-14 object-cover"
                  />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-burgundy font-bold">
                      Trending Now
                    </span>
                    <p className="text-xs font-semibold text-charcoal">Celestial Nova Drops</p>
                    <p className="text-xs text-warm-grey font-bold">₹1,890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
