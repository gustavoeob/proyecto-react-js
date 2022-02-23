import React, {useState} from "react";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";


const Item = ({ id, name, image, alt, description, stock, price, setSelectedItem }) => {
  const [StockSelected, setStockSelected] = useState(0);

  const selectItem = () =>
    setSelectedItem({ id, name, image, alt, description, stock, price, setSelectedItem: StockSelected });

    
  return (
    <>
      <div className="product">
        <p className="item-list product-title">{name}</p>
        <div className="product-image-container">
          <div className="product-image product-image-detail">{image}</div> 
        </div>
        <p className="item-list price">Price: {price}</p>
        <p className="item-list stock">Stock: {stock}</p>
        <div className="see-details-btn"> <Link to={`/item/${ id }`} className="selectItemBtn" onClick={selectItem}>See Detail</Link></div>
      </div>
      
    </>
  );
};

export default Item;
