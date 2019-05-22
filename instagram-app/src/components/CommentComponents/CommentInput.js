import React from 'react';
import CommentSection from './CommentSection';

const CommentInput = props => {
    return (
           <form>
             <input type='text' placeholder='Add comment...' />
            </form>
        )
};

export default CommentInput;