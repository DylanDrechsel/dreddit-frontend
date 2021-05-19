import React from 'react';
import { userIdState } from '../../../../App';
import { useRecoilState } from 'recoil';
import Upvote from './SideUpvoteDownvoteBarComponents/Upvote'
import Downvote from './SideUpvoteDownvoteBarComponents/Downvote'
import NumberOfUpvotes from './SideUpvoteDownvoteBarComponents/NumberOfUpvotes'
import { Col, Row } from 'react-bootstrap'


const SideUpvoteDownvoteBar = ({ likes, postId }) => {
    const [userId] = useRecoilState(userIdState);
    let typeOfLike = "none"
    let upvoteCount = 0
    let likeValue = null
    let likeId = null

    console.log(likes)

    for (let i = 0; i < likes.length; i++) {
        if (likes[i].authorId === userId && likes[i].value === 1) {
            typeOfLike = "upvoted"
            likeValue = 1
            likeId = likes[i].id
        }
        else if (likes[i].authorId === userId && likes[i].value === -1) {
            typeOfLike = "downvoted"
            likeValue= - 1
            likeId = likes[i].id;
        }
    }

    for (let i = 0; i < likes.length; i++) {
        upvoteCount += likes[i].value
    }

    console.log(typeOfLike)
    // console.log(upvoteCount)

    

    return (
			<div className='SideUpvoteDownvoteBar'>
				<Col>
					<Row>	
						<Upvote typeOfLike={typeOfLike} initialLikeValue={likeValue} postId={postId} likeId={likeId} /* handleUpvote={handleUpvote} */ />
					</Row>

					<NumberOfUpvotes upvoteCount={upvoteCount} />

					<Row>
						<Downvote typeOfLike={typeOfLike} />
					</Row>
				</Col>
			</div>
		);
};

export default SideUpvoteDownvoteBar;