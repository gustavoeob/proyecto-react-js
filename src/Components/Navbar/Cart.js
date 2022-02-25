import React, {useContext} from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {
  const { cartData, clearCart, removeItem} = useContext(CartContext);

  return (
    <div>
    
    {cartData=== 0 ? <div className="cart-empty-msg">HOLA</div> :
    cartData.map((item) =>(
      <div key={item.id} className="cart-items">
        <div className="cart-item-left">
          <p className="cart-item cart-item-title">{item.name}</p>
          <p className="cart-item cart-item-image">{item.image}</p>
          <p className="cart-item cart-item-price">{item.price}</p>
        </div>
        <div className="cart-item-right">
          <p className="cart-item cart-item-description">{item.description}</p>
          <button  className="remove-cart-item"onClick={() => removeItem(item)}> X </button>
        </div>
      </div>

    ))} 
      <div className="cart-action-btn"> 
            <button className="remove-all-cart-items" onClick={() => clearCart()}>Clear All</button> 
      </div>
  
    </div>
  );
};

export default Cart