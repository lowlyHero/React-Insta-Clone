import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostComponents/PostContainer';
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  componentDidMount(){
    // console.log(data);
    // this.setState({ data: data.dummyData })
  };
 
render () {
  return (
    <div className='App'>
      <SearchBar />
      <PostContainer data={this.state.data} />
    </div>
  );
 }
}

export default App;
