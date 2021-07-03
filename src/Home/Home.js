import React, { useState, useEffect } from 'react';
import { userIdState, tokenState, websiteState } from '../App'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import Feed from './Feed/Feed'


const Home = () => {
    const [userId] = useRecoilState(userIdState);
    const [token] = useRecoilState(tokenState);
    const [userData, setUserData] = useState({})
    const [website, setWebsite] = useRecoilState(websiteState);

    useEffect(() => {
        setWebsite('home')
    }, [])

    // Stores in cookies
    document.cookie = `token=${token}`;
    
    useEffect(() => {
        axios.get(`http://localhost:4000/users/${userId}`, {
            withCredentials: true,  
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Accept: 'application/json',
            },    
        })
        .then(({ data }) => {
            setUserData(data)
            
            // Stores UserData in browser storage
            localStorage.setItem("userId", userId)
            localStorage.setItem('username', data.user.username);
        })
    }, [])

    return (
        <div>
            <Feed />
        </div>
    );
};

export default Home;