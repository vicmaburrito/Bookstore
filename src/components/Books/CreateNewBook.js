import React from 'react';
import PropTypes from 'prop-types';
import Button from './RemoveBtn';
import '../Assets/BooksPanel.css';

const Book = ({
  id, category, title, author,
}) => (
  <div className="">
    <span className="book-category">{category}</span>
    <span className="book-title">{title}</span>
    <span>{author}</span>
    <Button id={id} />
  </div>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
