import './App.css';
import ResponsiveAppBar from './Components/Navbar/Navbar';
import ContainerProductList from './Components/container-product-list/ContainerProductList'
import React, {useEffect} from 'react';


const App = () => {
  useEffect(() =>{
    const timer = setTimeout(() =>{
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return ( 
    <div id="App">
      <ResponsiveAppBar />
      <hr />
      <ContainerProductList className='ContainerProductList' />
    </div>
  );
}

export default App;

