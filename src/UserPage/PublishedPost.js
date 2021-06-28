import React, { useState, useEffect } from 'react';
import { websiteState, tokenState, upvoteChangeState } from '../App';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Title from '../Home/Feed/Card/Components/Title'
import SideUpvoteDownvoteBar from '../Home/Feed/Card/Components/SideUpvoteDownvoteBar';
import Category from '../Home/Feed/Card/Components/Category';
import PostedBy from '../Home/Feed/Card/Components/PostedBy';
import TimeSincePost from '../Home/Feed/Card/Components/TimeSincePost';

const PublishedPost = () => {
    const [token] = useRecoilState(tokenState);
    const [posts, setPosts] = useState({})
    const [haveData, setHaveData] = useState(false)
    const [upvoteChange] = useRecoilState(upvoteChangeState);
    const [upvoteCountChange, setUpvoteCountChange] = useState(false);
    const [website, setWebsite] = useRecoilState(websiteState);

    useEffect(() => {
			setWebsite('userPage/posts');
	}, []);

    useEffect(() => {
        axios({
            url: 'http://localhost:4000/posts/user/published',
            method: 'GET',
            headers: {
                    Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => {
            setPosts(response)
            setHaveData(true)
            setUpvoteCountChange(!upvoteCountChange)

            console.log(posts)
        })
    }, [upvoteChange])

    console.log(website)

    if (haveData) {
        return (
            <div className='PublishedPostDiv'>
                {posts.data.posts.map((post) => {
                    return (
                        <div className='EachPublishedPostDiv'>
                            <Container>
                                <Link to={`/${post.id}`} style={{ textDecoration: 'none', color: 'white' }}>
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

                                            {/* {!post.image ? null : <PostImage path={post.image.path}/>} */}
                                            
                                            <Row>
                                                {/* <CommentButton comments={post.comments}/> */}
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
            <h1 style={{ color: 'white' }}>Loading</h1>
        )
    }
};

export default PublishedPost;