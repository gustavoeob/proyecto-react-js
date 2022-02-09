import './App.css';
import ResponsiveAppBar from './Components/Navbar/Navbar';
// import ItemListContainer from './Components/item-list-container/ItemListContainer'
import ItemDetailContainer from './Components/item-list-container/ItemDetailContainer';


const App = () => {


  return ( 
    <div id="App">
      <ResponsiveAppBar />
      <hr />
      {/* <ItemListContainer className='ContainerProductList' /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;

