import React from "react";
import ProductCount from "./ProductCount";


const ProductCard = ({ alt, name, price, stock, image}) =>  {
    return (
      <div className="Product">
        <p className="item-list ProductTitle">{name}</p>
        <div className="ProductImageContainer">
          <img className="ProductImage"src={image} alt={alt}/>
        </div>
        <p className="item-list">Price: ${price}</p>
        <p className="item-list">Stock: {stock}</p>
        <ProductCount stock={stock} initial={1} />
      </div>
      )
    };

export default ProductCard;
