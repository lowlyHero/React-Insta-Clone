import React from 'react';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import CommentSection from './components/CommentSection';
import dummyData from './dummy-data';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
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
