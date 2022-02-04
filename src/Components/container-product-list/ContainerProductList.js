import React from 'react';
import {data} from '../Product/data';
import ProductCard from '../Product/ProductCard';


const ContainerProductList = () => {
  
  return(
    <div>
      <h1 className="app-title">Whoopie.co</h1>
      <p className="landingTitle">The products you love are here!</p>
      <div className="itemContainer">  
      {data.map(({ id, name, price, stock, image}) => (
        <ProductCard key={id} name={name} price={price} stock={stock} image={image} />
        ))}
      </div>
    </div>
  );
};
export default ContainerProductList;
