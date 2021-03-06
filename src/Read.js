import React, { Component } from 'react';

class Read extends Component{
    render () {
        const { read } = this.props;
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       {read.map( ( book ) => (
                        <li key={book.id}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks['smallThumbnail']}")` }}></div>
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
                                <div className="book-authors">{ book.authors.map((author,idx)=>(idx<book.authors.length-1? `${author} , `:`${author}` ))}</div>
                            </div>
                      </li>
                    
                        ))}  
                    </ol>
                  </div>
                </div>
                
        )
    }
}

export default Read;