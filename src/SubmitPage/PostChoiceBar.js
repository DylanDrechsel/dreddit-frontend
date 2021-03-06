import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TextPost from './PostBoxes/TextPost'
import ImagePost from './PostBoxes/ImagePost'

const PostChoiceBar = () => {
    const [postState, setPostState] = useState('text')

    const handlePostNoImageClick = () => {
        setPostState('text')
    }

    const handlePostWithImageClick = () => {
        setPostState('image');
    }

    const handleLinkPostClick = () => {
        setPostState('link')
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

                        <Col className={postState === 'link' ? 'LinkPostClicked' : 'LinkPost'} onClick={handleLinkPostClick}>
                            <h4 className='LinkPostText'>Link</h4>
                        </Col>
					</Row>

                
                    <Row>
                        {postState === 'text' ? (<TextPost />) : postState === 'image' ? (<ImagePost />) : null}
                    </Row>
				</Container>
			</div>
		);
};

export default PostChoiceBar;