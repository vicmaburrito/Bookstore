import React from 'react';
import '../Assets/Form.css';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import allActions from '../../redux/books/index';

function FormBook() {
// const FormBook = () => {
  // const [title, setTitle] = useState('');
  // const [category, setCategory] = useState('');
  // const [author, setAuthor] = useState('');
  // const id = Date.now();

  // const book = {
  //   id, title, author, category,
  // };

  // const dispatch = useDispatch();

  // dispatch(allActions.addBook(book));
  // setTitle('');
  // setCategory('');
  // setAuthor('');

  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="d-flex flex-column my-5">
        <h2>Add a Book</h2>
        <input className="my-2 inp-st" type="text" placeholder="Write a book" />
        <input className="my-2 inp-st" type="text" placeholder="Write a Author" />
        <input type="submit" className="btn-form align-self-end" value="Submit" />
      </form>
    </div>
  );
}

export default FormBook;
