import React from 'react';
import { websiteState } from '../../../../App';
import { useRecoilState } from 'recoil';

const PostImage = ({ path }) => {
    const [website] = useRecoilState(websiteState)
    const url = `http://localhost:4000/${path}`

    return (
        <div className={website === 'home' ? "CardPostImage" : website === 'userPage/posts' ? 'UsersPublishedPosts' : 'PostDetailCardImage'}>
            <img src={url} className={website === 'home' ? "PostImage" : website === 'userPage/posts' ? 'UsersPublishedPostsImage' : 'DetailPostImage'}/>
        </div>
    );
};

export default PostImage;