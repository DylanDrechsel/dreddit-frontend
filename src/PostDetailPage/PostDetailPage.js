import React from 'react';
import axios from 'axios'
import { userIdState, tokenState, userNameState } from '../App';
import { useRecoilState } from 'recoil';

const PostDetailPage = ({ match }) => {
    const [userId] = useRecoilState(userIdState);
    const [token] = useRecoilState(tokenState);
    const [userName] = useRecoilState(userNameState);
    const id = match.params.id

    axios.get(`http://localhost:4000/posts/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(({ data }) => {
        console.log(data)
    })

    return (
        <div className="PostDetailPage">
            TEST FROM POST DETAIL PAGE
        </div>
    );
};

export default PostDetailPage;