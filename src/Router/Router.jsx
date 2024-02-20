import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import Myjobs from "../Pages/Myjobs";
import JobDetails from "../Pages/JobDetails"
import LoginPage from "../Pages/LoginPage";
import SalaryPage from "../Pages/SalaryPage"
import SignupPage from "../Pages/SignupPage"
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {path:"/" , element:<Home/>},
        {path:"/post-job" , element:<CreateJob/>},
        {path:"/my-job" , element:<Myjobs/>},
        {path:"/salary" , element:<SalaryPage/>},
        {path:"/job/:id" , element:<JobDetails/>},
      ]
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/signup",
      element:<SignupPage/>
    }
    
    
  ]);

  export default router