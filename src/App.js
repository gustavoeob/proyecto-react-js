import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Routes from './Components/routes/Routes'
import { CartProvider } from './Components/Context/CartContext';

const App = () => {

  return ( 
    <CartProvider>
      <Routes/>
    </CartProvider>
  );
}

export default App;

