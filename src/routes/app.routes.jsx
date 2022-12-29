import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home';
import { Favs } from '../pages/Favs';
import { Cart } from '../pages/Cart';
import { Orders } from '../pages/Orders';
import { Details } from "../pages/Details"

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/favs' element={<Favs/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/details/:id' element={<Details/>} />
    </Routes>
  )
}