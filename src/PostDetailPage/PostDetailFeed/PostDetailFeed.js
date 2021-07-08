import React from 'react';
import PostDetailCard from './PostDetailCard/PostDetailCard'
import CommentFeed from './CommentFeed'


const Feed = ({ id }) => {
	return (
		<div className='PostDetailFeed' >
            <PostDetailCard id={id} />
			<CommentFeed id={id} />
		</div>
	);
};

export default Feed;
