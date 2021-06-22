import React from 'react';
import { Button } from 'react-bootstrap';

const Post = ({ post }) => {
    return (
        <div className="PostButtonDiv">
            <Button
					className='PostButton'
					variant='outline'
                    onClick={post}>
					POST
			</Button>
        </div>
    );
};

export default Post;