import React from 'react';
import { Form, FormControl } from 'react-bootstrap'

const Content = ({ handlePostDataInput }) => {
    return (
			<div className="ContentBar">
                <Form.Group controlId="content">
				    <FormControl as='textarea' placeholder="Post" style={{ backgroundColor: 'black', color: 'white', border: '1px solid grey'}} onChange={handlePostDataInput} />
                </Form.Group>
			</div>
		);
};

export default Content;