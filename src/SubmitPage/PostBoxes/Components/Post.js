import React from 'react';
import { Button } from 'react-bootstrap';

const Post = () => {
    return (
        <div className="PostButtonDiv">
            <Button
					className='PostButton'
					variant='outline'>
					POST
			</Button>
        </div>
    );
};

export default Post;