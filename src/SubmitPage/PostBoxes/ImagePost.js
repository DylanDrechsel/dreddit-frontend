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
    const [website, setWebsite] = useRecoilState(websiteState);
    const [imagePostData, setImagePostData] = useState({})
    let formData = new FormData()

    useEffect(() => {
		setWebsite('submit/image');
	}, []);

    const handlePostDataInput = (event) => {
        const input = { ...imagePostData }
        input[event.target.id] = event.target.value
        setImagePostData(input)
    }

    const imagePost = (event) => {
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
        .then (res => {
            console.log(res)
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
        .then (res => {
            console.log(res)
        })
    }

    

    return (
			<div className='ImagePost'>
				<Title handlePostDataInput={handlePostDataInput} />
				<Category handlePostDataInput={handlePostDataInput} />

				<Row className='PostOptionsRow'>
					<form id='imageForm' action='/upload' enctype='multipart/form-data'>
						<input
							type='file'
							id='file'
							accept='.jpg'
							name='image'
						/>
					</form>
                        
					<SaveDraft saveDraftPost={saveDraftPost} />
					<PostButton imagePost={imagePost} />

				</Row>
			</div>
		);
};

export default ImagePost;