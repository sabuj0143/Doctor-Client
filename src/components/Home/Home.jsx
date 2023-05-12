
import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Service from "./Service";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;