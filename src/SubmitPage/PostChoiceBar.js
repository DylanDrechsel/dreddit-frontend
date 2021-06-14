import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PostChoiceBar = () => {
    const [postState, setPostState] = useState()

    const handlePostNoImageClick = () => {
        setPostState('text')
    }

    const handlePostWithImageClick = () => {
        setPostState('image');
    }

    return (
			<div className='PostChoiceBar'>
				<Container>
					<Row >
                        <Col className={postState === 'text' ? 'PostNoImageClicked' : 'PostNoImage'} onClick={handlePostNoImageClick}>
						    <h4 className='PostNoImageText'>Text Post</h4>
                        </Col>

                        <Col className={postState === 'image' ? 'PostWithImageClicked' : 'PostWithImage'} onClick={handlePostWithImageClick}>
                            <h4 className='PostWithImageText'>Post With Image</h4>
                        </Col>
					</Row>
				</Container>
			</div>
		);
};

export default PostChoiceBar;