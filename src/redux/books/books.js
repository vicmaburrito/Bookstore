import { URL } from '../Api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const PostToApi = (payload) => async (dispatch) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    dispatch(addBook(payload));
  }
};

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
