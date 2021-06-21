import React from 'react';
import { Button } from 'react-bootstrap';

const Post = ({ post, onSubmit }) => {
    return (
        <div className="PostButtonDiv">
            <Button
					className='PostButton'
					variant='outline'
                    onClick={onSubmit}>
					POST
			</Button>
        </div>
    );
};

export default Post;