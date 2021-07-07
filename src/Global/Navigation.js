import React, { useEffect } from 'react';
import './Global.css'
import { Nav, Navbar } from 'react-bootstrap'
import { userIdState, userNameState } from '../App';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import Welcome from './WelcomeAnimation/Welcome'

const Navigation = () => {
    const [userId] = useRecoilState(userIdState);
    const [userName] = useRecoilState(userNameState);
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
				<Navbar expand='lg' style={{ backgroundColor: '#201E1D' }}>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav className='mr-auto my-2 my-lg-0' navbarScroll>
							<Link
								to={`/`}
								style={{
									color: 'white',
								}}>
								<motion.h5
									animate={
										localStorage.getItem('welcomeAnimation') !== 'played'
											? { opacity: 1, transition: { delay: 6 } }
											: { opacity: 1 }
									}
									initial={{ opacity: 0 }}>
									<b>Home</b>
								</motion.h5>
							</Link>
						</Nav>

						<Link to={`/post/submit`} style={{ color: 'white' }}>
							<motion.svg
								className='NavPostAdd'
								animate={
									localStorage.getItem('welcomeAnimation') !== 'played'
										? { opacity: 1, transition: { delay: 9 } }
										: { opacity: 1 }
								}
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

						<Link to={`/user/${userId}`} style={{ color: 'white' }}>
							<Navbar.Brand
								href='#'
								style={{
									color: 'white',
									left: '5vw',
								}}>
								{' '}
								<motion.h3
									initial={
										localStorage.getItem('welcomeAnimation') !== 'played'
											? { x: '-45vw', y: '-.5vh', opacity: 0 }
											: { opacity: 1 }
									}
									animate={
										localStorage.getItem('welcomeAnimation') !== 'played'
											? controls
											: null
									}>
									<b>{userName}</b>
								</motion.h3>
							</Navbar.Brand>
						</Link>
					</Navbar.Collapse>
					<Welcome />
				</Navbar>
			</div>
		);
};

export default Navigation;