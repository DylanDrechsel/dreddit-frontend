import React, { useState, useEffect } from 'react';
import './submit.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import PostChoiceBar from './PostChoiceBar'

const Submit = () => {
    const [data, setData] = useState({})

    const handleInput = (event) => {
        event.preventDefault()

        const input = { ...data }
        input[event.target.id] = event.target.value
        setData(input)
    }

    console.log(data)

    return (
			<div className='SubmitPage'>
				<Container className='PostContainer'>
					<Row>
						<Col xs={3}>
							<h5 className='CreateAPost'>Create a post!</h5>
						</Col>

						<Col xs={7}>
							{/* <input className='ImageFile' id='imageFile' type='file'/> */}


                            {/* WORKING ON UPLOADING IMAGE FOR POST */}
							{/* <Form className='ImageFile'>
								<Form.Group controlId='image'>
									<input id='image' type='file' multiple></input>
									<Button
										variant='primary'
										type='submit'
										onSubmit={handleInput}
										href=''>
										Submit
									</Button>{' '}
								</Form.Group>
							</Form> */}
						</Col>
					</Row>
				</Container>

				<Container className='PostChoice'>
					<Row>
						<PostChoiceBar />
					</Row>
				</Container>

				{/* <Form className='SubmitInputBars' onChange={handleInput}>
					<Form.Group controlId='title'>
						<Form.Control type='title' placeholder='Title' />
					</Form.Group>
				</Form>

				<Form className='SubmitInputBars' onChange={handleInput}>
					<Form.Group controlId='category'>
						<Form.Control type='category' placeholder='Category' />
					</Form.Group>
				</Form> */}
			</div>
		);
};

export default Submit;