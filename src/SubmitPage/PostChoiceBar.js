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
					<Row >
                        <Col className={postState === 'post' ? 'PostNoImageClicked' : 'PostNoImage'} onClick={handlePostNoImageClick}>
						    <h4 className='PostNoImageText'>Post</h4>
                        </Col>

                        <Col>
                            <h4>Images</h4>
                        </Col>
					</Row>
				</Container>
			</div>
		);
};

export default PostChoiceBar;