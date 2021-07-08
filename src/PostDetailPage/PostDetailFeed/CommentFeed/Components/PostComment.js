import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { tokenState, userNameState } from '../../../../App';
import { useRecoilState } from 'recoil';
import Content from '../../../../SubmitPage/PostBoxes/Components/Content'

const PostComment = ({ id }) => {
    const [token] = useRecoilState(tokenState);
    const [userName] = useRecoilState(userNameState);
    const [commentData, setCommentData] = useState()

    const handleCommentData = (event) => {
		const input = { ...commentData };
		input[event.target.id] = event.target.value;
		setCommentData(input);
	};

    const publishedComment = () => {
        axios.get({
            url: `http://localhost:4000/comments/create/${id}`,
            method: 'POST',
            headers: {
					Authorization: `Bearer ${token}`,
			}
        })
        .then(res => console.log(res))
    }

    console.log(commentData)

    return (
        <div className="PostComment">
            <p style={{ fontSize: '12px'}}>Comment as {userName}</p>
            <Content handleCommentData={handleCommentData}/>
        </div>
    );
};

export default PostComment;