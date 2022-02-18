import React, { useState } from 'react';
import Cart from '../Navbar/Cart'
import {Link} from 'react-router-dom'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState(initial);

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
        <div>
            <button className="decrease"onClick={decrease}>-</button>
            <span className="counter">{counter}</span>
            <button  className="increase" onClick={increase}>+</button>
        </div>
        <Link to='/cart'>
            <button className="selectItemBtn add-to-bag-btn">Add to bag</button>
        </Link>
    </>
  );
};

export default ItemCount;
