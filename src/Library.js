import React, {Component} from 'react';
import Bookshelf from './Bookshelf';

class Library extends Component {
  render () {

    return (
      <div className="list-books">
         <div className="list-books-title">
           <h1>MyReads</h1>
         </div>
         <div className="list-books-content">
           <div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>

                </li>
              </ol>
            </div>
          </div>
      )
  }
}

export default Library;
