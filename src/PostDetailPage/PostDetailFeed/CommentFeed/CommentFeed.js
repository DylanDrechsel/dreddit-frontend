import React, { useState } from 'react';
import Comments from './Components/Comments'
import PostComment from './Components/PostComment'

const CommentFeed = ({ id }) => {
    const [reload, setReload] = useState(false)

    const handleReload = () => {
        setReload(!reload);
    }

    // console.log(reload)

    return (
        <div className="CommentFeed">
            <PostComment id={id} handleReload={handleReload} />
            <Comments id={id} reload={reload}/>
        </div>
    );
};

export default CommentFeed;