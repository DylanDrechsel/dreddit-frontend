import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { tokenState } from '../../../../App';
import { useRecoilState } from 'recoil';
import { Row } from 'react-bootstrap'
import PostedBy from '../../../../Home/Feed/Card/Components/PostedBy'
import TimeSincePost from '../../../../Home/Feed/Card/Components/TimeSincePost';

const Comments = ({ id, reload }) => {
    const [token] = useRecoilState(tokenState);
    const [commentData, setCommentData] = useState()

    useEffect(() => {
        setTimeout(() => {
            axios({
                url: `http://localhost:4000/comments/${id}`,
                method: 'GET',
                headers: {
                        Authorization: `Bearer ${token}`,
                }
            })
            .then(res => setCommentData(res.data.comments))
        }, 200)
    }, [reload])

    if (commentData) {
        return (
            <div className="PostDetailsComments">
                {commentData.map((comment) => {
                    return (
                        <div className="CommentBox">

                            <Row className="PostInformation">
                                <PostedBy username={comment.author.username} />
                                <TimeSincePost time={comment.createdAt} />
                            </Row>

                            <p className="CommentContent">{comment.content}</p>
                        </div>
                    )
                })}
            </div>
        );
    } else {
        return (
            // CSS in UserPage.css
			<div class='loader animation-stop'>
				<span class='circle delay-1 size-2'></span>
				<span class='circle delay-2 size-4'></span>
				<span class='circle delay-3 size-6'></span>
				<span class='circle delay-4 size-7'></span>
				<span class='circle delay-5 size-7'></span>
				<span class='circle delay-6 size-6'></span>
				<span class='circle delay-7 size-4'></span>
				<span class='circle delay-8 size-2'></span>
			</div>
        )
    }
};

export default Comments;