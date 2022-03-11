import React from 'react';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { productsAPI } from '../helpers/promises';
import ItemDetail from '../Product/ItemDetail';
import Loading from '../Product/loading.gif';
import useProducts from '../hooks/useProducts';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const {products, loading } = useProducts();
    const [selectedItem, setSelectedItem] = useState(null);
    const [stockSelected, setStockSelected] = useState(0);
  
  //   useEffect(() => {
  //     getProducts();
  //   }, []);
  
      
  //   const getProducts = async () => {
  //     try {
  //       const result = await productsAPI;
  //       setProducts(result.find(i => i.id === id));
        
  //     } catch (error) {
  //       console.log({ error });
  //     } finally {
  //       setLoading(false);
  //       console.log("App ended loading");
  //     }
  //   };
  
  //   if (loading) {
  //     return <img className="loading-prompt" src={Loading}/>
  // }
    
    return(
      <>
        {!loading ? <div className="item-detail-container">
          <ItemDetail key={products.id} id={`${products.id}`} name={products.name} price={products.price} stock={products.stock} image={products.image}  description={products.description}/>
        </div> : console.log('App ended loading')}
      </>
    );
  };

export default ItemDetailContainer;
 