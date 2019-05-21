import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: dummyData,
    };
  }

render () {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer data={this.state.post} />
    </div>
  );
 }
}

export default App;
