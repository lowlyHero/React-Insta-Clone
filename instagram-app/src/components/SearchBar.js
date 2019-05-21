import React, { Component } from 'react';

import './SearchStyles.css';


const SearchBar = () => {
  return ( 
    <div className='search-wrapper'>
      <i className='fab fa-instagram fa-2x'><span className='logo-text'> | Instagram </span></i>
      <input type ='text' placeholder ='Search'></input> 
      <div className='icon-wrapper'>
      <i class='far fa-compass'></i>
      <i class='far fa-heart'></i>
      <i class='far fa-user'></i>
      </div>
    </div>
  );
}

export default SearchBar