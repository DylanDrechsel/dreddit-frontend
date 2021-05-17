import React from 'react';

const PostImage = ({ path }) => {
    const url = `http://localhost:4000/${path}`

    return (
        <div className="CardPostImage">
            <img src={url} className="PostImage"/>
        </div>
    );
};

export default PostImage;