import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from '../Pages/Login/LoginPage'
import SignupPage from '../Pages/Signup/SignupPage'
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" Component={SignupPage}></Route>
        <Route path="/sign-in" Component={LoginPage}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
