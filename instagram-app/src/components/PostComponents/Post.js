import React, { Component } from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentComponents/CommentSection';
import LikeContainer from './LikeContainer';

export class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.data.likes
        };
    }
    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    };
    render() {
    return (
        <div>
            <PostHeader 
            username={this.props.data.username}
            thumbnailUrl={this.props.data.thumbnailUrl}
            />
            <div>
                <img 
                alt='thumbnail'
                className='post-img'
                src={this.props.data.imageUrl}
                />
            </div>
            <LikeContainer incrementLike={this.incrementLike} likes={this.state.likes} />
            <CommentSection comments={this.props.data.comments} />
        </div>
    )
  }
};

export default Post;