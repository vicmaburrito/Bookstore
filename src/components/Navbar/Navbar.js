import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar d-flex justify-content-between">
      <div className="display-4 ">
        <Link to="/" className="text-black text-decoration-none p-3">
          Bookstore
        </Link>
        <FontAwesomeIcon icon={faBook} />
      </div>
      <div>
        <Link to="/" className="text-black text-decoration-none">Books</Link>
        <br />
        <Link to="/categories" className="text-black text-decoration-none">Categories</Link>
      </div>
    </nav>
  );
}

export default Navbar;
