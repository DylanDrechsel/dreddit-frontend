import React from 'react';
import { websiteState } from '../../../../App';
import { useRecoilState } from 'recoil';

const Title = ({ title }) => {
    const [website] = useRecoilState(websiteState)
    
    return (
        <div className={website === 'home' ? 'CardTitle' : 'PostDetailCardTitle'}>
            <b>{title}</b>
        </div>
    );
};

export default Title;