import React from 'react'
import Post from './Post';

const PostsContainer = props => {
  return (
    <div>
      {props.data.map(d => <Post key={d.imageUrl} data={d} />)}
    </div>
  )
};

export default PostsContainer;