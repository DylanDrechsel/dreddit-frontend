import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import SignUpModal from './SignUpModal'

const SignUp = () => {
    const [show, setShow] = useState(true)

    return (
        <div>
            <Button>Sign Up!</Button>

            {show === true ? (<SignUpModal />) : null}
        </div>
    );
};

export default SignUp;