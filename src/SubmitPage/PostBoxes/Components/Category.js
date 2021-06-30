import React from 'react';
import { Form } from 'react-bootstrap';

const Category = ({ handlePostDataInput, postCategory, handleDataChange }) => {
    return (
        <div className="CategoryBar">
            <Form>
                <Form.Group controlId="category">
                    <Form.Control type="category" defaultValue={postCategory} placeholder={"Category"} style={{ backgroundColor: 'black', color: 'white', border: '1px solid grey'}} onChange={handlePostDataInput ? handlePostDataInput : handleDataChange}/>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Category;