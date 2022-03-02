import React from 'react'
import Appbar from '../Navbar/Appbar';
import ItemListContainer from '../item-list-container/ItemListContainer';
import ItemDetailContainer from '../item-list-container/ItemDetailContainer';
import Err404 from '../Product/Err404'
import Cart from '../Navbar/Cart'
import FirstHeader from '../Section/FirstHeader';
import Checkout from '../Navbar/Checkout'

import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

const Routes = () => {
  return (
  <>
    <BrowserRouter>
        <Appbar/>
        <Switch>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route exact path="*" element={<Err404/>}/>
        </Switch>
    </BrowserRouter>
  </>

  )
}

export default Routes