import React from 'react';
import { tokenState } from '../../App'
import { useRecoilState } from 'recoil';
import axios from 'axios';

const DeleteButton = ({ postId, handleReload }) => {
    const [token] = useRecoilState(tokenState);

    // console.log(handleReload)

    const handleDeletePost = () => {
        axios({
            url: `http://localhost:4000/posts/${postId}`,
            method: 'DELETE',
            headers: {
                    Authorization: `Bearer ${token}`,
            }
        })
        .then(() => {
            handleReload();
        })
    }

    return (
        <div className="DeleteButton" onClick={handleDeletePost}>
            <h1 className="DeleteButtonText">Delete</h1>
        </div>
    );
};

export default DeleteButton;