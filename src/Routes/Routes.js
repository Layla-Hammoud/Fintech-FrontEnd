import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import SideBar from '../Layouts/SideBar'
// import TransactionTable from '../Components/TransactionTable'
import CardBalance from '../Components/CardBalance'

const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
   <Route path='/'  element={<SideBar />} />
   <Route path='/history' element={<CardBalance title='USD Balance' amount='128,320' unit='$' borderColor='#0F5533' backGroundColor='green'/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes

