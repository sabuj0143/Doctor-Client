
import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Service from "./Service";
import Doctors from "../Doctors/Doctors";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Doctors></Doctors>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;