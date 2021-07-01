import React from 'react';
import { websiteState } from '../../App';
import { useRecoilState } from 'recoil';

const GetSavedPosts = () => {
    const [website, setWebsite] = useRecoilState(websiteState)

    const handleWebsiteStateChange = () => {
        setWebsite('userPage/saved');
    }

    return (
        <div className="UserPostButton" onClick={handleWebsiteStateChange}>
            <h5 style={{color: 'white'}}>Drafts</h5>
        </div>
    );
};

export default GetSavedPosts;