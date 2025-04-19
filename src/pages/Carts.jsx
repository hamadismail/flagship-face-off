import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { CartContext } from '../providers/Contexts';
import EmptyState from '../components/ui/EmptyState';
import PhoneCard from '../components/PhoneCard/PhoneCard';
import { getCartItems, removeCartItem } from '../utils/localstorage';

const Carts = () => {
  const phones = useLoaderData();
  const { carts, setCarts } = useContext(CartContext);
  const [cartItem, setCartItem] = useState([]);

  const handleDelete = id => {
    removeCartItem(id);
    setCarts(getCartItems());
  };

  useEffect(() => {
    const cartItems = [];

    for (const id of carts) {
      const data = phones.find(phone => phone.id === parseInt(id));
      data && cartItems.push(data);
    }

    setCartItem(cartItems);
  }, [carts]);

  if (cartItem.length < 1) return <EmptyState />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-8">
      {cartItem.map(c => (
        <PhoneCard
          key={c.id}
          phone={c}
          deletable={true}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Carts;
