import React from 'react';
import { Form } from 'react-bootstrap';

const Category = ({ handlePostDataInput, postCategory }) => {
    return (
        <div className="CategoryBar">
            <Form>
                <Form.Group controlId="category">
                    <Form.Control type="category" placeholder={postCategory ? postCategory : "Category"} style={{ backgroundColor: 'black', color: 'white', border: '1px solid grey'}} onChange={handlePostDataInput}/>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Category;