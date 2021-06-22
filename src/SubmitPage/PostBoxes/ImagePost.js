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
    const [image, setImage] = useState({})
    let formData = new FormData()
    console.log(imagePostData)
    console.log(image)

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

        formData.append('image', event.target.files[0])


        console.log(formData)

        setImage({
            image,
            path: event.target.value,
            size: event.target.files[0].size,
            originalname: event.target.files[0].name
        })


        // setImagePostData({
		// 			...imagePostData,
        //             image: image
					
		// 		});
    }

  /*   {image: File}
image: File
lastModified: 1607734472265
lastModifiedDate: Fri Dec 11 2020 19:54:32 GMT-0500 (Eastern Standard Time) {}
name: "apbnvkrv94461.jpg"
size: 338955
type: "image/jpeg"
webkitRelativePath: ""
__proto__: File
__proto__: Object */

    const onSubmit = (e) => {
        e.preventDefault()
        // let formData = new FormData()

        console.log(imagePostData.image)

        // formData.append('image', image)


        axios({
            url: 'http://localhost:4000/posts/create/single/image',
            method: 'POST',
            // enctype: 'multipart/form-data',
            data: {
                // title: imagePostData.title,
                // category: imagePostData.category,
                // image: {
                    path: `image/${image.originalname}`,
                    mimetype:  "image/jpeg",
                    size: image.size,
                    encoding: "7bit",
                    destination: 'image/',
                    filename: image.originalname,
                    originalname: image.originalname
                // },
            },
            headers: {
                Authorization: `Bearer ${token}`,
                // "Content-Type": "multipart/form-data"
            }
        })
        .then (res => {
            console.log(res)
        })
    }

    const newHandleSubmit = (event) => {
        event.preventDefault()

        const myForm = document.getElementById("test")
        formData = new FormData(myForm)

        formData.append('title', imagePostData.title)
        formData.append('category', imagePostData.category);
        // formData.append('image', myForm)

        // let fd = new FormData(image);
        // fd.append('image', image);

        axios({
            url: 'http://localhost:4000/posts/create/image',
            method: 'POST',
            // enctype: 'multipart/form-data',
            data: formData,
            headers: {
                Authorization: `Bearer ${token}`,
                // "Content-Type": "multipart/form-data"
            }
        })
        .then (res => {
            console.log(res)
        })
    }

    const newHandleImageUpload = (event) => {
        const myForm = document.getElementById("test")
        formData = new FormData(myForm)

        // axios({
        //     url: 'http://localhost:4000/posts/create/single/image',
        //     method: 'POST',
        //     // enctype: 'multipart/form-data',
        //     data: formData,
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //         "Content-Type": "multipart/form-data"
        //     }
        // })
        // .then (res => {
        //     console.log(res)
        // })
    }

    return (
			<div className='ImagePost'>
				<Title handlePostDataInput={handlePostDataInput} />
				<Category handlePostDataInput={handlePostDataInput} />

				<Row className='PostOptionsRow'>
					<SaveDraft saveDraftPost={saveDraftPost} />
					<PostButton post={post} onSubmit={onSubmit} newHandleSubmit={newHandleSubmit} />

					<form id='test' action='/upload' enctype='multipart/form-data'>
						<input
							type='file'
							id='file'
							accept='.jpg'
							name='image'
							/* onChange={newHandleImageUpload} */
						/>
					</form>
				</Row>
			</div>
		);
};

export default ImagePost;