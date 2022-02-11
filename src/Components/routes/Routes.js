import React from 'react'
import Navbar from '../Navbar/Navbar';
import ItemListContainer from '../item-list-container/ItemListContainer';
import ItemDetailContainer from '../item-list-container/ItemDetailContainer';
import Err404 from '../Product/Err404'

import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

const Routes = () => {
  return (
  <>
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="*" element={<Err404/>}/>
        </Switch>
    </BrowserRouter>
  </>

  )
}

export default Routes