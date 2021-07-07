import React, { useState } from 'react';
import { tokenState } from '../../App';
import { useRecoilState } from 'recoil';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import Title from './Components/Title';
import Category from './Components/Category';
import SaveDraft from './Components/SaveDraft';
import PostButton from './Components/Post';
import { useHistory } from 'react-router-dom'

let errorText = '';

const ImagePost = () => {
	const [posted, setPosted] = useState(false);
	const [imagePostData, setImagePostData] = useState({});
	const [newImage, setNewImage] = useState();
	const [token] = useRecoilState(tokenState);
	let history = useHistory()

	const handlePostDataInput = (event) => {
		const input = { ...imagePostData };
		input[event.target.id] = event.target.value;
		setImagePostData(input);
	};

	const s3Post = async (event) => {
		const file = event.target.files[0]
		let url;
		let key;

		await axios({
			url: 'http://localhost:4000/s3Url',
			method: "GET"
		})
		.then((res) => {
			url = res.data.imageInfo.url
			key = res.data.imageInfo.key
		})

		await axios({
			url: url,
			method: "PUT",
			headers: {
				"Content-Type": "image/jpeg"
			},
			data: file
		})

		const imageUrl = await url.split('?')[0]
		await setImagePostData({
			...imagePostData,
			imageUrl: imageUrl,
			imageKey: key
		})
	}

	const checkInformation = (imagePostData) => {
		if (
			!imagePostData.title &&
			!imagePostData.category &&
			!imagePostData.imageUrl
		) {
			errorText = 'Please enter Title, Category, and Image';
			return 1;
		} else if (!imagePostData.title && !imagePostData.category) {
			errorText = 'Please enter Title and Category';
			return 1;
		} else if (!imagePostData.title && !imagePostData.imageUrl) {
			errorText = 'Please enter Title and upload Image';
			return 1;
		} else if (!imagePostData.category && !imagePostData.imageUrl) {
			errorText = 'Please enter Category and upload Image';
			return 1;
		} else if (!imagePostData.title) {
			errorText = 'Please enter Title';
			return 1;
		} else if (!imagePostData.category) {
			errorText = 'Please enter Category';
			return 1;
		} else if (!imagePostData.imageUrl) {
			errorText = 'Please upload Image';
			return 1;
		}

		return 0;
	};

	const post =  async (event) => {
		event.preventDefault();


		if (await checkInformation(imagePostData) !== 0) {
			setPosted('error');

			setTimeout(() => {
				setPosted(false);
			}, 3000);

			// exits out of post function before axios request is made if the data isnt entered properly
			return;
		}

		await axios({
			url: 'http://localhost:4000/posts/create/',
			method: 'POST',
			data: {...imagePostData, published: true},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then(() => {
				setPosted('image');

				setTimeout(() => {
					setPosted(false);
					history.push('/');
				}, 3000);
			})
			.catch(() => {
				errorText = 'Something went wrong... Please try again!';
				setPosted('serverError');

				setTimeout(() => {
					setPosted(false);
				}, 3000);
			});
	};

	const saveDraftPost = async (event) => {
		event.preventDefault();

		if (await checkInformation(imagePostData) !== 0) {
			setPosted('error');

			setTimeout(() => {
				setPosted(false);
			}, 3000);

			// exits out of post function before axios request is made if the data isnt entered properly
			return;
		}

		await axios({
			url: 'http://localhost:4000/posts/create/',
			method: 'POST',
			data: { ...imagePostData, published: false},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then(() => {
				setPosted('saveImage');

				setTimeout(() => {
					setPosted(false);
					history.push(`/`);
				}, 3000);
			})
			.catch(() => {
				errorText = 'Something went wrong... Please try again!';
				setPosted('serverError');

				setTimeout(() => {
					setPosted(false);
				}, 3000);
			});
	};

	const imageHandler = (event) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setNewImage(reader.result);
			}
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	return (
		<div>
			<div className='ImagePost'>
				<Title handlePostDataInput={handlePostDataInput} />
				<Category handlePostDataInput={handlePostDataInput} />

				<Row className='PostOptionsRow'>
					<SaveDraft saveDraftPost={saveDraftPost} />
					<PostButton post={post} />

					<form
						id='imageForm'
						action='/upload'
						enctype='multipart/form-data'
						className='ImageForm'>
						<input
							onChange={(event) => {
								imageHandler(event);
								s3Post(event)
							}}
							className='ImageInput'
							type='file'
							id='file'
							accept='.jpg'
							name='image'
						/>
					</form>
				</Row>
				{newImage ? <img className='PreviewPostImage' src={newImage} /> : null}
			</div>

			{posted === 'image' ? (
				<h1 className='PostedAlert'>Posted!</h1>
			) : posted === 'saveImage' ? (
				<h1 className='PostedSaved'>Post Saved!</h1>
			) : posted === 'error' ? (
				<h1 className='PostServerError'>{errorText}</h1>
			) : posted === 'serverError' ? (
				<h1 className='PostServerError'>{errorText}</h1>
			) : null}
		</div>
	);
};

export default ImagePost;


// MULTER IMAGE POST REQUEST
/* const post = (event) => {
		event.preventDefault();


		const myForm = document.getElementById('imageForm');
		formData = new FormData(myForm);

		formData.append('title', imagePostData.title);
		formData.append('category', imagePostData.category);
		formData.append('published', 'true');

		if (checkInformation(imagePostData) !== 0) {
			setPosted('error');

			setTimeout(() => {
				setPosted(false);
			}, 3000);

			// exits out of post function before axios request is made if the data isnt entered properly
			return;
		}

		axios({
			url: 'http://localhost:4000/posts/create/image',
			method: 'POST',
			data: formData,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then(() => {
				setPosted('image');

				setTimeout(() => {
					setPosted(false);
				}, 3000);
			})
			.catch(() => {
				errorText = 'Something went wrong... Please try again!';
				setPosted('serverError');

				setTimeout(() => {
					setPosted(false);
				}, 3000);
			});
	}; */
