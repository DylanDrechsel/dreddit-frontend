import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PostChoiceBar = () => {
    const [postState, setPostState] = useState()

    const handlePostNoImageClick = (event) => {
        setPostState('post')
    }

    return (
			<div className='PostChoiceBar'>
				<Container>
					<Row className={postState === 'post' ? 'PostNoImageClicked' : 'PostNoImage'} onClick={handlePostNoImageClick}>
                        <Col>
						    <h4 className='PostNoImageText' style={{ textAlign: 'center'}}>Post</h4>
                        </Col>
					</Row>
				</Container>
			</div>
		);
};

export default PostChoiceBar;