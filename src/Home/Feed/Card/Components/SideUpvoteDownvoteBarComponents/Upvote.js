import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { tokenState } from '../../../../../App';
import { useRecoilState } from 'recoil';



const Upvote = ({ typeOfLike, initialLikeValue, postId, likeId }) => {
	const [token] = useRecoilState(tokenState);
	const [liked, setLiked] = useState({
		liked: null
	})
	const [likedValue, setLikedValue] = useState(null)
	const [likeType, setLikeType] = useState(null)
	const [currentLikeId, setCurrentLikeId] = useState(null)

	// useEffect(() => {
	// 	setLikedValue(initialLikeValue);
	// 	setCurrentLikeId(likeId);
	// }, [])

	
	
	useEffect(() => {
		if (likedValue === null && currentLikeId === null || likeType === null) {
			console.log(initialLikeValue, '-------------------------')
			setLikedValue(initialLikeValue);
			setCurrentLikeId(likeId)
			setLikeType(typeOfLike)
		}

		likedValue === 1
			? setLiked({ liked: 'upvoteTrue' })
			: likedValue === -1
					? setLiked({ liked: false })
					: likedValue === 0 ? setLiked({ liked: 'upvoteRemoved' }) : setLiked({ liked: 'none'})
		console.log('hit on change in likeValue')
	}, [initialLikeValue, likedValue, typeOfLike, likeType])
	
	console.log(likedValue);
	console.log(typeOfLike)
	console.log(`likeType: ${likeType}`)
	console.log(`postId: ${postId}`);
	console.log(`currentLikeId: ${currentLikeId}`)

	const handleCreateUpvote = (event) => {
		event.preventDefault()
		console.log(`hit create ${postId}`)

		axios({
			url: `http://localhost:4000/likes/create/${postId}`,
			method: 'POST',
			// data: liked,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then(({ data }) => {
			setLikedValue(data.like.value);
			setLikeType('upvotedTrue')
			setCurrentLikeId(data.like.id);
			console.log(data)
		})
	}

	const handleRemoveUpvote = (event) => {
		event.preventDefault();
		console.log(`hit remove upvote ${postId}`);

		axios({
			url: `http://localhost:4000/likes/${currentLikeId}`,
			method: 'PUT',
			data: liked,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then(({ data }) => {
			setLikedValue(data.like.value);
			setLikeType('upvoteRemoved')
			setLiked({ liked: 'upvoteRemoved' });
			console.log(data)
		})
	};

	const handleAddUpvote = (event) => {
		event.preventDefault();
		console.log(`hit add upvote ${postId}`);

		axios({
			url: `http://localhost:4000/likes/${currentLikeId}`,
			method: 'PUT',
			data: liked,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(({ data }) => {
			setLikedValue(data.like.value);
			setLikeType('upvotedTrue');
			setLiked({ liked: 'upvoteTrue' });
			console.log(data);
		});
	};




	console.log(liked)
	// console.log(`like type: ${likeType}`);
	console.log(likedValue)

    if (likeType == "upvotedTrue") {
        return (
					<div className='UpvoteDiv' onClick={liked.liked == 'upvoteTrue' ? (event) => handleRemoveUpvote(event) : null}>
						<svg
							// className='UpvoteIcon'
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
    } else if (likeType === 'upvoteRemoved') {
		return (
			<div
				className='UpvoteDiv'
				onClick={
					liked.liked == 'upvoteRemoved'
						? (event) => handleAddUpvote(event)
						: null
				}>
				<svg
					// className='UpvoteIcon'
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
        return (
					<div className='UpvoteDiv CREATEUPVOTE' onClick={(event) => handleCreateUpvote(event)}>
						<svg
							// className='UpvoteIcon'
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
    }
};

export default Upvote;