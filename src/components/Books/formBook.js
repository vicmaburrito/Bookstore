import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/books/index';

const formBook = () => {
  const book = {
    id, title, author, category,
  };

  const dispatch = useDispatch();
  dispatch(allActions.books.addBook(book));

  return (
    <div className="d-flex justify-content-center mt-5">
      <form>
        <h2>Add a Book</h2>
        <input className="form-control" type="text" placeholder="Write a book" />
        <input className="form-control" type="text" placeholder="Write a Authot" />
      </form>
    </div>
  );
};

export default formBook;
