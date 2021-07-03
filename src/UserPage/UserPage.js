import React, { useEffect } from 'react';
import { websiteState } from '../App';
import { useRecoilState } from 'recoil';
import './UserPage.css';
import UserChoiceBar from './UserChoiceBar';
import PublishedPost from './PublishedPost';

const UserPage = () => {
    const [website, setWebsite] = useRecoilState(websiteState);

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