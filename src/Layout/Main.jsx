import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar/Navbar";

const Main = () => {
    return (
        <div className="w-full mx-auto">
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;