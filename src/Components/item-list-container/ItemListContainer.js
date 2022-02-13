import React from 'react';
import { useParams } from 'react-router-dom'
import {items} from '../Product/Items';
import Item from '../Product/Item';
import {useEffect, useState} from 'react'
import { productsAPI } from "../helpers/promises";
import Loading from "../Product/loading.gif";



const ItemListContainer = () => {
  const { id } = useParams();
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
      <img className="loading" src={Loading} alt=""/>
    </div>;
  }


  return(

    <div className="landing-page">
      <h1 className="app-title">Whoopie.co</h1>
      <p className="landingTitle">The products you love are here!</p>
      <div className="itemContainer">  
      <div className="selectedItemContainer">
        <p className="selectedItem selectedName">{selectedItem ? selectedItem.name : ""}</p>
        <p className="selectedItem selectedPrice">{selectedItem ? selectedItem.price : ""}</p>
        <p className="selectedItem selectedId">{selectedItem ? selectedItem.id : ""}</p>
        <p className="selectedItem selectedImage">{selectedItem ? selectedItem.image : ""}</p>
      </div>
      {items.map(({ id, name, price, stock, image}) => (
        <Item key={id} id={`ID: ${id}`} name={name} price={`$${price}`} stock={stock} image={image} setSelectedItem={setSelectedItem} />
        ))}
        
      </div>
    </div>
  );
};
export default ItemListContainer;