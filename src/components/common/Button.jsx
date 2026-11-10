import { forwardRef } from 'react';

const variants = {
  primary: 'bg-charcoal text-white hover:bg-near-black shadow-sm active:translate-y-0.5',
  burgundy: 'bg-burgundy text-white hover:bg-burgundy-dark shadow-sm active:translate-y-0.5',
  secondary: 'bg-ivory text-charcoal hover:bg-cream border border-light-grey active:translate-y-0.5',
  outline: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white active:translate-y-0.5',
  ghost: 'text-charcoal hover:bg-cream/70',
  danger: 'bg-error text-white hover:bg-red-700',
};

const sizes = {
  sm: 'px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium',
  md: 'px-6 py-2.5 text-sm tracking-wider uppercase font-medium',
  lg: 'px-8 py-3.5 text-sm tracking-widest uppercase font-semibold',
  xl: 'px-10 py-4 text-base tracking-widest uppercase font-semibold',
};

const Button = forwardRef(
  ({ variant = 'primary', size = 'md', className = '', children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`
          inline-flex items-center justify-center gap-2 rounded-none transition-all duration-200 cursor-pointer
          focus-visible:outline-2 focus-visible:outline-burgundy focus-visible:outline-offset-2
          disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none select-none
          ${variants[variant] || variants.primary}
          ${sizes[size] || sizes.md}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
