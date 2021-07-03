import React, { useState, useEffect } from 'react';
import { userIdState, tokenState, userNameState, websiteState } from '../App'
import { useRecoilState } from 'recoil'
import axios from 'axios'
// import Navbar from '../Global/Navigation'
import Feed from './Feed/Feed'


const Home = () => {
    const [userId, setUserId] = useRecoilState(userIdState);
    const [token, setToken] = useRecoilState(tokenState);
    const [userName, setUserName] = useRecoilState(userNameState);
    const [userData, setUserData] = useState({})
    const [website, setWebsite] = useRecoilState(websiteState);

    useEffect(() => {
        setWebsite('home')
    }, [])

    // Stores in cookies
    document.cookie = `token=${token}`;
    
    
    // console.log(userId)
    
    
    /* useEffect(() => {
        document.cookie = token
    }, []) */
    
    // console.log(website)
    
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
            
            localStorage.setItem("userId", userId)
            localStorage.setItem('username', data.user.username);
            
            console.log(data)
        })
    }, [])

    return (
        <div>
            {/* <Navbar /> */}
            <Feed />
            {/* <img src='http://localhost:4000/image/1621126374587_download.jpg'/> */}
        </div>
    );
};

export default Home;