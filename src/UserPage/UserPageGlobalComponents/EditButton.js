import React, { useState, useEffect } from 'react';
import EditPostModal from './EditPostModal'

const EditButton = ({ postId, handleReload, post}) => {
    const [show, setShow] = useState(false)
    
    const handleShow = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

	return (
        <div>
            <div className='EditButton' onClick={handleShow}>
                <h1 className='EditButtonText'>Edit</h1>
            </div>

            {show === true ? <EditPostModal show={show} handleClose={handleClose} post={post} handleReload={handleReload}/> : null}
        </div>
	);
};

export default EditButton;