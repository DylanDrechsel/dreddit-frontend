import React from 'react';
import './LandingPage.css'
import { Col, Row } from 'react-bootstrap'
import Title from './Text/Title'
import SignInSignUp from './SignInSignUp/SignInSignUp'

const LandingPage = () => {
    return (
        <div className="LandingPage">

            <Row>
                <Col>
                    <Title />
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col sm={2.5}>
                    <SignInSignUp />
                </Col>
            </Row>

        </div>
    );
};

export default LandingPage;