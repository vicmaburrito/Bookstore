import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="p-2 navbar d-flex justify-content-between">
      <div className="display-4 ">
        <Link to="/" className="title-navbar text-decoration-none">
          Bookstore CMS
        </Link>
        <Link to="/" className="navbar-items text-decoration-none">Books</Link>
        <Link to="/categories" className="navbar-items text-decoration-none">Categories</Link>
      </div>
      <div className="Oval">
        <FontAwesomeIcon icon={faUser} className="Mask" />
      </div>
    </nav>
  );
}

export default Navbar;
