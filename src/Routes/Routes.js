import { Route, Routes } from "react-router-dom";
import React from "react";
import Unauthorized from '../Pages/unauthorizedPage/Unauthorized.js'
import SideBar from "../Layouts/SideBar/SideBar";
import TransactionTable from "../Components/TransactionTable/TransactionTable";
import PromotionPage from "../Pages/promotionPage";
import SavingSection from "../Components/SavingModal/SavingSection.js";
import SignupPage from "../Pages/Signup/SignupPage.js"
import SavingPage from "../Pages/Login.js";
import GridUser from "../Components/GridUser/GridUser";
import GridTransaction from "../Components/GridTransaction/GridTransaction";
import GridPromotion from "../Components/GridPromotion/GridPromotion";
import LoginPage from "../Pages/Login/LoginPage.js"
import ProtectedRoute from "./ProtectedRoute.js";
import Merchants from '../Pages/AllMerchants/Merchants.js'
import MerchantDashboard from "../Pages/MerchantDashboard/MerchantDashboard.js";
import UserDashboard from '../Pages/UserDashboard/UserDashboard.js'
const AppRoutes = () => {
  return (
      <Routes>
        <Route path="unauthorized" element={<Unauthorized/>}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        {/* <Route element={<ProtectedRoute allowedRoles={['user']} />}> */}
        <Route path="/wallet" element={<SideBar />}>
          <Route path="MerchantDashboard" element={<MerchantDashboard />} />
          <Route path="UserDashboard" element={<UserDashboard />} />
          <Route path="buy-usdt" element={<Merchants />}></Route>
          <Route path="promotions" element={<PromotionPage />}></Route>
          <Route path="promotion-table" element={<GridPromotion />}></Route>
          <Route path="transaction-table" element={<TransactionTable />}></Route>
          <Route path="users" element={<GridUser />} />

          
        </Route>
        {/* </Route> */}
        </Route>
      </Routes>
  );
};

export default AppRoutes;
