import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import SideBar from '../Layouts/SideBar'

const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
   <Route path='/'  element={<SideBar />} />
  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes

