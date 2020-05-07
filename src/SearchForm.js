import React, { Component } from 'react';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            filter: "full",
            printType: "",
        };
    }

    searchChanged(searchQuery) {
        console.log(searchQuery);
        this.setState({
            searchQuery
        });
    }

    filterChanged(filter) {
        console.log(this.state.filter);
        this.setState({
            filter
        })
        //this.state.searchQuery === "" ? () => {} : this.callBookAPI();
    }

    formatQueryParams(params) {
        const queryItems = Object.keys(params)
          .map(key => `${key}=${params[key]}`)
        return queryItems.join('&');
    }

    handleSubmit(e) {
        e.preventDefault();
        //document.getElementById('search').value = '';
        this.callBookAPI()
    }

    callBookAPI() {
        const endPoint = "https://www.googleapis.com/books/v1/volumes?";
        const params = {
            q: String(this.state.searchQuery),
            filter: this.state.filter,
            maxResults: 5,
            key: "AIzaSyBV0ibst7JXsv0ldRh5z-D722Uz0wmOaqo"
        }

        const parameters = this.formatQueryParams(params);

        const url = endPoint + parameters;

        console.log(url);

        fetch(url)
            .then(result => {
                if(!result.ok) {
                    throw new Error('Something went wrong, please try again later');
                }
                return result.json();
            })
            .then(data => {
                this.props.setBooks(data.items);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    render() {
        return (
            <div className="searchBox">
                <h1>Google Book Search</h1>
                <form className="search_form" onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="search">Search:</label>
                    <input type="text" name="search" id="search" placeholder="ex: title, author" onChange={e => this.searchChanged(e.target.value)}/>
                    <label htmlFor="filter">Filter:</label>
                    <div className="search_button">
                        <button type="submit">Search</button>
                    </div>
                </form>
                <select id="filter" onChange={(e) => this.filterChanged(e.target.value) }>
                    <option value="full">Full</option>
                    <option value="partial">Partial</option>
                    <option value="free-ebooks">Free-ebooks</option>
                    <option value="ebooks">ebooks</option>
                </select>
            </div>
        );
    }
}

export default SearchForm;