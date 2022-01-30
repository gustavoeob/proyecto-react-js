import React, { useState } from 'react';


const ProductCount = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState(initial);

    const decrease = () => {
        if (counter <= 0) return;
        setCounter(counter - 1)
    }
    const increase = () => {
        if (counter >= stock) return;
        setCounter(counter + 1)
    }
    const Counter = () => {
        if (stock === 0) return;
        setCounter(0)
    }

  return (
    <>
        <div className="product-count">
            <button className="decrease"onClick={decrease}>-</button>
            <span className="counter">{counter}</span>
            <button className="increase" onClick={increase}>+</button>
        </div>
    </>
  );
};

export default ProductCount;
