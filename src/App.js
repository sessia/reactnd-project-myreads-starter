import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import Library from './Library'
import Search from './Search';
import {Route, Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">

        <Route exact path="/search" render={() => (
          <Search/>
        )} />

        <Route exact path="/" render={() => (
          <Library/>
        )} />

      </div>
    )
  }
}

export default BooksApp

//Thanks for the help to My Reads A book Tracking App with Edoh Webinar: https://www.youtube.com/watch?time_continue=46&v=PF8fCAKR0-I
