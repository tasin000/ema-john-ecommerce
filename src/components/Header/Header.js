import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
     return (
          <nav>
               <div className="nav-bar">
                    <div className="logo">
                         <Link to="/">
                              <img src={logo} alt="Loading..." />
                         </Link>
                    </div>

                    <div className="nav-links">
                         <NavLink to="/">Shop</NavLink>
                         <NavLink to="/orders">Orders</NavLink>
                         <NavLink to="/order-review">Order Review</NavLink>
                    </div>
               </div>
          </nav>
     );
};

export default Header;