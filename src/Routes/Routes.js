import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react'
import SavingPage from '../Pages/Login.js'


const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
    {/* <Route path='/saving' element={<SavingPage/>}></Route> */}
    <Route path='/editsaving' element={<SavingPage/>}></Route>

  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes

