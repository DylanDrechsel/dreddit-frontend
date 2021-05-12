import React, { useEffect } from 'react';
import './Global.css'
import { Nav, NavDropdown, Form, FormControl, Button, Navbar, Row } from 'react-bootstrap'
import { userIdState, tokenState, userNameState } from '../App';
import { useRecoilState } from 'recoil';
import { motion, useAnimation } from 'framer-motion'
import Welcome from './WelcomeAnimation/Welcome'

const animation = {
	fadeIn: {
		opacity: 1,
        transition: {
            duration: 3
        }
	},
	getBig: {
		scale: [1, 3, 1],
        transition: {
            delay: 3
        }
	},
};

const Navigation = () => {
    const [userId, setUserId] = useRecoilState(userIdState);
    const [token, setToken] = useRecoilState(tokenState);
    const [userName, setUserName] = useRecoilState(userNameState);
    
    const controls = useAnimation()

    const sequence = async () => {
			await controls.start({ x: -1000 });
			await controls.start({ x: 0, opacity: 1 });
            return await controls.start({ x: -1600 })
		};

    useEffect(() => {
			sequence();
		}, []);

    return (
			<div className='Navbar'>
				<Navbar expand='lg' fixed='top' style={{ backgroundColor: '#201E1D' }}>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav
							className='mr-auto my-2 my-lg-0'
							style={{ minHeight: '5vh', maxHeight: '5vh'}}
							navbarScroll>
							<Nav.Link href='#action1' style={{ color: 'white' }}>
								<b>Home</b>
							</Nav.Link>
							<Nav.Link href='#action2' style={{ color: 'white' }}>
								<b>Link</b>
							</Nav.Link>
						</Nav>


						<Navbar.Brand href='#' style={{ color: 'white' }}>
							{' '}
							{userName}
						</Navbar.Brand>
					</Navbar.Collapse>
				</Navbar>
				
				<Welcome />

			</div>
		);
};

export default Navigation;