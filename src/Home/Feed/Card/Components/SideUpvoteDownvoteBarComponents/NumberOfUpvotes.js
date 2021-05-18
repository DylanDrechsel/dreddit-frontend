import React from 'react';

const NumberOfUpvotes = ({ upvoteCount }) => {
    if (upvoteCount >= 0) {
        return (
            <div>
                <b>{upvoteCount}</b>
            </div>
        );
    } else {
        return (
            <div>
                <b>{upvoteCount}</b>
            </div>
        )
    }
};

export default NumberOfUpvotes;