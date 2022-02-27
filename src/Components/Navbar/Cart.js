import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import remove from "../Navbar/Img/minus.png";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const Cart = () => {
  const { cartData, clearCart, removeItem, totalCart } = useContext(CartContext);

  return (
    <>
      {!cartData.length ? (
        <div className="empty-cart-container">
          <p className="cart-empty-msg">Nothing here yet! 😢</p>
          <Link className="not-found-redirect" to="/">
              Go home
          </Link>
        </div>
      ) : (
        <>
          <h2 className="cart-title"> Products bag</h2>
          {cartData.map((item) => (
            <Fragment key={item.id}>
              <div>
                <div className="cart-items">
                  <div className="cart-item-left">
                    <p className="cart-item cart-item-title">{item.name}</p>
                    <p className="cart-item cart-item-image">{item.image}</p>
                    <p className="cart-item cart-item-price">{item.price}</p>
                  </div>
                  <div className="cart-item-right">
                    <div className="cart-item-right-up-side"> 
                      <p className="cart-item cart-item-description">
                        {item.description}
                      </p>
                      <button key={item.id}
                        className="remove-cart-item"
                        onClick={() => removeItem(item)}>
                        <img className="remove-icon" alt="minus icon" src={remove} />
                      </button>
                    </div>
                    <div className="cart-item-right-down-side">
                      <p className="cart-item cart-item-quantity">Picked: {item.quantity}</p>
                      <p className="cart-item cart-item-subtotal"> Subtotal: ${Number(item.quantity* item.price)} </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}

          <div className="cart-action-btn">
            <button
              className="remove-all-cart-items"
              onClick={() => clearCart()}>
              Clear All
            </button>
            <p className="total-price-cart">Total: $<span className="total-amount">{(totalCart())}</span></p>
          </div>
          <div className="pay-now-container">
            <button className="pay-now-btn">
              <p className="pay-now">Pay now</p>
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default Cart;
