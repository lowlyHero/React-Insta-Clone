import React from 'react';
import PostHeader from './PostHeader';


const Post = props => {
    return(
        <div>
            <PostHeader 
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
            />
            <div>
                <img 
                alt='thumbnail'
                className='post-img'
                src={props.post.image}
                />
            </div>
        </div>
    );
}

export default Post;