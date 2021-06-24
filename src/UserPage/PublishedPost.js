import React from 'react';
import { websiteState, tokenState } from '../App';
import { useRecoilState } from 'recoil';
import axios from 'axios';

const PublishedPost = () => {
    const [token] = useRecoilState(tokenState);

    axios({
        url: 'http://localhost:4000/posts/user/published',
        method: 'GET',
        headers: {
                Authorization: `Bearer ${token}`,
            }
    })
    .then((response) => {
        console.log(response)
    })

    return (
        <div className='PublishedPostDiv'>
            HELLO FROM PUBISHED POSTS
        </div>
    );
};

export default PublishedPost;