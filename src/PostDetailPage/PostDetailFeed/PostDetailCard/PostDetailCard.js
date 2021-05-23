import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userIdState, tokenState, upvoteChangeState } from '../../../App';
import { useRecoilState } from 'recoil';
import { Row, Col, Container } from 'react-bootstrap';
import PostDetailCardCategory from './Components/PostDetailCategory'
import SideUpvoteDownvoteBar from '../../../Home/Feed/Card/Components/SideUpvoteDownvoteBar'
import Category from '../../../Home/Feed/Card/Components/Category'


const PostDetailCard = ({ id }) => {
    const [userId] = useRecoilState(userIdState);
    const [token] = useRecoilState(tokenState);
    const [data, setData] = useState({})
    const [haveData, setHaveData] = useState(false)
    const [upvoteCountChange, setUpvoteCountChange] = useState(false);
    const [upvoteChange] = useRecoilState(upvoteChangeState);

	useEffect(() => {
		axios
			.get(`http://localhost:4000/posts/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(({ data }) => {
				setData(data);
				setHaveData(true);
                setUpvoteCountChange(!upvoteCountChange);
			});
	}, [upvoteChange]);

	if (haveData) {
		console.log(data);
	}

	if (haveData) {
		return (
			<div className='PostDetailCard'>
				<Container style={{ paddingRight: '0px', paddingLeft: '0px', marginLeft: '0px', marginRight: '0px' }}>
					<Row style={{ marginLeft: '0px', marginRight: '0px'}}>
						<Col xs={1} className='PostDetailSideUpvoteDownvoteBar'>
							<SideUpvoteDownvoteBar
								likes={data.post.likes}
								postId={data.post.id}
								upvoteCountChange={upvoteCountChange}
							/>
						</Col>

						<Col xs={11}>
							<Row>
								<Category category={data.post.category} />
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		);
	} else {
		return <div>LOADING</div>;
	}
};

export default PostDetailCard;
