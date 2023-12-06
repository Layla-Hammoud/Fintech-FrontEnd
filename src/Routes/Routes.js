import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
// import SectionMerchantDashboard from '../Components/sectionMerchantDashboard.js'
// import SectionMerchantDashboardLayout from '../Components/sectionMerchantDashboardLayout.js'
import SideBar from '../Layouts/SideBar'
import TransactionTable from '../Components/TransactionTable/TransactionTable'
import PromotionPage from '../Pages/promotionPage'
import PaginationComponent from '../Components/pagination'
// import PromotionCards from '../Components/Promotions/PromotionCards'
// import SavingPage from '../Pages/Login.js'



const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<SideBar/>} >
   <Route path='history' element={<TransactionTable/>} />
   <Route path='/promotions' element={<PromotionPage/>}></Route>
   </Route>
   <Route path='/pagi' element={<PaginationComponent/>}></Route>


  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes;
