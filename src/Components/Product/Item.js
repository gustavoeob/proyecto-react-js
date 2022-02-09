import React, {useState} from "react";
import ItemCount from "./ItemCount";


const Item = ({ id, name, image, alt, description, stock, price, setSelectedItem }) => {
  const [StockSelected, setStockSelected] = useState(0);

  const selectItem = () =>
  // shows the selectedItem's description but it isn't returned in item section individually
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
        <ItemCount stock={stock} setStockSelected={setStockSelected} initial={1}/>
        <button className="selectItemBtn" onClick={selectItem}>See Detail</button>
      </div>
      
    </>
  );
};

export default Item;
