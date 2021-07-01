import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import SignUpModal from './SignUpModal'

const SignUp = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
			<div>
				<Button className='SignUpButton' onClick={handleShow} variant='outline-dark' style={{ color: 'black', width: '23vw'}}>
					<b style={{ fontFamily: 'iceland', fontSize: '24px' }}>Sign Up!</b>
				</Button>

				{show === true ? <SignUpModal handleClose={handleClose} show={show} /> : null}
			</div>
		);
};

export default SignUp;