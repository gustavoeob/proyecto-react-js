import products from '../Product/data'
import { useState } from "react";
import Product from './data'





const ContainerProductList = () => {
  const [selected, setSelected] = useState(0);

  // const productImages = require.context('../Product/productImg', true);
  
  return( 
    <div>
      <h1 className="app-title">Whoopie.co</h1>
      <p className="landingTitle">The products you love are here!</p>
      <div className="itemContainer">  
      {products.map(({ id, alt, name, price, stock}) => (
        <Product key={id} name={name} price={price} stock={stock}/>
        ))}
        
      </div>
    </div>
  );
};

export default ContainerProductList;
