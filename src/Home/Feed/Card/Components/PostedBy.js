import React from 'react';
import { websiteState } from '../../../../App';
import { useRecoilState } from 'recoil';

const PostedBy = ({ username }) => {
    const [website] = useRecoilState(websiteState)

    return (
			<div
				className={
					website === 'home'
						? 'CardPostedBy'
						: website === 'userPage/posts' || website === 'userPage/saved'
						? 'UsersPublishedPostsPostedBy'
						: 'PostDetailCardPostedBy'
				}>
				{website !== 'postDetails' ? <p>- Posted By {username}</p> : <p className='CommentPostedBy'>{username}</p>}
			</div>
		);
};

export default PostedBy;