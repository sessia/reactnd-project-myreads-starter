import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {
    state = {
        query: '',
        queryBooks: []
    };

    //search books that corresponds to the query
    updateQuery = (query) => {
        this.setState({
            query: query
        })

        if (query) {
            BooksAPI.search(query).then((books) => {
                //if there is an error e.g. no results then show nothing
                if (books.error) {
                    this.setState({
                        queryBooks: []
                    })
                } else {
                    //if find results show them
                    books.map((b) => {
                        for (let booksInShelf of this.props.booksInLibrary) {
                            if (booksInShelf.id === b.id) {
                                b.shelf = booksInShelf.shelf
                                return b
                            }
                        }
                        b.shelf = "none"
                        return b
                    })
                    //update state to show results
                    this.setState({
                        queryBooks: books
                    })
                }
            })
        } else {
            this.setState({
                queryBooks: []
            })
        }
        return
    };

    render() {
        const {
            query
        } = this.state;
        const {
            onUpdateShelf
        } = this.props;
        return ( <
            div className = "search-books" >
            <
            div className = "search-books-bar" >
            <
            Link className = "close-search"
            to = "/" > Close < /Link> <
            div className = "search-books-input-wrapper" > {
                /*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                          */
            } <
            input type = "text"
            placeholder = "Search by title or author"
            value = {
                query
            }
            onChange = {
                (event) => this.updateQuery(event.target.value)
            }
            />


            <
            /div> <
            /div> <
            div className = "search-books-results" >
            <
            ol className = "books-grid" > {
                this.state.queryBooks.map((book, index) => (
                  <li key = {index} >
                    {
                      this.props.booksInLibrary.forEach((bookInLibrary) => {
                        if (book.id === bookInLibrary.id) {
                          book.shelf = bookInLibrary.shelf
                        }
                      })
                    }
                    <Book
                    id = {book.id}
                    shelf = {book.shelf}
                    authors = {book.authors}
                    title = {book.title}
                    imageLinks = {book.imageLinks}
                    onUpdateShelf = {onUpdateShelf}
                    />
                  </li>
                ))
            }
            </ol>
            </div>
            </div>
        )
    }

}

export default Search
