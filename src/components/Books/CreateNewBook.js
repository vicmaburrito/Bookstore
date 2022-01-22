import React from 'react';
import PropTypes from 'prop-types';
// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Button from './RemoveBtn';
import '../Assets/BooksPanel.css';

// const percentage = 70;

const Book = ({
  id, category, title,
}) => (
  <>
    <div className="book-container d-flex justify-content-between">
      <p className="book-category">{category}</p>
      <p className="book-title">{title}</p>
      <p className="book-author">Author Name</p>
      <Button id={id} />
      <div className="d-flex justify-content-end">
        hello world
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
