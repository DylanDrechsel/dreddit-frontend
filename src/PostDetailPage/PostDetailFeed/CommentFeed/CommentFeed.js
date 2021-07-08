import React from 'react';
import Comments from './Components/Comments'

const CommentFeed = ({ id }) => {
    return (
        <div className="CommentFeed">
            <Comments id={id}/>
        </div>
    );
};

export default CommentFeed;