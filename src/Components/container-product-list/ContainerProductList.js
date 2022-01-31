import Product from '../Product/Product'
import { useState } from "react";

const products = [
  { id: "1", name: "Lemon Pie", price: "3.50", stock: "16", description: "a", imageUrl: "./Product/productImg/lemon-pie.jpeg"},
  { id: "2", name: "Cheesecake", price: "4.49", stock: "8", description: "", imageUrl: "./Product/productImg/cheesecake-original.jpeg"},
  { id: "3", name: "Carrot Cake", price: "2.59", stock: "11", description: "", imageUrl: "./Product/productImg/carrot-cake.jpeg"},
  { id: "4", name: "Oreo Cinnamon Roll", price: "2.99", stock: "5", description: "", imageUrl: "./Product/productImg/oreo-cinnamon-roll.jpeg"},
  { id: "5", name: "Coke Can", price: "2.49", stock: "55", description: "", imageUrl: "./Product/productImg/coke-can.jpg"},
  { id: "6", name: "Bottle of Water", price: "1.99", stock: "22", description: "", imageUrl: "./Product/productImg/bottle-of-water.jpeg"},
  { id: "7", name: "Cappuccino", price: "4.19", stock: "100", description: "", imageUrl: "./Product/productImg/cappuccino.jpeg"},
  { id: "8", name: "Macchiato", price: "3.99", stock: "89", description: "", imageUrl: "./Product/productImg/macchiato.jpeg"}
];


const ContainerProductList = () => {
  const [selected, setSelected] = useState(0);

  return( 
    <div>
      <h1 className="app-title">Whoopie.co</h1>
      <p className="landingTitle">The products you love are here!</p>
      <div className="itemContainer">  
      {products.map(({ id, name, price, stock, description, imageUrl }) => (
        <Product key={id} name={name} price={price} stock={stock} description={description} imageUrl={imageUrl}/>
        ))}
      </div>
    </div>
  );
};

export default ContainerProductList;
