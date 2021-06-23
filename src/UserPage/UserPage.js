import React, { useEffect } from 'react';
import { websiteState } from '../App';
import { useRecoilState } from 'recoil';

const UserPage = () => {
    const [website, setWebsite] = useRecoilState(websiteState);

	useEffect(() => {
		setWebsite('userPage');
	}, []);

    console.log(website)

    return (
        <div>
            
        </div>
    );
};

export default UserPage;