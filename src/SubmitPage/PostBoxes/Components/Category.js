import React from 'react';
import { Form } from 'react-bootstrap';

const Category = ({ handleCategoryInput }) => {
    return (
        <div className="CategoryBar">
            <Form>
                <Form.Group controlId="category">
                    <Form.Control type="category" placeholder="category" style={{ backgroundColor: 'black', color: 'white', border: '1px solid grey'}} onChange={handleCategoryInput}/>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Category;