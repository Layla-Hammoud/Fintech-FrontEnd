import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../Pages/auth/Signup";
import SignIn from "../Pages/auth/Login";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" Component={Signup}></Route>
        <Route path="/sign-in" Component={SignIn}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
