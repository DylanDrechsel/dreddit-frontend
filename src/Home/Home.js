import React, { useState, useEffect } from 'react';
import { userIdState, tokenState } from '../App'
import { useRecoilState } from 'recoil'
import axios from 'axios'

const Home = () => {
    const [userId, setUserId] = useRecoilState(userIdState);
    const [token, setToken] = useRecoilState(tokenState);
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
            <h1>Signed In</h1>
        </div>
    );
};

export default Home;