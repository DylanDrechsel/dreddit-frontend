import React from 'react';
import jsdas from '../CardImages/speech-bubble.png'

const CommentButton = () => {
    return (
        <div className="CommentButton">
            <img src={jsdas}  /* width="1vw" height="1vh" */ className="CommentImage"/>
        </div>
    );
};

export default CommentButton;