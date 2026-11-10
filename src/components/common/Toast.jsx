import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertTriangle, ShoppingBag, Heart } from 'lucide-react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success', duration = 3200) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'cart':
        return <ShoppingBag size={16} className="text-burgundy" />;
      case 'wishlist':
        return <Heart size={16} className="text-burgundy fill-burgundy" />;
      case 'warning':
        return <AlertTriangle size={16} className="text-warning" />;
      case 'error':
        return <X size={16} className="text-error" />;
      case 'success':
      default:
        return <Check size={16} className="text-success" />;
    }
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-18 sm:bottom-6 right-0 sm:right-6 left-0 sm:left-auto z-[120] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 mx-auto sm:mx-0">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto bg-charcoal text-white rounded-none border-l-4 border-burgundy shadow-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                {getIcon(toast.type)}
              </div>
              <p className="text-xs sm:text-sm font-medium flex-1 text-ivory tracking-wide">
                {toast.message}
              </p>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-white/60 hover:text-white transition-colors p-1"
                aria-label="Dismiss toast"
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');
  return context;
};
