import React from 'react';
import { userIdState } from '../../../../App';
import { useRecoilState } from 'recoil';
import Upvote from './SideUpvoteDownvoteBarComponents/Upvote'
import Downvote from './SideUpvoteDownvoteBarComponents/Downvote'
import NumberOfUpvotes from './SideUpvoteDownvoteBarComponents/NumberOfUpvotes'
import { Col, Row } from 'react-bootstrap'

const SideUpvoteDownvoteBar = ({ likes }) => {
    const [userId] = useRecoilState(userIdState);
    let typeOfLike = "none"
    let upvoteCount = 0

    console.log(likes)

    for (let i = 0; i < likes.length; i++) {
        if (likes[i].authorId === userId && likes[i].value === 1) {
            typeOfLike = "upvoted"
        }
        else if (likes[i].authorId === userId && likes[i].value === -1) {
            typeOfLike = "downvoted"
        }
    }

    for (let i = 0; i < likes.length; i++) {
        upvoteCount += likes[i].value
    }

    console.log(typeOfLike)
    console.log(upvoteCount)

    const handleUpvote = (event) => {
        event.preventDefault()
        console.log('hit')
    }

    return (
			<div className='SideUpvoteDownvoteBar'>
				<Col>
					<Row>
						
							<Upvote typeOfLike={typeOfLike} handleUpvote={handleUpvote}>
								<div className='UpvoteDiv' onClick={(event) => handleUpvote(event)}></div>
							</Upvote>
						
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