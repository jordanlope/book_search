import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import BookList from './BookList';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  setBooks(books) {
    console.log("Set books was called", books)
    this.setState({
      books: books
    });
  }

  render() {
    return (
      <div className="App">
        <main>
          <section id="search_form">
            <SearchForm setBooks={books => this.setBooks(books)} />
            <BookList books={this.state.books}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
