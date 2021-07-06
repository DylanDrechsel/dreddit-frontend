import React from 'react';
import axios from 'axios';
import { tokenState } from '../../App';
import { useRecoilState } from 'recoil';

const DeleteButton = ({ postId, handleReload }) => {
	const [token] = useRecoilState(tokenState);

	const handleDeletePost = () => {
		axios({
			url: `http://localhost:4000/posts/${postId}`,
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(() => {
			handleReload();
		});
	};

	return (
		<div className='DeleteButton' onClick={handleDeletePost}>
			<h1 className='DeleteButtonText'>Delete</h1>
		</div>
	);
};

export default DeleteButton;
