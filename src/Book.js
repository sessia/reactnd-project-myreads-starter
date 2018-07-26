import React, { Component } from 'react';

class Book extends Component {

  state = {
    shelf: 'none'
  }

//if book already on shelf
  componentDidMount() {
    const { book } = this.props;
    if(book.shelf) {
      this.setState({ shelf: book.shelf })
    }
  }

  updateShelf (value){
    const {onUpdateShelf} = this.props;
    onUpdateShelf(this.props, value);
    this.setState({shelf: value});
  };

  render(){
   const {title, authors, book} = this.props;

   return(
     <div className="book">
       <div className="book-top">
         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
         </div>
         <div className="book-shelf-changer">
             <select onChange={(event) => this.UpdateShelf(event.target.value)} value={this.state.shelf}>
               <option value="move" disabled>Move to...</option>
               <option value="currentlyReading">Currently Reading</option>
               <option value="wantToRead">Want to Read</option>
               <option value="read">Read</option>
               <option value="none">None</option>
             </select>
           </div>
         </div>
         <div className="book-title">{title}</div>
         <div className="book-authors">{authors}</div>
     </div>
   );
 }
}

export default Book;
