import React from 'react';
import { useState } from 'react';
import {ItemCount} from "./ItemCount";
import {Link} from 'react-router-dom'

const Item = ({ id, name, image, description, alt, stock, price, setSelectedItem }) => {
  const [stockSelected, setStockSelected] = useState(0);

  const selectItem = () =>
    setSelectedItem({ id, name, image, description, alt, stock, price, setSelectedItem: stockSelected });

  return (
    <>
      <div className="product">
        <p className="item-list product-title">{name}</p>
        <p className="product-description">{description}</p>
        <div className="product-image-container">
          <div className="product-image-detail">{image}</div> 
        </div>
        <p className="item-list price">{price}</p>
        <p className="item-list stock">Stock: {stock}</p>
        <ItemCount stock={stock} setStockSelected={setStockSelected} initial={1}/>
        <Link to='`/detail/${id}`' className="selectItemBtn" onClick={selectItem}>See Details</Link>
      </div>
      
    </>
  );
};
    
    export default ItemDetail;