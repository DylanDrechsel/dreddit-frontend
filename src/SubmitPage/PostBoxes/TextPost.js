import React, { useState } from 'react';
import Title from './Components/Title'
import Category from './Components/Category'

const TextPost = () => {
    const [textPostData, setTextPostData] = useState({})
    console.log(textPostData)

    const handleTitleInput = (event) => {
        const input = { ...textPostData }
        input[event.target.id] = event.target.value
        setTextPostData(input)
    }

    const handleCategoryInput = (event) => {
        const input = { ...textPostData }
        input[event.target.id] = event.target.value
        setTextPostData(input)
    }

    return (
        <div className="TextPost">
            <Title handleTitleInput={handleTitleInput}/>
            <Category handleCategoryInput={handleCategoryInput}/>
        </div>
    );
};

export default TextPost;