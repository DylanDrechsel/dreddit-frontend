import React from 'react';
import { websiteState } from '../../../../App';
import { useRecoilState } from 'recoil';

const ShareButton = ({ postId }) => {
    const [website] = useRecoilState(websiteState)

    const handleShareButton = (event) => {
        event.preventDefault()

        navigator.clipboard.writeText(
					`http://localhost:3000/${postId}`
				);
    }

    return (
        <div className={website === 'home' ? "ShareButtonDiv" : website === 'userPage/posts' ? 'UsersPublishedPostsShareButtonDiv' : null} onClick={handleShareButton}>
            <p className='ShareButtonText'>Share</p>
        </div>
    );
};

export default ShareButton;