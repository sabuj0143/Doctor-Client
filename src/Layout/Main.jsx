import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar/Navbar";
import Footer from "../components/Home/Footer/Footer";

const Main = () => {
    return (
        <div className="w-full mx-auto">
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;