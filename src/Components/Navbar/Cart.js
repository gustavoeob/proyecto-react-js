import React, {useContext} from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {
  const { items, clearCart, removeItem} = useContext(CartContext);

  return (
    <div>
    
    {items.map((item, id, ...items) =>(
      <div key={id} className="cart-items">
        <div className="cart-item-left">
          <p className="cart-item cart-item-title">{item.name}</p>
          <p className="cart-item cart-item-image">{item.image}</p>
          <p className="cart-item cart-item-price">{item.price}</p>
        </div>
        <div className="cart-item-right">
          <p className="cart-item cart-item-description">{item.description}</p>
          <button  className="remove-cart-item"onClick={() => removeItem(item.id.id)}> X </button>
        </div>
      </div>

    ))}
    <button onClick={() => clearCart()}>Clear</button> 
    </div>
  );
};

export default Cart