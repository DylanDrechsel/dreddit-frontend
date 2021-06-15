import React, { useState } from 'react';
import Title from './Components/Title'

const TextPost = () => {
    const [textPostData, setTextPostData] = useState({})
    // console.log(textPostData)

    const handleTitleInput = (event) => {
        const input = { ...textPostData }
        input[event.target.id] = event.target.value
        setTextPostData(input)
    }

    return (
        <div className="TextPost">
            <Title handleTitleInput={handleTitleInput}/>
        </div>
    );
};

export default TextPost;