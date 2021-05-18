import React from 'react';
import Upvote from './SideUpvoteDownvoteBarComponents/Upvote'
import { userIdState } from '../../../../App';
import { useRecoilState } from 'recoil';

const SideUpvoteDownvoteBar = ({ likes }) => {
    const [userId] = useRecoilState(userIdState);
    let hasLiked = false

    console.log(userId)
    console.log(likes)

    for (let i = 0; i < likes.length; i++) {
        if (likes[i].authorId === userId) {
            hasLiked = true
        }
    }

    console.log(hasLiked)

    return (
        <div className="SideUpvoteDownvoteBar">
            <Upvote hasLiked={hasLiked}/>
        </div>
    );
};

export default SideUpvoteDownvoteBar;