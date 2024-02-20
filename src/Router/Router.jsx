import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import Myjobs from "../Pages/Myjobs";
import JobDetails from "../Pages/JobDetails"
import SalaryPage from "../Pages/SalaryPage"
import SigninPage from "../Pages/SigninPage";
import SignupPage from "../Pages/SignUpPage";
import ContactPage from "../Pages/ContactPage";
import DashboardPage from "../Pages/DashboardPage";

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
      path:"/sign-in",
      element:<SigninPage/>
    },
    {
      path:"/sign-up",
      element:<SignupPage/>
    },
    {
      path:"/dashboard",
      element:<DashboardPage/>
    },
    {
      path:"/contact",
      element:<ContactPage/>
    }
    
    
  ]);

  export default router