import React from 'react';
import PostDetailCard from './PostDetailCard/PostDetailCard'


const Feed = ({ id }) => {
	return (
		<div className='PostDetailFeed' >
            <PostDetailCard id={id} />
		</div>
	);
};

export default Feed;
