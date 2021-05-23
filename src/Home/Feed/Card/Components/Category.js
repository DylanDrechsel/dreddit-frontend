import React from 'react';
import { websiteState } from '../../../../App'
import { useRecoilState } from 'recoil'

const Category = ({ category }) => {
    const [website] = useRecoilState(websiteState)

    return (
			<div
				className={
					website === 'home' ? 'CardCaregory' : 'PostDetailCardCategory'
				}>
				<b>{category}</b>
			</div>
		);
};

export default Category;