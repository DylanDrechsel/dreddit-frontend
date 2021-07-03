import React, { useState } from 'react';
import { Row } from 'react-bootstrap'
import axios from 'axios'
import Title from './Components/Title'
import Category from './Components/Category'
import Content from './Components/Content'
import SaveDraft from './Components/SaveDraft'
import PostButton from './Components/Post'

let errorText = ''

const TextPost = () => {
    const [textPostData, setTextPostData] = useState({})
    const [posted, setPosted] = useState(false)

    const handlePostDataInput = (event) => {
        const input = { ...textPostData }
        input[event.target.id] = event.target.value
        setTextPostData(input)
    }

    const checkInformation = (textPostData) => {
        if (!textPostData.title && !textPostData.category) {
            errorText = 'Please enter Title and Category'
            return 1
        } else if (!textPostData.title) {
            errorText = 'Please enter Title'
            return 1
        } else if (!textPostData.category) {
            errorText = 'Please enter Category'
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
            withCredentials: true,  
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Accept: 'application/json',
            }, 
        })
        .then(() => {
            setPosted('text')

            setTimeout(() => {
                setPosted(false)
            }, 3000)
        })
        .catch(() => {
            errorText = 'Something went wrong... Please try again!'
            setPosted('serverError')

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
            withCredentials: true,  
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Accept: 'application/json',
            }, 
        })
        .then(() => {
            setPosted('saveText')

            setTimeout(() => {
                setPosted(false)
            }, 3000)
        })
        .catch(() => {
            errorText = 'Something went wrong... Please try again!'
            setPosted('serverError')

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
					<h1 className='PostedAlertText'>Posted!</h1>
				) : posted === 'saveText' ? (
					<h1 className='PostedSavedText'>Post Saved!</h1>
				) : posted === 'error' ? (
					<h1 className='PostErrorText'>{errorText}</h1>
				) : posted === 'serverError' ? (
                    <h1 className='PostServerErrorText'>{errorText}</h1>
                ) : null}
			</div>
		);
};

export default TextPost;