import React, { Component } from 'react';

class Book extends Component {

  state = {
    shelf: ''
  }

  changeBookShelf = (shelf) => {
    const { book, updateShelf } = this.props;
  this.setState({shelf})
  updateShelf(book, this.props.bookshelf);
    }


//if book already on shelf
componentDidMount() {
  const { book } = this.props
  let shelf = book.shelf?book.shelf:'none'
  this.setState({shelf:shelf})
}

  render(){
    const { shelf } = this.state
   return(
     <div className="book">
       <div className="book-top">
         <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: this.props.book.imageLinks ?
           `url(${this.props.book.imageLinks.thumbnail})` : '' }}>
         </div>
         <div className="book-shelf-changer">
             <select value={shelf}
                        onChange={(event) => this.changeBookShelf(event.target.value)}>
               <option value="move" disabled>Move to...</option>
               <option value="currentlyReading">Currently Reading</option>
               <option value="wantToRead">Want to Read</option>
               <option value="read">Read</option>
               <option value="none">None</option>
             </select>
           </div>
         </div>
         <div className="book-title">{this.props.book.title}</div>
         <div className="book-authors">{this.props.book.authors ? this.props.book.authors.toString() : ' '}</div>
     </div>
   );
 }
}

export default Book;
