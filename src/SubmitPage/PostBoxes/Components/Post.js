import React from 'react';
import { tokenState, websiteState } from '../../../App';
import { useRecoilState } from 'recoil';
import { Button } from 'react-bootstrap';

const Post = ({ post, imagePost }) => {
    const [website] = useRecoilState(websiteState);

    console.log(website)

    return (
        <div className="PostButtonDiv">
            <Button
					className='PostButton'
					variant='outline'
                    onClick={website === 'submit' ? post : imagePost}>
					POST
			</Button>
        </div>
    );
};

export default Post;