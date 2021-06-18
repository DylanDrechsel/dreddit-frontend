import React from 'react';
import { Button } from 'react-bootstrap'

const SaveDraft = ({ saveDraftPost }) => {
    return (
			<div>
				<Button
					className='SaveDraftButton'
					variant='outline'
					onClick={saveDraftPost}>
					SAVE DRAFT
				</Button>
				{/* <h6 className="SaveDraftText">SAVE DRAFT</h6> */}
			</div>
		);
};

export default SaveDraft;