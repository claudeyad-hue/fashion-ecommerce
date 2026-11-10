import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../common/Button';

const FeaturedCollection = () => {
  return (
    <section className="py-16 md:py-24 bg-near-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden border border-white/20 relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&auto=format&fit=crop&q=85"
                alt="LUXE Denim & Carry Campaign"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-near-black/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Detail Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-charcoal/95 border border-white/20 p-5 max-w-xs shadow-2xl backdrop-blur-md hidden sm:block">
              <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold block mb-1">
                Atelier Feature
              </span>
              <p className="font-display text-sm font-semibold text-white">
                Authentic 12.5oz Turkish Organic Cotton Denim
              </p>
              <p className="text-[11px] text-gray-400 mt-1">
                Enzyme washed with zero harsh chemicals for enduring comfort and character.
              </p>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-amber-300 text-xs uppercase tracking-widest font-semibold border border-white/15">
              <Sparkles size={13} />
              <span>Signature Curation</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              The Architecture of Everyday Denim
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed font-light">
              We spent eighteen months perfecting three distinct silhouettes: the leg-lengthening
              high-rise straight, the dramatic floor-pooling 90s palazzo, and the contouring 360°
              sculpting skinny. Woven exclusively from ethically farmed Turkish organic cotton.
            </p>

            <div className="pt-2">
              <Link to="/category/jeans">
                <Button variant="burgundy" size="lg">
                  Shop Denim Collection <ArrowRight size={15} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
