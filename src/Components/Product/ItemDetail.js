import React from 'react';
import { useState } from 'react';
import ItemCount from "./ItemCount";

const ItemDetail = ({ id, name, image, description, alt, stock, price, setSelectedItem }) => {
  const [stockSelected, setStockSelected] = useState(0);

  // const selectItem = () =>
  //   setSelectedItem({ id, name, image, description, alt, stock, price, setSelectedItem: stockSelected });



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
              <ItemCount className="product-count" stock={stock} setStockSelected={setStockSelected} initial={1}/>
              
            </div>
            
          </div>
        
      </div>
      
    </>
  );
};
    
    export default ItemDetail;