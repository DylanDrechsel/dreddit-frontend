import React, { useState, useEffect } from 'react';
import { websiteState, upvoteChangeState, tokenState } from '../App';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Title from '../Home/Feed/Card/Components/Title';
import SideUpvoteDownvoteBar from '../Home/Feed/Card/Components/SideUpvoteDownvoteBar';
import Category from '../Home/Feed/Card/Components/Category';
import PostedBy from '../Home/Feed/Card/Components/PostedBy';
import TimeSincePost from '../Home/Feed/Card/Components/TimeSincePost';
import PostImage from '../Home/Feed/Card/Components/PostImage';
import CommentButton from '../Home/Feed/Card/Components/CommentButton';
import ShareButton from '../Home/Feed/Card/Components/ShareButton';
import NoImageAvailable from '../Home/Feed/Card/CardImages/no-image-found-360x250.png';
import DeleteButton from './UserPageGlobalComponents/DeleteButton';
import EditButton from './UserPageGlobalComponents/EditButton';

const PublishedPost = () => {
	const [posts, setPosts] = useState({});
	const [haveData, setHaveData] = useState(false);
	const [upvoteChange] = useRecoilState(upvoteChangeState);
	const [upvoteCountChange, setUpvoteCountChange] = useState(false);
	const [website] = useRecoilState(websiteState);
	const [reload, setReload] = useState(false);
	const [token] = useRecoilState(tokenState);

	const handleReload = () => {
		setReload(!reload);
	};

	useEffect(() => {
		if (website === 'userPage/saved') {
			axios({
				url: 'http://localhost:4000/posts/user/unpublished',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}).then((response) => {
				setPosts(response);
				setHaveData(true);
				setUpvoteCountChange(!upvoteCountChange);
			});
		} else {
			axios({
				url: 'http://localhost:4000/posts/user/published',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}).then((response) => {
				setPosts(response);
				setHaveData(true);
				setUpvoteCountChange(!upvoteCountChange);
			});
		}
	}, [upvoteChange, reload, website]);

	if(haveData) {
		console.log(posts)
	}

	if (haveData) {
		return (
			<div className='PublishedPostDiv'>
				{posts.data.posts.map((post) => {
					return (
						<div className='EachPublishedPostDiv'>
							<Container fluid>
								<Link
									to={`/${post.id}`}
									style={{ textDecoration: 'none', color: 'white' }}>
									<Row>
										<Col xs={1} className='UsersPublishedPostsSideColumn'>
											<SideUpvoteDownvoteBar
												likes={post.likes}
												postId={post.id}
												upvoteCountChange={upvoteCountChange}
											/>
										</Col>

										<Row>
											<Col xs={1}>
												{!post.imageUrl ? (
													<img
														className='UsersPublishedPostsImage'
														src={NoImageAvailable}
													/>
												) : (
													<PostImage path={post.imageUrl} />
												)}
											</Col>
										</Row>

										<Col xs={9} className='MainCardColumn'>
											<Row className='justify-content-md-left'>
												<Title title={post.title} />
											</Row>

											<Row className='PostInformation'>
												<Category category={post.category} />
												<PostedBy username={post.author.username} />
												<TimeSincePost time={post.createdAt} />
											</Row>
										</Col>
									</Row>
								</Link>

								<div className='UsersButtonsRow'>
									<Row>
										<Link
											to={`/${post.id}`}
											style={{ textDecoration: 'none', color: 'white' }}>
											<CommentButton comments={post.comments} />
										</Link>

										<ShareButton postId={post.id} />
										<DeleteButton
											postId={post.id}
											imageUrl={post.imageUrl}
											handleReload={handleReload}
										/>
										<EditButton
											postId={post.id}
											handleReload={handleReload}
											post={post}
										/>
									</Row>
								</div>
							</Container>
						</div>
					);
				})}
			</div>
		);
	} else {
		return (
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

export default PublishedPost;
