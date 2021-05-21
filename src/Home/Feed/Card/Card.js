import React, { useState, useEffect } from 'react';
import { tokenState, upvoteChangeState } from '../../../App';
import { useRecoilState } from 'recoil';
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Title from './Components/Title'
import Category from './Components/Category'
import PostedBy from './Components/PostedBy'
import PostImage from './Components/PostImage'
import TimeSincePost from './Components/TimeSincePost'
import CommentButton from './Components/CommentButton'
import SideUpvoteDownvoteBar from './Components/SideUpvoteDownvoteBar'


const Card = () => {
    const [token] = useRecoilState(tokenState);
    const [upvoteChange] = useRecoilState(upvoteChangeState);
	const [postData, setPostData] = useState({});
    const [haveData, setHaveData] = useState(false)
    const [upvoteCountChange, setUpvoteCountChange] = useState(false)


    useEffect(() => {
        axios.get(`http://localhost:4000/posts`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(({ data }) => {
            setPostData(data)
            setHaveData(true)
            setUpvoteCountChange(!upvoteCountChange)
        })
    }, [upvoteChange])

    if (haveData) {
        // console.log(postData.posts[1])
    }


    if (haveData) {
        return (
            <div>
                {postData.posts.map((post) => {
                    return (
                        <div className='Card'>
                            <Container>
                                <Link to={`${post.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                    <Row>
                                        <Col xs={1} className='SideColumn'>
                                            <SideUpvoteDownvoteBar likes={post.likes} postId={post.id} upvoteCountChange={upvoteCountChange}/>
                                        </Col>

                                        <Col xs={11} className='MainCardColumn'>
                                            <Row className='PostInformation'>
                                                <Category category={post.category} />
                                                <PostedBy username={post.author.username} />
                                                <TimeSincePost time={post.createdAt}/>
                                            </Row>

                                            <Row className="justify-content-md-center">
                                                <Title title={post.title} />
                                            </Row>

                                            {!post.image ? null : <PostImage path={post.image.path}/>}
                                            
                                            <Row>
                                                <CommentButton comments={post.comments}/>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Link>
                            </Container>
                        </div>
                    )
                })}
            </div>
            );
    } else {
        return (
            <div className='CardLoader'>
                LOADING!
            </div>
        )
    }
};

export default Card;