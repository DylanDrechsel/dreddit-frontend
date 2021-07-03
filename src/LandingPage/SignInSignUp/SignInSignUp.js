import React from 'react';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import { Row, Col } from 'react-bootstrap'

const SignInSignUp = () => {
    return (
			<div style={{ height: '50vh'}}>
				<div className='SignInSignUpBox'>
					<Row>
						<Col>
							<SignIn />
						</Col>
					</Row>
				</div>
				
				<SignUp />
			</div>
		);
};

export default SignInSignUp;