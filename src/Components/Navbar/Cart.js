import React, {useContext} from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {
  const { items, total } = useContext(CartContext);

  
  
  return (
    <div>
    
    {items.map((item, id) =>(
      <div key={id}>
        <p>{item.name}</p>
        {/* <p>{item.image}</p> */}
        {/* <p>{item.price}</p> */}
      </div>
    ))}
    </div>
  );
};

export default Cart