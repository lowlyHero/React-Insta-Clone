import React, { Component } from 'react';


const SearchBar = () => {
  return ( 
    <div>
      <i className='fab fa-instagram fa-2x'> | Instagram</i>
      <input type ='text' placeholder ='Search'></input> 
      <i class="far fa-compass"></i>
      <i class="far fa-heart"></i>
      <i class="far fa-user"></i>
      <hr />
    </div>
  );
}

export default SearchBar