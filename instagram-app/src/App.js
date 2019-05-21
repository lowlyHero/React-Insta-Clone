import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import CommentSection from './components/CommentSection';
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    this.setState({ post: dummyData })
  }

render () {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer />
      <CommentSection />
    </div>
  );
 }
}

export default App;
