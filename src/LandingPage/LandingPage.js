import React from 'react';
import { tokenState } from '../App'
import { useRecoilState } from 'recoil'

const LandingPage = () => {
    const [token, setToken] = useRecoilState(tokenState)

    console.log(token)

    return (
        <div>
            
        </div>
    );
};

export default LandingPage;