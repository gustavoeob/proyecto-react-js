import './App.css';
import ResponsiveAppBar from './Components/Navbar/Navbar';
import ContainerProductList from './Components/container-product-list/ContainerProductList'

function App() {
  return ( 
    <div id="App">
      <ResponsiveAppBar />
      <hr />
      <ContainerProductList className='ContainerProductList' />
    </div>
  );
}

export default App;

