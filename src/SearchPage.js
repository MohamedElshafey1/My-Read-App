import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BookAPI from './BooksAPI';

class SearchPage extends Component{

    constructor( props ) {
        super( props );
        this.state = {
            books:[],
            word:''
        }
    }

    searchResult = ( query ) => {
        if ( query.trim() !== "" ) {
            BookAPI.search( query ).then( ( books ) => {
                if ( !books.error ) {
                    console.log( books );
                    this.setState( ( currentState ) => (
                    {books}
                    ))
                } else {
                    this.setState( { books:[] } );
                }    
               
        })
        } else {
             this.setState( { books: [] } );
       }
    }
        

    render () {
        const { books } = this.state;



        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>
              
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input onChange={(event)=>this.searchResult(event.target.value)} value={this.state.value} type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
                {books.map( ( book ) => (
                    // <li>{ book.title}</li>    
                    <li key={book.id}>
                            <div className="book">
                            <div className="book-top">
                                {book.imageLinks ?
                                <div className="book-cover" style={{ width: 128, height: 188,backgroundImage:`url("${book.imageLinks.thumbnail}")` }}></div>
                                    :
                                <div className="book-cover" style={{ width: 128, height: 188 }}></div>
                                    
                                }
                                <div className="book-shelf-changer">
                                <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                                </div>
                            </div>
                                <div className="book-title">{ book.title}</div>
                                    <div className="book-authors">Author</div>
                            </div>
                      </li>
                    
                ))}   
            </ol>
            </div>
          </div>
)
    }

}

export default SearchPage;