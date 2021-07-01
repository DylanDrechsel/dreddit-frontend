import React from 'react';
import { websiteState } from '../../../../App';
import { useRecoilState } from 'recoil';
import CommentImage from '../CardImages/comment.png'
import { Row } from 'react-bootstrap'

const CommentButton = ({ comments }) => {
    const [website] = useRecoilState(websiteState)
    let commentCount = 0
    
    
    for (let i = 0; i < comments.length; i++) {
        commentCount += 1
    }


    return (
			<div
				className={
					website === 'home'
						? 'CommentButton'
						: website === 'userPage/posts' || website === 'userPage/saved'
						? 'UsersPublishedPostsCommentButton'
						: null
				}>
				<Row>
					<img src={CommentImage} className='CommentImage' />
					<p className='CommentCount'>{commentCount} Comments</p>
				</Row>
			</div>
		);
};

export default CommentButton;