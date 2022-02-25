import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [cartData, setCartData] = useState([]);
  
  const addItem = (currentItem) => {
    //   i = index
    const i = isInCart(currentItem);
    
    if (i === -1) {
      setCartData([...cartData, currentItem])
    }else{
      const prevQuantity = cartData[i].quantity;
      cartData[i].quantity = prevQuantity + currentItem.quantity;
      setCartData([...cartData])
    }
  }
  
  const removeItem = (item) => {
      setCartData(cartData.filter(x => x.id !== item.id))
  }


  const isInCart = (newItem) => {
      const item = cartData.find ( item => item.id === newItem.id);
      return cartData.indexOf(item);
  }
  
  const clearCart = () => {
    setCartData([]);
  }

  const totalCart = ()=> {
    const total = cartData.reduce((acc, itemCart) => (acc += (itemCart.quantity * itemCart.item.price)),0)
    console.log(total);
      return total
  } 

    return (
    <CartContext.Provider value={ {cartData, addItem, isInCart, clearCart, removeItem}  }>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext