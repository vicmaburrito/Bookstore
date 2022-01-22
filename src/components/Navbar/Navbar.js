import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="p-2 navbar d-flex justify-content-between">
      <div className="display-4 ">
        <Link to="/" className="title-navbar text-blue text-decoration-none">
          Bookstore CMS
        </Link>
      </div>
      <div>
        <Link to="/" className="mr-2 p-3 h5 text-black text-decoration-none">Books</Link>
        <Link to="/categories" className="mr-2 p-3 h5 text-black text-decoration-none">Categories</Link>
      </div>
    </nav>
  );
}

export default Navbar;
