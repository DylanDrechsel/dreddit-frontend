import React, { useState } from 'react';
import { tokenState } from '../../App';
import { useRecoilState } from 'recoil';
import { Row } from 'react-bootstrap'
import axios from 'axios'
import Title from './Components/Title'
import Category from './Components/Category'
import Content from './Components/Content'
import SaveDraft from './Components/SaveDraft'
import PostButton from './Components/Post'

const TextPost = () => {
    const [token] = useRecoilState(tokenState);
    const [textPostData, setTextPostData] = useState({})
    console.log(textPostData)

    const handlePostDataInput = (event) => {
        const input = { ...textPostData }
        input[event.target.id] = event.target.value
        setTextPostData(input)
    }

    const post = () => {
        axios({
            url: 'http://localhost:4000/posts/create/',
            method: 'POST',
            data: {...textPostData, published: true},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        // .then((res) => {
        //     console.log(res)
        // })
    }

    const saveDraftPost = () => {
        axios({
            url: 'http://localhost:4000/posts/create/',
            method: 'POST',
            data: {...textPostData, published: false},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
           // .then((res) => {
            //     console.log(res)
            // })
    }

    return (
        <div className="TextPost">
            <Title handlePostDataInput={handlePostDataInput}/>
            <Category handlePostDataInput={handlePostDataInput}/>
            <Content handlePostDataInput={handlePostDataInput}/>

            <Row className="PostOptionsRow">
                <SaveDraft saveDraftPost={saveDraftPost}/>
                <PostButton post={post}/>
            </Row>
        </div>
    );
};

export default TextPost;