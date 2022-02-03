import React from "react";
import ProductCount from "./ProductCount";
import productImages from "./assets/img";
import products from "./data";
export const ProductCard = require.context("../Product/assets/img", true);

export const ProductCard = ({ id, alt, name, price, stock, description }) =>  {
    return (
      <div className="Product">
        <p className="item-list">Product: {name}</p>
        <div className="ProductImage">
          <img src={productImages(`${alt}.jpeg`)} alt="" />
        </div>
        <p className="item-list">Price: ${price}</p>
        <p className="item-list">Stock: {stock}</p>
        <ProductCount stock={stock} initial={1} />
      </div>
    );
  };

export default ProductCard;
