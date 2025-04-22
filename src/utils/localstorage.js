import toast from 'react-hot-toast';

export const getCartItems = () => {
  const carts = localStorage.getItem('carts');
  if (carts) return JSON.parse(carts);

  return [];
};

export const addCartItems = id => {
  const cartIds = getCartItems();
  const isExists = cartIds.find(cart => cart === id);

  if (isExists) return toast.error('Phone Already in Carts');

  cartIds.push(id);
  toast.success('Phone Added Successfully');
  localStorage.setItem('carts', JSON.stringify(cartIds));
};

export const removeCartItem = id => {
  const carts = getCartItems();
  const remainingCarts = carts.filter(cart => id !== cart);

  localStorage.setItem('carts', JSON.stringify(remainingCarts));
  toast.success('Removed Successfully');
};
