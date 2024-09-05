import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const newProduct = { ...product, quantity };
    setCart((prevCart) => [...prevCart, newProduct]);
    alert(`${product.name} added to cart`);
    console.log(cart)
  };

  const updateQuantity = (productid, newQty) => {
    const updatedCart = cart.map((product) =>
      product.id === productid ? { ...product, quantity: newQty } : product
    );
    setCart(updatedCart);
  };

  const deleteItem = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
  };
  



  return (
    <CartContext.Provider value={{ cart, addToCart  , updateQuantity , deleteItem}}>
      {children}
    </CartContext.Provider>
  );
};
