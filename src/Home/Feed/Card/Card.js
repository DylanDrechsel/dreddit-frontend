import React, { useState, useEffect } from 'react';
import { tokenState } from '../../../App';
import { useRecoilState } from 'recoil';
import axios from 'axios'
import Title from './Components/Title'


const Card = () => {
    const [token, setToken] = useRecoilState(tokenState);
	const [postData, setPostData] = useState({});
    const [haveData, setHvaeData] = useState(false)
	let count = 0;

    useEffect(() => {
        axios.get(`http://localhost:4000/posts`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(({ data }) => {
            setPostData(data)
            setHvaeData(true)
        })
    }, [])

    if (haveData) {
        console.log(postData.posts[0].title)
    }

    if (haveData) {
        return (
                <div className='Card'>
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