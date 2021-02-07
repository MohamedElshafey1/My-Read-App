import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import HomePage from './MainPage';
import SearchPage from './SearchPage';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books:[]
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
  }

  componentDidMount () {
        BooksAPI.getAll().then( ( books ) => {
            // console.log( books );
            this.setState( (currentState) => (
                {books}
            ))
        })
  }
  
  // updateBook = ( book, shelf ) => {
  //   const formData = new FormData();
  //   formData.append( "shelf", shelf );
  //   BooksAPI.update( book, shelf )
  //   .then( res => {
  //     console.log( res );
  //   })
  // }

  render () {
    const { books } = this.state;
    return (
      <div className="app">
       
        <Route
          exact path="/search"
          render={() => (
            <SearchPage
              books={books}
              // updateBook={this.updateBook}
            />
          )}
          />
          
        <Route 
          exact path="/"
          component={() => (
            <HomePage
              books={books}
              // updateBook={this.updateBook}
            />
          )}/>          
      </div>
    )
  }
}

export default BooksApp
