import React from 'react';
import CommentImage from '../CardImages/comment.png'
import { Row } from 'react-bootstrap'

const CommentButton = ({ comments }) => {
    let commentCount = 0
    
    
    for (let i = 0; i < comments.length; i++) {
        commentCount += 1
    }


    return (
        <div className="CommentButton">
            <Row>
                <img src={CommentImage} className="CommentImage"/>
                <p className="CommentCount">{commentCount} Comments</p>
            </Row>
        </div>
    );
};

export default CommentButton;