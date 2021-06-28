import React from 'react';
import { websiteState } from '../../../../App';
import { useRecoilState } from 'recoil';

const PostedBy = ({ username }) => {
    const [website] = useRecoilState(websiteState)

    return (
        <div className={website === 'home' ? "CardPostedBy" : website === 'userPage/posts' ? 'UsersPublishedPostsPostedBy' : 'PostDetailCardPostedBy'}>
            <p>- Posted By {username}</p>
        </div>
    );
};

export default PostedBy;