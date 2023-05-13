import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Service from "../components/Home/Service";
import Doctors from "../components/Doctors/Doctors";
import Booking from "../components/Booking/Booking";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Bookings from "../components/Booking/Bookings";
import PrivateRoute from "../Private/PrivateRoute";

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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'service',
        element: <Service></Service>
      },
      {
        path: '/bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
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