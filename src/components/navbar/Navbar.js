import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbar__navigation">
          <div className="navbar__left-content">
            <div className="navbar__logo">
              <Link to="/">SuperFans</Link>
            </div>
            {/* <button type="button" className="nav-btn">
              <FaAlignRight className="nav-icon" />
            </button> */}
            <div className="navbar__navigation-item">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Offers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar__right-content">
            <div className="navbar__search">
              <input type="text" placeholder="Search.." className="navbar__search-input" />
              <FaSearch color="white" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
