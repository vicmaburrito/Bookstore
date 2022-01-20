import React from 'react';

function formBook() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <form>
        <h2>Add a Book</h2>
        <input className="form-control" type="text" placeholder="Write a book" />
        <input className="form-control" type="text" placeholder="Write a Authot" />
      </form>
    </div>
  );
}

export default formBook;
