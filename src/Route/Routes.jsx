import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import About from "../components/Home/About";
import Service from "../components/Home/Service";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: 'service',
            element: <Service></Service>
        }
      ]
    }
  ]);

export default router;