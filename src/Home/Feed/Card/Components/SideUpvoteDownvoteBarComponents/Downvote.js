import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { tokenState, upvoteChangeState } from '../../../../../App';
import { useRecoilState } from 'recoil';

const Downvote = ({ initialLikeValue, postId, likeId }) => {
	const [token] = useRecoilState(tokenState);
	const [upvoteChange, setUpvoteChange] = useRecoilState(upvoteChangeState);
	const [liked, setLiked] = useState({
		liked: null,
	});
	const [likedValue, setLikedValue] = useState(null);  
	const [currentLikeId, setCurrentLikeId] = useState(null);

	

	useEffect(() => {
		console.log(`HIT FROM DOWNVOTE USE EFFECT ${initialLikeValue}`)
		if (
			likedValue === null &&
			currentLikeId === null /* || likeType === null */
		) {
			// console.log(initialLikeValue, '-------------------------')
			// setLikedValue(initialLikeValue);
			setCurrentLikeId(likeId);
			/* setLikeType(typeOfLike) */
		}

		setLikedValue(initialLikeValue)
		setUpvoteChange(!upvoteChange);

		likedValue === 1
			? setLiked({ liked: 'upvoteTrue' })
			: likedValue === -1
			? setLiked({ liked: 'downvoteTrue' })
			: likedValue === 0
			? setLiked({ liked: 'upvoteRemoved' })
			: setLiked({ liked: 'none' });
		// console.log('hit on change in likeValue')
	}, [initialLikeValue, likedValue/* typeOfLike */ /* , likeType */]);

	console.log(`DOWNVOTE LIKE VALUE: ${likedValue}`);
	console.log(liked)

	const handleCreateDownvote = (event) => {
		event.preventDefault();

		axios({
			url: `http://localhost:4000/likes/create/dislike/${postId}`,
			method: 'POST',
			// data: liked,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(({ data }) => {
			setLikedValue(data.like.value);
			/* setLikeType('upvotedTrue') */
			setCurrentLikeId(data.like.id);
			// console.log(data)
		});
	}
	
	const handleRemoveDownvote = (event) => {
		event.preventDefault();

		axios({
			url: `http://localhost:4000/likes/${currentLikeId}`,
			method: 'PUT',
			data: {liked: 'downvoteRemoved'},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(({ data }) => {
			setLikedValue(data.like.value);
			/* setLikeType('upvoteRemoved') */
			setLiked({ liked: 'upvoteRemoved' });
			// console.log(data)
		});
	}

	const handleUpvoteToDownvote = (event) => {
		event.preventDefault();

		axios({
			url: `http://localhost:4000/likes/${currentLikeId}`,
			method: 'PUT',
			data: {liked: 'upvoteToDownvote'},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(({ data }) => {
			setLikedValue(data.like.value);
			/* setLikeType('upvoteRemoved') */
			setLiked({ liked: 'downvoteTrue' });
			// console.log(data)
		});
	}

	const handleAddDownvote = (event) => {
		event.preventDefault();

		axios({
			url: `http://localhost:4000/likes/${currentLikeId}`,
			method: 'PUT',
			data: {liked: 'downvoteAdd'},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(({ data }) => {
			setLikedValue(data.like.value);
			/* setLikeType('upvotedTrue'); */
			setLiked({ liked: 'downvoteTrue' });
			// console.log(data);
		});
	}

	if (likedValue === null ) {
		return (
			<div className="DownvoteDiv CREATEDOWNVOTE"
				onClick={handleCreateDownvote}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='2.5vw'
					height='2.5vh'
					fill='currentColor'
					class='bi bi-capslock'
					viewBox='0 0 16 16'
					transform='rotate(180)'>
					<path
						fill-rule='evenodd'
						d='M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z'
					/>
				</svg>
			</div>
		);
	} else if (liked.liked === "downvoteTrue" /* || liked.liked === "upvoteRemoved" */) {
		return (
			<div className='DownvoteDiv REMOVEDOWNVOTE'
				onClick={handleRemoveDownvote}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='2.5vw'
					height='2.5vh'
					fill='currentColor'
					class='bi bi-capslock'
					viewBox='0 0 16 16'
					transform='rotate(180)'>
					<path
						fill='#2C67B5'
						fill-rule='evenodd'
						d='M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z'
					/>
				</svg>
			</div>
		);
	} else if (liked.liked === "upvoteRemoved") {
		return (
			<div className='DownvoteDiv ADDDOWNVOTE'
				onClick={handleAddDownvote}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='2.5vw'
					height='2.5vh'
					fill='currentColor'
					class='bi bi-capslock'
					viewBox='0 0 16 16'
					transform='rotate(180)'>
					<path
						// fill='#2C67B5'
						fill-rule='evenodd'
						d='M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z'
					/>
				</svg>
			</div>
		) 
		} else if (liked.liked === 'upvoteTrue') {
		return (
			<div
				className='DownvoteDiv UPVOTETRUE'
				onClick={handleUpvoteToDownvote}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='2.5vw'
					height='2.5vh'
					fill='currentColor'
					class='bi bi-capslock'
					viewBox='0 0 16 16'
					transform='rotate(180)'>
					<path
						fill-rule='evenodd'
						d='M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5 8 1.731 1.654 8.5H4.5a1 1 0 0 1 1 1v1h5v-1a1 1 0 0 1 1-1h2.846zm-9.846 5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1zm6 0h-5v1h5v-1z'
					/>
				</svg>
			</div>
		);
	} else {
		return (
			<div>Something Went Wrong</div>
		)
	}
};

export default Downvote;
