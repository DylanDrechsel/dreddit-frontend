import React from 'react';

const NumberOfUpvotes = ({ upvoteCount }) => {
    if (upvoteCount >= 0) {
        return (
            <div className="UpvoteCount">
                <b>{upvoteCount}</b>
            </div>
        );
    } else {
        return (
            <div className="UpvoteCount">
                <b>{upvoteCount}</b>
            </div>
        )
    }
};

export default NumberOfUpvotes;