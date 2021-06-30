import React from 'react';
import { Form } from 'react-bootstrap'

const Title = ({ handlePostDataInput, postTitle , handleDataChange}) => {
    return (
        <div className="TitleBar">
            <Form>
                <Form.Group controlId="title">
                    <Form.Control type="title" defaultValue={postTitle} placeholder={"Title"} style={{ backgroundColor: 'black', color: 'white', border: '1px solid grey'}} onChange={handlePostDataInput ? handlePostDataInput : handleDataChange}/>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Title;