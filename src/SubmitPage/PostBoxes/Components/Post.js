import React from 'react';
import { Button } from 'react-bootstrap';

const Post = ({ post, imagePost }) => {
    return (
        <div className="PostButtonDiv">
            <Button
					className='PostButton'
					variant='outline'
                    onClick={imagePost}>
					POST
			</Button>
        </div>
    );
};

export default Post;