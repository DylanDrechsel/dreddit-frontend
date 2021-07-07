import React from 'react';
import axios from 'axios';
import { tokenState } from '../../App';
import { useRecoilState } from 'recoil';
import * as AWS from 'aws-sdk'

const DeleteButton = ({ postId, handleReload, imageKey }) => {
	const [token] = useRecoilState(tokenState);
	const BUCKET_NAME = 'dreddit-images'
	const s3 = new AWS.S3()

	const deleteS3Object = async () => {
		await s3.deleteObject({
			Key: imageKey,
			Bucket: BUCKET_NAME,
		}).promise();
		return {};
	}

	const handleDeletePost = () => {
		axios({
			url: `http://localhost:4000/posts/${postId}`,
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		/* .then(() => {
			deleteS3Object()
		}) */
		.then(() => {
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
