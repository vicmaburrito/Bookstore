import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/books/index';

const Button = ({ id }) => {
  const dispatch = useDispatch();

  const handleBookDelete = (id) => {
    dispatch(allActions.DeleteBookApi(id));
  };

  return (
    <div className="btns-container d-flex">
      <button type="button" className="btn-remove">Comments</button>
      <button type="button" className="btn-remove px-4" onClick={() => handleBookDelete(id)}>Remove</button>
      <button type="button" className="btn-remove px-4">Edit</button>
    </div>
  );
};

Button.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Button;
