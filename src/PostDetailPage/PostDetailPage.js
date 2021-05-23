import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { userIdState, tokenState, userNameState, websiteState } from '../App';
import { useRecoilState } from 'recoil';
import './PostDetailPage.css';
import { Row, Col, Container } from 'react-bootstrap';
import PostDetailFeed from './PostDetailFeed/PostDetailFeed'

const PostDetailPage = ({ match }) => {
    const [userId] = useRecoilState(userIdState);
    const [token] = useRecoilState(tokenState);
    const [userName] = useRecoilState(userNameState);
    const [data, setData] = useState({})
    const [haveData, setHaveData] = useState(false)
    const [website, setWebsite] = useRecoilState(websiteState)
    const id = match.params.id

    useEffect(() => {
        setWebsite('postDetails')
    }, [])

    // useEffect(() => {
    //     axios.get(`http://localhost:4000/posts/${id}`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then(({ data }) => {
    //         setData(data)
    //         setHaveData(true)
    //     })
    // }, [])

        return (
        <div className="PostDetailPage">
            <PostDetailFeed id={id}/>
        </div>
        );
};

export default PostDetailPage;