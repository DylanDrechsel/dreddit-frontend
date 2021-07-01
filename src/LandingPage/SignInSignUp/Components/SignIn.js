import React, { useState } from 'react';
import { tokenState, userIdState, userNameState } from '../../../App';
import { useRecoilState } from 'recoil';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const SignIn = () => {
    const [token, setToken] = useRecoilState(tokenState);
    const [userId, setUserId] = useRecoilState(userIdState)
    const [userName, setUserName] = useRecoilState(userNameState)
    const [userData, setUserData] = useState({});
	const [error, setError] = useState('none')

    const handleInput = (event) => {
        const input = { ...userData }
        input[event.target.id] = event.target.value
        setUserData(input)
    }

    const handleLogin = (event) => {
        event.preventDefault()
        loginFunction()
    }

	const setErrorBackToNone = () => {
		setTimeout(() => {
			setError('none')
		}, 3000)
	}

    const loginFunction = () => {
		if (!userData.email && !userData.password) {
			setError('No Information')
			return
		} else if (!userData.email) {
			setError('No Email');
			return;
		} else if (!userData.password) {
			setError('No Password');
			return;
		}

        axios({
            url: 'http://localhost:4000/login',
            method: 'POST',
            data: userData
        })
        .then(({ data }) => {
			console.log(data)

			if (data.status === 200) {
				setUserId(data.id);
				setUserName(data.username);
				setToken(data.signedJwt);
			} else if (data.message === 'Incorrect Email') {
				setError('EmailError')
				setErrorBackToNone()
			} else if (data.message === 'Incorrect Password') {
				setError('PasswordError');
			}
        })
    }

	console.log(error)
	console.log(userData)

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

					<Button variant='outline-dark' type='submit' onClick={handleLogin} style={{ color: 'black', width: '23vw' }}>
						<b style={{ fontFamily: 'iceland', fontSize: '24px' }}>Log In!</b>
					</Button>
				</Form>
				
				{error === 'EmailError' ? (<h1 className='EmailError'>Email Incorrect</h1>) : error === 'PasswordError' ? (<h1>Password Incorrect</h1>) : error === "No Information" ? (<h1>Please Enter Username and Password</h1>) : error === 'No Email' ? (<h1>Please Enter Email</h1>) : error === 'No Password' ? (<h1>Please Enter Password</h1>) : null}
			</div>
		);
	};
	
	export default SignIn;