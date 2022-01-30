import React from 'react';
import ProductCount from './ProductCount';

export const Product = ({ name, price, stock }) => {
  return(
    <div className="Product">
        <p className="item-list">Product: { name }</p>
        <p className="item-list">Price: ${ price }</p>
        <p className="item-list">Stock: { stock }</p>
        <ProductCount stock={ stock } initial={ 1 }/>
    </div>
  ); 
};

export default Product;