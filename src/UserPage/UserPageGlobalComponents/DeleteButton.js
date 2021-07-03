import React from 'react';
import axios from 'axios';

const DeleteButton = ({ postId, handleReload }) => {
    const handleDeletePost = () => {
        axios({
            url: `http://localhost:4000/posts/${postId}`,
            method: 'DELETE',
            withCredentials: true,  
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Accept: 'application/json',
            }, 
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