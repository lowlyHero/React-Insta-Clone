import React, { Component } from 'react'
import Comment from './Comment';
import CommentInput from './CommentInput';

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
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput />
      </div>
    )
  }
}

export default CommentSection;
