import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const SignUpModal = ({ handleClose, show }) => {
	const [userData, setUserData] = useState({});
	const [confirmPassword, setConfirmPassword] = useState({});
	const [error, setError] = useState('none');

	const handleInput = (event) => {
		const input = { ...userData };
		input[event.target.id] = event.target.value;
		setUserData(input);
	};

	const handleConfirmPassword = (event) => {
		setConfirmPassword({ confirmPassword: event.target.value });
	};

	const setErrorBackToNone = () => {
		setTimeout(() => {
			setError('none');
		}, 3000);
	};

	const checkData = () => {
		if (!userData.email || userData.email === '') {
			setError('NoEmail');
			setErrorBackToNone();
			return 1;
		}

		if (!userData.username || userData.username === '') {
			setError('NoUsername');
			setErrorBackToNone();
			return 1;
		}
	};

	const handleSignUp = () => {
		if (checkData() === 1) {
			return;
		}

		if (userData.password !== confirmPassword.confirmPassword) {
			setError('PasswordMatch');
			setErrorBackToNone();
			return;
		}

		axios({
			url: 'https://boiling-shelf-57510.herokuapp.com/register',
			method: 'POST',
			data: userData,
		})
			.then((res) => {
				if (
					res.data.message !== 'the email address already exists' &&
					res.data.message !== 'the username already exists'
				) {
					setError('AccountCreated');
					setErrorBackToNone();

					setTimeout(() => {
						handleClose();
					}, 3000);
				}

				if (res.data.message === 'the email address already exists') {
					setError('EmailExist');
					setErrorBackToNone();
				}

				if (res.data.message === 'the username already exists') {
					setError('UsernameExist');
					setErrorBackToNone();
				}
			})
			.catch(() => {
				setError('NetworkError');
				setErrorBackToNone();
			});
	};

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

						<Form.Group
							controlId='confirmPassword'
							onChange={handleConfirmPassword}>
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

				<div
					style={{
						backgroundColor: 'black',
						height: '3vh',
						textAlign: 'center',
					}}>
					{error === 'PasswordMatch' ? (
						<h1 className='SignUpPasswordMatch'>Passwords dont match</h1>
					) : error === 'EmailExist' ? (
						<h1 className='SignUpEmailExist'>Email Exist</h1>
					) : error === 'UsernameExist' ? (
						<h1 className='SignUpUsernameExist'>Username Exist</h1>
					) : error === 'NoEmail' ? (
						<h1 className='SignUpNoEmail'>Please Enter Email Address</h1>
					) : error === 'NoUsername' ? (
						<h1 className='SignUpNoUsername'>Please Enter Username</h1>
					) : error === 'AccountCreated' ? (
						<h1 className='AccountCreated'>Account Created</h1>
					) : error === 'NetworkError' ? (
						<h1 className='AccountCreated'>Server Error. Please Try Again</h1>
					) : null}
				</div>

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
