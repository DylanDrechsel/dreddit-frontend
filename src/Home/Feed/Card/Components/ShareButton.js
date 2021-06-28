import React from 'react';

const ShareButton = ({ postId }) => {
    const handleShareButton = (event) => {
        event.preventDefault()

        navigator.clipboard.writeText(
					`http://localhost:3000/${postId}`
				);
    }

    return (
        <div className="ShareButtonDiv" onClick={handleShareButton}>
            <p className='ShareButtonText'>Share</p>
        </div>
    );
};

export default ShareButton;