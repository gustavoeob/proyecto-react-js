import React, { useState, useContext} from 'react';
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';
import { CartContext } from '../Context/CartContext'

const ItemDetail = ({ id, name, image, description, alt, stock, price }) => {
  const [stockSelected, setStockSelected] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const { addItem } = useContext(CartContext); 

  const selectItem = () =>
    setSelectedItem({ id, name, image, description, alt, stock, price, setSelectedItem: stockSelected });

 
    const onAdd = (counter) => {
      addItem({
        ...selectedItem,
        quantity: counter
      });
  }


  return (
    <>
      <div className="item-detail">
          <div className="item-left-container">
            <p className="item-list item-title">{name}</p> 
            <div className="item-list item-image">{image}</div>
          </div> 
          <div className="item-right-container">
            <p className="item-list item-description">{description}</p>
            <p className="item-list item-price">{price}</p>
            <p className="item-list item-stock">Stock: {stock}</p>
            <div className="item-buttons"> 
              <ItemCount className="product-count" stock={stock} setStockSelected={setStockSelected} initial={1} onAdd={onAdd}/>
              <Link to={'/cart'} className="selectItemBtn add-to-bag-btn">Checkout</Link>
            </div>
            
          </div>
        
      </div>
      
    </>
  );
};
    
    export default ItemDetail;