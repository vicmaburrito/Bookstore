import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Bookstore</Link>
      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}
export default Navbar;
