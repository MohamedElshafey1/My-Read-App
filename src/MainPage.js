import React, { Component } from "react";
import { Link } from 'react-router-dom';
import CurrentlyReading from './CurrentlyReading';
import Read from './Read';
import WantToRead from './WantToRead';
import * as BooksAPI from './BooksAPI';

class HomePage extends Component{
    constructor( props ) {
        super( props );
    }
    

    render () {

        const { books } = this.props;

        // currentlyReading
        const currentlyReading = books.filter( ( book ) => (
            book.shelf==="currentlyReading"
        ) )

        // wantToRead
        const wantToRead = books.filter( ( book ) => (
            book.shelf==="wantToRead"
        ) )

        // Read
        const read = books.filter( ( book ) => (
            book.shelf==="read"
        ) )

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <CurrentlyReading currentlyReading={currentlyReading} />
                    <WantToRead wantToRead={ wantToRead}/>
                        <Read read={read}/>              
                </div>
            </div>  
            <div className="open-search">
                <Link to="/search">
                    <button >Add a book</button>
                </Link>
              
            </div>
          </div>
        )
    }

}

export default HomePage;