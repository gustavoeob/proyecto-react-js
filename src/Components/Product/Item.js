import React, {useState} from "react";
import ItemCount from "./ItemCount";


const Item = ({ alt, name, price, stock, image}) =>  {

  const [selectedItem, setSelectedItem] = useState(null);
  const selectItem = () => setSelectedItem({ alt, name, price, stock, image})

    return (
      <div className="product">
        <p className="item-list product-title">{name}</p>
        <div className="product-image-container">
          <img className="product-image"src={image} alt={alt}/>
        </div>
        <div className="product-details">
        <p className="item-list price">Price: ${price}</p>
        <p className="item-list stock">Stock: {stock}</p>
        <ItemCount stock={stock} initial={1} />
        <button onClick={selectItem}>View Product</button>
        </div>
      </div>
      )
    };

export default Item;
