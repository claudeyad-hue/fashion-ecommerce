import { Star, CheckCircle2, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Ananya Deshmukh',
    location: 'Bandra, Mumbai',
    product: 'Celestial Nova Drop Earrings',
    rating: 5,
    date: '3 days ago',
    comment:
      'The craftsmanship on these celestial earrings is genuinely breathtaking. They look like fine heirloom jewelry that costs five times as much, yet they feel completely weightless on my lobes all evening.',
  },
  {
    id: 2,
    name: 'Rhea Kapoor',
    location: 'Indiranagar, Bengaluru',
    product: 'Monceau Structured Flap Tote',
    rating: 5,
    date: '1 week ago',
    comment:
      'This bag fits my 14" MacBook, notebook, and cosmetic pouch without losing its crisp geometric silhouette. The vegan leather feels butter-soft and the turn-lock click is pure luxury.',
  },
  {
    id: 3,
    name: 'Tara Sengupta',
    location: 'Vasant Vihar, New Delhi',
    product: 'Soho High-Rise Straight Ankle Jeans',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'I am notoriously picky about denim. The Turkish cotton has that authentic vintage weight and zero sagging after multiple wears. Truly the holy grail fit for my waist.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-widest text-burgundy font-bold block mb-2">
            Client Voices
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-near-black">
            Cherished by Discerning Collectors
          </h2>
          <p className="text-xs sm:text-sm text-warm-grey mt-2">
            Read authentic reviews from style tastemakers across India who have integrated LUXE into
            their daily wardrobe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-ivory border border-light-grey p-6 lg:p-8 flex flex-col justify-between relative"
            >
              <Quote className="text-burgundy/15 absolute top-5 right-5" size={38} />
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-charcoal leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-light-grey/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-warm-grey">{rev.location}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] text-success font-medium bg-white px-2 py-0.5 border border-light-grey">
                    <CheckCircle2 size={11} /> Verified Buyer
                  </span>
                </div>
                <p className="text-[11px] text-burgundy font-medium mt-2 truncate">
                  Purchased: {rev.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
