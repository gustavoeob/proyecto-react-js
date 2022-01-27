import React from 'react';

export const Product = ({ name, price, stock }) => {
  return(
    <div className="Product">
        <p className="item-list">Product: { name }</p>
        <p className="item-list">Price: ${ price }</p>
        <p className="item-list">Stock: { stock }</p>
    </div>
  ); 
};

export default Product;