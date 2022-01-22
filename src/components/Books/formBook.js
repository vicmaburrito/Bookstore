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
      <div className="form-container">
        <form onSubmit={submitBookToStore}>
          <p className="form-title">ADD NEW BOOK</p>
          <input className="input-title" type="text" placeholder="Write a book" onChange={(e) => setTitle(e.target.value)} value={title} />
          <select className="select-category" onChange={(e) => setCategory(e.target.value)} value={category}>
            <option>Category</option>
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
