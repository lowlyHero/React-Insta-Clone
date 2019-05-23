import React from 'react';

const PostHeader = props => {
    return(
        <div>
            <div>
                <img 
                    alt='post-thumbnail' 
                    className='post-img' 
                    src={props.thumbnailUrl} 
                />
            </div>
            <div>{props.username}</div>
        </div>
    )
};

export default PostHeader;