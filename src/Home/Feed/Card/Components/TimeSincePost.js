import React from 'react';
import { websiteState } from '../../../../App';
import { useRecoilState } from 'recoil';

const TimeSincePost = ({ time }) => {
    const [website] = useRecoilState(websiteState)
    const todaysDateUTC = new Date().toISOString();
    let createdYear = []
    let createdMonth = []
    let createdDay = []
    let todaysYear = []
    let todaysMonth = []
    let todaysDay = []
    let arrTime = time.split('')
    let arrTodaysDate = todaysDateUTC.split('')

    for (let i = 0; i < 8; i++) {
        if (createdYear.length < 4) {
            createdYear.push(arrTime[i])
        }
        else if (createdMonth.length < 2) {
            if (arrTime[i] === '-') {
                arrTime.splice(i, 1)
            }
            createdMonth.push(arrTime[i])
        }
        else if (createdDay.length < 2) {
            if (arrTime[i] === '-') {
                arrTime.splice(i, 1)
            }
            createdDay.push(arrTime[i])
        }
    }

    for (let i = 0; i < 8; i++) {
        if (todaysYear.length < 4) {
            todaysYear.push(arrTodaysDate[i]);
        }
        else if (todaysMonth.length < 2) {
            if (arrTodaysDate[i] === '-') {
                arrTodaysDate.splice(i, 1);
            }
            todaysMonth.push(arrTodaysDate[i]);
        }
        else if (todaysDay.length < 2) {
            if (arrTodaysDate[i] === '-') {
                arrTodaysDate.splice(i, 1);
            }
            todaysDay.push(arrTodaysDate[i]);
        }
    }

    const createDate = `${createdMonth.join('')}/${createdDay.join('')}/${createdYear.join('')}`;
    const todaysDate = `${todaysMonth.join('')}/${todaysDay.join('')}/${todaysYear.join('')}`;

    const cDate = new Date(`${createDate}`);
	const tDate = new Date(`${todaysDate}`);
	const diffTimeMilliseconds = Math.abs(tDate - cDate);
	const diffcreatedDays = Math.ceil(diffTimeMilliseconds / (1000 * 60 * 60 * 24));

    return (
			<div
				className={
					website === 'home'
						? 'Time'
						: website === 'userPage/posts' || website === 'userPage/saved'
						? 'UsersPublishedPostsTime'
						: 'PostDetailTime'
				}>
				{diffcreatedDays === 0 ? (
					<p>created today</p>
				) : (
					<p>created {diffcreatedDays} day ago</p>
				)}
			</div>
		);
};

export default TimeSincePost;