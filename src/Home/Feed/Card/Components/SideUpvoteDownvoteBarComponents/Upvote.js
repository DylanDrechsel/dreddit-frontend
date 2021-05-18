import React from 'react';
import UpvoteImage from '../../CardImages/up-arrow.png'
import UpvoteImageFilled from '../../CardImages/upvote-arrow-filled.png'

const Upvote = ({ hasLiked }) => {
    if (hasLiked) {
        return (
        <div>
            <img src={UpvoteImageFilled}  className="UpvoteImage" />
        </div>
        );
    } else {
        return (
            <div>
                <img src={UpvoteImage}  className="UpvoteImage" />
            </div>
        );
    }
};

export default Upvote;