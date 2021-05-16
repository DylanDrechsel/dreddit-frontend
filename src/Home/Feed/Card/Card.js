import React, { useState, useEffect } from 'react';
import { tokenState } from '../../../App';
import { useRecoilState } from 'recoil';
import axios from 'axios'
import Title from './Components/Title'
import Category from './Components/Category'


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
        console.log(postData.posts[0].author.username)
    }

    if (haveData) {
        return (
                <div className='Card'>
                    <Category category={postData.posts[0].category} />
                    <Title title={postData.posts[0].title} />
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