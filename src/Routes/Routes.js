import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import StatisticCard from '../Components/StatisticCard/StatisticCard'
import SideBar from '../Layouts/SideBar'
import TransactionTable from '../Components/TransactionTable/TransactionTable'
import PromotionPage from '../Pages/promotionPage'
// import PromotionCards from '../Components/Promotions/PromotionCards'
import SectionUserDashboard from '../Components/Promotions/section'
// import SavingPage from '../Pages/Login.js'
const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<StatisticCard/>} >
   <Route path='history' element={<TransactionTable/>} />
   <Route path='/promotions' element={<PromotionPage/>}></Route>
   </Route>
   <Route path='do' element={<SectionUserDashboard/>} />

  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes;
