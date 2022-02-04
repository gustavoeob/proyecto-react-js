import React from "react";
import ProductCount from "./ProductCount";




const ProductCard = ({ alt, name, price, stock, image}) =>  {
    return (
      <div className="product">
        <p className="item-list product-title">{name}</p>
        <div className="product-image-container">
          <img className="product-image"src={image} alt={alt}/>
        </div>
        <div className="product-details">
        <p className="item-list price">Price: ${price}</p>
        <p className="item-list stock">Stock: {stock}</p>
        <ProductCount stock={stock} initial={1} />
        </div>
      </div>
      )
    };

export default ProductCard;
