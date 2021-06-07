import React, { useEffect } from 'react';
import './Global.css'
import { Nav, NavDropdown, Form, FormControl, Button, Navbar, Row } from 'react-bootstrap'
import { userIdState, tokenState, userNameState } from '../App';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import Welcome from './WelcomeAnimation/Welcome'

const Navigation = () => {
    const [userId, setUserId] = useRecoilState(userIdState);
    const [token, setToken] = useRecoilState(tokenState);
    const [userName, setUserName] = useRecoilState(userNameState);
    
    const controls = useAnimation()

    const sequence = async () => {
			await controls.start({ opacity: 1, scale: 2.5, textShadow: '3px 3px 20px #e6498e', transition: { duration: 2, delay: 6 } });
			await controls.start({ scale: 1.5, textShadow: '0px 0px 0px #e6498e', transition: { duration: .1 }});
			return await controls.start({ scale: 1, x: 0, y: '-.2vh', textShadow: '16px 22px 11px rgba(230,73,142,0.8)', opacity: [0, 0, 1], transition: { duration: .05, delay: .2 }});        
		};

    useEffect(() => {
			sequence();
		}, []);

    return (
			<div className='Navbar'>
				<Navbar
					expand='lg'
					/* fixed='top' */ style={{ backgroundColor: '#201E1D' }}>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav className='mr-auto my-2 my-lg-0' navbarScroll>
							<Link
								to={`/`}
								style={{
									color: 'white',
								}}>
								<motion.h5
									animate={{ opacity: 1, transition: { delay: 6 } }}
									initial={{ opacity: 0 }}>
									<b>Home</b>
								</motion.h5>
							</Link>

							{/* <Nav.Link
									href='#action2'
									style={{
										color: 'white',
									}}>
									<motion.h5
										animate={{ opacity: 1, transition: { delay: 6 } }}
										initial={{ opacity: 0 }}>
										<b>Link</b>
									</motion.h5>
								</Nav.Link> */}
						</Nav>

						<Link to={`/submit`} style={{ color: 'white' }}>
							<motion.svg className="NavPostAdd"
								animate={{ opacity: 1, transition: { delay: 10 } }}
								initial={{ opacity: 0 }}
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								fill-rule='evenodd'
								fill='white'
								viewBox='0 0 24 24'>
								<path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
							</motion.svg>
						</Link>

						<Navbar.Brand
							href='#'
							style={{
								color: 'white',
								left: '5vw',
							}}>
							{' '}
							<motion.h3
								initial={{ x: '-45vw', y: '-.5vh', opacity: 0 }}
								animate={controls}>
								<b>{userName}</b>
							</motion.h3>
						</Navbar.Brand>
					</Navbar.Collapse>
					<Welcome />
				</Navbar>
			</div>
		);
};

export default Navigation;