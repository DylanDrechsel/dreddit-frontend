import React, { useState, useEffect } from 'react';
import { userIdState } from '../../../../App';
import { useRecoilState } from 'recoil';
import Upvote from './SideUpvoteDownvoteBarComponents/Upvote'
import Downvote from './SideUpvoteDownvoteBarComponents/Downvote'
import NumberOfUpvotes from './SideUpvoteDownvoteBarComponents/NumberOfUpvotes'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios';


const SideUpvoteDownvoteBar = ({ likes, postId, upvoteCountChange }) => {
    const [userId] = useRecoilState(userIdState);
    // const [typeOfLike, setTypeOfLike] = useState('none')
    const [likeValue, setLikeValue] = useState(null)
    const [likeId, setLikeId] = useState(null)
    const [upvoteCount, setUpvoteCount] = useState(0)
    const [downvoteLikeValue, setDownvoteLikeValue] = useState(null)
    let count = 0

    console.log(likes)
    
    useEffect(() => {
        console.log('hit')

        for (let i = 0; i < likes.length; i++) {
            if (likes[i].authorId === userId && likes[i].value === 1) {
                // setTypeOfLike("upvotedTrue")
                setLikeValue(1)
                setDownvoteLikeValue(1)
                setLikeId(likes[i].id);
            }
            else if (likes[i].authorId === userId && likes[i].value === -1) {
                // setTypeOfLike('downvoted');
                setLikeValue(-1);
                setDownvoteLikeValue(-1);
                setLikeId(likes[i].id);
            }
            else if (likes[i].authorId === userId && likes[i].value === 0) {
                // setTypeOfLike("upvoteRemove")
                setLikeValue(0);
                setDownvoteLikeValue(0);
                setLikeId(likes[i].id);
            }
        }
    }, [upvoteCountChange])

    // console.log(downvoteLikeValue)


    useEffect(() => {
        for (let i = 0; i < likes.length; i++) {
            count += likes[i].value

            if (i === likes.length - 1) {
                setUpvoteCount(count)
            }
        }  
    }, [upvoteCountChange])

    // console.log(`type of like: ${typeOfLike}`)
    console.log(`Like Id: ${likeId}`);
    console.log(`LikeValue: ${likeValue}`);
    // console.log(upvoteCount)

    
    
    return (
			<div className='SideUpvoteDownvoteBar'>
				<Col>
					<Row>	
						<Upvote /* typeOfLike={typeOfLike} */ initialLikeValue={likeValue} postId={postId} likeId={likeId} /* handleUpvote={handleUpvote} */ />
					</Row>

					<NumberOfUpvotes upvoteCount={upvoteCount} />

					<Row>
						<Downvote initialLikeValue={likeValue} postId={postId} likeId={likeId} /* typeOfLike={typeOfLike} */ />
					</Row>
				</Col>
			</div>
		);
};

export default SideUpvoteDownvoteBar;