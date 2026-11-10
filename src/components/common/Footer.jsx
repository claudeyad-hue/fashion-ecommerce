import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Check,
} from 'lucide-react';
import { categories } from '../../data/categories';

// Clean SVG brand icons
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-charcoal text-white mt-auto border-t border-white/10">
      {/* Brand Value Pillars */}
      <div className="border-b border-white/10 bg-near-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-amber-300">
                <Truck size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
                  Complimentary Shipping
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5">On all domestic orders over ₹1,999</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-amber-300">
                <RotateCcw size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
                  14-Day Seamless Returns
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Hassle-free exchange & pickups</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-amber-300">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
                  Authentic Craftsmanship
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Hand-finished hypoallergenic metals</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-amber-300">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
                  Signature Packaging
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Includes gift-ready presentation box</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link to="/" className="inline-block">
                <span className="font-display text-3xl font-bold tracking-[0.25em] text-white">
                  LUXE
                </span>
                <span className="block text-[10px] uppercase tracking-[0.35em] text-amber-200/80 mt-0.5">
                  Atelier & Lifestyle
                </span>
              </Link>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm mt-3">
                Curated fashion, statement jewelry, and artisanal carryables engineered for modern
                discovery. Rooted in sustainable craftsmanship and timeless design.
              </p>
            </div>

            {/* Newsletter form */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-2">
                Join the LUXE Circle
              </h4>
              <p className="text-xs text-gray-400 mb-3">
                Enjoy 15% off your first order plus priority access to limited edition drops.
              </p>

              {isSubscribed ? (
                <div className="p-3 bg-white/5 border border-amber-300/40 text-xs text-amber-200 flex items-center gap-2">
                  <Check size={16} className="text-amber-300 shrink-0" />
                  <span>Welcome! Use voucher code <strong>LUXE15</strong> at checkout.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-white/5 border border-white/20 px-3.5 py-2.5 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-300"
                    />
                    <button
                      type="submit"
                      className="bg-burgundy hover:bg-burgundy-dark text-white px-5 py-2.5 text-xs uppercase tracking-wider font-semibold transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Join</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                  {error && <p className="text-[11px] text-red-400">{error}</p>}
                </form>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="hover:text-white hover:underline transition-colors block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link to="/shop" className="hover:text-white hover:underline transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?filter=new-arrivals"
                  className="hover:text-white hover:underline transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?filter=best-sellers"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?filter=sale"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Sale & Promotions
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white hover:underline transition-colors">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white hover:underline transition-colors">
                  Shopping Bag
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care & Location */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Client Concierge
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-amber-300 shrink-0 mt-0.5" />
                <span>Flagship Atelier, 44 Fashion Boulevard, Bandra West, Mumbai 400050</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-amber-300 shrink-0" />
                <span>+91 (022) 8492-3000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-amber-300 shrink-0" />
                <span>concierge@luxefashion.in</span>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block py-2 px-3 border border-white/20 text-[11px] uppercase tracking-wider text-white hover:bg-white hover:text-charcoal transition-all font-semibold"
                >
                  Send Inquiry Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-near-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 LUXE Atelier India Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-300 cursor-pointer">Shipping & Customs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
