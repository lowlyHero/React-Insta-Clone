import React from 'react';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import CommentSection from './components/CommentSection';
import dummyData from './dummy-data';

import './App.css';

function App() {




  return (
    <div className="App">
      <SearchBar />
      <PostContainer />
      <CommentSection />
    </div>
  );
}

export default App;
