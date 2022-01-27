import React from 'react';

export const Product = ({ name, price, stock }) => {
  return(
    <div>
        <p>Product: { name }</p>
        <p>Price: ${ price }</p>
        <p>Stock: { stock }</p>
        
    </div>
  ); 
};

export default Product;