import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import SideBar from '../Layouts/SideBar'
import TransactionTable from '../Components/TransactionTable'

const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
   <Route path='/'  element={<SideBar />} />
   <Route path='/history' element={<TransactionTable/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes

