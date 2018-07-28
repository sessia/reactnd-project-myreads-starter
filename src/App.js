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
        queryBooks: []
    }

    //get all books
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books
            })
        })
    }

    //update books on the shelf: credits to https://stackoverflow.com/questions/50531678/react-pass-function-as-prop
    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            if (this.state.books.filter((b) => b.id === book.id).length > 0) {
                // book is already in the state, we only have to update his shelf
                this.setState((state) => ({
                    books: state.books.map((b) => {
                        if (b.id === book.id) {
                            b.shelf = shelf
                        }
                        return b
                    })
                }))
            } else {
                // book is not in the state, we have to add it
                BooksAPI.get(book.id).then((newBook) => {
                    this.setState((state) => ({
                        books: state.books.concat([newBook])
                    }))
                })
            }
        })
    };


    render() {
        return ( <
            div className = "app" >

            <
            Route exact path = "/"
            render = {
                () => ( <
                    ListBooks books = {
                        this.state.books
                    }
                    onUpdateShelf = {
                        this.updateShelf
                    }
                    />
                )
            }
            />

            <
            Route exact path = "/search"
            render = {
                () => ( <
                    Search booksInLibrary = {
                        this.state.books
                    }
                    onUpdateShelf = {
                        this.updateShelf
                    }
                    />
                )
            }
            />



            <
            /div>
        )
    }
}

export default BooksApp

//Thanks for the help to My Reads A book Tracking App with Edoh Webinar: https://www.youtube.com/watch?time_continue=46&v=PF8fCAKR0-I
