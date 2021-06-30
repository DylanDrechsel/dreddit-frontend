import React, { useState } from 'react';
import { tokenState, userIdState, userNameState } from '../../../App';
import { useRecoilState } from 'recoil';
import { Form, Button, Row, Modal } from 'react-bootstrap';
import axios from 'axios';

const SignUpModal = ({ handleClose, show }) => {
    const [token, setToken] = useRecoilState(tokenState);
    const [userId, setUserId] = useRecoilState(userIdState)
    const [userName, setUserName] = useRecoilState(userNameState)
    const [userData, setUserData] = useState({});
    const [confirmPassword, setConfirmPassword] = useState({})

    const handleInput = (event) => {
        const input = { ...userData }
        input[event.target.id] = event.target.value;
		setUserData(input);
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword({ confirmPassword: event.target.value });
    }

    console.log(userData)
    console.log(confirmPassword)

    const handleSignUp = () => {
        if (userData.password !== confirmPassword.confirmPassword) {
            console.log('Passwords dont match')

            return
        }

        axios({
            url: 'http://localhost:4000/register',
            method: 'POST',
            data: userData
        })
        .then((res) => {
            console.log(res.data.message)
        })
    }

    return (
			<div className='SignIn'>
				<Modal
					show={show}
					onHide={handleClose}
					backdrop='static'
					keyboard={false}>
					<Modal.Header style={{ backgroundColor: 'black' }}>
						<Modal.Title style={{ color: 'white' }}>Sign Up!</Modal.Title>
					</Modal.Header>

					<Modal.Body style={{ backgroundColor: 'black', color: 'white' }}>
						<Form>
							<Form.Group controlId='email' onChange={handleInput}>
								<Form.Control
									type='email'
									placeholder='Email'
									style={{
										textAlign: 'center',
										backgroundColor: 'white',
										border: '1px black',
										color: 'black',
									}}
								/>
							</Form.Group>

							<Form.Group controlId='username' onChange={handleInput}>
								<Form.Control
									type='username'
									placeholder='Username'
									style={{
										textAlign: 'center',
										backgroundColor: 'white',
										border: '1px black',
										color: 'black',
									}}
								/>
							</Form.Group>

							<Form.Group controlId='password' onChange={handleInput}>
								<Form.Control
									type='password'
									placeholder='Password'
									style={{
										textAlign: 'center',
										backgroundColor: 'white',
										border: '1px black',
										color: 'black',
									}}
								/>
							</Form.Group>

							<Form.Group controlId='confirmPassword' onChange={handleConfirmPassword}>
								<Form.Control
									type='password'
									placeholder='Confirm Password'
									style={{
										textAlign: 'center',
										backgroundColor: 'white',
										border: '1px black',
										color: 'black',
									}}
								/>
							</Form.Group>
						</Form>
					</Modal.Body>

					<Modal.Footer style={{ backgroundColor: 'black' }}>
						<Button variant='outline-light' type='submit' onClick={handleClose}>
							<b style={{ fontFamily: 'iceland', fontSize: '24px' }}>Close</b>
						</Button>

						<Button variant='outline-light' type='submit' onClick={handleSignUp}>
							<b style={{ fontFamily: 'iceland', fontSize: '24px' }}>Submit</b>
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
};

export default SignUpModal;