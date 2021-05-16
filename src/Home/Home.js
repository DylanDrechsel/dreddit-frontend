import React, { useState, useEffect } from 'react';
import { userIdState, tokenState, userNameState } from '../App'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import Navbar from '../Global/Navigation'
import Feed from './Feed/Feed'


const Home = () => {
    const [userId, setUserId] = useRecoilState(userIdState);
    const [token, setToken] = useRecoilState(tokenState);
    const [userName, setUserName] = useRecoilState(userNameState);
    const [userData, setUserData] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:4000/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(({ data }) => {
            setUserData(data)
        })
    }, [])

    return (
        <div>
            <Navbar />
            <Feed />
            {/* <img src='http://localhost:4000/image/1621126374587_download.jpg'/> */}
        </div>
    );
};

export default Home;