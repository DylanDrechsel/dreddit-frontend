import React, { useState } from 'react';
import axios from 'axios';
import { tokenState } from '../../App';
import { useRecoilState } from 'recoil';
import { Modal, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Title from '../../SubmitPage/PostBoxes/Components/Title';
import Category from '../../SubmitPage/PostBoxes/Components/Category';
import Content from '../../SubmitPage/PostBoxes/Components/Content';

const EditPostModal = ({ show, handleClose, post, handleReload }) => {
	const [editData, setEditData] = useState({});
	const [newImage, setNewImage] = useState();
	const [token] = useRecoilState(tokenState);
	let formData = new FormData();

	const handleDataChange = (event) => {
		const input = { ...editData };
		input[event.target.id] = event.target.value;
		setEditData(input);
	};

	const handleTextEditPost = () => {
		axios({
			url: `http://localhost:4000/posts/${post.id}/`,
			method: 'PUT',
			data: editData,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(() => {
			handleClose();
			handleReload();
		});
	};

	const handleImageEditPost = () => {
		const myForm = document.getElementById('imageForm');
		formData = new FormData(myForm);

		if (editData.title) {
			formData.append('title', editData.title);
		} else {
			formData.append('title', post.title);
		}

		if (editData.category) {
			formData.append('category', editData.category);
		} else {
			formData.append('category', post.category);
		}

		if (editData.published === false) {
			formData.append('published', 'false');
		} else {
			formData.append('published', 'true');
		}

		axios({
			url: `http://localhost:4000/posts/${post.id}/${post.image.id}`,
			method: 'PUT',
			data: formData,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(() => {
			handleClose();
			handleReload();
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

	if (post && !post.image) {
		return (
			<div>
				<>
					<Modal
						show={show}
						onHide={handleClose}
						backdrop='static'
						keyboard={false}>
						<Modal.Header closeButton style={{ backgroundColor: 'black' }}>
							<Modal.Title style={{ color: 'white' }}>Edit Post</Modal.Title>
						</Modal.Header>
						<Modal.Body style={{ backgroundColor: 'black', color: 'white' }}>
							<Title
								postTitle={post.title}
								handleDataChange={handleDataChange}
							/>
							<Category
								postCategory={post.category}
								handleDataChange={handleDataChange}
							/>
							<Content
								postContent={post.content}
								handleDataChange={handleDataChange}
							/>
						</Modal.Body>

						<DropdownButton
							id='dropdown-item-button'
							title='Publish?'
							variant='outline-light'
							className='DropdownButton'>
							<Dropdown.Item
								as='button'
								onClick={() => {
									setEditData({ published: true });
								}}>
								Post!
							</Dropdown.Item>
							<Dropdown.Item
								as='button'
								onClick={() => {
									setEditData({ published: false });
								}}>
								Save
							</Dropdown.Item>
						</DropdownButton>

						<Modal.Footer style={{ backgroundColor: 'black' }}>
							<Button variant='outline-light' onClick={handleClose}>
								Close
							</Button>
							<Button variant='outline-light' onClick={handleTextEditPost}>
								Edit
							</Button>
						</Modal.Footer>
					</Modal>
				</>
			</div>
		);
	} else if (post && post.image) {
		return (
			<div>
				<>
					<Modal
						show={show}
						onHide={handleClose}
						backdrop='static'
						keyboard={false}>
						<Modal.Header style={{ backgroundColor: 'black' }}>
							<Modal.Title style={{ color: 'white' }}>Edit Post</Modal.Title>
						</Modal.Header>
						<Modal.Body style={{ backgroundColor: 'black', color: 'white' }}>
							<Title
								postTitle={post.title}
								handleDataChange={handleDataChange}
							/>
							<Category
								postCategory={post.category}
								handleDataChange={handleDataChange}
							/>

							{!newImage ? (
								<img
									className='EditModalImage'
									src={`http://localhost:4000/${post.image.path}`}
								/>
							) : (
								<img className='EditModalImage' src={newImage} />
							)}
						</Modal.Body>

						<form
							id='imageForm'
							action='/upload'
							enctype='multipart/form-data'
							className='EditImageForm'>
							<input
								onChange={imageHandler}
								className='EditImageInput'
								type='file'
								id='file'
								accept='.jpg'
								name='image'
							/>
						</form>

						<DropdownButton
							id='dropdown-item-button'
							title='Publish?'
							variant='outline-light'
							className='DropdownButton'>
							<Dropdown.Item
								as='button'
								onClick={() => {
									setEditData({ published: true });
								}}>
								Post!
							</Dropdown.Item>
							<Dropdown.Item
								as='button'
								onClick={() => {
									setEditData({ published: false });
								}}>
								Save
							</Dropdown.Item>
						</DropdownButton>

						<Modal.Footer style={{ backgroundColor: 'black' }}>
							<Button variant='outline-light' onClick={handleClose}>
								Close
							</Button>
							<Button variant='outline-light' onClick={handleImageEditPost}>
								Edit
							</Button>
						</Modal.Footer>
					</Modal>
				</>
			</div>
		);
	} else {
		return <h1>Loading</h1>;
	}
};

export default EditPostModal;
