import React, { useState } from 'react';
import Title from './Components/Title'

const TextPost = () => {
    const [textPostData, setTextPostData] = useState({})

    return (
        <div className="TextPost">
            <Title />
        </div>
    );
};

export default TextPost;