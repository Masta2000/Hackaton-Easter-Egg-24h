import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';

class Search extends Component {
    
    render () {
        return (
<div className="search">
            <SearchBar />
            <Filter />
</div>
        )
    }
}

export default Search;