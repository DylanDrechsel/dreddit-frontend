import React from 'react';
import { tokenState } from '../App'
import { useRecoilState } from 'recoil'

const Logout = () => {
    const [token, setToken] = useRecoilState(tokenState)

    const logout = () => {
        document.cookie =
					'token' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

        localStorage.removeItem('username')
        localStorage.removeItem('welcomeAnimation');
        localStorage.removeItem('userId');

		setTimeout(() => {
			setToken(null)
		}, 500)
    }

    return (
			<div className='LogoutButton' onClick={logout}>
				<h5
					style={{
						color: 'white',
					}}>
					<b>Logout</b>
				</h5>
			</div>
		);
};

export default Logout;