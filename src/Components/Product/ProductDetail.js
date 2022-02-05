import React from 'react';
import { useState } from 'react';
import {ProductCount} from "../Product/ProductCount";

const Item = ({
    id,
    name,
    description,
    image,
    stock,
    setSelectedItem,
  }) => {

    const [stockSelected, setStockSelected] = useState(0);

    const selectItem = () =>
      setSelectedItem({ id, image, name, description, stock: stockSelected });

    const ProductDetail = () => {
        return (
            <div>
                <h2>Nombre del producto: {name}</h2>
                <h2>Descripción del producto: {description}</h2>
                <img src={image} alt="image of product" />
                <ProductCount stock={stock} setSotckSelected={setStockSelected} />
                <button onClick={selectItem}>Seleccionar producto</button>
            </div>
        );
    };
}
export default ProductDetail;
