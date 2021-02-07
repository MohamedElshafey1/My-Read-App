import React, { Component } from 'react';
import serializeForm from 'form-serialize';

class CurrentlyReading extends Component{

    state = {
        selectValue:"move"
    }

    selectVal = ( e ) => {
        console.log(e.target.value)
        this.setState( { selectValue: e.target.value } )
    }

    // handleSubmit = ( book, shelf ) => {
    //     // const data = new FormData();
    //     if ( this.props.updateBook ) {
    //         this.props.updateBook(book,shelf)
    //     }
    // }

    

    render () {
        const { currentlyReading } = this.props;
        // const shelf=this.state.selectValue
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {currentlyReading.map( ( book ) => (
                        <li key={book.id}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks['smallThumbnail']}")` }}></div>
                                <div className="book-shelf-changer">
                                    <select  onChange={this.selectVal}  >
                                        <option value="move" disabled>Move to...</option>   
                                        <option  value="currentlyReading">Currently Reading</option>
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

export default CurrentlyReading