import React from 'react';
import { Form, FormControl } from 'react-bootstrap'

const Content = ({ handlePostDataInput, postContent, handleDataChange, handleCommentData }) => {
    return (
			<div className="ContentBar">
                <Form.Group controlId="content">
				    <FormControl as='textarea' defaultValue={postContent} placeholder={handleCommentData ? "Comment" : "Post"} style={{ backgroundColor: 'black', color: 'white', border: '1px solid grey'}} onChange={handlePostDataInput ? handlePostDataInput : handleCommentData ? handleCommentData : handleDataChange} />
                </Form.Group>
			</div>
		);
};

export default Content;