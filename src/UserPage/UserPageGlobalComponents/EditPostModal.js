import React, { useState, useEffect } from 'react';
import { tokenState } from '../../App';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { Modal, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Title from '../../SubmitPage/PostBoxes/Components/Title'
import Category from '../../SubmitPage/PostBoxes/Components/Category';
import Content from '../../SubmitPage/PostBoxes/Components/Content'

const EditPostModal = ({ show, handleClose, post, handleReload }) => {
    const [token] = useRecoilState(tokenState)
    const [postData, setPostData] = useState()
    const [editData, setEditData] = useState({})
    
    useEffect(() => {
        setPostData(post)
    }, [])

    const handleDataChange = (event) => {
        const input = { ...editData }
        input[event.target.id] = event.target.value
        setEditData(input)
    }

    const handleTextEditPost = () => {
        axios({
            url: `http://localhost:4000/posts/${post.id}/`,
            method: 'PUT',
            data: editData,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(() => {
            handleClose();
            handleReload();
        })
    }

    console.log(editData)


    if (postData && !postData.image) {
        return (
					<div>
						<>
							<Modal
								show={show}
								onHide={handleClose}
								backdrop='static'
								keyboard={false}>
								<Modal.Header closeButton style={{ backgroundColor: 'black' }}>
									<Modal.Title style={{ color: 'white' }}>
										Edit Post
									</Modal.Title>
								</Modal.Header>
								<Modal.Body
									style={{ backgroundColor: 'black', color: 'white' }}>
									<Title
										postTitle={postData.title}
										handleDataChange={handleDataChange}
									/>
									<Category
										postCategory={postData.category}
										handleDataChange={handleDataChange}
									/>
									<Content
										postContent={postData.content}
										handleDataChange={handleDataChange}
									/>
								</Modal.Body>

								<DropdownButton
									id='dropdown-item-button'
									title='Publish?'
                                    variant='outline-light'
                                    className='DropdownButton'>
									<Dropdown.Item as='button' onClick={() => {setEditData({published: true})}}>Post!</Dropdown.Item>
									<Dropdown.Item as='button' onClick={() => {setEditData({published: false})}}>Save</Dropdown.Item>
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
    } else {
        return (
            <h1>Loading</h1>
        )
    }
};

export default EditPostModal;