import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Title from '../../SubmitPage/PostBoxes/Components/Title'
import Category from '../../SubmitPage/PostBoxes/Components/Category';
import Content from '../../SubmitPage/PostBoxes/Components/Content'

const EditPostModal = ({ show, handleClose, post }) => {
    const [postData, setPostData] = useState()
    
    useEffect(() => {
        setPostData(post)
    }, [])

    console.log(postData)

    if (postData && !postData.image) {
        return (
                <div>
                    <>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop='static'
                            keyboard={false}
                            >
                            <Modal.Header closeButton style={{ backgroundColor: 'black' }}>
                                <Modal.Title style={{ color: 'white' }}>Edit Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ backgroundColor: 'black', color: 'white' }}>
                                <Title postTitle={postData.title}/>
                                <Category postCategory={postData.category}/>
                                <Content postContent={postData.content}/>
                            </Modal.Body>
                            <Modal.Footer style={{ backgroundColor: 'black' }}>
                                <Button variant='secondary' onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant='primary' onClick={handleClose}>
                                    Understood
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