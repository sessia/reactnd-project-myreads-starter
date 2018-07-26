import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import ListBooks from './ListBooks'
import Bookshelf from './Bookshelf'
import Book from './Book'
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

//update books on the shelf
  updateShelf = (book, shelf) => {
    let books;
    if (this.state.books.findIndex(b => b.id === book.id) > 0) {
      // change the position of an existing book in the shelf
      books = this.state.books.map(b => {
        if (b.id === book.id) {
          return {...book, shelf}
        } else {
          return b
        }
      })
    } else {
      // add a new book to the shelf
      books = [...this.state.books, {...book, shelf}]
    }

    this.setState({books})

    BooksAPI.update(book, shelf).then((data) => {
      // shelf updated on the server
    })
  }


  render() {
    const {books} = this.state;
    return (
      <div className="app">

        <Route exact path="/search" render={() => (
          <Search
            books={this.state.books}
            onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)}/>
        )} />

        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books}
            onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)}/>
        )}/>

      </div>
    )
  }
}

export default BooksApp

//Thanks for the help to My Reads A book Tracking App with Edoh Webinar: https://www.youtube.com/watch?time_continue=46&v=PF8fCAKR0-I
