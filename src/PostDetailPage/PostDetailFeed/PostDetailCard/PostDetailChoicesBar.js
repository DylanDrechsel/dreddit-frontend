import React from 'react';
import { Row } from 'react-bootstrap'
import CommentButton from  '../../../Home/Feed/Card/Components/CommentButton'
import ShareButton from '../../../Home/Feed/Card/Components/ShareButton';

const PostDetailChoicesBar = ({ comments, id }) => {
    return (
        <div className="PostDetailChoicesBar">
            <Row>
                <CommentButton comments={comments} />
				<ShareButton postId={id} />
            </Row>
        </div>
    );
};

export default PostDetailChoicesBar;