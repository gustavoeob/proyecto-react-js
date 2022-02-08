import React from 'react';
import { useState } from 'react';
import {ItemCount} from "./ItemCount";

const ItemDetail = ({ id, image, name, description, stock: setStockSelected }) => {
    const Item = ({
        id,
        name,
        description,
        image,
        stock,
        setSelectedItem,
      }) => {
    
        const [stockSelected, setStockSelected] = useState(stock);
        const selectItem = () => setSelectedItem({ id, image, name, description, stock: setStockSelected });
    
        
      
    
        return (
            <div>
                <h2>Nombre del producto: {name}</h2>
                <h2>Descripción del producto: {description}</h2>
                <img src={image} alt="image of product" />
                <ItemCount stock={stock} setStockSelected={setStockSelected} />
                <button onClick={selectItem}>Seleccionar producto</button>
                <button onClick={ItemDetail}></button>
            </div>
        );
    };
}
    
    export default ItemDetail