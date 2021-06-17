import React from 'react';
import { Button } from 'react-bootstrap'

const SaveDraft = () => {
    return (
			<div>
				<Button
					className='SaveDraftButton'
					variant='outline'>
					SAVE DRAFT
				</Button>
				{/* <h6 className="SaveDraftText">SAVE DRAFT</h6> */}
			</div>
		);
};

export default SaveDraft;