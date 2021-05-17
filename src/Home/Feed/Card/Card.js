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
        console.log(postData.posts)
        
    }


    if (haveData) {
        return (
            <div>
                {postData.posts.map((post) => {
                    return (
                        <div className='Card'>
                            <Row>
                                <Category category={post.category} />
                                <PostedBy username={post.author.username} />
                                <TimeSincePost time={post.createdAt}/>
                            </Row>
        
                            <Title title={post.title} />
                            <PostImage path={post.image[0].path}/>
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