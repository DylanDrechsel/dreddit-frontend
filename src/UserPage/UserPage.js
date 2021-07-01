import React, { useEffect } from 'react';
import { websiteState, tokenState } from '../App';
import { useRecoilState } from 'recoil';
import './UserPage.css';
import UserChoiceBar from './UserChoiceBar';
import axios from 'axios';
import PublishedPost from './PublishedPost';

const UserPage = () => {
    const [website, setWebsite] = useRecoilState(websiteState);
    const [token] = useRecoilState(tokenState)

	useEffect(() => {
		setWebsite('userPage/posts');
	}, []);

    

    return (
        <div>
            <UserChoiceBar />

            {website === '' ? null : (<PublishedPost />)}
        </div>
    );
};

export default UserPage;