import React from 'react';
import {Items} from '../Product/Items';
import Item from '../Product/Item';
import {useEffect, useState} from 'react'
import { productsAPI } from "../helpers/promises";



const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

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
      <div className="product">
        <h1>Product you clicked</h1>
        <p>{selectedItem ? selectedItem.name : "Click to see a product here"}</p>
        <p>{selectedItem ? selectedItem.price : "Ninguno"}</p>
        <p>{selectedItem ? selectedItem.id : "Ninguno"}</p>
        <p>{selectedItem ? selectedItem.image : "Ninguno"}</p>
      </div>
      {Items.map(({ id, name, price, stock, image}) => (
        <Item key={id} id={id} name={name} price={`$${price}`} stock={stock} image={image} setSelectedItem={setSelectedItem}/>
        ))}
      </div>
    </div>
  );
};
export default ItemListContainer;
