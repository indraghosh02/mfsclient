import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../Components/Register";
import Login from "../Components/Login";

import Dashboard from "../Components/Dashboard";

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
    }
  ]);

  export default router;