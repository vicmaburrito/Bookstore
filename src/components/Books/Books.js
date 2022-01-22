import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './CreateNewBook';
import allActions from '../../redux/books/index';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    allActions.listBooks().then((result) => dispatch(allActions.getBooks(result)));
  }, [dispatch]);

  return (
    <div className="panel-books">
      {
        books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            category={book.category}
            title={book.title}
            author={book.author}
          />
        ))
      }
    </div>
  );
};

export default Books;
