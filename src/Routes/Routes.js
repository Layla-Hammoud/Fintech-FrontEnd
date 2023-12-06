import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'

import SideBar from '../Layouts/SideBar/SideBar'
import TransactionTable from '../Components/TransactionTable/TransactionTable'
import PromotionPage from '../Pages/promotionPage'
// import PromotionCards from '../Components/Promotions/PromotionCards'
import SectionUserDashboard from '../Components/Promotions/section'
// import SavingPage from '../Pages/Login.js'
import GridPromotion from '../Components/GridPromotion/GridPromotion'


const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<SideBar/>} >
   <Route path='history' element={<GridPromotion/>} />
   <Route path='/promotions' element={<PromotionPage/>}></Route>
   </Route>
   <Route path='do' element={<SectionUserDashboard/>} />

  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes;
