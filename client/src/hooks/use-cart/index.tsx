import { useContext, createContext, useEffect, useState } from 'react';
import { getStorageItem, setStorageItem } from 'utils/localStorage';
import { useQueryGames } from 'graphql/queries/games';
import { cartMapper } from 'utils/mappers';
import formatPrice from 'utils/format-price';

const CART_KEY = 'cartItems';

type CartItem = {
  id: string;
  img: string;
  title: string;
  price: string;
};

export type CartContextData = {
  items: CartItem[];
  quantity: number;
  total: string;
  isInCart: (id: string) => boolean;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  loading: boolean;
};

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false,
};

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues,
);

export type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const data = getStorageItem(CART_KEY);

    if (data) {
      setCartItems(data);
    }
  }, []);

  const { data, loading } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems,
      },
    },
  });

  const total = data?.games.reduce((acc, game) => {
    return acc + game.price;
  }, 0);

  function isInCart(id: string) {
    return cartItems.includes(id);
  }

  function saveCart(cartItems: string[]) {
    setCartItems(cartItems);
    setStorageItem(CART_KEY, cartItems);
  }

  function addToCart(id: string) {
    const newItems = [...cartItems, id];
    saveCart(newItems);
  }

  function removeFromCart(id: string) {
    const newItems = cartItems.filter(key => key !== id);
    saveCart(newItems);
  }

  function clearCart() {
    saveCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
