import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
     return (
          <nav>
               <div className="nav-bar">
                    <div className="logo">
                         <a href="/">
                              <img src={logo} alt="Loading..." />
                         </a>
                    </div>

                    <div className="nav-links">
                         <a href="/">Orders</a>
                         <a href="/">Order Review</a>
                         <a href="/">Manage Inventory</a>
                    </div>
               </div>
          </nav>
     );
};

export default Header;