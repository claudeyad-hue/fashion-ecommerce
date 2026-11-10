import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Feather, Recycle, HeartHandshake } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-ivory border-b border-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-burgundy font-bold block">
              The LUXE Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-near-black leading-tight">
              Crafted with Intention. <br />
              Worn with Grace.
            </h2>
            <p className="text-xs sm:text-sm text-warm-grey leading-relaxed">
              We founded LUXE with a singular rebellion: fashion accessories should neither be disposable
              fast-fashion trinkets that tarnish in weeks, nor unreachable four-figure runway relics.
            </p>
            <p className="text-xs sm:text-sm text-warm-grey leading-relaxed">
              Every curve, clasp, and seam in our catalog is engineered alongside certified artisan workshops
              utilizing recycled sterling silver, heavy 18k gold vermeil, organic Turkish cotton, and certified
              solvent-free vegan leather.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="text-xs uppercase tracking-widest font-semibold text-burgundy hover:underline inline-flex items-center gap-1.5"
              >
                Read Our Complete Manifesto <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-light-grey text-center sm:text-left space-y-3">
              <div className="w-10 h-10 rounded-full bg-ivory text-burgundy flex items-center justify-center mx-auto sm:mx-0">
                <Recycle size={20} />
              </div>
              <h3 className="font-display text-base font-semibold text-charcoal">
                Circular Metals
              </h3>
              <p className="text-xs text-warm-grey leading-relaxed">
                100% of our precious metals derive from certified recycled sterling silver and brass foundations.
              </p>
            </div>

            <div className="bg-white p-6 border border-light-grey text-center sm:text-left space-y-3">
              <div className="w-10 h-10 rounded-full bg-ivory text-burgundy flex items-center justify-center mx-auto sm:mx-0">
                <Feather size={20} />
              </div>
              <h3 className="font-display text-base font-semibold text-charcoal">
                Featherweight Comfort
              </h3>
              <p className="text-xs text-warm-grey leading-relaxed">
                Hollow-core casting techniques produce dramatic sculptural silhouettes with zero earlobe fatigue.
              </p>
            </div>

            <div className="bg-white p-6 border border-light-grey text-center sm:text-left space-y-3">
              <div className="w-10 h-10 rounded-full bg-ivory text-burgundy flex items-center justify-center mx-auto sm:mx-0">
                <HeartHandshake size={20} />
              </div>
              <h3 className="font-display text-base font-semibold text-charcoal">
                Direct Atelier Pricing
              </h3>
              <p className="text-xs text-warm-grey leading-relaxed">
                By bypassing legacy department store markups, we pass exceptional quality directly to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
