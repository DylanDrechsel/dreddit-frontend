import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { upvoteChangeState, tokenState } from '../../../../../App';
import { useRecoilState } from 'recoil';

const Upvote = ({ initialLikeValue, postId, likeId }) => {
	const [upvoteChange, setUpvoteChange] = useRecoilState(upvoteChangeState);
	const [likedValue, setLikedValue] = useState(null);
	const [currentLikeId, setCurrentLikeId] = useState(null);
	const [token] = useRecoilState(tokenState);

	useEffect(() => {
		setCurrentLikeId(likeId);
		setLikedValue(initialLikeValue);
		setUpvoteChange(!upvoteChange);
	}, [initialLikeValue, likedValue]);

	const handleCreateUpvote = (event) => {
		event.preventDefault();

		axios({
			url: `http://localhost:4000/likes/create/${postId}`,
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(({ data }) => {
			setLikedValue(data.like.value);
			setCurrentLikeId(data.like.id);
		});
	};

	const handleRemoveUpvote = (event) => {
		event.preventDefault();

		axios({
			url: `http://localhost:4000/likes/${currentLikeId}`,
			method: 'PUT',
			data: { liked: 'upvoteTrue' },
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(({ data }) => {
			setLikedValue(data.like.value);
		});
	};

	const handleAddUpvote = (event) => {
		event.preventDefault();

		axios({
			url: `http://localhost:4000/likes/${currentLikeId}`,
			method: 'PUT',
			data: { liked: 'upvoteRemoved' },
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(({ data }) => {
			setLikedValue(data.like.value);
		});
	};

	const handleDownvoteToUpvote = (event) => {
		event.preventDefault();

		axios({
			url: `http://localhost:4000/likes/${currentLikeId}`,
			method: 'PUT',
			data: { liked: 'upvoteRemoved' },
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(({ data }) => {
			setLikedValue(data.like.value);
		});
	};

	if (likedValue === 1) {
		return (
			<div
				className='UpvoteDiv REMOVEUPVOTE'
				onClick={(event) => handleRemoveUpvote(event)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='2.5vw'
					height='2.5vh'
					fill='currentColor'
					class='bi bi-capslock'
					viewBox='0 0 16 16'>
					<path
						fill-rule='evenodd'
						fill='#FF571F'
						d='M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z'
					/>
				</svg>
			</div>
		);
	} else if (likedValue === 0) {
		return (
			<div
				className='UpvoteDiv UPVOTERADD'
				onClick={(event) => handleAddUpvote(event)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='2.5vw'
					height='2.5vh'
					fill='currentColor'
					class='bi bi-capslock'
					viewBox='0 0 16 16'>
					<path
						fill-rule='evenodd'
						d='M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z'
					/>
				</svg>
			</div>
		);
	} else if (likedValue === -1) {
		return (
			<div
				className='UpvoteDiv DOWNVOTETRUE'
				onClick={(event) => handleDownvoteToUpvote(event)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='2.5vw'
					height='2.5vh'
					fill='currentColor'
					class='bi bi-capslock'
					viewBox='0 0 16 16'>
					<path
						fill-rule='evenodd'
						d='M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z'
					/>
				</svg>
			</div>
		);
	} else if (likedValue === null) {
		return (
			<div
				className='UpvoteDiv CREATEUPVOTE'
				onClick={(event) => handleCreateUpvote(event)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='2.5vw'
					height='2.5vh'
					fill='currentColor'
					class='bi bi-capslock'
					viewBox='0 0 16 16'>
					<path
						fill-rule='evenodd'
						d='M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z'
					/>
				</svg>
			</div>
		);
	} else {
		return <div>Something went wrong</div>;
	}
};

export default Upvote;
