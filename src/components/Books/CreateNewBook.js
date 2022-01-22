import React from 'react';
import PropTypes from 'prop-types';
import Button from './RemoveBtn';
import '../Assets/BooksPanel.css';

const Book = ({
  id, category, title,
}) => (
  <>
    <div className="book-container">
      <p className="book-category">{category}</p>
      <p className="book-title">{title}</p>
      <p className="book-author">Author Name</p>
      <Button id={id} />
      <div className="d-flex justify-content-end">
        Hola
      </div>
    </div>
  </>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
