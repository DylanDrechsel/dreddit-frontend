import React, { useState, useEffect } from 'react';
import { tokenState, websiteState } from '../../App';
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
    const [posted, setPosted] = useState(false)
    // const [website, setWebsite] = useRecoilState(websiteState)
    console.log(textPostData)

    // useEffect(() => {
	// 	setWebsite('submit');
	// }, []);

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
        .then(() => {
            setPosted('text')

            setTimeout(() => {
                setPosted(false)
            }, 3000)
        })
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
        .then(() => {
            setPosted('saveText')

            setTimeout(() => {
                setPosted(false)
            }, 3000)
        })
    }

    return (
			<div>
				<div className='TextPost'>
					<Title handlePostDataInput={handlePostDataInput} />
					<Category handlePostDataInput={handlePostDataInput} />
					<Content handlePostDataInput={handlePostDataInput} />

					<Row className='PostOptionsRow'>
						<SaveDraft saveDraftPost={saveDraftPost} />
						<PostButton post={post} />
					</Row>
				</div>

				{posted === 'text' ? (
					<h1 className='PostedAlert'>Posted!</h1>
				) : posted === 'saveText' ? (
					<h1 className='PostedSaved'>Post Saved!</h1>
				) : null}
			</div>
		);
};

export default TextPost;