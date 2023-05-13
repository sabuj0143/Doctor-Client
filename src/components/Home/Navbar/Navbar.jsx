import { Link } from 'react-router-dom';
import logo from '../../../../public/doctorLogo.webp'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="navbar justify-around bg-base-100 h-[100px]">
            <div className="flex">
                <img className='w-[60px] h-[60px]' src={logo} alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/doctors'>Doctors</Link></li>
                    {
                        user && <li><Link to="/bookings">My Bookings</Link></li>
                    }
                    <li><Link to="/service">Service</Link></li>
                </ul>
            </div>
            <div>

                {
                    user?.email ? <>
                        <button onClick={handleLogOut} className="btn btn-active">Log out</button>
                    </> :
                        <Link to='/login'>
                            <button className="btn btn-active">Login</button>
                        </Link>
                }


            </div>
        </div>
    );
};

export default Navbar;