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
    <div>
      <button type="button" className="btn-remove" onClick={() => handleBookDelete(id)}>Remove</button>
    </div>
  );
};

Button.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Button;
