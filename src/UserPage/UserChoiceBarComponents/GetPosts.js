import React from 'react';
import { websiteState } from '../../App'
import { useRecoilState } from 'recoil';

const GetPosts = () => {
    const [website, setWebsite] = useRecoilState(websiteState)

    const handleWebsiteStateChange = () => {
        setWebsite('userPage/posts');
    }

    return (
        <div className="UserPostButton" onClick={handleWebsiteStateChange}>
            <h5 style={{color: 'white'}}>Posts</h5>
        </div>
    );
};

export default GetPosts;