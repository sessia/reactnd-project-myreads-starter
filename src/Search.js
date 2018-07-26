import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
  state = {
   query: '',
   books: [],
   queryBooks: []
  };

  updateQuery = (query) => {
    this.setState({query: query})
    let queryBooks = []
    if(query) {
      BooksAPI.search(query).then(results => {
        if (results.length) {
          queryBooks = results.map((book) => {
            const index = this.state.books.findIndex(result => result.id === book.id)
            if( index >= 0 ) {
              return this.state.books[index]
            } else {
              return book
            }
          })
        }
        this.setState({queryBooks})
      })
    }
    else {
      this.setState({queryBooks})
    }
  }

  render () {
    const {query} = this.state
    const {onUpdateShelf} = this.props;
    return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
          />


        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.queryBooks.map((book, index) => (
            <li key={index}>
            <Book book={book}
            onUpdateShelf={onUpdateShelf}
             />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )}

}

export default Search
