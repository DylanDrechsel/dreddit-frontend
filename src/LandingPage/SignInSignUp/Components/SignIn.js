import React, { useState } from 'react';
import { tokenState, userIdState, userNameState } from '../../../App';
import { useRecoilState } from 'recoil';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const SignIn = () => {
    const [token, setToken] = useRecoilState(tokenState);
    const [userId, setUserId] = useRecoilState(userIdState)
    const [userName, setUserName] = useRecoilState(userNameState)
    const [userData, setUserData] = useState({
		email: null,
		password: null,
	});

    const handleInput = (event) => {
        const input = { ...userData }
        input[event.target.id] = event.target.value
        setUserData(input)
    }

    const handleLogin = (event) => {
        event.preventDefault()
        loginFunction()
    }

    const loginFunction = () => {
        axios({
            url: 'http://localhost:4000/login',
            method: 'POST',
            data: userData
        })
        .then(({ data }) => {
            setUserId(data.id)
            setUserName(data.username)
            setToken(data.signedJwt)
        })
    }

    return (
			<div className='SignIn'>
				<h2>
					<b>Log In</b>
				</h2>
				<Form>
					<Form.Group controlId='email' onChange={handleInput}>
						<Form.Control
							type='email'
							placeholder='Email'
							style={{ textAlign: 'center', backgroundColor: 'black', border: '1px black', color: 'white'}}
						/>
					</Form.Group>

					<Form.Group controlId='password' onChange={handleInput}>
						<Form.Control
							type='password'
							placeholder='Password'
							style={{ textAlign: 'center', backgroundColor: 'black', border: '1px black', color: 'white'}}
						/>
					</Form.Group>

					<Button variant='outline-dark' type='submit' onClick={handleLogin} style={{ color: 'black' }}>
						<b style={{ fontFamily: 'iceland', fontSize: '24px' }}>Log In!</b>
					</Button>
				</Form>
			</div>
		);
};

export default SignIn;