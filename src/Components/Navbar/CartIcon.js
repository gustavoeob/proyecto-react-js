import React, {useContext}from 'react'
import Bag from './Img/shopping-bag.png'
import '../../App.css'
import {Link} from "react-router-dom"
import {CartContext} from "../Context/CartContext"




const CartIcon = () => {

  const {cartData} = useContext(CartContext)

  return (
    <> 
      <Link className="cart-widget-container" to={"/cart"}>
        <img className="shopping-bag-icon" src={Bag} alt=""/>
        <div className="cart-items-qty-widget">
          <span className="cart-items-qty-widget">{(cartData.reduce((acc, el) => acc + el.quantity, 0))}</span>
        </div>
      </Link>
      
      
    </>
    
  )
}

export default CartIcon