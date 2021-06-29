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

let errorText = ''
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

    const checkInformation = (textPostData) => {
        if (!textPostData.title && !textPostData.category) {
            errorText = 'Please enter title and category'
            return 1
        } else if (!textPostData.title) {
            errorText = 'Please enter title'
            return 1
        } else if (!textPostData.category) {
            errorText = 'Please enter category'
            return 1
        }

        return 0
    }

    const post = () => {
        if (checkInformation(textPostData) !== 0) {
            setPosted('error')

            setTimeout(() => {
                setPosted(false)
            }, 3000)

            // exits out of post function before axios request is made if the data isnt entered properly
            return
        }

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
        .catch(() => {
            errorText = 'Something went wrong... Please try again!'
            setPosted('error')

            setTimeout(() => {
                setPosted(false)
            }, 3000)
        })
    }

    const saveDraftPost = () => {
        if (checkInformation(textPostData) !== 0) {
            setPosted('error')

            setTimeout(() => {
                setPosted(false)
            }, 3000)

            // exits out of post function before axios request is made if the data isnt entered properly
            return
        }

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
        .catch(() => {
            errorText = 'Something went wrong... Please try again!'
            setPosted('error')

            setTimeout(() => {
                setPosted(false)
            }, 3000)
        })
    }

    console.log(errorText)

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
				) : posted === 'error' ? <h1>{errorText}</h1>
                  : null}
			</div>
		);
};

export default TextPost;