import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [items, setItems] = useState([]);
  
  const addItem = (currentItem) => {
    //   i = index
    const i = isInCart(currentItem);
    
    if (i === -1) {
      setItems([...items, currentItem])
    }else{
      const prevQuantity = items[i].quantity;
      items[i].quantity = prevQuantity + currentItem.quantity;
      setItems([...items])
    }
  }
  
  const removeItem = (item, e) => {
      // e.stopPropagation();
      setItems(items.filter(item => item.id !== item.id))
  }
  
  const isInCart = (newItem) => {
      const item = items.find ( item => item.id === newItem.id);
      return items.indexOf(item);
  }
  
  const clearCart = () => {
    setItems([]);
  }



    return (
    <CartContext.Provider value={ {items, addItem, isInCart, clearCart, removeItem}  }>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext