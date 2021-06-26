import React, { useState, useEffect } from 'react';
import { websiteState, tokenState } from '../App';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PublishedPost = () => {
    const [token] = useRecoilState(tokenState);
    const [posts, setPosts] = useState({})
    const [haveData, setHaveData] = useState(false)

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
        })
    }, [])

    if (haveData) {
        return (
            <div className='PublishedPostDiv'>
                {posts.data.posts.map((post) => {
                    return (
                        <h1>Test</h1>
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