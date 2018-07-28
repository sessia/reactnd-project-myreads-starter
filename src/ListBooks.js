import React, {Component} from 'react';
import Bookshelf from './Bookshelf';
import {Link} from 'react-router-dom';

class Library extends Component {

  filterShelf = (shelf) => {
    const { books } = this.props;
    return books.filter((book) => book.shelf === shelf);
  }

  render () {
    const { onUpdateShelf } = this.props
    return (
      <div className="list-books">
         <div className="list-books-title">
           <h1>MyReads</h1>
         </div>

         <div className="list-books-content">
           <div>
           <Bookshelf
               name="Currently Reading"
               books={ this.filterShelf('currentlyReading') }
               onUpdateShelf={onUpdateShelf}
               />
             <Bookshelf
               name="Want to Read"
               books={ this.filterShelf('wantToRead') }
               onUpdateShelf={onUpdateShelf}
              />
             <Bookshelf
               name="Read"
               books={ this.filterShelf('read') }
               onUpdateShelf={onUpdateShelf}
              />
        </div>

        </div>

          <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>

      </div>
      );
  }
}

export default Library;
