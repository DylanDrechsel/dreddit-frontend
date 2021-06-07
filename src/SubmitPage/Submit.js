import React, { useState, useEffect } from 'react';
import './submit.css'
import { Container, Row, Col, Form } from 'react-bootstrap'

const Submit = () => {
    const [data, setData] = useState({})

    return (
        <div className='SubmitPage'>
            <Row className="justify-content-md-center">Create a post!</Row>

            <Form>
                <Form.Group controlId="Title">
                    <Form.Control type="title" placeholder="Title" />
                </Form.Group>
            </Form>

        </div>
    );
};

export default Submit;