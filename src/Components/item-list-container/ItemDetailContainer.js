import React from 'react';
import {useEffect, useState} from 'react';
import { productsAPI } from '../helpers/promises';
import { items } from '../Product/Items';
import Item from '../Product/Item'
import ItemCount from '../Product/ItemCount';


const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [stockSelected, setStockSelected] = useState(0);
  
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
  
      <div className="selectedItemDetailContainer">
        <h1 className="app-title">Whoopie.co</h1>
        <p className="landingTitle">The products you love are here!</p>
        <div className="itemContainer">  
        <div className="selectedItemContainerDetail">
          <div className="DetailLeftSideContainer">  
          <p className="selectedItemDetail selectedNameDetail">{selectedItem ? selectedItem.name : ""}</p>
          <p className="selectedItemDetail selectedImageDetail">{selectedItem ? selectedItem.image : ""}</p>
          </div>
          <div className="DetailRightSideContainer">
            <p className="selectedItemDetail selectedPriceDetail">{selectedItem ? selectedItem.price : ""}</p>
            <p className="selectedItemDetail selectedIdDetail">{selectedItem ? selectedItem.id : ""}</p>
            <p className="selectedItemDetail selectedImageDetail">{selectedItem ? selectedItem.description : ""}</p>
            <ItemCount className="product-count-detail" stock={selectedItem ? selectedItem.stock : ""} setStockSelected={setStockSelected} initial={1} />
          <button className="selectItemBtn">Add to bag</button>
            
          </div>

          <div className="Extra"></div>
        </div>
        {items.map(({ id, name, price, stock, image, description }) => (
          <Item key={id} id={`ID: ${id}`} name={name} price={`Price: $${price}`} stock={stock} image={image} setSelectedItem={setSelectedItem} description={description}/>
          ))}
        </div>
      </div>
    );
  };

export default ItemDetailContainer;
