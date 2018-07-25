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

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => {
      this.setState(({ books }) => {
        if (books.find(b => b.id === book.id)) {
          books = this.state.books.map(b => {
            //if book already added
            if (b.id === book.id) {
              return {...book, shelf}
            } else {
              return b
            }
        })
      }
        else {
          // else add the new book to the shelf
          books = [...this.state.books, {...book, shelf}]
        }

      this.setState({books})

      })
    })
  }


  render() {
    const {books} = this.state;
    return (
      <div className="app">

        <Route exact path="/search" render={() => (
          <Search/>
        )} />

        <Route exact path="/" render={() => (
          <ListBooks books={books}
            onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)}/>
        )}/>

      </div>
    )
  }
}

export default BooksApp

//Thanks for the help to My Reads A book Tracking App with Edoh Webinar: https://www.youtube.com/watch?time_continue=46&v=PF8fCAKR0-I
