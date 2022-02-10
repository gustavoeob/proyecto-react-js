import React from 'react'
import ResponsiveAppBar from '../Navbar/Navbar';
import ItemListContainer from '../item-list-container/ItemListContainer';
import ItemDetailContainer from '../item-list-container/ItemDetailContainer';

import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
        <ResponsiveAppBar/>
        <Switch>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="*" element={"<h2> 404 Page not found! </h2>"}/>
        </Switch>
    </BrowserRouter>
  )
}

export default Routes