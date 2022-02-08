import React from 'react';
import {useEffect, useState} from 'react';
import { productsAPI } from '../helpers/promises';
import { Items } from '../Product/Items';
import Item from '../Product/Item'


const ItemDetailContainer = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts  = async () => {
        try{
            const result = await productsAPI;
            setProducts(result)
        } catch (error) {
            console.log(error);
        }finally {
            console.log('productsAPI called finished successfully');
        }
    }
    return(
    <div>
        <h1>Lista de productos</h1>
        <h3>Producto seleccionado</h3>
            selectedItem && selectedItem.image 
                <img src={selectedItem.image} alt="selectedItemImage" />
        <p>{selectedItem && selectedItem.name}</p>
        <p>{selectedItem && selectedItem.description}</p>
        <p>ID: {selectedItem && selectedItem.id}</p>
        <p>Stock seleccionado: {selectedItem && selectedItem.stock}</p>
        <hr />
            {Items.map(({ id, name, image }) => (
                <Item
                key={id}
                id={id}
                name={name}
                description={`${name} con id: ${id}`}
                image={image}
                setSelectedItem={setSelectedItem}
                />
            ))}
        </div>
    );
};

export default ItemDetailContainer;
