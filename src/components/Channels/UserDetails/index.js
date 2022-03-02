import React from 'react';
import { useSelector } from 'react-redux';

import { getUserDetails } from '../../../redux/selectors/getUserDetails';

import { Wrapper } from './UserDetails.styles';

const UserDetails = () => {
	const details = useSelector(getUserDetails);

	return (
		<Wrapper>
			<div
				className='img'
				style={{
					backgroundImage: `url(/assets/images/${details.profileImg})`,
				}}
			>
				<span className='icon'></span>
			</div>
			<div className='name'>
				<h5>{details.name}</h5>
				<p>#{details.id}</p>
			</div>
			<div className='icons'>
				<span>M</span>
				<span>H</span>
				<span>S</span>
			</div>
		</Wrapper>
	);
};

export default UserDetails;
