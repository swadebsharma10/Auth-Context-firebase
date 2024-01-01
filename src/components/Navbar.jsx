import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const {user, logOutUser} = useContext(AuthContext);

    const menus = <>
    <li><NavLink
    to="/"
    className={({ isActive }) =>
       isActive ? "text-orange-600 " : ""
    }
  >
   Home
  </NavLink></li>
    <li><NavLink
    to="/order"
    className={({ isActive }) =>
       isActive ? "text-orange-600 " : ""
    }
  >
   Order
  </NavLink></li>
    <li><NavLink
    to="/login"
    className={({ isActive }) =>
       isActive ? "text-orange-600 " : ""
    }
  >
   Login
  </NavLink></li>
    <li><NavLink
    to="/register"
    className={({ isActive }) =>
       isActive ? "text-orange-600 " : ""
    }
  >
  Register
  </NavLink></li>
    </>

    return (
        <div>
        <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-primary-content rounded-box w-52">
              {menus}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">AuthContext</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {menus}
          </ul>
        </div>
        <div className="navbar-end">
       {user ? <button onClick={()=> logOutUser()} className="btn btn-sm btn-secondary">Sign Out</button>
    :   <Link to='/login'><button className="btn btn-sm btn-secondary">Login</button></Link> }
        </div>
      </div>
        </div>
    );
};

export default Navbar;