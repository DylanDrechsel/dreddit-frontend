import React from 'react';
import './LandingPage.css'
import { tokenState } from '../App'
import { useRecoilState } from 'recoil'
import { Col, Row } from 'react-bootstrap'
import Title from './componenets/Title'

const LandingPage = () => {
    const [token, setToken] = useRecoilState(tokenState)

    return (
        <div className="LandingPage">
            <Row>
                <Col>
                    <Title />
                </Col>
            </Row>
        </div>
    );
};

export default LandingPage;