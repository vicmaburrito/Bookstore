import React from 'react';

function Books() {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <form>
          <h2>Add a Book</h2>
          <input className="form-control" type="text" placeholder="Write a book" />
          <input className="form-control" type="text" placeholder="Write a Authot" />
        </form>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <table>
          <tr>
            <th>
              <b>
                &quot;The Lord of the Rings&quot;
              </b>
            </th>
            <th>by</th>
            <th>&quot;J.R.R. Tolkien&quot;</th>
            <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
          </tr>
          <tr>
            <th>
              <b>
                &quot;The Lord of the Rings&quot;
              </b>
            </th>
            <th>by</th>
            <th>&quot;J.R.R. Tolkien&quot;</th>
            <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
          </tr>
          <tr>
            <th>
              <b>
                &quot;The Lord of the Rings&quot;
              </b>
            </th>
            <th>by</th>
            <th>&quot;J.R.R. Tolkien&quot;</th>
            <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
          </tr>
          <tr>
            <th>
              <b>
                &quot;The Lord of the Rings&quot;
              </b>
            </th>
            <th>by</th>
            <th>&quot;J.R.R. Tolkien&quot;</th>
            <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
          </tr>
          <tr>
            <th>
              <b>
                &quot;The Lord of the Rings&quot;
              </b>
            </th>
            <th>by</th>
            <th>&quot;J.R.R. Tolkien&quot;</th>
            <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
          </tr>
          <tr>
            <th>
              <b>
                &quot;The Lord of the Rings&quot;
              </b>
            </th>
            <th>by</th>
            <th>&quot;J.R.R. Tolkien&quot;</th>
            <th><button type="button" className="btn btn-outline-dark btn-sm">Remove</button></th>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Books;
