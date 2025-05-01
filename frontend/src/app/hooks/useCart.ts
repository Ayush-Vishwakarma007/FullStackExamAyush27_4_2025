import { useState, useEffect } from 'react';
import { getCart } from '../services/cartService';

const useCart = () => {
  const [cart, setCart] = useState<any>(null);

  useEffect(() => {
    const fetchCart = async () => {
      const cartData = await getCart();
      setCart(cartData);
    };

    fetchCart();
  }, []);

  return cart;
};

export default useCart;
