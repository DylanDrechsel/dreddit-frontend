import React, { useState } from 'react';
import Title from './Components/Title'
import Category from './Components/Category'
import Content from './Components/Content'

const TextPost = () => {
    const [textPostData, setTextPostData] = useState({})
    console.log(textPostData)

    const handlePostDataInput = (event) => {
        const input = { ...textPostData }
        input[event.target.id] = event.target.value
        setTextPostData(input)
    }

    return (
        <div className="TextPost">
            <Title handlePostDataInput={handlePostDataInput}/>
            <Category handlePostDataInput={handlePostDataInput}/>
            <Content handlePostDataInput={handlePostDataInput}/>
        </div>
    );
};

export default TextPost;