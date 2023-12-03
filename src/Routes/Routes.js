import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import DataGridPromotions from '../Components/DataGridPromotions'

const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<DataGridPromotions />}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes

