import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);
   const navigate = useNavigate();


   
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/auth/login'); // ✅ Redirect to login after logout
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

    return (
        <div className="w-fit  navbar navbar-end 
        pr-0 ">
  
      <div className="navbar-center hidden lg:flex ">
      <ul className="menu menu-horizontal px-1 text-base-300">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/career">Career</NavLink></li>
      </ul>
    </div>
     <div className="navbar-end gap-3 w-fit ml-70">
      <img src="/src/assets/user.png" alt="User" className="h-8 w-8 rounded-full" />
   {user ? (
          <>
            <p className="text-sm font-medium">Welcome, {user.email}</p>
            <button className="btn btn-outline btn-error btn-sm" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
          <button className="btn btn-neutral btn-sm" onClick={() => navigate('/auth/login')}>
            Login
          </button>
        )}
        </div>
</div>
    );
};

export default Navbar;