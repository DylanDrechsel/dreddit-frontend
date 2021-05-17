import React from 'react';

const PostedBy = ({ username }) => {
    return (
        <div className="CardPostedBy">
            <p>- Posted By {username}</p>
        </div>
    );
};

export default PostedBy;