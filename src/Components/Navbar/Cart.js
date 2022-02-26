import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import remove from "../Navbar/Img/minus.png"
import {Link} from 'react-router-dom'

const Cart = () => {
  const { cartData, clearCart, removeItem } = useContext(CartContext);

  return (
    <>
      {!cartData.length ? (
        <div className="empty-cart-container">
          <p className="cart-empty-msg">Nothing here yet! 👹</p>
          <Link to='/'>
          <Link className="not-found-redirect" to='/'> Go home</Link>
          </Link>
        </div>
      ) 
      : 
      (
        cartData.map((item) => (
          <>
          <>
            <div>
              <div key={item.id} className="cart-items">
                <div className="cart-item-left">
                  <p className="cart-item cart-item-title">{item.name}</p>
                  <p className="cart-item cart-item-image">{item.image}</p>
                  <p className="cart-item cart-item-price">{item.price}</p>
                </div>
                <div className="cart-item-right">
                  <p className="cart-item cart-item-description">
                    {item.description}
                  </p>
                  <button
                    className="remove-cart-item"
                    onClick={() => removeItem(item)}>
                    <img className="remove-icon" src={remove}/>
                  </button>
                </div>
              </div>
            </div>
            <>
            </>
          </>
              <div className="cart-action-btn">
                <button
                  className="remove-all-cart-items"
                  onClick={() => clearCart()}>
                  Clear All
                </button>
              </div>
              </>
        ))
              
      )} 
    </>
  );
};

export default Cart;
