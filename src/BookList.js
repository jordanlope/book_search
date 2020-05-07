import React, { Component } from 'react';
import Book from './Book.js';

export default class BookList extends Component {

    render() {
        const books = this.props.books.map((book, i) => 
            <Book title={book.volumeInfo.title} textSnippet={book.searchInfo.textSnippet} key={i} />
        )
        return (
            <div className="book_list">
                {books}
            </div>
        )
    }

}

BookList.defaultProps = {
    books: []
}