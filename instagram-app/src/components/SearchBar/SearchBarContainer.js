import React from 'react';

import './SearchStyles.css';


const SearchBar = () => {
  return ( 
    <div className='search-wrapper'>
      <i className='fab fa-instagram fa-2x'><span className='logo-text'> | Instagram </span></i>
      <input type ='text' placeholder ='Search'></input> 
      <div className='icon-wrapper'>
        <i class='far fa-compass' />
        <i class='far fa-heart' />
        <i class='far fa-user' />
      </div>
    </div>
  );
}

export default SearchBar;