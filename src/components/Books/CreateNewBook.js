import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Button from './RemoveBtn';
import '../Assets/BooksPanel.css';

const percentage = 70;

const Book = ({
  id, category, title,
}) => (
  <>
    <div className="book-container d-flex justify-content-between">
      <div>
        <p className="book-category">{category}</p>
        <p className="book-title">{title}</p>
        <p className="book-author">Author Name</p>
        <Button id={id} />
      </div>
      <div className="section-two">
        <div className="percentage-sec">
          <div style={{ width: 70, height: 70 }}>
            <CircularProgressbar value={percentage} />
          </div>
          <div>
            <h2 className="percent-complete">70%</h2>
            <span className="completed">Completed</span>
          </div>
        </div>
        <div>
          <p className="current-chapter">Current Chapter</p>
          <p className="chapter-title">Chapter 17</p>
          <button type="button" className="update-btn">Update Progress</button>
        </div>
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
