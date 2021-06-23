import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import GetPosts from './UserChoiceBarComponents/GetPosts'

const UserChoiceBar = () => {
    return (
			<div className='UserChoiceBar'>
                <GetPosts />
			</div>
		);
};

export default UserChoiceBar;