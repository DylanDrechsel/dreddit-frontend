import React from 'react';
import { Button } from 'react-bootstrap';

const Post = ({ post, onSubmit, newHandleSubmit }) => {
    return (
        <div className="PostButtonDiv">
            <Button
					className='PostButton'
					variant='outline'
                    onClick={newHandleSubmit}>
					POST
			</Button>
        </div>
    );
};

export default Post;