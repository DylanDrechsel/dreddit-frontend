import React, { useState, useEffect } from 'react';
import { tokenState, websiteState } from '../../App';
import { useRecoilState } from 'recoil';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import Title from './Components/Title';
import Category from './Components/Category';
import SaveDraft from './Components/SaveDraft';
import PostButton from './Components/Post';

const ImagePost = () => {
    const [token] = useRecoilState(tokenState);
    const [posted, setPosted] = useState(false);
    // const [website, setWebsite] = useRecoilState(websiteState);
    const [imagePostData, setImagePostData] = useState({})
    let formData = new FormData()

    // useEffect(() => {
	// 	setWebsite('submit/image');
	// }, []);

    const handlePostDataInput = (event) => {
        const input = { ...imagePostData }
        input[event.target.id] = event.target.value
        setImagePostData(input)
    }

    const post = (event) => {
        event.preventDefault()

        const myForm = document.getElementById("imageForm")
        formData = new FormData(myForm)

        formData.append('title', imagePostData.title)
        formData.append('category', imagePostData.category);
        formData.append('published', 'true');

        axios({
            url: 'http://localhost:4000/posts/create/image',
            method: 'POST',
            data: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(() => {
            setPosted('image')

            setTimeout(() => {
                setPosted(false)
            }, 3000)
        })
        .catch(() => {
            alert('Something went wrong... Please try again!')
        })
    }

    const saveDraftPost = (event) => {
        event.preventDefault()

        const myForm = document.getElementById("imageForm")
        formData = new FormData(myForm)

        formData.append('title', imagePostData.title)
        formData.append('category', imagePostData.category);

        axios({
            url: 'http://localhost:4000/posts/create/image',
            method: 'POST',
            data: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(() => {
            setPosted('saveImage')

            setTimeout(() => {
                setPosted(false)
            }, 3000)
        })
        .catch(() => {
            alert('Something went wrong... Please try again!')
        })
    }

    

    return (
			<div>
				<div className='ImagePost'>
					<Title handlePostDataInput={handlePostDataInput} />
					<Category handlePostDataInput={handlePostDataInput} />

					<Row className='PostOptionsRow'>
						<SaveDraft saveDraftPost={saveDraftPost} />
						<PostButton post={post} />

						<form
							id='imageForm'
							action='/upload'
							enctype='multipart/form-data'
							className='ImageForm'>
							<input
								className='ImageInput'
								type='file'
								id='file'
								accept='.jpg'
								name='image'
							/>
						</form>
					</Row>
				</div>

				{posted === 'image' ? (
					<h1 className='PostedAlert'>Posted!</h1>
				) : posted === 'saveImage' ? (
					<h1 className='PostedSaved'>Post Saved!</h1>
				) : posted === 'error' ? (
					<h1>Something Went Wrong</h1>
				) : null}
			</div>
		);
};

export default ImagePost;