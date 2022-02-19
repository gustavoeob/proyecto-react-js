import React, { useState, useEffect } from 'react';


const ItemCount = ({ stock, setStockSelected, initial, onAdd }) => {
    const [counter, setCounter] = useState(initial);


    useEffect(() => {
        setStockSelected(counter);
      }, [counter]);

    const decrease = () => {
        if (counter <= 0) return;
        setCounter(counter - 1)
    }
    const increase = () => {
        if (counter >= stock) return;
        setCounter(counter + 1)
    }

    const a = () => {
        console.log("clicked")
    }
  return (
    <>
        <div className="counter-container">
            <button className="decrease"onClick={decrease}>-</button>
            <span className="counter">{counter}</span>
            <button  className="increase" onClick={increase}>+</button>
        </div>
            <button onClick={() =>{onAdd(counter)}} className="selectItemBtn add-to-bag-btn">Add to bag</button>
    </>
  );
};

export default ItemCount;
