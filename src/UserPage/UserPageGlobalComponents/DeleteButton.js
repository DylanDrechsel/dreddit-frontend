import React from 'react';
import { tokenState } from '../../App'
import { useRecoilState } from 'recoil';
import axios from 'axios';

const DeleteButton = ({ postId }) => {
    const [token] = useRecoilState(tokenState);

    return (
        <div className="DeleteButton">
            <h1 className="DeleteButtonText">Delete</h1>
        </div>
    );
};

export default DeleteButton;