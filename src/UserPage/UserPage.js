import React, { useEffect } from 'react';
import { websiteState } from '../App';
import { useRecoilState } from 'recoil';
import './UserPage.css';
import UserChoiceBar from './UserChoiceBar';

const UserPage = () => {
    const [website, setWebsite] = useRecoilState(websiteState);

	useEffect(() => {
		setWebsite('userPage');
	}, []);

    return (
        <div>
            <UserChoiceBar />
        </div>
    );
};

export default UserPage;