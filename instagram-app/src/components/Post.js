import React, { Component } from 'react';
import PostHeader from './PostHeader';


const Post = props => {
    return(
        <div>
            <PostHeader 
            username={props.post.username}
            thumbnailUrl={props.post.thumbnalUrl}
            />
            <div>
                <img 
                alt='thumbnail image'
                className='post-img'
                src={props.post.image}
                />
            </div>
        </div>
    );
}

export default Post;