import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar'>
          <input type='text' placeholder='Search'></input>        
      </div>
    )
  }
}

export default SearchBar
