import React, { useState, useEffect } from 'react';
import { upvoteChangeState, tokenState } from '../../../App';
import { useRecoilState } from 'recoil';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Title from './Components/Title';
import Category from './Components/Category';
import PostedBy from './Components/PostedBy';
import PostImage from './Components/PostImage';
import TimeSincePost from './Components/TimeSincePost';
import CommentButton from './Components/CommentButton';
import SideUpvoteDownvoteBar from './Components/SideUpvoteDownvoteBar';
import ShareButton from './Components/ShareButton';

const Card = () => {
	const [upvoteChange] = useRecoilState(upvoteChangeState);
	const [postData, setPostData] = useState({});
	const [haveData, setHaveData] = useState(false);
	const [upvoteCountChange, setUpvoteCountChange] = useState(false);
	const [token] = useRecoilState(tokenState);

	useEffect(() => {
		axios
			.get(`https://boiling-shelf-57510.herokuapp.com/posts`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(({ data }) => {
				setPostData(data);
				setHaveData(true);
				setUpvoteCountChange(!upvoteCountChange);
			});
	}, [upvoteChange]);

	if (haveData) {
		return (
			<div>
				{postData.posts.map((post) => {
					return (
						<div className='Card' key={post.id}>
							<Container>
								<Link
									to={`${post.id}`}
									style={{ textDecoration: 'none', color: 'white' }}>
									<Row>
										<Col xs={1} className='SideColumn'>
											<SideUpvoteDownvoteBar
												likes={post.likes}
												postId={post.id}
												upvoteCountChange={upvoteCountChange}
											/>
										</Col>

										<Col xs={11} className='MainCardColumn'>
											<Row className='PostInformation'>
												<Category category={post.category} />
												<PostedBy username={post.author.username} />
												<TimeSincePost time={post.createdAt} />
											</Row>

											<Row className='justify-content-md-center'>
												<Title title={post.title} />
											</Row>

											{!post.imageUrl ? null : (
												<PostImage path={`${post.imageUrl}`} />
											)}

											{/* OLD MULTER USE */}
											{/* {!post.image ? null : (
												<PostImage path={post.image.path} />
											)} */}

											<Row>
												<CommentButton comments={post.comments} />
												<ShareButton postId={post.id} />
											</Row>
										</Col>
									</Row>
								</Link>
							</Container>
						</div>
					);
				})}
			</div>
		);
	} else {
		return (
			// CSS in UserPage.css
			<div class='loader animation-stop'>
				<span class='circle delay-1 size-2'></span>
				<span class='circle delay-2 size-4'></span>
				<span class='circle delay-3 size-6'></span>
				<span class='circle delay-4 size-7'></span>
				<span class='circle delay-5 size-7'></span>
				<span class='circle delay-6 size-6'></span>
				<span class='circle delay-7 size-4'></span>
				<span class='circle delay-8 size-2'></span>
			</div>
		);
	}
};

export default Card;
