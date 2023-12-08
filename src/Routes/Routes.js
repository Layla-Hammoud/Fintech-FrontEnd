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
const AppRoutes = () => {
  return (
      <Routes>
        <Route path="unauthorized" element={<Unauthorized/>}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        {/* <Route element={<ProtectedRoute allowedRoles={['user']} />}> */}
        <Route path="/wallet" element={<SideBar />}>
          <Route path="users" element={<GridUser />} />
          <Route path="history" element={<TransactionTable />} />
          <Route path="transaction" element={<GridPromotion />} />
          <Route path="promotions" element={<PromotionPage />}></Route>
          <Route path="EditModal" element={<SavingPage />}></Route>
          <Route path="SavingSection" element={<SavingPage />}></Route>
        </Route>
        {/* </Route> */}
      </Routes>
  );
};

export default AppRoutes;
