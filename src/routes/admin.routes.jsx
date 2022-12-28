import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home';
import { EditDish } from '../pages/EditDish';
import { Orders } from '../pages/Orders';
import { AddDish } from '../pages/AddDish';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/edit' element={<EditDish/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/add' element={<AddDish/>} />
    </Routes>
  )
}