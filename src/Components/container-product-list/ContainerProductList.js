import React from 'react';
import {data} from '../Product/data';
import ProductCard from '../Product/ProductCard';
import {useEffect, useState} from 'react'
import { productsAPI } from "../helpers/promises";




const ContainerProductList = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
      console.log("App ended loading");
    }
  };

  if (loading) {
    return <div className="loading-prompt">
      <p>Loading...</p>
    </div>;
  }
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
