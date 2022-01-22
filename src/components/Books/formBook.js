/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../redux/books/index';
import categories from './BooksCategories';
import '../Assets/Form.css';

const FormBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const submitBookToStore = (e) => {
    e.preventDefault();
    const item_id = Date.now();

    const book = {
      item_id, title, author, category,
    };

    dispatch(allActions.PostToApi(book));
    setTitle('');
    setCategory('');
    setAuthor('');
  };
  return (
    <>
      <div className="line" />
      <div className="d-flex justify-content-center mt-5">
        <form className="d-flex flex-column my-5" onSubmit={submitBookToStore}>
          <h2>Add a Book</h2>
          <input className="my-2 inp-st" type="text" placeholder="Write a book" onChange={(e) => setTitle(e.target.value)} value={title} />
          <select className="field-select" onChange={(e) => setCategory(e.target.value)} value={category}>
            <option>Select a Category</option>
            {
              categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))
            }
          </select>
          <input className="my-2 inp-st" type="text" placeholder="Write a Author" onChange={(e) => setAuthor(e.target.value)} value={author} />
          <input type="submit" className="btn-form align-self-end" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default FormBook;
