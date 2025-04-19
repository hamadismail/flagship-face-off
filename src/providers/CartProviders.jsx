import React, { useState } from 'react';
import { CartContext } from './Contexts';

const CartProviders = ({ children }) => {
  const [carts, setCarts] = useState([]);
  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProviders;
