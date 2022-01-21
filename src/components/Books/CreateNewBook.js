import React from 'react';

// eslint-disable-next-line react/prop-types
const Book = ({ category, title, author }) => (
  <li className="book">
    <p>{category}</p>
    <h3>{title}</h3>
    <span>{author}</span>
  </li>
);

export default Book;
