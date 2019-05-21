import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentComponents/CommentSection';

const Post = props => {
    return (
        <div>
            <PostHeader 
            username={props.data.username}
            thumbnailUrl={props.data.thumbnailUrl}
            />
            <div>
                <img 
                alt='thumbnail'
                className='post-img'
                src={props.data.imageUrl}
                />
            </div>
            <CommentSection comments={props.data.comments} />
        </div>
    )
};

export default Post;