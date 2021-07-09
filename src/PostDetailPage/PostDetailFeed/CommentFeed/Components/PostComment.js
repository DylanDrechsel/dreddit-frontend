import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { tokenState, userNameState } from '../../../../App';
import { useRecoilState } from 'recoil';
import { Button } from 'react-bootstrap';
import Content from '../../../../SubmitPage/PostBoxes/Components/Content';

const PostComment = ({ id, handleReload }) => {
	const [token] = useRecoilState(tokenState);
	const [userName] = useRecoilState(userNameState);
	const [commentData, setCommentData] = useState();

	const handleCommentData = (event) => {
		const input = { ...commentData };
		input[event.target.id] = event.target.value;
		setCommentData(input);
	};

	const publishedComment = () => {
		axios({
			url: `https://boiling-shelf-57510.herokuapp.com/comments/create/${id}`,
			method: 'POST',
			data: commentData,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then(handleReload())
			.catch((err) => console.log(err));
	};

	return (
		<div className='PostComment'>
			<p className='CommentHead'>Comment as {userName}</p>
			<Content handleCommentData={handleCommentData} />
			<Button
				className='PostCommentButton'
				variant='outline'
				onClick={publishedComment}>
				Post
			</Button>
		</div>
	);
};

export default PostComment;
