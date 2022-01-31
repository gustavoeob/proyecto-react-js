import React from 'react';
import ProductCount from './ProductCount';
// import ProductImg from './ProductImg'

export const Product = ({ name, price, stock, description, imageUrl }) => {
  return(
    <div className="Product">
        <p className="item-list">Product: { name }</p>
        <p className="item-list">Price: ${ price }</p>
        <p className="item-list">Stock: { stock }</p>
        <ProductCount stock={ stock } initial={ 1 }/>
        <ProductImg url={ imageUrl }/>

    </div>
  ); 
};

export default Product;