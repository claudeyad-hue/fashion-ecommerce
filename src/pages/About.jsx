import Breadcrumbs from '../components/common/Breadcrumbs';
import { Feather, Recycle, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const About = () => {
  return (
    <div className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About LUXE' }]} />

        {/* Hero Section */}
        <div className="py-8 md:py-14 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-burgundy font-bold block">
            Our Heritage & Philosophy
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-near-black leading-tight">
            Elevating the Everyday through Sculptural Craftsmanship
          </h1>
          <p className="text-sm sm:text-base text-warm-grey font-light leading-relaxed">
            Founded in Mumbai with an international design ethos, LUXE exists at the intersection of
            architectural minimalism, ethical transparency, and accessible luxury.
          </p>
        </div>

        {/* Editorial Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-12">
          <div className="lg:col-span-6 aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-light-grey shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1000&auto=format&fit=crop&q=80"
              alt="LUXE Atelier Design Studio"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-widest text-burgundy font-bold">
              The Genesis
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              A Rejection of Disposable Fast Fashion
            </h2>
            <p className="text-xs sm:text-sm text-warm-grey leading-relaxed">
              In an era dominated by micro-trend throwaway pieces that tarnish after two weekends, we
              set out to restore reverence to fashion accessories. We believe jewelry and handbags
              should be treasured keepsakes that develop character over seasons.
            </p>
            <p className="text-xs sm:text-sm text-warm-grey leading-relaxed">
              Every design originates as a physical wax sculpture or hand-drafted silhouette in our
              studio before being forged with generational jewelry smiths in Jaipur and leather artisans
              in Florence and Kanpur.
            </p>
          </div>
        </div>

        {/* Three Core Pillars */}
        <div className="py-16 border-y border-light-grey my-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-burgundy font-bold block mb-2">
              Our Commitments
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-near-black">
              Conscious Material Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory p-8 border border-light-grey space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-white text-burgundy flex items-center justify-center mx-auto shadow-sm">
                <Recycle size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal">
                100% Recycled Silver & Brass
              </h3>
              <p className="text-xs text-warm-grey leading-relaxed">
                All precious metal foundations are certified circular, drastically reducing the
                ecological footprint of raw mining without forfeiting an ounce of brilliance.
              </p>
            </div>

            <div className="bg-ivory p-8 border border-light-grey space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-white text-burgundy flex items-center justify-center mx-auto shadow-sm">
                <Feather size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal">
                Solvent-Free Vegan Leather
              </h3>
              <p className="text-xs text-warm-grey leading-relaxed">
                Our bags utilize high-performance waterborne microfiber polymers that offer the rich
                patina of full-grain leather while eliminating harmful toxic solvents.
              </p>
            </div>

            <div className="bg-ivory p-8 border border-light-grey space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-white text-burgundy flex items-center justify-center mx-auto shadow-sm">
                <HeartHandshake size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal">
                Fair Living Wage Workshops
              </h3>
              <p className="text-xs text-warm-grey leading-relaxed">
                We partner solely with SEDEX and SMETA audited manufacturing partners where craftsmen
                receive fair living wages, health coverage, and clean working conditions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 max-w-xl mx-auto space-y-5">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-near-black">
            Experience the LUXE Collection
          </h2>
          <p className="text-xs sm:text-sm text-warm-grey">
            Discover modern statement earrings, handbags, denim, and accessories engineered to inspire.
          </p>
          <Link to="/shop">
            <Button variant="burgundy" size="lg">
              Explore Current Edit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
