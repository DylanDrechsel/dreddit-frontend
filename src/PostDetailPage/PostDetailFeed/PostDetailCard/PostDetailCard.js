import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userIdState, tokenState, upvoteChangeState } from '../../../App';
import { useRecoilState } from 'recoil';
import { Row, Col, Container } from 'react-bootstrap';
import PostDetailCardCategory from './Components/PostDetailCategory';
import SideUpvoteDownvoteBar from '../../../Home/Feed/Card/Components/SideUpvoteDownvoteBar';
import Category from '../../../Home/Feed/Card/Components/Category';
import PostedBy from '../../../Home/Feed/Card/Components/PostedBy';
import TimeSincePost from '../../../Home/Feed/Card/Components/TimeSincePost';
import Title from '../../../Home/Feed/Card/Components/Title';
import PostImage from '../../../Home/Feed/Card/Components/PostImage';

const PostDetailCard = ({ id }) => {
	const [userId] = useRecoilState(userIdState);
	const [token] = useRecoilState(tokenState);
	const [data, setData] = useState({});
	const [haveData, setHaveData] = useState(false);
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
		// console.log(data);
	}

	if (haveData) {
		return (
			<div className='PostDetailCard'>
				<Container
					style={{
						paddingRight: '0px',
						paddingLeft: '0px',
						marginLeft: '0px',
						marginRight: '0px',
					}}>
					<Row style={{ marginLeft: '0px', marginRight: '0px' }}>
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
								<PostedBy username={data.post.author.username} />
								<TimeSincePost time={data.post.createdAt} />
							</Row>

							<Row className='justify-content-md-center'>
								<Title title={data.post.title} />
							</Row>

							{!data.post.imageUrl ? null : (
								<PostImage path={data.post.imageUrl} />
							)}
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
