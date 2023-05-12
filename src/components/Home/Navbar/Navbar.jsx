import { Link } from 'react-router-dom';
import logo from '../../../../public/doctorLogo.webp'
const Navbar = () => {
    return (
        <div className="navbar justify-around bg-base-100 h-[100px]">
            <div className="flex">
                <img className='w-[60px] h-[60px]' src={logo} alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/doctors'>Doctors</Link></li>
                    <li><Link to="/service">Service</Link></li>
                </ul>
            </div>
            <div>
                <button className="btn btn-active">Login</button>
            </div>
        </div>
    );
};

export default Navbar;