import React from 'react';
import { websiteState } from '../../../../App';
import { useRecoilState } from 'recoil';

const ShareButton = ({ postId }) => {
    const [website] = useRecoilState(websiteState)

    const handleShareButton = (event) => {
        event.preventDefault()

        navigator.clipboard.writeText(
					`https://master.dvzb15cl8s3db.amplifyapp.com/${postId}`
				);
    }

    return (
			<div
				className={
					website === 'home'
						? 'ShareButtonDiv'
						: website === 'userPage/posts' ||
						  'postDetails' || 'userPage/saved'
						? 'UsersPublishedPostsShareButtonDiv'
						: null
				}
				onClick={handleShareButton}>
				<p
					className={
						website === 'home'
							? 'ShareButtonText'
							: website === 'userPage/posts' || website === 'userPage/saved'
							? 'UsersPublishedPostsShareButtonText'
							: null
					}>
					Share
				</p>
			</div>
		);
};

export default ShareButton;