import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home';
import { Favs } from '../pages/Favs';
import { EditDish } from '../pages/EditDish';
import { Cart } from '../pages/Cart';
import { MyOrders } from '../pages/MyOrders';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/favs' element={<Favs/>} />
      <Route path='/edit' element={<EditDish/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/myorders' element={<MyOrders/>} />
    </Routes>
  )
}