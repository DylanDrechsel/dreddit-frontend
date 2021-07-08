import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { tokenState, userNameState } from '../../../../App';
import { useRecoilState } from 'recoil';

const PostComment = ({ id }) => {
    const [token] = useRecoilState(tokenState);
    const [userName] = useRecoilState(userNameState);

    return (
        <div className="PostComment">
            <p style={{ fontSize: '12px'}}>Comment as {userName}</p>
        </div>
    );
};

export default PostComment;