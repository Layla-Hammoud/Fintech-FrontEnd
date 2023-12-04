import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import PromotionPage from '../Pages/promotionPage'

const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/promotions' element={<PromotionPage/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes

