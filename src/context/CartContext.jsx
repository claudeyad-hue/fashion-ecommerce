import { createContext, useContext, useReducer, useEffect, useState } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'luxe-cart-v1';

const getInitialState = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { items: [] };
  } catch {
    return { items: [] };
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity = 1, selectedColor, selectedSize } = action.payload;
      const colorVal = selectedColor ? (selectedColor.name || selectedColor) : '';
      const sizeVal = selectedSize || '';
      const itemKey = `${product.id}_${colorVal}_${sizeVal}`;

      const existingIndex = state.items.findIndex((item) => item.itemKey === itemKey);

      if (existingIndex > -1) {
        const updatedItems = [...state.items];
        const newQty = Math.min(10, updatedItems[existingIndex].quantity + quantity);
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: newQty,
        };
        return { ...state, items: updatedItems };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            itemKey,
            id: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice || product.price,
            image: product.images ? product.images[0] : product.image,
            category: product.category,
            selectedColor: colorVal,
            selectedSize: sizeVal,
            quantity: Math.min(10, Math.max(1, quantity)),
          },
        ],
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.itemKey !== action.payload),
      };

    case 'UPDATE_QUANTITY': {
      const { itemKey, quantity } = action.payload;
      if (quantity < 1) return state;
      const validQty = Math.min(10, quantity);
      return {
        ...state,
        items: state.items.map((item) =>
          item.itemKey === itemKey ? { ...item, quantity: validQty } : item
        ),
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, undefined, getInitialState);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn('Failed to save cart to localStorage:', error);
    }
  }, [state]);

  const addToCart = (product, quantity = 1, selectedColor = null, selectedSize = null) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { product, quantity, selectedColor, selectedSize },
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (itemKey) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemKey });
  };

  const updateQuantity = (itemKey, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemKey, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const cartCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const originalSubtotal = state.items.reduce(
    (total, item) => total + (item.originalPrice || item.price) * item.quantity,
    0
  );
  const totalSavings = Math.max(0, originalSubtotal - subtotal);
  const freeShippingThreshold = 1999;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingCost = subtotal > 0 && !isFreeShipping ? 150 : 0;
  const finalTotal = subtotal + shippingCost;

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        originalSubtotal,
        totalSavings,
        freeShippingThreshold,
        isFreeShipping,
        shippingCost,
        finalTotal,
        isDrawerOpen,
        setIsDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
