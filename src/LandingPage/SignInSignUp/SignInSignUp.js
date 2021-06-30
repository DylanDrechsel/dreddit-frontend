import React from 'react';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import { Row, Col } from 'react-bootstrap'

const SignInSignUp = () => {
    return (
        <div className="SignInSignUpBox">
            <Row>
                <Col>
                    <SignIn />
                    <SignUp />
                </Col>
            </Row>
        </div>
    );
};

export default SignInSignUp;