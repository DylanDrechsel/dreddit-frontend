import React, { useEffect } from 'react';
import './Global.css'
import { Nav, NavDropdown, Form, FormControl, Button, Navbar, Row } from 'react-bootstrap'
import { userIdState, tokenState, userNameState } from '../App';
import { useRecoilState } from 'recoil';
import { motion, useAnimation } from 'framer-motion'
import Welcome from './WelcomeAnimation/Welcome'

const Navigation = () => {
    const [userId, setUserId] = useRecoilState(userIdState);
    const [token, setToken] = useRecoilState(tokenState);
    const [userName, setUserName] = useRecoilState(userNameState);
    
    const controls = useAnimation()

    const sequence = async () => {
			await controls.start({ opacity: 1, scale: 2.5, transition: { duration: 2, delay: 6 } });
			await controls.start({ scale: 1.5 });
			return await controls.start({ scale: 1, x: 0, y: '-.2vh', opacity: [0, 0, 0, 0, 0, 1], transition: { duration: .05, delay: .2 }});        
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
							<Nav.Link
								href='#action1'
								style={{
									color: 'white',
								}}>
								<motion.h5 animate={{ opacity: 1, transition: { delay: 6 }}} initial={{ opacity: 0 }}>
									<b>Home</b>
								</motion.h5>
							</Nav.Link>
							<Nav.Link
								href='#action2'
								style={{
									color: 'white',
								}}>
								<motion.h5 animate={{ opacity: 1, transition: { delay: 6 }}} initial={{ opacity: 0 }}>
									<b>Link</b>
								</motion.h5>
							</Nav.Link>
						</Nav>

						<Navbar.Brand
							href='#'
							style={{
								color: 'white',
								left: '5vw',
							}}>
							{' '}
							<motion.h3 initial={{ x: '-45vw', y : '-.5vh', opacity: 0 }} animate={controls}>
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