import React from 'react';
import { Form } from 'react-bootstrap'

const Title = ({ handlePostDataInput, postTitle }) => {
    return (
        <div className="TitleBar">
            <Form>
                <Form.Group controlId="title">
                    <Form.Control type="title" placeholder={postTitle ? postTitle : "Title"} style={{ backgroundColor: 'black', color: 'white', border: '1px solid grey'}} onChange={handlePostDataInput}/>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Title;