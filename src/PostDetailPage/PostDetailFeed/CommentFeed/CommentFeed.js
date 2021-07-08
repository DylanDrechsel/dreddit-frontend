import React from 'react';
import Comments from './Components/Comments'
import PostComment from './Components/PostComment'

const CommentFeed = ({ id }) => {
    return (
        <div className="CommentFeed">
            <PostComment id={id} />
            <Comments id={id}/>
        </div>
    );
};

export default CommentFeed;