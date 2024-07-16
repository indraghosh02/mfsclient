import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../Components/Register";
import Login from "../Components/Login";

import Dashboard from "../Components/Dashboard";
import UserManagement from "../Components/UserManagement";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Register></Register>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path:'dashboard',
      element:  <Dashboard></Dashboard>,
    },
    {
      path:'userManagement',
      element:  <UserManagement></UserManagement>,
    }
  ]);

  export default router;