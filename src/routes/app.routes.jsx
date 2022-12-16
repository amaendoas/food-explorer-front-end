import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home';
import { Favs } from '../pages/Favs';
import { EditDish } from '../pages/EditDish';
import { Order } from '../pages/Order';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/favs' element={<Favs/>} />
      <Route path='/edit' element={<EditDish/>} />
      <Route path='/order' element={<Order/>} />
    </Routes>
  )
}