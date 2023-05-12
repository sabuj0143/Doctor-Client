import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import About from "../components/Home/About";
import Service from "../components/Home/Service";
import Doctors from "../components/Doctors/Doctors";
import Booking from "../components/Booking/Booking";

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
      },
      {
        path: '/doctors',
        element: <Doctors></Doctors>
      },
      {
        path: '/booking/:id',
        element: <Booking></Booking>,
        loader: ({ params }) => fetch(`http://localhost:5000/doctors/${params.id}`)
      }
    ]
  }
]);

export default router;