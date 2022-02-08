import React, {useState} from "react";
import ItemCount from "./ItemCount";


const Item = ({ id, name, image, alt, description, stock, price, setSelectedItem }) => {
  const [StockSelected, setStockSelected] = useState(0);

  const selectItem = () =>
    setSelectedItem({ id, name, image, alt, description, stock, price, setSelectedItem: StockSelected });

  return (
    <>
      <div className="product">
        <p className="item-list product-title">{name}</p>
        <div className="product-image-container">
          <div className="product-image">{image}</div> 
        </div>
        <p className="product-description">{description}</p>
        <p className="item-list price">Price: {price}</p>
        <p className="item-list stock">Stock: {stock}</p>
        <ItemCount stock={stock} setStockSelected={setStockSelected} initial={1}/>
        <button onClick={selectItem}>Seleccionar producto</button>
      </div>
      
    </>
  );
};

export default Item;
