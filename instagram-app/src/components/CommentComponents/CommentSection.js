import React, { Component } from 'react'
import Comment from './Comment';

export class CommentSection extends Component {
  constructor(props) {
  super(props);
  this.state = {
    comments: props.comments
    };
  };

  render() {
    return (
      <div>
        {/* {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />} */}
      </div>
    )
  }
}

export default CommentSection;
