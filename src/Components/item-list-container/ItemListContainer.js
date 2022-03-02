import React from 'react';
import { useParams } from 'react-router-dom'
import Item from '../Product/Item';
import {useEffect, useState} from 'react'
import { productsAPI } from "../helpers/promises";
import Loading from "../Product/loading.gif";
import FirstHeader from "../Section/FirstHeader"
import cartData from '../Context/CartContext'


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();
  
  
  useEffect(() => {

    
    getProducts();
  }, []);
  
  console.log(cartData)
  const getProducts = async () => {
    try {
      const result = await productsAPI;

      if (id) {
        setProducts(result.filter(i => i.category === id));
      }else{
        setProducts(result)
      }

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
      <div className="itemContainer"> 
      <FirstHeader/> 
      <p className="landing-text">Products</p>
      <div className="selectedItemContainer">
        <p className="selectedItem selectedName">{selectedItem ? selectedItem.name : ""}</p>
        <p className="selectedItem selectedPrice">{selectedItem ? selectedItem.price : ""}</p>
        <p className="selectedItem selectedId">{selectedItem ? selectedItem.id : ""}</p>
        <p className="selectedItem selectedImage">{selectedItem ? selectedItem.image : ""}</p>
      </div>
      {products.map(({ id, name, price, stock, image}) => (
        <Item key={id} id={`${id}`} name={name} price={`$${price}`} stock={stock} image={image} setSelectedItem={setSelectedItem} />
        ))}
        
      </div>
    </div>
  );
};
export default ItemListContainer;