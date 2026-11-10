import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ items = [] }) => {
  return (
    <nav aria-label="Breadcrumbs" className="py-3 sm:py-4">
      <ol className="flex items-center gap-1.5 text-xs tracking-wider uppercase text-warm-grey flex-wrap">
        <li>
          <Link
            to="/"
            className="hover:text-charcoal transition-colors inline-flex items-center gap-1 text-charcoal/70"
          >
            <Home size={13} />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight size={12} className="text-mid-grey" />
            {item.href ? (
              <Link to={item.href} className="hover:text-charcoal transition-colors text-charcoal/70">
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
