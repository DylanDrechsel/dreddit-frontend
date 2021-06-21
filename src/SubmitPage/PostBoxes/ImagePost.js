import React, { useState } from 'react';
import { tokenState } from '../../App';
import { useRecoilState } from 'recoil';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import Title from './Components/Title';
import Category from './Components/Category';
import SaveDraft from './Components/SaveDraft';
import PostButton from './Components/Post';

const ImagePost = () => {
    const [token] = useRecoilState(tokenState);
    const [imagePostData, setImagePostData] = useState({})
    console.log(imagePostData)

    const handlePostDataInput = (event) => {
        const input = { ...imagePostData }
        input[event.target.id] = event.target.value
        setImagePostData(input)
    }

    const post = () => {
        axios({
            url: 'http://localhost:4000/posts/create/image',
            method: 'POST',
            data: {...imagePostData, published: true},
            'content-type':  'multipart/form-data',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then (({ data }) => {
            console.log(data)
        })
    }

    const saveDraftPost = () => {
        axios({
            url: 'http://localhost:4000/posts/create/image',
            method: 'POST',
            data: {...imagePostData, published: false},
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    const handleImageUpload = (event) => {
        event.preventDefault()
        let image = event.target.files[0]
        console.log(image)
        console.log(event.target.value)

        let formData = new FormData()

        formData.append('image', image)

        console.log(formData)


        setImagePostData({
					...imagePostData,
                    image
					
				});
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()

        console.log(imagePostData.image)

        formData.append('image', imagePostData.image)


        axios({
            url: 'http://localhost:4000/posts/create/image',
            method: 'POST',
            enctype: 'multipart/form-data',
            data: {...imagePostData, published: true,},
            headers: {
                Authorization: `Bearer ${token}`,
                enctype: 'multipart/form-data'
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
				<form
					method='POST'
					action='http://localhost:4000/posts/create/image'
					enctype='multipart/form-data'>
					{/* <input type='text' name='author' /> */}
					<input type='text' name='title' />
					<input type='text' name='category' />
					<input type='file' name='image' />
					<input type='submit' />
				</form>

				<Row className='PostOptionsRow'>
					<SaveDraft saveDraftPost={saveDraftPost} />
					<PostButton post={post} onSubmit={onSubmit} />

					<form action='/upload' enctype='multipart/form-data'>
						<input
							type='file'
							id='file'
							accept='.jpg'
							name='image'
							onChange={handleImageUpload}
						/>
					</form>
				</Row>
			</div>
		);
};

export default ImagePost;