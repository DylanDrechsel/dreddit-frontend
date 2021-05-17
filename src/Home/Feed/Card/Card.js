import React, { useState, useEffect } from 'react';
import { tokenState } from '../../../App';
import { useRecoilState } from 'recoil';
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Title from './Components/Title'
import Category from './Components/Category'
import PostedBy from './Components/PostedBy'
import PostImage from './Components/PostImage'
import TimeSincePost from './Components/TimeSincePost'


const Card = () => {
    const [token, setToken] = useRecoilState(tokenState);
	const [postData, setPostData] = useState({});
    const [haveData, setHaveData] = useState(false)
	let count = 0;

    useEffect(() => {
        axios.get(`http://localhost:4000/posts`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(({ data }) => {
            setPostData(data)
            setHaveData(true)
        })
    }, [])

    if (haveData) {
        // console.log(postData.posts[0].createdAt)
    }

    if (haveData) {
        return (
                <div className='Card'>
                    <Row>
                        <Category category={postData.posts[0].category} />
                        <PostedBy username={postData.posts[0].author.username} />
                        <TimeSincePost time={postData.posts[0].createdAt}/>
                    </Row>

                    <Title title={postData.posts[0].title} />
                    <PostImage path={postData.posts[0].image[0].path}/>
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