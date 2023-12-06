import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'

import SideBar from '../Layouts/SideBar/SideBar'
import TransactionTable from '../Components/TransactionTable/TransactionTable'
import PromotionPage from '../Pages/promotionPage'
import SavingSection from '../Components/SavingModal/SavingSection.js'
import SavingPage from '../Pages/Login.js'
const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<SideBar/>} >
   <Route path='history' element={<TransactionTable/>} />
   <Route path='/promotions' element={<PromotionPage/>}></Route>
   <Route path='/EditModal' element={<SavingPage/>}></Route>
   <Route path='/SavingSection' element={<SavingPage/>}></Route>

   </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes;
