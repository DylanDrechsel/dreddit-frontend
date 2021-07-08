import React from 'react';
import PostDetailCard from './PostDetailCard/PostDetailCard'
import CommentFeed from './CommentFeed/CommentFeed'
import PostComment from './CommentFeed/Components/PostComment'


const Feed = ({ id }) => {
	return (
		<div className='PostDetailFeed' >
            <PostDetailCard id={id} />
			{/* <PostComment id={id} /> */}
			<CommentFeed id={id} />
		</div>
	);
};

export default Feed;
