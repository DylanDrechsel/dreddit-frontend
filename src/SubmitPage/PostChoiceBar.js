import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PostChoiceBar = () => {
    return (
			<div className='PostChoiceBar'>
				<Container>
					<Row className='PostNoImage'>
						<h4 className='PostNoImageText' style={{ textAlign: 'center'}}>Post</h4>
					</Row>
				</Container>
			</div>
		);
};

export default PostChoiceBar;