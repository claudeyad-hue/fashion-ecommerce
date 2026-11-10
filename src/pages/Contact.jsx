import { useState } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Button from '../components/common/Button';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How long does domestic delivery take?',
    a: 'All orders are dispatched within 24 hours. Express courier shipping takes 2-4 business days for major metros, and 4-6 business days for all other pin codes.',
  },
  {
    q: 'What is your return and exchange policy?',
    a: 'We offer a 14-day hassle-free return window for unworn items in their original brand packaging with security tags intact. Pickups are scheduled directly from your doorstep.',
  },
  {
    q: 'Is LUXE jewelry hypoallergenic and water-resistant?',
    a: 'Yes. All our pieces feature 18k triple-micron gold or rhodium vermeil over nickel-free recycled silver or brass, finished with a water and sweat resistant nano-ceramic seal.',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    orderId: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message of at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        orderId: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Client Concierge & Contact' }]} />

        {/* Header */}
        <div className="py-8 text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-burgundy font-bold block">
            We are Here to Assist
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-near-black">
            Client Concierge
          </h1>
          <p className="text-xs sm:text-sm text-warm-grey">
            Have a question about an order, styling advice, or wholesale collaboration? Our dedicated
            team is at your service.
          </p>
        </div>

        {/* Contact Layout: Form on Left, Contact Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 my-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-light-grey p-6 sm:p-10">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-6">
              Send an Inquiry
            </h2>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 bg-ivory border border-light-grey p-6">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-success flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal">
                  Message Dispatched
                </h3>
                <p className="text-xs text-warm-grey max-w-sm mx-auto">
                  Thank you for reaching out. A dedicated concierge consultant will review your inquiry
                  and respond within 12–24 business hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Malini Sharma"
                      className="w-full bg-ivory border border-light-grey px-3.5 py-2.5 text-base sm:text-xs text-charcoal focus:outline-none focus:border-burgundy min-h-[44px]"
                    />
                    {errors.name && <p className="text-[11px] text-error mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. malini@example.com"
                      className="w-full bg-ivory border border-light-grey px-3.5 py-2.5 text-base sm:text-xs text-charcoal focus:outline-none focus:border-burgundy min-h-[44px]"
                    />
                    {errors.email && <p className="text-[11px] text-error mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-ivory border border-light-grey px-3.5 py-2.5 text-base sm:text-xs text-charcoal focus:outline-none focus:border-burgundy cursor-pointer min-h-[44px]"
                    >
                      <option>General Inquiry</option>
                      <option>Order Status & Tracking</option>
                      <option>Returns & Exchanges</option>
                      <option>Product Sizing Advice</option>
                      <option>Press & Partnerships</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Order Reference (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.orderId}
                      onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                      placeholder="e.g. LX-8492"
                      className="w-full bg-ivory border border-light-grey px-3.5 py-2.5 text-base sm:text-xs text-charcoal focus:outline-none focus:border-burgundy min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How may our concierge assist your styling or order today?"
                    className="w-full bg-ivory border border-light-grey p-3.5 text-base sm:text-xs text-charcoal focus:outline-none focus:border-burgundy leading-relaxed"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-error mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="burgundy"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Dispatching Inquiry...' : 'Submit Message'}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-ivory border border-light-grey p-6 sm:p-8 space-y-6">
              <h3 className="font-display text-lg font-semibold text-charcoal border-b border-light-grey pb-3">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs text-warm-grey">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-burgundy shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-charcoal">Flagship Atelier & Showroom</p>
                    <p>44 Fashion Boulevard, Bandra West, Mumbai, Maharashtra 400050</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-burgundy shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">Concierge Phone Support</p>
                    <p>+91 (022) 8492-3000</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-burgundy shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">Email Dispatch</p>
                    <p>concierge@luxefashion.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-burgundy shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal">Client Advisory Hours</p>
                    <p>Monday through Saturday, 10:00 AM – 7:30 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="space-y-3">
              <h3 className="font-display text-base font-semibold text-charcoal">
                Frequently Addressed
              </h3>
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-light-grey bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-3.5 text-xs font-semibold text-charcoal text-left cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 text-warm-grey shrink-0 ml-2 ${
                        openFaq === idx ? 'rotate-180 text-burgundy' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-3.5 pb-3.5 text-xs text-warm-grey leading-relaxed border-t border-light-grey/60 pt-2.5">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
