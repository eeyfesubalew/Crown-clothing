export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exsistngCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (exsistngCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartIteToRemove) => {
  const exsistngCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartIteToRemove.id
  );
  if (exsistngCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartIteToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartIteToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
