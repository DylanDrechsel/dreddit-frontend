import React, { useState, useEffect } from 'react';
import './Feed.css'
import axios from 'axios'
import Card from './Card/Card'
import { tokenState } from '../../App';
import { useRecoilState } from 'recoil';

const Feed = () => {
    const [token, setToken] = useRecoilState(tokenState);
    const [postData, setPostData] = useState({})
    let count = 0;


    // useEffect(() => {
    //     axios.get(`http://localhost:4000/posts`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then(({ data }) => {
    //         setPostData(data)
    //     })
    // }, [])

    // console.log(postData)

    // if (postData != null) {
    //     console.log(postData.posts[count])
    // }

    return (
        <div className="Feed">
            <Card />
                {/* {postData.posts[count].map((post) => {
                    count += 1
                    return (
                        <Card post={post}/>
                    )
                })} */}
        </div>
    );
};

export default Feed;