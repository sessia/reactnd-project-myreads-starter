import React, {Component} from 'react';
import Book from './Book';

class Bookshelf extends Component {

  render () {

    const {name, books, updateShelf} = this.props;

    return(
       <div className="bookshelf">
         <h2 className="bookshelf-title">{name}</h2>
         <div className="bookshelf-books">
         <ol className="books-grid">

         {books.map((book, index) => (
         <li key={index}>
           <Book book={book} updateShelf={updateShelf}></Book>
         </li>
            ))}

         </ol>
         </div>
       </div>
     );

 }

}

export default Bookshelf;
