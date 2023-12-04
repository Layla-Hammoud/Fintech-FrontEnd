import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import SideBar from '../Layouts/SideBar'
import TransactionTable from '../Components/TransactionTable/TransactionTable'

const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<SideBar/>} >
   <Route path='history' element={<TransactionTable/>} />
   </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes

