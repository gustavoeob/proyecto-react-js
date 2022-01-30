import Product from '../Product/Product'
import { useState } from "react";

const products = [
  { id: "1", name: "Lemon Pie", price: "3.50", stock: "16" },
  { id: "2", name: "Cheesecake", price: "4.49", stock: "8" },
  { id: "3", name: "Carrot Cake", price: "2.59", stock: "11" },
  { id: "4", name: "Oreo Cinnamon Roll", price: "2.99", stock: "5" },
  { id: "5", name: "Coke Can", price: "2.49", stock: "55" },
  { id: "6", name: "Bottle of Water", price: "1.99", stock: "0"}
];

const ContainerProductList = () => {
  const [selected, setSelected] = useState(0);

  return( 
    <div>
      <h1 className="app-title">Whoopie.co</h1>
      <p className="landingTitle">The products you love are here!</p>
      {products.map(({ id, name, price, stock }) => (
        <Product key={id} name={name} price={price} stock={stock}/>
      ))}
    </div>
  );
};

export default ContainerProductList;
