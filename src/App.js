import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import ListBooks from './ListBooks'
import {Route} from 'react-router-dom'


class BooksApp extends Component {

  state = {
    books: [],
    query: '',
    showingBooks: []
  }

//get all books
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }


//update books on the shelf: credits to https://stackoverflow.com/questions/50531678/react-pass-function-as-prop
updateShelf = (book, shelf) => {
this.setState(prevState => {
  const booksCopy = prevState.books.filter(b => b.id !== book.id);
  booksCopy.push({ ...book, shelf });
  return { books: booksCopy }
});
BooksAPI.update(book, shelf);
};


  render() {
    return (
      <div className="app">

      <Route exact path="/" render={() => (
        <ListBooks
        books={this.state.books}
        onUpdateShelf={this.updateShelf}/>
      )}/>

        <Route exact path="/search" render={() => (
          <Search
            onUpdateShelf={this.updateShelf}/>
        )} />



      </div>
    )
  }
}

export default BooksApp

//Thanks for the help to My Reads A book Tracking App with Edoh Webinar: https://www.youtube.com/watch?time_continue=46&v=PF8fCAKR0-I
