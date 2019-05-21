import React, { Component } from 'react';

const PostHeader = props => {
    return(
        <div>
        <img alt='post-thumbnail' className='post-img' src='{props.post.imageUrl}' />
        </div>
    );
}

export default PostHeader;