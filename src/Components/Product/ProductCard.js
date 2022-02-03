import React from "react";
import ProductCount from "./ProductCount";


const ProductCard = ({ name, price, stock, image}) =>  {
    return (
      <div className="Product">
        <p className="item-list">Product: {name}</p>
        <div className="ProductImage">
          {image}
        </div>
        <p className="item-list">Price: ${price}</p>
        <p className="item-list">Stock: {stock}</p>
        <ProductCount stock={stock} initial={1} />
      </div>
      )
    };

export default ProductCard;
