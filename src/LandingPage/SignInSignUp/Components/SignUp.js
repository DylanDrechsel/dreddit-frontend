import React, { useState } from 'react';
import { tokenState, userIdState, userNameState } from '../../../App';
import { useRecoilState } from 'recoil';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const SignUp = () => {
    const [token, setToken] = useRecoilState(tokenState);
    const [userId, setUserId] = useRecoilState(userIdState)
    const [userName, setUserName] = useRecoilState(userNameState)
    const [userData, setUserData] = useState({
		email: null,
		password: null,
	});


    return (
        <div>
            <Button>Sign Up</Button>
        </div>
    );
};

export default SignUp;