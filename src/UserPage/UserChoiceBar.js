import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import GetPosts from './UserChoiceBarComponents/GetPosts'
import GetSavedPosts from './UserChoiceBarComponents/GetSavedPosts'

const UserChoiceBar = () => {
    return (
			<div className='UserChoiceBar'>
				<Row>
					<GetPosts />
					<GetSavedPosts />
				</Row>
			</div>
		);
};

export default UserChoiceBar;