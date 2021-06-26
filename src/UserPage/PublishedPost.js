import React, { useState, useEffect } from 'react';
import { websiteState, tokenState } from '../App';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PublishedPost = () => {
    const [token] = useRecoilState(tokenState);
    const [posts, setPosts] = useState({})

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
        })
    }, [])

    console.log(posts)

    const renderPosts = () => {

    }

    return (
        <div className='PublishedPostDiv'>
            HELLO FROM PUBISHED POSTS
        </div>
    );
};

export default PublishedPost;