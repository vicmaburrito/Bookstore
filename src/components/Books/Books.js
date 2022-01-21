import React from 'react';
import { useSelector } from 'react-redux';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="container">
      <ul>
        {
          books.map((book) => (
            {/* console.log(book.title) */}
          ))
        }
      </ul>
    </div>
  );
};

export default Books;
