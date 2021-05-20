import React, { useState, useEffect } from 'react';
import { userIdState } from '../../../../App';
import { useRecoilState } from 'recoil';
import Upvote from './SideUpvoteDownvoteBarComponents/Upvote'
import Downvote from './SideUpvoteDownvoteBarComponents/Downvote'
import NumberOfUpvotes from './SideUpvoteDownvoteBarComponents/NumberOfUpvotes'
import { Col, Row } from 'react-bootstrap'


const SideUpvoteDownvoteBar = ({ likes, postId }) => {
    const [userId] = useRecoilState(userIdState);
    const [typeOfLike, setTypeOfLike] = useState('none')
    const [likeValue, setLikeValue] = useState(null)
    const [likeId, setLikeId] = useState(null)
    let upvoteCount = 0

    console.log(likes)
    
    useEffect(() => {
        for (let i = 0; i < likes.length; i++) {
            if (likes[i].authorId === userId && likes[i].value === 1) {
                setTypeOfLike("upvotedTrue")
                setLikeValue(1)
                setLikeId(likes[i].id);
            }
            else if (likes[i].authorId === userId && likes[i].value === -1) {
                setTypeOfLike('downvoted');
                setLikeValue(-1);
                setLikeId(likes[i].id);
            }
            else if (likes[i].authorId === userId && likes[i].value === 0) {
                setTypeOfLike("upvoteRemove")
                setLikeValue(0);
                setLikeId(likes[i].id);
            }
        }
    }, [])

    for (let i = 0; i < likes.length; i++) {
        upvoteCount += likes[i].value
    }

    console.log(`type of like: ${typeOfLike}`)
    console.log(`Like Id: ${likeId}`);
    console.log(`LikeValue: ${likeValue}`);
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