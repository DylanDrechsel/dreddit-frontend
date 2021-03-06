import React, { useState, useEffect } from 'react';
import { userIdState, websiteState, upvoteChangeState } from '../../../../App';
import { useRecoilState } from 'recoil';
import Upvote from './SideUpvoteDownvoteBarComponents/Upvote'
import Downvote from './SideUpvoteDownvoteBarComponents/Downvote'
import NumberOfUpvotes from './SideUpvoteDownvoteBarComponents/NumberOfUpvotes'
import { Col, Row } from 'react-bootstrap'


const SideUpvoteDownvoteBar = ({ likes, postId, upvoteCountChange }) => {
    const [userId] = useRecoilState(userIdState);
    const [likeValue, setLikeValue] = useState(null)
    const [likeId, setLikeId] = useState(null)
    const [upvoteCount, setUpvoteCount] = useState(0)
    const [website] = useRecoilState(websiteState)
    let count = 0
    
    useEffect(() => {
        for (let i = 0; i < likes.length; i++) {
            if (likes[i].authorId === userId && likes[i].value === 1) {
                setLikeValue(1)
                setLikeId(likes[i].id);
            }
            else if (likes[i].authorId === userId && likes[i].value === -1) {
                setLikeValue(-1);;
                setLikeId(likes[i].id);
            }
            else if (likes[i].authorId === userId && likes[i].value === 0) {
                setLikeValue(0);
                setLikeId(likes[i].id);
            }
        }
    }, [upvoteCountChange])

    

    useEffect(() => {
        for (let i = 0; i < likes.length; i++) {
            count += likes[i].value

            if (i === likes.length - 1) {
                setUpvoteCount(count)
            }
        }  
    }, [upvoteCountChange])

    return (
			<div className={website === 'home' ? 'SideUpvoteDownvoteBar' : website === 'userPage/posts' ? 'UserPublishedPostSideUpvoteDownvoteBar' : website === 'postDetails' ? 'PostDetailsSideBar' : 'PostSideUpvoteDownvoteBar'}>
				<Col>
					<Row>	
						<Upvote initialLikeValue={likeValue} postId={postId} likeId={likeId} />
					</Row>

					<NumberOfUpvotes upvoteCount={upvoteCount} />

					<Row>
						<Downvote initialLikeValue={likeValue} postId={postId} likeId={likeId} />
					</Row>
				</Col>
			</div>
		);
};

export default SideUpvoteDownvoteBar;