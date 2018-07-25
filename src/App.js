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



  render() {
    const {books} = this.state;
    return (
      <div className="app">

        <Route exact path="/search" render={() => (
          <Search/>
        )} />

        <Route exact path="/" render={() => (
          <ListBooks books={books}/>
        )}/>

      </div>
    )
  }
}

export default BooksApp

//Thanks for the help to My Reads A book Tracking App with Edoh Webinar: https://www.youtube.com/watch?time_continue=46&v=PF8fCAKR0-I
